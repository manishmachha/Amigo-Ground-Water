// src/app/security/permission.guard.ts
import { CanMatchFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AccessRequirement } from '../models/access-control-model';
import { AccessControlService } from '../services/access-control-service';

export function permissionGuard(req: AccessRequirement): CanMatchFn {
  return () => {
    const acl = inject(AccessControlService);
    const router = inject(Router);

    const allowed = acl.check(req);
    console.log('[Guard]', req, '=>', allowed);

    if (allowed) return true;
    return router.parseUrl('/unauthorized') as UrlTree;
  };
}
