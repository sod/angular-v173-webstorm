import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestAnnotationComponent, TestSignalComponent} from "./test/test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestAnnotationComponent, TestSignalComponent],
  template: `
    <!-- two way syntax: -->
    <app-test-annotation [(optional)]="value2" [(required)]="value1"></app-test-annotation>
    <app-test-signal [(optional)]="value2" [(required)]="value1"></app-test-signal>

    <!-- split syntax: -->
    <app-test-annotation [optional]="value2" (optionalChange)="value2 = $event" [required]="value1" (requiredChange)="value2 = $event"></app-test-annotation>
    <app-test-signal [optional]="value2" (optionalChange)="value2 = $event" [required]="value1" (requiredChange)="value2 = $event"></app-test-signal>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  value1: string = '';
  value2: string | undefined = undefined;
}
