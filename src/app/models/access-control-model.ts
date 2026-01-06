// src/app/security/access-control.models.ts

import { PermissionKey } from "./roles.model";

export interface AccessRequirement {
  moduleId: string; // e.g. 'noc', 'billing'
  permissions?: PermissionKey[]; // e.g. ['view'] or ['create','edit']
  mode?: 'ANY' | 'ALL'; // default ANY
}

export interface CurrentUser {
  id: string;
  name: string;
  roleIds: string[]; // roles assigned to this user
}
