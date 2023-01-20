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
        label: 'Dynamic Table',
        link: '/dynamic-table-showcase',
        index: 0
      },
      {
        label: 'Inline Text Editor',
        link: '/inline-text-editor',
        index: 1
      },
      {
        label: 'File Upload',
        link: '/file-upload',
        index: 2
      },
      {
        label: 'File Upload Dynamic Table',
        link: '/file-upload-dynamic-table',
        index: 3
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url))
    })
  }
}
