import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-demo',
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.css']
})
export class AccordionDemoComponent implements OnInit {
  isFirstDisabled = false;
  isSecondOpen = true;
  oneAtATime = true;
  constructor() { }

  ngOnInit() {
  }

}
