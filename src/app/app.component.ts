import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseListViewComponent } from "./components/use-list-view/use-list-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training';
}
