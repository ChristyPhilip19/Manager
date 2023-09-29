import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Register} from '../shared/domain/Register';
import { Subscription } from 'rxjs';
import { RegisterService } from '../shared/service/Register.service';
import { Router } from '@angular/router';
interface Gender {
  value: string;
  viewValue: string;
}

interface Profession{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  valueCheck:boolean=false;
  public showPassword: boolean = false;
  userDetails:Register[]=[];
  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];

  professions: Profession[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'working professional', viewValue: 'Working Professional'},
    {value: 'businessman', viewValue: 'Businessman'},
    {value: 'other', viewValue: 'Other'},
  ];

  register:Register={
    fullName: '',
    password: '',
    email: '',
    phoneNo: '',
    birthDate: '',
    gender: '',
    address: '',
    profession: ''
  };

  private sub$: Subscription = new Subscription();
  
  constructor(private registerService:RegisterService,private router:Router){}

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
    submit(register:Register){
      if(register.fullName==='' || register.fullName===null)
      {
        this.valueCheck=true;
        return;
      }
      else if(register.password==='' || register.password===null)
      {
        this.valueCheck=true;
        return;
      }
      else if(register.email==='' || register.email===null)
      {
        this.valueCheck=true;
      }
      else if(register.phoneNo==='' || register.phoneNo===null)
      {
        this.valueCheck=true;
        return;
      }
      else if(register.birthDate==='' || register.birthDate===null)
      {
        this.valueCheck=true;
      }
      else if(register.gender==='' || register.gender===null)
      {
        this.valueCheck=true;
      }
      else if(register.address==='' || register.address===null)
      {
        this.valueCheck=true;
        return;
      }
      else if(register.profession==='' || register.profession===null)
      {
        this.valueCheck=true;
        return;
      }
      console.log('Hello')
      console.log(register)
      this.sub$.add(
        this.registerService.addUser(register).subscribe((res: Register) => {
          this.userDetails.push(res);
          if(res!=null)
          {
            this.router.navigate(['login']);
          }
        })
      )
    }
 
}
