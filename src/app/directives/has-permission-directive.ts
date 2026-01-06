    // src/app/security/has-permission.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { AccessControlService } from '../services/access-control-service';
import { PermissionKey } from '../models/roles.model';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  private tpl = inject(TemplateRef<any>);
  private vcr = inject(ViewContainerRef);
  private acl = inject(AccessControlService);

  private moduleId!: string;
  private perm: PermissionKey = 'view';

  @Input('appHasPermission')
  set module(value: string) {
    this.moduleId = value;
    this.render();
  }

  @Input('appHasPermissionPerm')
  set permission(value: PermissionKey) {
    this.perm = value;
    this.render();
  }

  private render() {
    if (!this.moduleId) return;
    const ok = this.acl.can(this.moduleId, this.perm);
    this.vcr.clear();
    if (ok) this.vcr.createEmbeddedView(this.tpl);

    console.log('[UI ACL]', this.moduleId, this.perm, '=>', ok);
  }
}
