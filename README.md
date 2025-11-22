# Test project goal: retrieve your Github projects and show it

### tasks and points:

- fork that project | `+1 point`
- run project | `+1 point`
- make the loader not spin constantly | `+2 point`
- create a new module | `+2 point`
- make this module in lazy loading | `+2 point`
- create page pixel perfect by | `+5 point`
![Pixel Perfect](Group.png)
- secure route for the lazy-loaded projects.module by _has-access-token.guard_ | `+3 points`
- create an interface to the current object, and display this code in the bottom of template | `+3 points`

```
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}
```

- create a pipe that will add the current username to the text | `+3 points`
- styles by _BEM methodology_ | `+4 points`
- HTTP error handling on 404 by _error.interceptor_ | `+5 points`

## Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
