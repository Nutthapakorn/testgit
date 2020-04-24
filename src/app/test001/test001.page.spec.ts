import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Test001Page } from './test001.page';

describe('Test001Page', () => {
  let component: Test001Page;
  let fixture: ComponentFixture<Test001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Test001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
