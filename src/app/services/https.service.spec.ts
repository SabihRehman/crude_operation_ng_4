/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpsService } from './https.service';

describe('HttpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpsService]
    });
  });

  it('should ...', inject([HttpsService], (service: HttpsService) => {
    expect(service).toBeTruthy();
  }));
});
