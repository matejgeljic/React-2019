import axios from 'axios';

export default axios.create({
    baseURL:  'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6f89cf0226bfee46ee16afc2b654581ff863cb1131f67fe5114a991f24f73964'
    }
});