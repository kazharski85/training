import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserListMainComponent } from "../user-list-main/user-list-main.component";
import { OrderByCreationDatePipe } from "../../pipes/order-by-creation-date.pipe";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-use-list-view-component',
  standalone: true,
  imports: [UserListMainComponent, OrderByCreationDatePipe],
  templateUrl: './use-list-view.component.html',
  styleUrl: './use-list-view.component.scss'
})
export class UseListViewComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.users
  }

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
