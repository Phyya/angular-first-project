import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  isMobile = false;
  user = localStorage.getItem('opti-user-detail');

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.checkScreenWidth();
    if (!this.user) this.router.navigate(['/about']);
    else this.router.navigate(['/home']);
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  }
}
