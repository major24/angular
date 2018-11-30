import { Component, OnInit } from '@angular/core';
// REF
// https://www.amadousall.com/unit-testing-angular-stubs-vs-spies-vs-mocks/
import { TeamService } from '../services/team.service';
import { Team } from '../models/team';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';  //rxjs v:6

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams$: Observable<Team[]>;
  team$: Team; //Observable<Team>;
  error: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    console.log(this.teams$);
  }

  search(id: number) {
    //this.team$ = this.teamService.getTeam(id);
    this.teamService.getTeam(id)
      .subscribe(result => {
        console.log(`got data`);
        this.team$ = result
        return true;
      },
      err => {
        console.log(err);
        this.error = err;
        return throwError(err); //rxjs v6
      },
      () => {
        console.log('call completed');
      });
  }

  // simulate 404 error
  searchReturn404(id: number) {
    //this.team$ = this.teamService.getTeam(id);
    this.teamService.getTeamNotFoundError(id)
      .subscribe(result => {
        console.log(`got data`);
        this.team$ = result
        return true;
      },
      err => {
        console.log(err);
        this.error = err;
        return throwError(err); //rxjs v6
      },
      () => {
        console.log('call completed');
      });
  }



}
