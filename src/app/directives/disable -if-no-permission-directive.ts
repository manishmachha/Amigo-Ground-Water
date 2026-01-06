// src/app/security/disable-if-no-permission.directive.ts
import { Directive, ElementRef, Input, inject } from '@angular/core';
import { AccessControlService } from '../services/access-control-service';
import { PermissionKey } from '../models/roles.model';

@Directive({
  selector: '[appDisableIfNoPermission]',
  standalone: true,
})
export class DisableIfNoPermissionDirective {
  private el = inject(ElementRef<HTMLElement>);
  private acl = inject(AccessControlService);

  private moduleId!: string;
  private perm: PermissionKey = 'view';

  @Input('appDisableIfNoPermission')
  set module(value: string) {
    this.moduleId = value;
    this.apply();
  }

  @Input('appDisableIfNoPermissionPerm')
  set permission(value: PermissionKey) {
    this.perm = value;
    this.apply();
  }

  private apply() {
    if (!this.moduleId) return;

    const allowed = this.acl.can(this.moduleId, this.perm);
    const native = this.el.nativeElement;

    // For buttons/inputs: set disabled when possible
    if (native instanceof HTMLButtonElement || native instanceof HTMLInputElement) {
      (native as any).disabled = !allowed;
    }

    native.setAttribute('aria-disabled', (!allowed).toString());
    native.classList.toggle('opacity-50', !allowed);
    native.classList.toggle('pointer-events-none', !allowed);

    console.log('[UI DISABLE]', this.moduleId, this.perm, '=>', allowed);
  }
}
