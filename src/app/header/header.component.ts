import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  previousScrollPosition = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    const navbar = document.getElementById('nav');

    if (this.previousScrollPosition > currentScrollPosition) {
      // Scrolling up
      if (navbar) navbar.style.top = '0';
    } else {
      // Scrolling down
      if (navbar) navbar.style.top = '-100px';
    }
    this.previousScrollPosition = currentScrollPosition;
  }
}


