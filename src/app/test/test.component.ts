import {Component, EventEmitter, Input, model, Output} from '@angular/core';

@Component({
  selector: 'app-test-annotation',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class TestAnnotationComponent {
  @Input() optional?: string;
  @Output() optionalChange= new EventEmitter<string | undefined>();

  @Input() required!: string;
  @Output() requiredChange= new EventEmitter<string>();
}


@Component({
  selector: 'app-test-signal',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class TestSignalComponent {
  optional = model<string>();
  required = model.required<string>();
}
