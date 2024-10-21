import { Component } from '@angular/core';
import { Gender, User } from '../../interfaces/user.interface';
import { UserListMainComponent } from "../user-list-main/user-list-main.component";

@Component({
  selector: 'app-use-list-view-component',
  standalone: true,
  imports: [UserListMainComponent],
  templateUrl: './use-list-view.component.html',
  styleUrl: './use-list-view.component.scss'
})
export class UseListViewComponent {
  public users: User[] = [{ firstName: 'Bob', lastName: "Dylan", age: 50, gender: Gender.M, activated: true },
  { firstName: 'Barbara', lastName: "Dylan", age: 58, gender: Gender.F, activated: false },
  { firstName: 'John', lastName: "Smith", age: 10, gender: Gender.M, activated: true }
  ];


  public onActivatedButtonClick(index: number) {
    if (index < this.users.length && index >= 0) {
      this.users[index].activated = !this.users[index].activated;
    }
  }

  public onDeleteButtonClick(index: number) {
    if (index < this.users.length && index >= 0) {
      this.users = [
        ...this.users.slice(0, index),
        ...this.users.slice(index + 1)
      ]
    }
  }

}
