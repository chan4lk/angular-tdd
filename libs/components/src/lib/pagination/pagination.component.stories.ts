import { PaginationComponent } from './pagination.component';

export default {
  title: 'PaginationComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: PaginationComponent,
  props: {
    config: {
      currentPage: 1,
      total: 6,
      perPageCount: 5,
      pageCount: 5,
    },
  },
});

export const page_3 = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: PaginationComponent,
  props: {
    config: {
      currentPage: 2,
      total: 11,
      perPageCount: 5,
      pageCount: 5,
    },
  },
});

export const longPagination = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: PaginationComponent,
  props: {
    config: {
      currentPage: 9,
      pageCount: 5,
      perPageCount: 5,
      total: 55,
    },
  },
});
