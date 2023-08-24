import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  enterName = 'swagatika';
  parentData = '';
  TransferData() {
    this.parentData = this.enterName;
  }
  value = '';
  sendData(value) {
    this.value = value;
  }
}
