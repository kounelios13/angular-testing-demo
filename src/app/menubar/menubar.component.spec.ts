import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarComponent } from './menubar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenubarComponent', () => {
  let component: MenubarComponent;
  let fixture: ComponentFixture<MenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubarComponent ],
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

  it('should have 2 menu items', async() => {
    const items = [{label: 'Label 1', link: '/home'}, {label : 'Label 2', link: '/cars'}];
    component.items = items;
    await component.ngOnInit();
    expect(component.items.length).toBe(2);
  });

  it('default menu background should be rgba(0,0,0,.8) !important', async () => {
    await component.ngOnInit();
    expect(component.background).toBe('rgba(0,0,0,.8) !important');
  });

  it('menu background should be rgba(1,1,1,.8)', async() => {
    await component.ngOnInit();
    const bgColor = 'rgba(1,1,1,.8)';
    component.background = bgColor;
    expect(component.getBackgroundColor()).toBe(bgColor);
  });

  it('default color link should be black', async() => {
    await component.ngOnInit();
    const defaultColor = 'black';
    expect(component.getLinkColor()).toBe(defaultColor);
  });

  it('color link should not be the default when setting a custom color', async () => {
    await component.ngOnInit();

    const customColor = 'red';
    const defaultColor = component.getLinkColor();
    component.linkColor = customColor;
    const isDifferentColor = defaultColor != component.getLinkColor();

    expect(isDifferentColor).toBeTruthy();
  });

});
