import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { AddUserNamePipe } from './pipes/add-user-name.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, AddUserNamePipe],
  exports: [LoaderComponent, AddUserNamePipe],
})
export class SharedModule {}
