import { Pipe, PipeTransform } from '@angular/core';

import { getTypeActionLabel } from '../enums/enum.type-action';

@Pipe({ name: 'typeAction' })
export class TypeActionPipe implements PipeTransform {
  transform(typeAction: string | undefined): string {
    if (typeAction) {
      return getTypeActionLabel(typeAction);
    }
    return '';
  }
}
