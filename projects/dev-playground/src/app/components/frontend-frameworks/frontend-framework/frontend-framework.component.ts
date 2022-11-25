import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-frontend-framework',
  templateUrl: './frontend-framework.component.html',
  styleUrls: ['./frontend-framework.component.scss']
})
export class FrontendFrameworkComponent implements OnInit {

  @Input() frontendFramework: string = '';

  ngOnInit(): void {
  }
}
