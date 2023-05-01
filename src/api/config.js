const QUERIES = {
  TRENDING: `query {
        Page(page: 1,perPage: 8) {
        media(type: ANIME,sort : TRENDING_DESC) {
        id
        title{
        romaji
        english
        }
        description
        bannerImage
        coverImage{
        large
        medium
        }
        averageScore
        popularity
        trending
        status
        type
        format
        genres
        }
        }
        }`,
  POPULAR: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,sort : POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
      extraLarge
    large
    }
    description
    averageScore
    popularity
    bannerImage
    trailer {
      id
    }
    }
    }
    }`,
  RECENT: `query {
      Page(page: 1, perPage: 10) {
        media(status: RELEASING, sort: POPULARITY_DESC, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            extraLarge
          }
          genres
          averageScore
          format
        }
      }
    }
    
      
      `,
  ACTION: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Action", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    popularity
    type
    status
    genres
    description
    }
    }
    }`,
  DRAMA: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Drama", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    popularity
    type
    status
    genres
    description
    }
    }
    }`,
  ADVENTURE: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Adventure", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    popularity
    type
    status
    genres
    description
    }
    }
    }`,
  UPCOMING: `query {
      Page {
        media(status: NOT_YET_RELEASED, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            extraLarge
            medium
          }
          startDate {
            year
            month
            day
          }
          favourites
          status
        }
      }
    }
    `,
  AIRING_SCHEDULE: `query {
    Page {
      media:airingSchedules(notYetAired: true) {
        id
        episode
        media {
          id
          format
          coverImage {
            extraLarge
            large
            medium
          }
          favourites
          description
          title {
            romaji
            english
            native
          }
        }
        airingAt
      }
    }
  }
  `
}

const API_CALLS = {
  GET_INFO: (id, dub) => `info/${id}?dub=${dub}`,
  STREAM: (id) => `watch/${id}`
}

const ENDPOINTS = {
  GRAPHQL: import.meta.env.VITE_ANILIST_GRAPHQL_URL,
  CONSUMET: import.meta.env.VITE_ANILIST_CONSUMET_URL
}

export default { QUERIES, API_CALLS, ENDPOINTS }