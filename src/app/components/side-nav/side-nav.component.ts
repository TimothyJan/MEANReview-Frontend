import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isLargeScreen: boolean = true;

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/movies', label: 'Movies' },
    { path: '/tvseries', label: 'TV Shows' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/login', label: 'Login' },
  ];

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 768; // Adjust breakpoint as needed
  }

}
