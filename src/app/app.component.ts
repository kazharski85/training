import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseListViewComponentComponent } from "./components/use-list-view-component/use-list-view-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseListViewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'training';
}
