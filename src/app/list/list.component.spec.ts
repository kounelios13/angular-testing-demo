import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not be visible when [visible]=false', () => {
    component.items = ['Item 1', 'Item 2'];
    component.visible = false;
    fixture.detectChanges();
    const nativeElement: any = fixture.nativeElement;
    const list = nativeElement.querySelector('.app-list');
    expect(list.style.visible).toBe('false');
  });

  it('should  be visible when [visible]=true', () => {
    component.items = ['Item 1', 'Item 2'];
    component.visible = true;
    fixture.detectChanges();
    const nativeElement: any = fixture.nativeElement;
    const list = nativeElement.querySelector('.app-list');
    expect(list.style.visible).not.toBe('false');
  });

  it('should contain .highligted class when [highlight]=true', () => {
    component.highlighted = true;
    fixture.detectChanges();
    const nativeElement: any = fixture.nativeElement;
    const list = nativeElement.querySelector('.app-list');
    expect(list.classList).toContain('highlighted');
  });
});
