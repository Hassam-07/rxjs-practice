import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  flatMap,
  map,
  mergeMap,
  of,
  from,
  reduce,
  fromEvent,
  Subject,
  forkJoin,
} from 'rxjs';
import {
  concatMap,
  zip,
  filter,
  toArray,
  tap,
  takeUntil,
  take,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface PriceRecord {
  name: string;
  timeStamp: Date;
  // Add other properties as per your actual data structure
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'os-rxjs-practice';
  pricesNASDAQ: PriceRecord[] = [];
  // private unsubscribe$ = new Subject<void>();
  constructor(private buttonRef: ElementRef, private http: HttpClient) {}
  // Exercise 1

  function1() {
    var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'],
      counter;

    for (counter = 0; counter < names.length; counter++) {
      console.log(names[counter]);
    }
  }

  // Exercise 2
  function2() {
    var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];

    names.forEach(function (name) {
      console.log(name);
    });
  }

  // Exercise 3
  function3() {
    var newReleases = [
        {
          id: 70111470,
          title: 'Die Hard',
          boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: [4.0],
          bookmark: [],
        },
        {
          id: 654356453,
          title: 'Bad Boys',
          boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: [5.0],
          bookmark: [{ id: 432534, time: 65876586 }],
        },
        {
          id: 65432445,
          title: 'The Chamber',
          boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: [4.0],
          bookmark: [],
        },
        {
          id: 675465,
          title: 'Fracture',
          boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: [5.0],
          bookmark: [{ id: 432534, time: 65876586 }],
        },
      ],
      videoAndTitlePairs: any = [];

    newReleases.forEach(function (video) {
      videoAndTitlePairs.push({ id: video.id, title: video.title });
    });
    console.log('videoAndTitlePairs:', videoAndTitlePairs);
    return videoAndTitlePairs;
  }

  // Exercise 4

  // Array.prototype.map = function(projectionFunction) {
  //   var results = [];
  //   this.forEach(function(itemInArray) {

  //   });

  //   return results;
  // };

  // JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

  // Exercise 5

  function5() {
    var newReleases = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        id: 65432445,
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [4.0],
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];
    console.log('New Releases:', newReleases);

    return newReleases.map(function (video) {
      return { id: video.id, title: video.title };
    });
  }

  function6() {
    var newReleases = [
        {
          id: 70111470,
          title: 'Die Hard',
          boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: 4.0,
          bookmark: [],
        },
        {
          id: 654356453,
          title: 'Bad Boys',
          boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: 5.0,
          bookmark: [{ id: 432534, time: 65876586 }],
        },
        {
          id: 65432445,
          title: 'The Chamber',
          boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: 4.0,
          bookmark: [],
        },
        {
          id: 675465,
          title: 'Fracture',
          boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
          uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
          rating: 5.0,
          bookmark: [{ id: 432534, time: 65876586 }],
        },
      ],
      videos: any = [];

    newReleases.forEach(function (video) {
      if (video.rating === 5.0) {
        videos.push(video);
      }
    });

    console.log('Videos rating 5:', videos);
    return videos;
  }

  // Exercise 7

  // function7(predicateFunction) {
  //   var results= [];
  //   this.forEach(function (itemInArray: any) {
  //     if (predicateFunction(itemInArray)) {
  //     }
  //   });

  //   return results;
  // }

  // Exercise 8

  function8() {
    var newReleases = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        id: 65432445,
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];

    console.log('movie List', newReleases);
    return newReleases
      .filter(function (video) {
        return video.rating === 5.0;
      })
      .map(function (video) {
        return video.id;
      });
  }

  // Exercise 9
  function9() {
    var movieLists = [
        {
          name: 'New Releases',
          videos: [
            {
              id: 70111470,
              title: 'Die Hard',
              boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
              uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
              rating: 4.0,
              bookmark: [],
            },
            {
              id: 654356453,
              title: 'Bad Boys',
              boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
              uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
              rating: 5.0,
              bookmark: [{ id: 432534, time: 65876586 }],
            },
          ],
        },
        {
          name: 'Dramas',
          videos: [
            {
              id: 65432445,
              title: 'The Chamber',
              boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
              uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
              rating: 4.0,
              bookmark: [],
            },
            {
              id: 675465,
              title: 'Fracture',
              boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
              uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
              rating: 5.0,
              bookmark: [{ id: 432534, time: 65876586 }],
            },
          ],
        },
      ],
      allVideoIdsInMovieLists: any = [];

    movieLists.forEach(function (movieList) {
      movieList.videos.forEach(function (video) {
        allVideoIdsInMovieLists.push(video.id);
      });
    });
    console.log('All Video Id in Movie List', allVideoIdsInMovieLists);

    return allVideoIdsInMovieLists;
  }

  // Exercise 10

  // Array.prototype.concatAll = function() {
  //   var results = [];
  //   this.forEach(function(subArray) {

  //   });

  //   return results;
  // };

  // Exercise 11

  function11() {
    var movieLists = [
      {
        name: 'New Releases',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: 'Dramas',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
            uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];

    console.log('movie List', movieLists);
    return movieLists
      .map(function (movieList) {
        return movieList.videos.map(function (video) {
          return video.id;
        });
      })
      .flat();
  }

  // Exercise 12
  function12() {
    var movieLists = [
      {
        name: 'Instant Queue',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
              },
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: 'New Releases',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
              },
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
              },
              {
                width: 300,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];

    console.log('movieList', movieLists);
    return movieLists
      .map(function (movieList) {
        return movieList.videos
          .map(function (video) {
            return video.boxarts
              .filter(function (boxart) {
                return boxart.width === 150 && boxart.height === 200;
              })
              .map(function (boxart) {
                return { id: video.id, title: video.title, boxart: boxart.url };
              });
          })
          .flat();
      })
      .flat();
  }

  // Exercise 13

  // Exercise 14
  function14() {
    var movieLists = [
      {
        name: 'Instant Queue',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
              },
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: 'New Releases',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
              },
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
              },
              {
                width: 300,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];

    console.log('movieList', movieLists);
    return movieLists.flatMap(function (movieList: any) {
      return movieList.videos.concatMap(function (video: any) {
        return video.boxarts
          .filter(function (boxart: any) {
            return boxart.width === 150 && boxart.height === 200;
          })
          .map(function (boxart: any) {
            return { id: video.id, title: video.title, boxart: boxart.url };
          });
      });
    });
  }

  function15() {
    var boxarts = [
        {
          width: 200,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
        },
        {
          width: 150,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
        },
        {
          width: 300,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
        },
        {
          width: 425,
          height: 150,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
        },
      ],
      currentSize,
      maxSize = -1,
      largestBoxart;

    boxarts.forEach(function (boxart) {
      currentSize = boxart.width * boxart.height;
      if (currentSize > maxSize) {
        largestBoxart = boxart;
        maxSize = currentSize;
      }
    });
    console.log('largestBox Art', largestBoxart);

    return largestBoxart;
  }

  //  Exercise 17
  function17() {
    var ratings = [2, 3, 1, 4, 5];

    return ratings.reduce(function (acc, curr) {
      if (acc > curr) {
        return acc;
      } else {
        return curr;
      }
    });
  }

  // Exercise 18

  function18() {
    var boxarts = [
      {
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
      },
      {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
      },
      {
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
      },
      {
        width: 425,
        height: 150,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg',
      },
    ];

    const a = of(boxarts)
      .pipe(
        map((boxarts) =>
          boxarts.reduce((prev, current) =>
            prev.width > current.width ? prev : current
          )
        ),
        map((largestBoxart) => largestBoxart.url)
      )
      .subscribe((largestBoxartUrl) => {
        console.log('url', largestBoxartUrl);
      });
  }
  function19() {
    var videos = [
      {
        id: 65432445,
        title: 'The Chamber',
      },
      {
        id: 675465,
        title: 'Fracture',
      },
      {
        id: 70111470,
        title: 'Die Hard',
      },
      {
        id: 654356453,
        title: 'Bad Boys',
      },
    ];

    // return videos.reduce(
    //   function (accumulatedMap, video) {
    //     var obj = {};
    //     obj[video.id] = video.title;

    //     return Object.assign(accumulatedMap, obj);
    //   },

    //   {}
    // );
    const videoMap$ = of(videos).pipe(
      reduce((acc: any, video: any) => {
        acc[video.id] = video.title;
        return acc;
      }, {})
    );

    videoMap$.subscribe((result) => {
      console.log(result);
    });
  }
  function20() {
    var movieLists = [
      {
        name: 'New Releases',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
              },
              {
                width: 140,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: 'Thrillers',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxarts: [
              {
                width: 130,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
              },
              {
                width: 120,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
              },
              {
                width: 300,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];

    const smallestBoxArt$ = of(movieLists).pipe(
      mergeMap((lists: any) => lists),
      mergeMap((list: any) => list.videos),
      map((video: any) => {
        return video.boxarts.reduce((acc: any, boxart: any) => {
          if (boxart.width * boxart.height < acc.width * acc.height) {
            return boxart;
          }
          return acc;
        });
      })
    );

    smallestBoxArt$.subscribe((result) => {
      console.log(result);
    });
  }

  // Exercise 21

  combineVideosAndBookmarks() {
    const videos = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
      },
      {
        id: 65432445,
        title: 'The Chamber',
        boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
      },
      {
        id: 675465,
        title: 'Fracture',
        boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
      },
    ];

    const bookmarks = [
      { id: 470, time: 23432 },
      { id: 453, time: 234324 },
      { id: 445, time: 987834 },
    ];

    const videoIdAndBookmarkIdPairs: any = [];

    from(videos)
      .pipe(zip(from(bookmarks)))
      .subscribe(([video, bookmark]) => {
        // Assuming you want to create an object with videoId and bookmarkId
        videoIdAndBookmarkIdPairs.push({
          videoId: video.id,
          bookmarkId: bookmark.id,
        });
      });

    console.log(videoIdAndBookmarkIdPairs);
  }

  // Exercise 22

  static zip(left: any[], right: any[], combinerFunction: Function) {
    const results: any[] = [];

    from(left)
      .pipe(zip(from(right)))
      .subscribe(([leftItem, rightItem]) => {
        results.push(combinerFunction(leftItem, rightItem));
      });

    console.log(results);
    return results;
  }

  function23() {
    const videos = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
      },
      // Other video objects
    ];

    const bookmarks = [
      { id: 470, time: 23432 },
      { id: 453, time: 234324 },
      { id: 445, time: 987834 },
      // Other bookmark objects
    ];

    const videoIdAndBookmarkIdPairs: any = [];

    from(videos)
      .pipe(zip(from(bookmarks)))
      .subscribe(([video, bookmark]) => {
        videoIdAndBookmarkIdPairs.push({
          videoId: video.id,
          bookmarkId: bookmark.id,
        });
      });
    console.log(videoIdAndBookmarkIdPairs);
    return videoIdAndBookmarkIdPairs;
  }

  function24() {
    const movieLists = [
      {
        name: 'New Releases',
        videos: [
          {
            id: 70111470,
            title: 'Die Hard',
            boxarts: [
              {
                width: 150,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            interestingMoments: [
              { type: 'End', time: 213432 },
              { type: 'Start', time: 64534 },
              { type: 'Middle', time: 323133 },
            ],
          },
          {
            id: 654356453,
            title: 'Bad Boys',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
              },
              {
                width: 140,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            interestingMoments: [
              { type: 'End', time: 54654754 },
              { type: 'Start', time: 43524243 },
              { type: 'Middle', time: 6575665 },
            ],
          },
        ],
      },
      {
        name: 'Instant Queue',
        videos: [
          {
            id: 65432445,
            title: 'The Chamber',
            boxarts: [
              {
                width: 130,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
              },
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 4.0,
            interestingMoments: [
              { type: 'End', time: 132423 },
              { type: 'Start', time: 54637425 },
              { type: 'Middle', time: 3452343 },
            ],
          },
          {
            id: 675465,
            title: 'Fracture',
            boxarts: [
              {
                width: 200,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
              },
              {
                width: 120,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
              },
              {
                width: 300,
                height: 200,
                url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
              },
            ],
            url: 'http://api.netflix.com/catalog/titles/movies/70111470',
            rating: 5.0,
            interestingMoments: [
              { type: 'End', time: 45632456 },
              { type: 'Start', time: 234534 },
              { type: 'Middle', time: 3453434 },
            ],
          },
        ],
      },
    ];

    return from(movieLists)
      .pipe(
        concatMap((movieList) =>
          from(movieList.videos).pipe(
            concatMap((video) =>
              from(video.boxarts).pipe(
                reduce((acc, curr) =>
                  acc.width * acc.height < curr.width * curr.height ? acc : curr
                ),
                concatMap((boxart) =>
                  from(video.interestingMoments).pipe(
                    filter(
                      (interestingMoment: any) =>
                        interestingMoment.type === 'Middle'
                    ),
                    zip(from([boxart]), (moment: any, boxart) => ({
                      id: video.id,
                      title: video.title,
                      time: moment.time,
                      url: boxart.url,
                    }))
                  )
                )
              )
            )
          )
        )
      )
      .subscribe((result) => console.log(result));
  }

  // Exercise 25

  function25() {
    const lists = [
      {
        id: 5434364,
        name: 'New Releases',
      },
      {
        id: 65456475,
        name: 'Thrillers',
      },
    ];

    const videos = [
      {
        listId: 5434364,
        id: 65432445,
        title: 'The Chamber',
      },
      {
        listId: 5434364,
        id: 675465,
        title: 'Fracture',
      },
      {
        listId: 65456475,
        id: 70111470,
        title: 'Die Hard',
      },
      {
        listId: 65456475,
        id: 654356453,
        title: 'Bad Boys',
      },
    ];

    return from(lists)
      .pipe(
        map((list) => {
          const filteredVideos = videos.filter(
            (video) => video.listId === list.id
          );
          const videosArr = filteredVideos.map((video) => ({
            id: video.id,
            title: video.title,
          }));
          return { name: list.name, videos: videosArr };
        }),
        toArray()
      )
      .subscribe((result) => console.log(result));
  }

  // Exercise 26

  function26() {
    const lists = [
      {
        id: 5434364,
        name: 'New Releases',
      },
      {
        id: 65456475,
        name: 'Thrillers',
      },
    ];

    const videos = [
      {
        listId: 5434364,
        id: 65432445,
        title: 'The Chamber',
      },
      {
        listId: 5434364,
        id: 675465,
        title: 'Fracture',
      },
      {
        listId: 65456475,
        id: 70111470,
        title: 'Die Hard',
      },
      {
        listId: 65456475,
        id: 654356453,
        title: 'Bad Boys',
      },
    ];

    const boxarts = [
      {
        videoId: 65432445,
        width: 130,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg',
      },
      {
        videoId: 65432445,
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
      },
      {
        videoId: 675465,
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
      },
      {
        videoId: 675465,
        width: 120,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg',
      },
      {
        videoId: 675465,
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
      },
      {
        videoId: 70111470,
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
      },
      {
        videoId: 70111470,
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
      },
      {
        videoId: 654356453,
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
      },
      {
        videoId: 654356453,
        width: 140,
        height: 200,
        url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg',
      },
    ];

    const bookmarks = [
      { videoId: 65432445, time: 32432 },
      { videoId: 675465, time: 3534543 },
      { videoId: 70111470, time: 645243 },
      { videoId: 654356453, time: 984934 },
    ];

    return from(lists)
      .pipe(
        mergeMap((list) => {
          const filteredVideos = videos.filter(
            (video) => video.listId === list.id
          );
          const videosArr = filteredVideos.map((video) => {
            const bookmark = bookmarks.find((b) => b.videoId === video.id);
            const smallestBoxart = boxarts
              .filter((b) => b.videoId === video.id)
              .sort((a, b) => a.width * a.height - b.width * b.height)[0];
            return {
              id: video.id,
              title: video.title,
              time: bookmark ? bookmark.time : null,
              boxart: smallestBoxart ? smallestBoxart.url : null,
            };
          });
          return of({
            name: list.name,
            videos: videosArr,
          });
        }),
        toArray()
      )
      .subscribe((result) => console.log(result));
  }

  // Exercise 27

  // Exercise 28

  function28() {
    const button = this.buttonRef.nativeElement;

    const unsubscribe$ = fromEvent(button, 'click');

    const click$ = fromEvent(button, 'click').pipe(takeUntil(unsubscribe$));

    click$.subscribe(() => {
      alert('Button was clicked. Unsubscribing from event.');
    });
  }

  // Exercise 29
  function29() {
    const buttonClicks$ = fromEvent(this.buttonRef.nativeElement, 'click');

    buttonClicks$.pipe(take(1)).subscribe(() => {
      alert('Button was clicked. Stopping Traversal.');
    });
  }
  // Exercise 30
  function30() {
    const buttonClicks$ = fromEvent(this.buttonRef.nativeElement, 'click');

    buttonClicks$.pipe(take(1)).subscribe(() => {
      alert('Button was clicked once. Stopping Traversal.');
    });
  }

  function31() {
    // Simulating NASDAQ prices as an array of objects
    const pricesNASDAQ = [
      { name: 'MSFT', price: 100 },
      { name: 'AAPL', price: 150 },
    ];

    // Triggered whenever stop button is clicked
    const stopButton =
      this.buttonRef.nativeElement.querySelector('#stopButton');

    const stopButtonClicks = fromEvent(stopButton, 'click');
    const microsoftPrices = from(pricesNASDAQ).pipe(
      filter((priceRecord) => priceRecord.name === 'MSFT'),
      takeUntil(stopButtonClicks)
    );

    microsoftPrices.subscribe((priceRecord) => {
      this.printRecord(priceRecord);
    });
  }
  printRecord(record: any) {
    console.log(record);
  }

  getData(): void {
    this.http.get('http://api-global.netflix.com/queue').subscribe(
      (data) => {
        alert('Data has arrived.');
        // Handle the received data here
      },
      (error) => {
        alert('There was an error.');
        // Handle the error here
      }
    );
  }

  getMovieLists() {
    return this.http.get('http://api-global.netflix.com/abTestInformation').pipe(
      switchMap((abTestInfo: any) =>
        forkJoin({
          configInfo: this.http.get(
            `http://api-global.netflix.com/${abTestInfo.urlPrefix}/config`
          ),
          movieList: this.http.get(
            `http://api-global.netflix.com/${abTestInfo.urlPrefix}/movieLists`
          ),
        }).pipe(
          switchMap((data: any) => {
            const { configInfo, movieList } = data;
            if (configInfo.showInstantQueue) {
              return this.http.get(
                `http://api-global.netflix.com/${abTestInfo.urlPrefix}/queue`
              ).pipe(
                map((queueMessage: any) => ({
                  movieLists: movieList.list.concat(queueMessage.list),
                  error: null,
                })),
                catchError((error) => of({ movieLists: movieList.list, error: 'Queue retrieval error' })),
              );
            }
            return of({ movieLists: movieList.list, error: null });
          }),
          catchError((error) => of({ movieLists: [], error: 'Config or MovieList retrieval error' }))
        )
      )
    );
  }
}
