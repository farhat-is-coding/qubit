import { Component } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent {
  gates = ['x', 'y', 'z', 'not'];
  qubit1 = 0
  qubit2 = 0
  row1 = [''];
  row2 = [''];

  drop(event: CdkDragDrop<any>) {
    // if it is the same container then move the item in the array
    if (event.previousContainer === event.container) { 
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // if it is a different container then transfer the item to the other container
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if(this.gates.length !== 4){
      this.gates = ['x', 'y', 'z', 'not'];
    }
    if(this.row1.length > 1){
      // remove the value from row1 array that is == ''
      this.row1 = this.row1.filter(item => item !== '');
    }
    if(this.row2.length > 1){
      // remove the value from row1 array that is == ''
      this.row2 = this.row2.filter(item => item !== '');
    }
    if(this.row1.length == 0){
      this.row1 = [''];
    }
    if(this.row2.length == 0){
      this.row2 = [''];
    }
  }
}
