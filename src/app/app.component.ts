import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'application-environment';
  actualEnvironment = 'DEVELOPMENT';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.actualEnvironment = environment.type;
    this.appService.getCharacter(environment.url);
  }

  get character() {
    return this.appService.character;
  }
}
