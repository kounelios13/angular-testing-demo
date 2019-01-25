import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenubarComponent} from './menubar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {By, by} from 'protractor';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenubarComponent],
      imports: [HttpClientModule, FormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 menu items', async () => {
    await component.ngOnInit();
    const items = [{label: 'Label 1', link: '/home'}, {label: 'Label 2', link: '/cars'}];
    component.items = items;
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        const nativeElement = fixture.nativeElement;
        const debugElement = fixture.debugElement;
        const links = nativeElement.querySelectorAll('.menubar-link');
        expect(links.length).toBe(items.length);
      });
  });

  it('default menu background should be rgba(0,0,0,.8) !important', async () => {
    await component.ngOnInit();
    expect(component.background).toBe('rgba(0,0,0,.8) !important');
  });

  it('menu background should be rgba(1,1,1,.8)', async () => {
    await component.ngOnInit();
    const bgColor = 'rgba(1,1,1,.8)';
    component.background = bgColor;
    expect(component.getBackgroundColor()).toBe(bgColor);
  });

  it('default color link should be black', async () => {
    await component.ngOnInit();
    const defaultColor = 'black';
    expect(component.getLinkColor()).toBe(defaultColor);
  });

  it('color link should not be the default when setting a custom color', async () => {
    await component.ngOnInit();
    const customColor = 'red';
    const defaultColor = component.getLinkColor();
    component.linkColor = customColor;
    expect(defaultColor).not.toBe(component.getLinkColor());
  });

  it('link color should be orange', async () => {
    component.linkColor = 'orange';
    // Create a dummy link item to be able to test the rendered menubar
    component.items = [{label: 'Dummy link', link: '#'}];
    component.ngOnInit();
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('.menubar-link');
    expect(link.style.color).toBe('orange');
  });

  it('menu bar background should be yellow', async () => {
    component.background = 'yellow';
    fixture.detectChanges();
    const menubar = fixture.nativeElement.querySelector('.menubar');
    expect(menubar.style.background).toBe('yellow');
  });
});
