import { Component } from '@angular/core';
import { Gender, User } from '../../interfaces/user.interface';
import { UserListMainComponentComponent } from "../user-list-main-component/user-list-main-component.component";

@Component({
  selector: 'app-use-list-view-component',
  standalone: true,
  imports: [UserListMainComponentComponent],
  templateUrl: './use-list-view-component.component.html',
  styleUrl: './use-list-view-component.component.scss'
})
export class UseListViewComponentComponent {
  public users: User[] = [{firstName: 'Bob', lastName: "Dylan", age: 50, gender: Gender.M, activated: true},
    {firstName: 'Barbara', lastName: "Dylan", age: 58, gender: Gender.F, activated: false},
    {firstName: 'John', lastName: "Smith", age: 10, gender: Gender.M, activated: true}
  ];

  
  public onActivatedButtonClick(index: number) {
    if (index < this.users.length && index >=0) {
      this.users[index].activated = !this.users[index].activated;
    }  
  }

  public onDeleteButtonClick(index: number) {
    if (index < this.users.length && index >=0) {
    this.users.splice(index, 1);
  }
}

}
