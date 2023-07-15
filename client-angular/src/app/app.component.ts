import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'first-angular';
  display = {
    visual: true,
  };
  data = {
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  };
  setVisual(mode: boolean) {
    this.display.visual = mode;
  }
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onReceiveData().forEach((data) => {
      this.data = data as typeof this.data;
    });
  }
}
