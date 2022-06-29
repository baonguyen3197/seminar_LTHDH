import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-down',
  templateUrl: './scan-down.component.html',
  styleUrls: ['./scan-down.component.scss']
})
export class ScanDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  size = 8;
  disk_size = 200;
  head = 50;
  direction = "left";
  seek_sequence: Array<any> = [];
  seek_count = 0;

  SCAN_DOWN(size: number, head: number, direction: string) {
    //let seek_count = 0;
    let distance, cur_track;
    let left = [],
      right = [];
    let arr: Array<any> = [];
    let loop = 0;

    // appending end values
    // which has to be visited
    // before reversing the direction
    if (direction == "left") left.push(0);
    else if (direction == "right") right.push(this.disk_size - 1);

    while(loop < size) {
      let randNum = Math.floor(Math.random() * 200);
      if (randNum == 199 || randNum == 0) continue;
      if (!arr.includes(randNum)){
        arr.push(randNum);
      loop++;
      }
    }

    for (let i = 0; i < size; i++) {
      if (arr[i] < head) left.push(arr[i]);
      if (arr[i] > head) right.push(arr[i]);
    }

    // sorting left and right vectors
    left.sort(function (a, b) {
      return a - b;
    });
    right.sort(function (a, b) {
      return a - b;
    });

    // run the while loop two times.
    // one by one scanning left
    // and right of the head
    let run = 2;
    this.seek_sequence = [];
    this.seek_sequence.push(head);
    while (run-- > 0) {
      if (direction == "left") {
        for (let i = left.length - 1; i >= 0; i--) {
          cur_track = left[i];

          // appending current track to seek sequence
          this.seek_sequence.push(cur_track);

          // calculate absolute distance
          distance = Math.abs(cur_track - head);

          // increase the total count
          this.seek_count += distance;

          // accessed track is now the new head
          head = cur_track;
        }
        direction = "right";
      } else if (direction == "right") {
        for (let i = 0; i < right.length; i++) {
          cur_track = right[i];

          // appending current track to seek sequence
          this.seek_sequence.push(cur_track);

          // calculate absolute distance
          distance = Math.abs(cur_track - head);

          // increase the total count
          this.seek_count += distance;

          // accessed track is now new head
          head = cur_track;
        }
        direction = "left";
      }
    }

    console.log("Total number of seek operations = " + this.seek_count);
    console.log("Seek Sequence is");
    for (let i = 0; i < this.seek_sequence.length; i++) {
      console.log(this.seek_sequence[i]);
    }

    return this.seek_sequence;
  }

  Cylinder(){
    this.seek_count = 0;
    for (let i = 0; i < this.seek_sequence.length - 1; i++) {
      this.seek_count += Math.abs(this.seek_sequence[i] - this.seek_sequence[i + 1]);
    }
    console.log("Total number of seek operations = " + this.seek_count);

    return this.seek_count;
  }

  onClick() {
    console.log(this.SCAN_DOWN(this.size, this.head, this.direction));
    console.log(this.Cylinder());
  }

  drawLineWithArrows(x0: number, y0: number, x1: number, y1: number, aWidth: number, aLength: number, arrowStart: boolean, arrowEnd: boolean) {
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);
    let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");

    ctx!.translate(x0, y0);
    ctx!.rotate(angle);
    ctx!.beginPath();
    ctx!.moveTo(0, 0);
    ctx!.lineTo(length, 0);
    if (arrowStart) {
      ctx!.moveTo(aLength, -aWidth);
      ctx!.lineTo(0, 0);
      ctx!.lineTo(aLength, aWidth);
    }
    if (arrowEnd) {
      ctx!.moveTo(length - aLength, -aWidth);
      ctx!.lineTo(length, 0);
      ctx!.lineTo(length - aLength, aWidth);
    }

    ctx!.stroke();
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
  }

  draw() {
    let drawxRow = [...this.seek_sequence];

    // drawxRow.push(0);
    drawxRow.push(199);
    drawxRow.sort((a, b) => a - b);
    console.log(drawxRow);

    let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');

    var ctx = canvas.getContext("2d");
    ctx!.clearRect(0, 0, 800, 300);
    ctx!.restore();
    ctx!.font = "20px Arial";

    for (let i = 0; i < drawxRow.length; i++) {
      ctx!.fillText(drawxRow[i], 50 * (i + 2), 50);
      ctx!.moveTo(750, 70);
      ctx!.lineTo(50, 70);
      ctx!.stroke();
    }

    for (let i = 0; i < this.seek_sequence.length - 1; i++) {
      console.log(drawxRow.indexOf(this.seek_sequence[i]) + 2);

      let x = 50 * (drawxRow.indexOf(this.seek_sequence[i]) + 2);
      let xNext = 50 * (drawxRow.indexOf(this.seek_sequence[i + 1]) + 2);
      let y = 20 * (i + 1);
      let yNext = 20 * ((i + 1) + 1);

      // ctx!.moveTo(x, y);
      // ctx!.lineTo(xNext, yNext);
      // ctx!.stroke();
      this.drawLineWithArrows(x + 15, y + 50, xNext + 15, yNext + 50, 5, 8, false, true);

      ctx!.beginPath();
      ctx!.arc(x + 15, y + 50, 2, 0, 2 * Math.PI);
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.arc(xNext + 15, yNext + 50, 2, 0, 2 * Math.PI);
      ctx!.stroke();
    }
    // this.seek_sequence = [];
  }
}
