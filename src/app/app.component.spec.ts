import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import {MenubarModule} from './menubar/menubar.module';
import {MenubarComponent} from './menubar/menubar.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ListModule,
        MenubarModule
      ],
      declarations: [
        AppComponent,
        MenubarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should create a list with 2 items',()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement;
  //   fixture.detectChanges();
  //   const li = compiled.nativeElement.querySelectorAll('li');
  //   expect(li.length).toEqual(2)
  // });
});
