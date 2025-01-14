import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.username = user;
    });
    this.updateUser();
  }

  updateUser(): void {
    this.username = this.authService.getUser();
  }

  login(): void {
    this.navigateTo('/login');
    this.updateUser();
  }

  logout(): void {
    this.authService.logout();
    this.updateUser();
    this.navigateTo('/home');
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route).then(() => {
      console.log(`Navigated to ${route}`);
    });
  }
}
