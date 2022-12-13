import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplayer',
})

export class MultiplayerPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Multiplayer' : 'Single-player';
  }
}