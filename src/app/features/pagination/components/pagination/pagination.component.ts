import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
  }
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((element) => element + start);
  }
  first() {
    this.currentPage = 1;
    this.changePage.emit(this.currentPage);
  }
  next() {
    if (this.currentPage < this.pages.length) {
      this.currentPage += 1;
      this.changePage.emit(this.currentPage);
    }
  }
  previous() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.changePage.emit(this.currentPage);
    }
  }
  last() {
    this.currentPage = this.pages.length;
    this.changePage.emit(this.currentPage);
  }
}
