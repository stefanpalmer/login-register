import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleMenu = false;

  constructor() { }

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

}
