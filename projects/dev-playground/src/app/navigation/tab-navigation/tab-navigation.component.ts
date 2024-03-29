import {Component, OnInit} from '@angular/core';
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
        label: 'Inline Text Editor',
        link: '/inline-text-editor',
        index: 0
      },
      {
        label: 'File Upload',
        link: '/file-upload',
        index: 1
      },
      {
        label: 'Dynamic Table',
        link: '/dynamic-table',
        index: 2
      },
      {
        label: 'File Upload with Table',
        link: '/file-upload-with-table',
        index: 3
      },
      {
        label: 'Expandable Dynamic Table',
        link: '/expandable-dynamic-table',
        index: 4
      }
    ]
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url))
    })
  }
}
