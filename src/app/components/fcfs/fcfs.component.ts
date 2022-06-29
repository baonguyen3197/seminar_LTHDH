import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fcfs',
  templateUrl: './fcfs.component.html',
  styleUrls: ['./fcfs.component.scss']
})
export class FcfsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  size = 8;
  seek_sequence: Array<any> = [];
  head = 80;
  seek_count = 0;

  FCFS(size: number, head: number) {
    //let seek_count = 0;
    let distance, cur_track;
    let result: Array<any> = [];
    let loop = 0;

    while (loop < size) {
      let randNum = Math.floor(Math.random() * 200)
      if (randNum == head) continue;
      if (!result.includes(randNum)) {
        result.push(randNum);
        loop++;
      }
    }

    this.seek_sequence = result;
    this.seek_sequence.unshift(head);
    for (let i = 0; i < size; i++) {
      cur_track = this.seek_sequence[i];

      // Calculate absolute distance
      distance = Math.abs(cur_track - head);

      // Increase the total count
      this.seek_count += distance;

      // Accessed track is now new head
      head = cur_track;
    }

    console.log("Total number of " + "seek operations = " + this.seek_count);

    // Seek sequence would be the same
    // as request array sequence
    console.log("Seek Sequence is");

    for (let i = 0; i < size; i++) {
      console.log(this.seek_sequence[i]);
    }

    return this.seek_sequence;
  }

  Cylinder() {
    this.seek_count = 0;
    for (let i = 0; i < this.seek_sequence.length - 1; i++) {
      this.seek_count += Math.abs(this.seek_sequence[i] - this.seek_sequence[i + 1]);
    }
    console.log("Total number of seek operations = " + this.seek_count);

    return this.seek_count;
  }

  onClick() {
    console.log(this.FCFS(this.size, this.head));
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

    drawxRow.push(0);
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
      ctx!.lineTo(this.seek_sequence.length, 70);
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
