import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotifComponent } from './motif.component';

describe('MotifComponent', () => {
  let component: MotifComponent;
  let fixture: ComponentFixture<MotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
