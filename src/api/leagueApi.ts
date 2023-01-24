import axios from 'axios';

const baseURL = 'https://apiv3.apifootball.com';

const leagueApi = axios.create({baseURL});

export default leagueApi;
