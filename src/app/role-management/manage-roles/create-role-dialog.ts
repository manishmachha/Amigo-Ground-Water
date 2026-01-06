// src/app/role-management/create-role-dialog.component.ts
import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModuleConfig, PermissionKey, PERMISSION_LABEL } from '../../models/roles.model';

@Component({
  selector: 'app-create-role-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="fixed inset-0 z-50">
      <!-- backdrop -->
      <div class="absolute inset-0 bg-black/30" (click)="cancel.emit()"></div>

      <!-- panel -->
      <div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl flex flex-col">
        <div class="flex items-start justify-between gap-4 border-b px-6 py-5">
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Create New Role</h2>
            <p class="mt-1 text-sm text-gray-600">Define a new role with specific permissions</p>
          </div>

          <button
            class="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            (click)="cancel.emit()"
            aria-label="Close"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <form [formGroup]="form" class="flex-1 overflow-auto px-6 py-5" (ngSubmit)="onSubmit()">
          <div class="space-y-4">
            <div>
              <label class="text-sm font-medium text-gray-900"
                >Role Name <span class="text-red-500">*</span></label
              >
              <input
                class="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="e.g., Senior Inspector"
                formControlName="name"
              />
              <div
                *ngIf="form.controls.name.touched && form.controls.name.invalid"
                class="mt-2 text-xs text-red-600"
              >
                Role name is required.
              </div>
            </div>

            <div>
              <label class="text-sm font-medium text-gray-900">Description</label>
              <textarea
                class="mt-2 w-full min-h-27.5 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Brief description of the role and its responsibilities"
                formControlName="description"
              ></textarea>
            </div>

            <div class="border-t pt-4">
              <div class="text-sm font-semibold text-gray-900">Module Permissions</div>

              <div class="mt-4 space-y-4">
                <div
                  *ngFor="let m of modules"
                  class="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                >
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-semibold text-gray-900">{{ m.name }}</div>

                    <!-- toggle -->
                    <button
                      type="button"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition"
                      [class.bg-blue-600]="isModuleEnabled(m.id)"
                      [class.bg-gray-300]="!isModuleEnabled(m.id)"
                      (click)="toggleModule(m.id)"
                      aria-label="Toggle module"
                    >
                      <span
                        class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                        [class.translate-x-5]="isModuleEnabled(m.id)"
                        [class.translate-x-1]="!isModuleEnabled(m.id)"
                      ></span>
                    </button>
                  </div>

                  <div class="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                    <label
                      *ngFor="let p of m.permissions"
                      class="flex items-center gap-2 text-sm text-gray-800"
                    >
                      <input
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        [disabled]="!isModuleEnabled(m.id)"
                        [checked]="isChecked(m.id, p)"
                        (change)="togglePermission(m.id, p)"
                      />
                      {{ permLabel[p] }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="h-6"></div>

          <div class="sticky bottom-0 -mx-6 border-t bg-white px-6 py-4">
            <div class="flex items-center justify-end gap-3">
              <button
                type="button"
                class="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                (click)="cancel.emit()"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
                [disabled]="form.invalid"
              >
                Create Role
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class CreateRoleDialogComponent {
  @Input({ required: true }) modules: ModuleConfig[] = [];
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<{
    name: string;
    description: string;
    modulePermissions: Record<string, PermissionKey[]>;
  }>();

  readonly permLabel = PERMISSION_LABEL;

  private fb = new FormBuilder();

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
  });

  // local draft state
  private enabled = new Map<string, boolean>();
  private selected = new Map<string, Set<PermissionKey>>();

  isModuleEnabled(moduleId: string) {
    return this.enabled.get(moduleId) ?? false;
  }

  toggleModule(moduleId: string) {
    const next = !this.isModuleEnabled(moduleId);
    this.enabled.set(moduleId, next);
    console.log('[CreateRoleDialog] Toggle module', moduleId, next);

    if (next && !this.selected.has(moduleId)) {
      this.selected.set(moduleId, new Set<PermissionKey>(['view']));
    }
    if (!next) {
      this.selected.delete(moduleId);
    }
  }

  isChecked(moduleId: string, perm: PermissionKey) {
    return this.selected.get(moduleId)?.has(perm) ?? false;
  }

  togglePermission(moduleId: string, perm: PermissionKey) {
    if (!this.isModuleEnabled(moduleId)) return;

    const set = this.selected.get(moduleId) ?? new Set<PermissionKey>();
    if (set.has(perm)) set.delete(perm);
    else set.add(perm);

    // if user unchecks everything, keep module enabled but empty set -> we’ll turn off module
    if (set.size === 0) {
      console.log('[CreateRoleDialog] No permissions left -> disabling module', moduleId);
      this.enabled.set(moduleId, false);
      this.selected.delete(moduleId);
    } else {
      this.selected.set(moduleId, set);
    }

    console.log('[CreateRoleDialog] Toggle permission', moduleId, perm, Array.from(set));
  }

  onSubmit() {
    if (this.form.invalid) return;

    const modulePermissions: Record<string, PermissionKey[]> = {};
    for (const [mid, set] of this.selected.entries()) {
      modulePermissions[mid] = Array.from(set);
    }

    const payload = {
      name: this.form.value.name!.trim(),
      description: (this.form.value.description ?? '').trim(),
      modulePermissions,
    };

    console.log('[CreateRoleDialog] Create payload:', payload);
    this.create.emit(payload);
  }
}
