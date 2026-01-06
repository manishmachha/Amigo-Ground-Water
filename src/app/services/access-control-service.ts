// src/app/security/access-control.service.ts
import { Injectable, computed, inject, signal } from '@angular/core';
import { RoleApiService } from './role-management-service';
import { AccessRequirement, CurrentUser } from '../models/access-control-model';
import { PermissionKey, Role } from '../models/roles.model';

@Injectable({ providedIn: 'root' })
export class AccessControlService {
  private roleApi = inject(RoleApiService);

  // You can load this from /me API. For now keep it settable.
  readonly me = signal<CurrentUser | null>(null);

  // All roles from backend (same Role[] used in Role Management screen)
  readonly roles = signal<Role[]>([]);

  readonly isReady = computed(() => !!this.me() && this.roles().length > 0);

  /** Union of module permissions across all roles assigned to current user */
  readonly effectivePermissions = computed(() => {
    const me = this.me();
    const roles = this.roles();
    if (!me) return {} as Record<string, Set<PermissionKey>>;

    const myRoles = roles.filter((r) => me.roleIds.includes(r.id));
    const acc: Record<string, Set<PermissionKey>> = {};

    for (const role of myRoles) {
      for (const [moduleId, perms] of Object.entries(role.modulePermissions ?? {})) {
        acc[moduleId] ??= new Set<PermissionKey>();
        perms.forEach((p) => acc[moduleId].add(p));
      }
    }
    return acc;
  });

  /** Call this once at app startup */
  loadAccessData() {
    console.log('[ACL] Loading roles + user...');
    // Replace with your real /me call.
    // For now, hardcode user with roleIds or set from login response.
    // this.me.set({ id: 'u1', name: 'Manish', roleIds: ['r_district_officer'] });

    // this.roleApi.getRoles().subscribe({
    //   next: (roles) => {
    //     console.log('[ACL] Roles loaded:', roles.length);
    //     this.roles.set(roles);
    //   },
    //   error: (e) => console.error('[ACL] Failed to load roles', e),
    // });
    this.roles.set([
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
  }

  can(moduleId: string, permission: PermissionKey): boolean {
    const eff = this.effectivePermissions();
    return !!eff[moduleId]?.has(permission);
  }

  canAny(req: AccessRequirement): boolean {
    const perms = req.permissions ?? ['view'];
    return perms.some((p) => this.can(req.moduleId, p));
  }

  canAll(req: AccessRequirement): boolean {
    const perms = req.permissions ?? ['view'];
    return perms.every((p) => this.can(req.moduleId, p));
  }

  check(req: AccessRequirement): boolean {
    const mode = req.mode ?? 'ANY';
    return mode === 'ALL' ? this.canAll(req) : this.canAny(req);
  }
}
