import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserCardComponent } from "../user-card/user-card.component";
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HighlightDirective } from '../user-list-main/highlight.directive';


@Component({
  selector: 'app-user-list-main-component',
  standalone: true,
  imports: [UserCardComponent, CommonModule, MatCheckboxModule, HighlightDirective],
  templateUrl: './user-list-main.component.html',
  styleUrl: './user-list-main.component.scss'
})
export class UserListMainComponent {
  public isChecked: boolean = false;

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
