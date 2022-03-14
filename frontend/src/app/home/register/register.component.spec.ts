import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { UserService } from '../../services/user.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpTestingController,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      declarations: [RegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should valid data', async(
  //   inject(
  //     [HttpTestingController, UserService],
  //     (httpClient: HttpTestingController, userService: UserService) => {
  //       const user = [
  //         {
  //           name: '',
  //           email: '',
  //           password: '',
  //         },
  //       ];
  //       userService.registerUser(user).subscribe((users: any) => {
  //         expect(users.message).toEqual('Incomplete data');
  //       });
  //     }
  //   )
  // ));
});
