export const ITEM_SIZE = 300;
export const ROW_HEIGHT = 450;
export const ROW_HEIGHT_CURRENT_LAST = 390;
export const ROW_HEIGHT_LAST = 380;
export const ROW_HEIGHT_LOADING = 150;
export const COLUMN_WIDTH_PADDING = 15;
export const CONTAINER_HEIGHT_PADDING = 50;

export const MOCK_ITEM_COUNT = 80;
export const ITEMS_PER_ROW = 3;
export const ITEMS_PER_LOAD = 15;


export const TITLE_ARTISTS = 'Artists';
export const TITLE_GIGS = 'Gigs';
export const URL_ARTISTS = 'artists';
export const URL_GIGS = 'gigs';

export const TITLE_BY_URL = {
  [URL_ARTISTS]: TITLE_ARTISTS,
  [URL_GIGS]: TITLE_GIGS
};

export const API_ARTISTS = 'api/users';
export const API_GIGS = 'api/projects';

export const API_BY_URL = {
  [URL_ARTISTS]: API_ARTISTS,
  [URL_GIGS]: API_GIGS
};

export const SORT_ATTRIBUTE = {
  NAME: 'name',
  TITLE: 'title',
  LOCATION: 'location',
  WAGE: 'wage',
  ARTIST_TYPE: 'artist_type',
  GIG_TYPE: 'type',
  BUDGET: 'budget',
  POSTED: 'created_at'
};

export const SORT_ATTRIBUTE_DISPLAY_NAME = {
  [SORT_ATTRIBUTE.NAME]: 'NAME',
  [SORT_ATTRIBUTE.TITLE]: 'TITLE',
  [SORT_ATTRIBUTE.LOCATION]: 'LOCATION',
  [SORT_ATTRIBUTE.WAGE]: 'WAGE',
  [SORT_ATTRIBUTE.ARTIST_TYPE]: 'TYPE',
  [SORT_ATTRIBUTE.GIG_TYPE]: 'TYPE',
  [SORT_ATTRIBUTE.BUDGET]: 'BUDGET',
  [SORT_ATTRIBUTE.POSTED]: 'POSTED'
}

export const SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc'
};

export const artistsSortAttributes = [
  SORT_ATTRIBUTE.NAME,
  SORT_ATTRIBUTE.LOCATION,
  SORT_ATTRIBUTE.WAGE,
  SORT_ATTRIBUTE.ARTIST_TYPE
];

export const gigsSortAttributes = [
  SORT_ATTRIBUTE.POSTED,
  SORT_ATTRIBUTE.TITLE,
  SORT_ATTRIBUTE.LOCATION,
  SORT_ATTRIBUTE.BUDGET,
  SORT_ATTRIBUTE.GIG_TYPE
];

export const SORT_ATTRIBUTE_BY_URL = {
  [URL_ARTISTS]: artistsSortAttributes,
  [URL_GIGS]: gigsSortAttributes
};

export const WAGE_MIN = 10;
export const WAGE_MAX = 251;
export const BUDGET_MIN = 100;
export const BUDGET_MAX = 5001;

export const DEFAULT_LABEL_BY_URL = {
  [URL_ARTISTS]: 'WAGE',
  [URL_GIGS]: 'BUDGET'
};

export const PRICE_BY_URL = {
  [URL_ARTISTS]: {
    min: WAGE_MIN,
    max: WAGE_MAX
  },
  [URL_GIGS]: {
    min: BUDGET_MIN,
    max: BUDGET_MAX
  }
};
