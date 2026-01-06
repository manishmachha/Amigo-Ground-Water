// src/app/role-management/role-management.store.ts
import { Injectable, computed, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ModuleConfig, PermissionKey, Role } from '../models/roles.model';
import { RoleApiService } from '../services/role-management-service';

@Injectable({ providedIn: 'root' })
export class RoleManagementStore {
  private api = inject(RoleApiService);

  readonly modules = signal<ModuleConfig[]>([
    {
      id: 'noc',
      name: 'NOC Management',
      permissions: ['view', 'create', 'edit', 'approve', 'reject', 'delete'],
    },
    { id: 'wells', name: 'Wells & Assets', permissions: ['view', 'create', 'edit', 'delete'] },
    {
      id: 'monitor',
      name: 'Monitoring & Telemetry',
      permissions: ['view', 'create', 'edit', 'delete'],
    },

    // these are modeled to match the “5 permissions” feel in your screenshot
    {
      id: 'billing',
      name: 'Billing & Revenue',
      permissions: ['view', 'create', 'edit', 'approve', 'delete'],
    },
    {
      id: 'enforce',
      name: 'Enforcement',
      permissions: ['view', 'create', 'edit', 'approve', 'delete'],
    },
    {
      id: 'griev',
      name: 'Grievance Management',
      permissions: ['view', 'create', 'edit', 'approve', 'delete'],
    },

    {
      id: 'reports',
      name: 'Reports & Analytics',
      permissions: ['view', 'create', 'edit', 'delete'],
    },
    { id: 'admin', name: 'Administration', permissions: ['view', 'create', 'edit', 'delete'] },
  ]);
  readonly roles = signal<Role[]>([
    {
      id: 'r_sys_admin',
      name: 'System Administrator',
      badge: 'System',
      description: 'Full system access with all permissions',
      accent: 'red',
      usersAssigned: 3,
      modulePermissions: {
        noc: ['view', 'create', 'edit', 'approve', 'reject', 'delete'],
        wells: ['view', 'create', 'edit', 'delete'],
        monitor: ['view', 'create', 'edit', 'delete'],
        billing: ['view', 'create', 'edit', 'approve', 'delete'],
        enforce: ['view', 'create', 'edit', 'approve', 'delete'],
        griev: ['view', 'create', 'edit', 'approve', 'delete'],
        reports: ['view', 'create', 'edit', 'delete'],
        admin: ['view', 'create', 'edit', 'delete'],
      },
    },
    {
      id: 'r_district_officer',
      name: 'District Officer',
      description: 'District-level operations and approvals',
      accent: 'blue',
      usersAssigned: 33,
      modulePermissions: {
        noc: ['view', 'create', 'edit', 'approve', 'reject'], // 5
        wells: ['view', 'edit', 'delete'], // 3
        monitor: ['view', 'edit', 'delete'], // 3
        billing: ['view', 'edit', 'approve'], // 3
        enforce: ['view', 'edit', 'approve', 'delete'], // 4
        griev: ['view', 'edit', 'approve'], // 3
        reports: ['view', 'edit', 'delete'], // 3
      },
    },
    {
      id: 'r_billing_officer',
      name: 'Billing Officer',
      description: 'Billing and revenue operations',
      accent: 'green',
      usersAssigned: 28,
      modulePermissions: {
        noc: ['view'], // 1
        wells: ['view'], // 1
        monitor: ['view'], // 1
        billing: ['view', 'create', 'edit', 'delete'], // 4
        enforce: ['view'], // 1
        griev: ['view'], // 1
        reports: ['view', 'edit', 'delete'], // 3
      },
    },
  ]);

  readonly activeRoleId = signal<string | null>(null);
  readonly detailsRoleId = signal<string | null>(null);
  readonly isCreateDialogOpen = signal(false);

  readonly isLoading = signal(false);
  readonly error = signal<string | null>(null);

  readonly activeRole = computed(
    () => this.roles().find((r) => r.id === this.activeRoleId()) ?? null
  );
  readonly detailsRole = computed(
    () => this.roles().find((r) => r.id === this.detailsRoleId()) ?? null
  );

  // -------------------- INIT --------------------
  init() {
    console.log('[RoleManagement] init()');
    this.isLoading.set(true);
    this.error.set(null);

    forkJoin({
      modules: this.api.getModules(),
      roles: this.api.getRoles(),
    }).subscribe({
      next: (res) => {
        console.log('[RoleManagement] Loaded modules/roles', res);
        this.modules.set(res.modules);
        this.roles.set(res.roles);
        this.isLoading.set(false);
      },
      error: (e) => {
        console.error('[RoleManagement] init failed', e);
        this.error.set(e?.message ?? 'Failed to load roles/modules');
        this.isLoading.set(false);
      },
    });
  }

  // -------------------- UI --------------------
  openCreateDialog() {
    console.log('[RoleManagement] Open Create Role dialog');
    this.isCreateDialogOpen.set(true);
  }

