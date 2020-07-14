import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any pages', () => {
    component.config = {
      currentPage: 1,
      pageCount: 5,
      perPageCount: 10,
      total: 0,
    };

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.length).toBe(0);
  });

  it('should have 1 page', () => {
    component.config = {
      currentPage: 1,
      pageCount: 5,
      perPageCount: 10,
      total: 1,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.length).toBe(1);
  });

  it('should have 2 pages', () => {
    component.config = {
      currentPage: 1,
      pageCount: 5,
      perPageCount: 5,
      total: 6,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.length).toBe(2);
  });

  it('should have 3 pages', () => {
    component.config = {
      currentPage: 1,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.length).toBe(3);
  });

  it('should select 2nd page', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.item(1).classList).toContain('active');
  });

  it('should select 3rd page', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const numbers = debugElement.querySelectorAll('.pagination__item');
    (numbers.item(2) as any).click();
    fixture.detectChanges();
    expect(numbers.item(2).classList).toContain('active');
  });

  it('should select previous page', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const btn = debugElement.querySelector('.pagination__previous--button');
    (btn as any).click();
    fixture.detectChanges();

    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.item(0).classList).toContain('active');
  });

  it('should select next page', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const btn = debugElement.querySelector('.pagination__next--button');
    (btn as any).click();
    fixture.detectChanges();

    const numbers = debugElement.querySelectorAll('.pagination__item');
    expect(numbers.item(2).classList).toContain('active');
  });

  it('should disable next button', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    let btn = debugElement.querySelector('.pagination__next--button');
    (btn as any).click();
    fixture.detectChanges();
    btn = debugElement.querySelector('.pagination__next--button');

    expect(btn.classList).toContain('disabled');
  });

  it('should disable previous button', () => {
    component.config = {
      currentPage: 2,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    let btn = debugElement.querySelector('.pagination__previous--button');
    (btn as any).click();
    fixture.detectChanges();
    btn = debugElement.querySelector('.pagination__previous--button');

    expect(btn.classList).toContain('disabled');
  });

  it('should not go to previous page', () => {
    component.config = {
      currentPage: 1,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const btn = debugElement.querySelector('.pagination__previous--button');
    (btn as any).click();
    fixture.detectChanges();

    expect(component._config.currentPage).toBe(1);
  });

  it('should not go to next page', () => {
    component.config = {
      currentPage: 3,
      pageCount: 5,
      perPageCount: 5,
      total: 11,
    };

    fixture.detectChanges();

    const debugElement = fixture.debugElement.nativeElement as HTMLElement;
    const btn = debugElement.querySelector('.pagination__next--button');
    (btn as any).click();
    fixture.detectChanges();

    expect(component._config.currentPage).toBe(3);
  });
});
