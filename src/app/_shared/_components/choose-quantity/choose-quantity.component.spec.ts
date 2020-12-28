import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChooseQuantityComponent} from './choose-quantity.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NotificationService} from '../../_services/notification.service';
import {getAsNumberInSelector, getNotificationService} from '../../../_mocks/utils.mock';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {UiElementsModule} from '../../_modules/ui-elements.module';

describe('ChooseQuantityComponent', () => {
  let component: ChooseQuantityComponent;

  let fixture: ComponentFixture<ChooseQuantityComponent>;

  let nativeElement: HTMLElement;
  let notificationServiceSpy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, UiElementsModule, RouterTestingModule.withRoutes([])],
      declarations: [ChooseQuantityComponent],
      providers: [

        {provide: NotificationService, useValue: getNotificationService()}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    nativeElement = fixture.debugElement.nativeElement;
    notificationServiceSpy = spyOn(TestBed.get(NotificationService), 'showErrorMessage').and.stub();
  });
});

