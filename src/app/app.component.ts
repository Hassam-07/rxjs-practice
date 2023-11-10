import { Component } from '@angular/core';
import { flatMap, map, mergeMap, of, from, reduce } from 'rxjs';
import { concatMap, zip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'os-rxjs-practice';

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
  function13(projectionFunctionThatReturnsArray: any) {
    var spanishFrenchEnglishWords = [
      ['cero', 'rien', 'zero'],
      ['uno', 'un', 'one'],
      ['dos', 'deux', 'two'],
    ];

    from(spanishFrenchEnglishWords)
      .pipe(
        concatMap((item) => {
          // Assuming projectionFunctionThatReturnsObservable is a function returning an observable
          return projectionFunctionThatReturnsArray(item);
        })
      )
      .subscribe((result) => {
        // This will log the flattened and concatenated result of each projected observable
        console.log(result);
      });
  }
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
}
