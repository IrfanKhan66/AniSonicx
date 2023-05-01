import axios from "axios";
import config from './config'

const graphql_api = axios.create({
    baseURL: config.ENDPOINTS.GRAPHQL,
});
const consumet_api = axios.create({
    baseURL: config.ENDPOINTS.CONSUMET,
});

const FETCH_FROM_GRAPHQL = {
    FETCH_TRENDING: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.TRENDING });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_POPULAR: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.POPULAR });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_RECENT: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.RECENT });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_ACTION: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.ACTION });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_ADVENTURE: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.ADVENTURE });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_DRAMA: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.DRAMA });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_UPCOMING: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.UPCOMING });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    },
    FETCH_AIRING_SCHEDULE: async () => {
        try {
            const res = await graphql_api.post('', { query: config.QUERIES.AIRING_SCHEDULE });
            return res.data.data.Page.media;
        } catch (err) {
            console.log(`ERROR IN API CALL :- ${err}`)
        }
    }
}

const FETCH_FROM_CONSUMET = {
    FETCH_INFO: async (animeID, subOrDub) => {
        try {
            const res = await consumet_api.get(config.API_CALLS.GET_INFO(animeID, subOrDub));
            return res.data;
        } catch (err) {
            console.log(`ERROR IN API :- ${err}`)
        }
    },
    FETCH_STREAMS: async (epID) => {
        try {
            const res = await consumet_api.get(config.API_CALLS.STREAM(epID));
            return res.data;
        } catch (err) {
            console.log(`ERROR IN API :- ${err}`)
        }
    }
}

export default { FETCH_FROM_GRAPHQL, FETCH_FROM_CONSUMET }