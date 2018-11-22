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
    // Create new IntersectionObserver
    const io = new IntersectionObserver(entries => {
      (entries[0].intersectionRatio !== 0) ? updateStatus(true) : updateStatus(false)
    });

    // Elements to be observed
    const box1 = document.querySelector('.box1');
    const box3 = document.querySelector('.box3');

    // Start observing .box
    io.observe(box1);
    io.observe(box3);

    // Just necessary for displaying the current status
    const updateStatus = (visiblity) => {
      console.log(`Update var on class component`, visiblity);
    }
  }
}