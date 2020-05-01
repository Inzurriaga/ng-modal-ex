// make sure to add input to the import
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // this is where the method is being save to the child
  @Input() public  toggleDisplayModal: Function;

  constructor() { }

  ngOnInit(): void {
  }

}
