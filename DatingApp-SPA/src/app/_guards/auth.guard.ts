import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}


  canActivate(): boolean {
    if (this.authService.loggedIn())
    {
      return true;
    }

    this.alertify.error('You must log in to access');
    this.router.navigate(['/home']);
    return false;
  }
}
