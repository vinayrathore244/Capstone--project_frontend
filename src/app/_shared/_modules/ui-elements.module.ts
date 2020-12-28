import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TruncateTextPipe} from '../_pipes/truncate-text.pipe';


@NgModule({
  declarations: [ TruncateTextPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    TruncateTextPipe,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UiElementsModule {
}
