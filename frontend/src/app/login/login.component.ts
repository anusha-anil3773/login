import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user={
  email:'',
  password:''
};
  constructor(private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }
    loginForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  ngOnInit(): void {
   
  }
  loginUser(){

    this.auth.loginUser(this.user)
    .subscribe(
      res => {
        let result = res;
   
      console.log('data from backend',res);
  
      localStorage.setItem('token',res.token);
      localStorage.setItem('userrole',res.userrole);
      localStorage.setItem('username', res.username);
      
      this.router.navigateByUrl('/landing');
  })
    }
}

