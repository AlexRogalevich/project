import { Component, OnInit } from '@angular/core';

const showElement = {
  myelement: false
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showElement = showElement;
  
  toggleElement() {

    showElement.myelement = !showElement.myelement

    // console.log("Переключение", showElement.myelement);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
