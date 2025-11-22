import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addUserName',
})
export class AddUserNamePipe implements PipeTransform {
  private userName = 'SalamatinAV';
  transform(value: string): string {
    return `${value} (${this.userName})`;
  }
}
