import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public ngAfterViewInit(): void {
    this.methodScrollListener();
  }

  private methodScrollListener(): void {
    let visiblity = 'invisible';
    
    // Create new IntersectionObserver
    const io = new IntersectionObserver(entries => {
      // Available data when an intersection happens
      console.log(entries);
      // Element enters the viewport
      if (entries[0].intersectionRatio !== 0) {
        visiblity = 'visible';
        // Element leaves the viewport 
      } else {
        visiblity = 'invisible';
      }
      updateStatus(visiblity);
    });

    // Elements to be observed
    const box1 = document.querySelector('.box1');

    // Start observing .box
    io.observe(box1);

    // Just necessary for displaying the current status
    function updateStatus(visiblity) {
      console.log(`Update var on class component`, visiblity);
    }

  }
}