import axios from 'axios';
import ENV_CONST from './environment/environmentDev';

const instanceBlogPost = axios.create({
    baseURL: ENV_CONST.baseURL
});

instanceBlogPost.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FOR_INSTANCE';

export default instanceBlogPost;