// Disable specific tslint rule for this file
/* tslint:disable:no-unused-variable */

// Angular testing imports
import { TestBed, async, inject } from '@angular/core/testing';

// Application-specific imports
import { SerieService } from './serie.service';

// Describe test suite for SerieService
describe('Service: Serie', () => {

  // Set up TestBed configuration before each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieService]
    });
  });

  // Test if the SerieService is instantiated correctly
  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));

});
