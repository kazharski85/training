import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserCardComponentComponent } from "../user-card-component/user-card-component.component";

@Component({
  selector: 'app-user-list-main-component',
  standalone: true,
  imports: [UserCardComponentComponent],
  templateUrl: './user-list-main-component.component.html',
  styleUrl: './user-list-main-component.component.scss'
})
export class UserListMainComponentComponent {
  @Input() users!: User[];
  @Output() statusChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteButtonClick: EventEmitter<number> = new EventEmitter<number>();

  public onStatusChanged(index: number): void {
    this.statusChanged.emit(index);
  }

  public onDeleteButtonClick(index: number): void {
    this.deleteButtonClick.emit(index);
  }
}