  closeCreateDialog() {
    console.log('[RoleManagement] Close Create Role dialog');
    this.isCreateDialogOpen.set(false);
  }

  selectRole(roleId: string) {
    this.activeRoleId.set(roleId);
  }

  openDetails(roleId: string) {
    console.log('[RoleManagement] Open details for role:', roleId);
    this.detailsRoleId.set(roleId);
    this.activeRoleId.set(roleId);
  }

  closeDetails() {
    console.log('[RoleManagement] Close details panel');
    this.detailsRoleId.set(null);
  }

  // -------------------- CREATE --------------------
  createRole(payload: {
    name: string;
    description: string;
    modulePermissions: Record<string, PermissionKey[]>;
  }) {
    console.log('[RoleManagement] Create role payload:', payload);
    this.error.set(null);

    this.api.createRole(payload).subscribe({
      next: (created) => {
        console.log('[RoleManagement] Created role:', created);
        this.roles.update((list) => [created, ...list]);
      },
      error: (e) => {
        console.error('[RoleManagement] createRole failed', e);
        this.error.set(e?.message ?? 'Failed to create role');
      },
    });
  }

  // -------------------- DELETE (optimistic + rollback) --------------------
  deleteRole(roleId: string) {
    console.log('[RoleManagement] Delete role:', roleId);
    this.error.set(null);

    const prev = this.roles();
    this.roles.set(prev.filter((r) => r.id !== roleId));

    this.api.deleteRole(roleId).subscribe({
      next: () => {
        console.log('[RoleManagement] Deleted role:', roleId);
        if (this.activeRoleId() === roleId) this.activeRoleId.set(null);
        if (this.detailsRoleId() === roleId) this.detailsRoleId.set(null);
      },
      error: (e) => {
        console.error('[RoleManagement] deleteRole failed (rollback)', e);
        this.roles.set(prev);
        this.error.set(e?.message ?? 'Failed to delete role');
      },
    });
  }

  // -------------------- DUPLICATE (create via API) --------------------
  duplicateRole(roleId: string) {
    const role = this.roles().find((r) => r.id === roleId);
    if (!role) return;

    const payload = {
      name: `${role.name} (Copy)`,
      description: role.description,
      modulePermissions: role.modulePermissions,
    };

    console.log('[RoleManagement] Duplicate role payload:', payload);
    this.createRole(payload);
  }

  // -------------------- PERMISSIONS (optimistic + rollback) --------------------
  toggleModule(roleId: string, moduleId: string, enabled: boolean) {
    console.log('[RoleManagement] Toggle module:', { roleId, moduleId, enabled });
    this.error.set(null);

    const prev = this.roles();

    // optimistic UI update
    this.roles.update((list) =>
      list.map((r) => {
        if (r.id !== roleId) return r;
        const next = { ...r, modulePermissions: { ...r.modulePermissions } };

        if (!enabled) {
          delete next.modulePermissions[moduleId];
        } else {
          next.modulePermissions[moduleId] = next.modulePermissions[moduleId] ?? ['view'];
        }
        return next;
      })
    );

    const updated = this.roles().find((r) => r.id === roleId);
    if (!updated) return;

    this.api.updateRole(roleId, { modulePermissions: updated.modulePermissions }).subscribe({
      next: (saved) => {
        console.log('[RoleManagement] Saved module toggle:', saved);
        this.roles.update((list) => list.map((r) => (r.id === roleId ? saved : r)));
      },
      error: (e) => {
        console.error('[RoleManagement] toggleModule failed (rollback)', e);
        this.roles.set(prev);
        this.error.set(e?.message ?? 'Failed to update permissions');
      },
    });
  }

  togglePermission(roleId: string, moduleId: string, perm: PermissionKey) {
    console.log('[RoleManagement] Toggle permission:', { roleId, moduleId, perm });
    this.error.set(null);

    const prev = this.roles();

    // optimistic UI update
    this.roles.update((list) =>
      list.map((r) => {
        if (r.id !== roleId) return r;

        const current = r.modulePermissions[moduleId] ?? [];
        const has = current.includes(perm);
        const nextPerms = has ? current.filter((p) => p !== perm) : [...current, perm];

        const next = { ...r, modulePermissions: { ...r.modulePermissions } };
        if (nextPerms.length === 0) delete next.modulePermissions[moduleId];
        else next.modulePermissions[moduleId] = nextPerms;

        return next;
      })
    );

    const updated = this.roles().find((r) => r.id === roleId);
    if (!updated) return;

    this.api.updateRole(roleId, { modulePermissions: updated.modulePermissions }).subscribe({
      next: (saved) => {
        console.log('[RoleManagement] Saved permission toggle:', saved);
        this.roles.update((list) => list.map((r) => (r.id === roleId ? saved : r)));
      },
      error: (e) => {
        console.error('[RoleManagement] togglePermission failed (rollback)', e);
        this.roles.set(prev);
        this.error.set(e?.message ?? 'Failed to update permissions');
      },
    });
  }
}
