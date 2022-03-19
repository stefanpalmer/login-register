import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleMenu = false;

  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  closeMenu() {
    if (this.toggleMenu = true) {
      this.toggleMenu = false;
    }
  }

  logout() {
    this.accountService.logout();
  }

}
