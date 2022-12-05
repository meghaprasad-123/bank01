import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item:string | undefined
  //@input to hold data from parent component

  @Output() onCancel = new EventEmitter()
  // onCancel is user defined event

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }

}
