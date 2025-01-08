import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Pipe({
  name: 'orderByCreationDate',
  standalone: true
})
export class OrderByCreationDatePipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.sort((a, b) => b.dateOfCreation == null ? 1 : a.dateOfCreation == null ? -1 : a.dateOfCreation.getTime() - b.dateOfCreation.getTime());
  }

}
