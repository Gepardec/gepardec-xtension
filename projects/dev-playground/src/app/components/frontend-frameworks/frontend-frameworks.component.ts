import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-frontend-frameworks',
  templateUrl: './frontend-frameworks.component.html',
  styleUrls: ['./frontend-frameworks.component.scss']
})
export class FrontendFrameworksComponent implements OnInit {

  frontendFrameworks: Array<string> = new Array<string>();

  ngOnInit(): void {
    this.frontendFrameworks.push('Angular', 'React', 'Vue');
  }
}
