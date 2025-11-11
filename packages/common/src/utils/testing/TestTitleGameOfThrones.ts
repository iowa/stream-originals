import {TestTitle} from './TestEntities.js';
import {TestInterests} from './TestInterests.js';
import {TitleDraft} from '../../db/dbTypes.js';

export class TestTitleGameOfThrones {
  public static readonly TitleDraft: TitleDraft = {
    id: 'tt0944947',
    name: 'Game of Thrones',
    premiere: '2011-01-01',
    streamer: 'hboMax',
    finale: '2019-01-01',
    seasons: null,
    episodes: null,
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitleGameOfThrones.TitleDraft,
      type: 'tvSeries',
      plot: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      updatedAt: new Date('1970-01-01T00:00:00.000Z'),
      runtimeSeconds: 3600,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg',
    },
    ratings: [
      {
        titleId: 'tt0944947',
        type: 'imdb',
        total: '9.2',
        voteCount: 2499026,
      },
    ],
    interests: [
      TestInterests.Action,
      TestInterests.Adventure,
      TestInterests.Drama,
      TestInterests.Fantasy,
    ],
    credits: [],
  };
}
