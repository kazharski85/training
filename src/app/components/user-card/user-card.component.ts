import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from "../../pipes/full-name.pipe";

@Component({
  selector: 'app-user-card-component',
  standalone: true,
  imports: [CommonModule, FullNamePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) user!: User;

  @Output() statusChangedChild: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteButtonClickChild: EventEmitter<number> = new EventEmitter<number>();
  @Output() editButtonClickChild: EventEmitter<number> = new EventEmitter<number>();

  public onActivatedButtonClick(): void {
    this.statusChangedChild.emit(0);
  }

  public onDeleteButtonClick(): void {
    this.deleteButtonClickChild.emit(0);
  }

  public onEditButtonClick(): void {
    this.editButtonClickChild.emit(0);
  }

  ngOnInit() {
    console.log(this.user.firstName + " is displayed")
  }

  ngOnDestroy() {
    console.log(this.user.firstName + " is hidden")
  }

}
