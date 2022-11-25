import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent implements OnInit {

  activeLinkIndex: number = 0;
  navLinks: Array<any> = [];

  constructor(
    private router: Router
  ) {
    this.navLinks = [
      {
        label: 'Counter',
        link: '/counter',
        index: 0
      },
      {
        label: 'Frontend Frameworks',
        link: '/frontend-frameworks',
        index: 1
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url))
    })
  }
}
