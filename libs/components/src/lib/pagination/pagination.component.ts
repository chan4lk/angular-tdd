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
  visible = [];

  constructor() {}

  ngOnInit(): void {}

  updatePages() {
    let pageCount = Math.floor(this._config.total / this._config.perPageCount);
    const remainder = this._config.total % this._config.perPageCount;
    if (pageCount === 0 && remainder > 0) {
      this.pages = [1];
      this.visible = [1];
      return;
    } else if (remainder > 0) {
      pageCount += 1;
    }
    const pages = [];
    for (let index = 1; index < pageCount + 1; index++) {
      pages.push(index);
    }

    const visible = this.getVisible(pages, this._config);

    this.pages = pages;
    this.visible = visible;
  }

  private getVisible(pages: any[], _config: Pagination) {
    if (_config.pageCount >= pages.length) {
      return pages;
    }

    let start = 0;
    let end = pages.length;

    const range = Math.floor(_config.pageCount / 2);
    start =
      _config.currentPage + range < end
        ? _config.currentPage - range - 1 > 0
          ? _config.currentPage - range - 1
          : 0
        : end - _config.pageCount;
    end =
      _config.currentPage - range - 1 > 0
        ? _config.currentPage + range
        : _config.pageCount;

    return pages.slice(start, end);
  }

  previous() {
    if (!(this._config.currentPage - 1 < 1)) {
      this._config.currentPage -= 1;
      this.updatePages();
    }
  }

  next() {
    if (!(this._config.currentPage + 1 > this.pages.length)) {
      this._config.currentPage += 1;
      this.updatePages();
    }
  }

  selectPage(page: number) {
    this._config.currentPage = page;
    this.updatePages();
  }
}
