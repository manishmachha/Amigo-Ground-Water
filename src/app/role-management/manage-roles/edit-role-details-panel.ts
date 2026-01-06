    // src/app/role-management/role-details-panel.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleConfig, PermissionKey, PERMISSION_LABEL, Role } from '../../models/roles.model';

@Component({
  selector: 'app-role-details-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between gap-4">
        <div class="min-w-0">
          <h2 class="text-lg font-semibold text-gray-900">
            {{ role.name }} - Detailed Permissions
          </h2>
        </div>

        <button
          class="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          (click)="close.emit()"
        >
          Close
        </button>
      </div>

      <div class="mt-6 space-y-5">
        <div *ngFor="let m of modules" class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="text-sm font-semibold text-gray-900">{{ m.name }}</div>
              <div class="mt-1 text-sm text-gray-600">
                {{ granted(role, m.id) }} of {{ m.permissions.length }} permissions granted
              </div>
            </div>

            <!-- toggle -->
            <button
              type="button"
              class="relative inline-flex h-6 w-11 items-center rounded-full transition"
              [class.bg-gray-900]="isEnabled(role, m.id)"
              [class.bg-gray-300]="!isEnabled(role, m.id)"
              (click)="toggleModule.emit({ moduleId: m.id, enabled: !isEnabled(role, m.id) })"
              aria-label="Toggle module"
            >
              <span
                class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                [class.translate-x-5]="isEnabled(role, m.id)"
                [class.translate-x-1]="!isEnabled(role, m.id)"
              ></span>
            </button>
          </div>

          <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            <button
              *ngFor="let p of m.permissions"
              type="button"
              class="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition"
              [ngClass]="pillClass(isGranted(role, m.id, p))"
              (click)="togglePermission.emit({ moduleId: m.id, permission: p })"
            >
              <span class="flex items-center gap-2">
                <svg *ngIf="isGranted(role, m.id, p)" class="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ labels[p] }}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RoleDetailsPanelComponent {
  @Input({ required: true }) role!: Role;
  @Input({ required: true }) modules: ModuleConfig[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() toggleModule = new EventEmitter<{ moduleId: string; enabled: boolean }>();
  @Output() togglePermission = new EventEmitter<{ moduleId: string; permission: PermissionKey }>();

  labels = PERMISSION_LABEL;

  isEnabled(role: Role, moduleId: string) {
    return (role.modulePermissions[moduleId]?.length ?? 0) > 0;
  }

  isGranted(role: Role, moduleId: string, permission: PermissionKey) {
    return role.modulePermissions[moduleId]?.includes(permission) ?? false;
  }

  granted(role: Role, moduleId: string) {
    return role.modulePermissions[moduleId]?.length ?? 0;
  }

  pillClass(granted: boolean) {
    return granted
      ? 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100'
      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50';
  }
}
