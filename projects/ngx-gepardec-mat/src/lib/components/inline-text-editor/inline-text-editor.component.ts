import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gpx-inline-text-editor',
  templateUrl: './inline-text-editor.component.html',
  styleUrls: ['./inline-text-editor.component.scss']
})
export class InlineTextEditorComponent {

  @Input() value: string = '';
  @Input() maximumLetters: number = 500;

  @Input() formFieldWidth: string = '100%'

  @Output() valueChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  showCommentEditor = false;

  onStartEditing(value: string): void {
    this.value = value;
    this.showCommentEditor = true;
  }

  valueChange(value: string): void {
    this.showCommentEditor = false;

    if (this.value !== value) {
      this.valueChangeEvent.emit(value);
    }

    this.value = value;
  }
}
