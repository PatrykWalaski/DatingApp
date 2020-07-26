import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ThrowStmt } from '@angular/compiler';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root',
})

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}


  canDeactivate(component: MemberEditComponent) {
    if (component.editForm.dirty)
    {
        return confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
    }

    return true;
  }
}
