/**
 * Created by little_prince on 18/3/14.
 */
import ApiTool from './api';

let apiList = {
    url: 'www.ln26.com',
    list(params) {
        return ApiTool(this.url + '/Course/Api/Course/List',params);
    }
};

export default apiList;