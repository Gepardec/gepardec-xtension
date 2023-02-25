import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'gpx-editor-form-field',
  templateUrl: './editor-form-field.component.html',
  styleUrls: ['./editor-form-field.component.scss']
})
export class EditorFormFieldComponent {

  @Input() value: string = '';
  @Input() maximumLetters!: number;

  @Input() formFieldWidth!: string;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  @ViewChild('textarea') textarea!: ElementRef;

  constructor(private _ngZone: NgZone,
              private changeDectectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.textarea.nativeElement.focus();
    this.triggerResize();
    this.changeDectectorRef.detectChanges();
  }

  triggerResize() {
    // FIXME: Avoid @ts-ignore
    // @ts-ignore
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => {
        this.autosize.resizeToFitContent(true);
      });
  }

  onCancel(event: any, inputElement: HTMLTextAreaElement) {
    if (!event.relatedTarget || event.relatedTarget.id !== 'savebutton') {
      this.valueChange.emit(this.value);
    } else {
      this.onSave(inputElement);
    }
  }

  onSave(inputElement: HTMLTextAreaElement) {
    this.valueChange.emit(inputElement.value.trim());
  }
}
