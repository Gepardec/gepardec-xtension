import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-text-editor-test',
  templateUrl: './inline-text-editor-test.component.html',
  styleUrls: ['./inline-text-editor-test.component.scss']
})
export class InlineTextEditorTestComponent {

  valueFirstExample: string = "text-field wants to be edited";
  valueSecondExample: string = "edit field";

  valueChangeFirstExample(valueFirstExample: string): void {
    this.valueFirstExample = valueFirstExample;
  }
  valueChangeSecondExample(valueSecondExample: string): void {
    this.valueSecondExample = valueSecondExample;
  }
}
