import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Component({
  selector: 'angular-tdd-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent implements OnInit {
  @Input() set config(val: Pagination) {
    this._config = val;
    this.updatePages();
  }

  _config: Pagination = {
    currentPage: 3,
    pageCount: 0,
    perPageCount: 0,
    total: 0,
  };

  pages = [];

  constructor() {}

  ngOnInit(): void {}

  updatePages() {
    let pageCount = Math.floor(this._config.total / this._config.perPageCount);
    const remainder = this._config.total % this._config.perPageCount;
    if (pageCount === 0 && remainder > 0) {
      this.pages = [1];
      return;
    } else if (remainder > 0) {
      pageCount += 1;
    }
    const pages = [];
    for (let index = 1; index < pageCount + 1; index++) {
      pages.push(index);
    }

    this.pages = pages;
  }

  previous() {}

  next() {}

  selectPage(page: number) {}
}
