import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { SidenavService } from 'src/app/core/sidenav/sidenav.service';
import { User } from 'src/app/models/User';
import { SnackBarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'wakala-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePw = true;
  loginFormGroup: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private snackbarService: SnackBarService,
    private menuService: SidenavService
  ) { }
  get controls() {
    return this.loginFormGroup.controls;
  }
  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  token(formValue: any) {
    this.authService.token(formValue).subscribe(tokenResponse => {
      this.authService.login().subscribe((loginResponse: User) => {
        loginResponse.RefreshToken = tokenResponse.refresh_token;
        this.authService.setLocalUser(loginResponse);
        this.menuService.loadMenu();
        this.router.navigateByUrl('Home');
      });
    }, (err: HttpErrorResponse) => {
      if (err.status === 403 && err.error.Error.includes('INVALID_GRANT')) {
        this.snackbarService.showSnackBar({ title: 'Credenziali errate', duration: 5000, class: 'error' });
      }
    });
  }
}
