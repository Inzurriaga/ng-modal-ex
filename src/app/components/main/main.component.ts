import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // the condition to check if the modal should be display or not
  modalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // this is to toggle the modal so you can see it or not
  // i made it to a arrow function to bind this to the component it lives in so you dont need to manually bind it
  toggleDisplayModal = () => {
    this.modalOpen = !this.modalOpen
  }

}
