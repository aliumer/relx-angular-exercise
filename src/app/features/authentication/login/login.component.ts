import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login().subscribe(() => {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
    });
  }
}
