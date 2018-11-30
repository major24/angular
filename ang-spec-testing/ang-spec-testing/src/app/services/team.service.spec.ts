import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } 
              from '@angular/common/http/testing';

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

describe('TeamService', () => {
  let injector: TestBed;
  let service: TeamService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers: [TeamService]
    });
    injector = getTestBed();
    service = injector.get(TeamService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getTeams', () => {
    it('should return an Observable<Team[]>', () => {
      const dummyTeams = [
        { id:200, name: 'Colombian tigers' },
        { id:201, name: 'Canadian jays' }
      ];

      service.getTeams().subscribe(teams => {
        expect(teams.length).toBe(2);
        expect(teams).toEqual(dummyTeams);
        expect(dummyTeams[0].id).toEqual(200);
      });

      let url = 'assets/teams.json';
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe("GET");
      req.flush(dummyTeams);
    });
  });

  describe('#getTeam(300)', () => {
    it('should return an Observable<Team>', () => {
      const dummyTeam = 
        { id:300, name: 'Colombian tigers' };

      service.getTeam(300).subscribe(team => {
        expect(team).toEqual(dummyTeam);
        expect(dummyTeam.id).toEqual(300);
      });

      let url = 'assets/team_300.json';
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe("GET");
      req.flush(dummyTeam);
    });
  });

  // error handle
    describe('#getTeam(900)', () => {
    it('should throw and error saying invalid id', () => {
      const respError = 'Error: ID should be less than 600.';

      service.getTeam(900).subscribe(err => {
        expect(err).toEqual(respError);
      });

      let url = 'assets/team_300.json';
      const req = httpMock.expectNone(url);  // Ensure no call is made
    });
  });

  // error handle 404
    describe('#getTeam(-1)', () => {
    it('should throw 404 not found error', () => {

      service.getTeamNotFoundError(-1).subscribe(err => {
        expect(err).toEqual(404);
      });

      let url = 'assets/json_not_exists.json';
      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe("GET");
      req.flush(404);
    });
  });



});
