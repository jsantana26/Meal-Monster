import { ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent implements OnInit {

  constructor(public element: ElementRef) { }

  ngOnInit() {
    const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + "px";
    textArea.style.maxHeight = '100px';
  }

}
