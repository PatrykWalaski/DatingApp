import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

@Injectable()
export class MemberListResolver implements Resolve<User[]>{

    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {
    }



    // RESOLVER SO WE DONT HAVE TO USE NULLABLE '?' OPERATOR IN HTML FILES
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe( // pipe is only for catching errors
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
