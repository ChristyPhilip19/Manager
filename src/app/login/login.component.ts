import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/domain/Login';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/service/Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  valueCheck:boolean=false;
  private sub$:Subscription =  new Subscription();
  loginArray:Login[]=[];
  public showPassword: boolean = false;
  login:Login={
    email:'',
    password:''
  }

  constructor(private router:Router,private loginService:LoginService){}
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateRegister(){
    this.router.navigateByUrl('/register')
  }

  loginSubmit(login:Login){
    this.sub$.add(
      this.loginService.loginUser(login).subscribe((res:Login)=>{
        this.loginArray.push(res);
        if(res!=null)
        {
          alert('Successfully Logged In')
        }
        else{
          alert('Invalid credentials')
        }
      })
    )
  }
}
