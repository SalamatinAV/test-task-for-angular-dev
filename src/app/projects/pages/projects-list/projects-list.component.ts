import { Component, OnInit } from '@angular/core';
import { GithubService } from '@app/projects/github.service';
import { delay } from 'rxjs/operators';
import { GithumReposModel } from '@app/projects/models/github-repos.model';
import { WeatherResponseModel } from '@app/projects/models/weather.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  public weatherData: WeatherResponseModel | null = null;
  public repos: GithumReposModel[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getRepos('SalamatinAV')
      .pipe(delay(500))
      .subscribe((data: GithumReposModel[]) => {
        this.repos = data;
      });

    this.weatherData = {
      coord: { lon: 10.99, lat: 44.34 },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      base: 'stations',
      main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
      },
      visibility: 10000,
      wind: { speed: 0.62, deg: 349, gust: 1.18 },
      rain: { '1h': 3.16 },
      clouds: { all: 100 },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: 'IT',
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 7200,
      id: 3163858,
      name: 'Zocca',
      cod: 200,
    };
  }
}
