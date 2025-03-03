import { TestBed } from '@angular/core/testing';
import { AdvicesService } from './core/services/advices/advices.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('SpyExpertComponent', () => {
  let adviceService: AdvicesService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    adviceService = TestBed.inject(AdvicesService);
  });

  afterEach(() => {
    httpTesting.verify();
  });
  it('should return expected advice (httpclient called once)', () => {   });

  it('should properly handle request error', () => { });
});
