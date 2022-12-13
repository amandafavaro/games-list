import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'installed',
})

export class InstalledPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Yes' : 'No';
  }
}