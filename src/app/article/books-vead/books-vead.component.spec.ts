/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BooksVEADComponent } from './books-vead.component';

describe('BooksVEADComponent', () => {
  let component: BooksVEADComponent;
  let fixture: ComponentFixture<BooksVEADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksVEADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksVEADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
