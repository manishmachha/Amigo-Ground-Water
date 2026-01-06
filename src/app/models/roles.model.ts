// src/app/role-management/role-models.ts
export type PermissionKey = 'view' | 'create' | 'edit' | 'approve' | 'reject' | 'delete';

export interface ModuleConfig {
  id: string;
  name: string;
  permissions: PermissionKey[];
}

export interface Role {
  id: string;
  name: string;
  description: string;
  badge?: string;
  accent: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
  usersAssigned: number;
  modulePermissions: Record<string, PermissionKey[]>; // moduleId -> selected permissions
}

export const PERMISSION_LABEL: Record<PermissionKey, string> = {
  view: 'View',
  create: 'Create',
  edit: 'Edit',
  approve: 'Approve',
  reject: 'Reject',
  delete: 'Delete',
};
