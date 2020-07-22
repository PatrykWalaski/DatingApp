import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { homedir } from 'os';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(next =>
      {
        console.log('Registration complete');
      }, error =>
      {
        console.log(error);
      });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
    // this.cancelRegister.emit(); you can emit nothing and just call method in home.component.html like this:
    // (cancelRegister)="registerToggle()" -> no need to create new method if we leave toggle as a switch:
    //                                                              this.registerMode = !this.registerMode
  }

}
