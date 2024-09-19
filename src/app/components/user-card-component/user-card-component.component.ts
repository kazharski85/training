import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card-component',
  standalone: true,
  imports: [],
  templateUrl: './user-card-component.component.html',
  styleUrl: './user-card-component.component.scss'
})
export class UserCardComponentComponent {
  @Input() user: User | undefined;

  @Output() statusChangedChild: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteButtonClickChild: EventEmitter<number> = new EventEmitter<number>();

  public onActivatedButtonClick(): void {
    this.statusChangedChild.emit(0);
  }

  public onDeleteButtonClick(): void {
    this.deleteButtonClickChild.emit(0);
  }

}
