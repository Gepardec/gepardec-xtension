import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-text-editor-test',
  templateUrl: './inline-text-editor-test.component.html',
  styleUrls: ['./inline-text-editor-test.component.scss']
})
export class InlineTextEditorTestComponent {

  value: string = "gepardec-xtension";

  valueChange(value: string): void {
    this.value = value;
  }
}
