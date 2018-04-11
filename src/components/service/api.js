/**
 * Created by little_prince on 18/3/14.
 */
import _axios from 'axios';
import _qs from 'qs';

function  apiTool(url, params = {}, method = 'post') {
    // 传参格式化
    let paramsFormat = _qs.stringify(params);

    return _axios({
        method: method,
        url: url,
        data: paramsFormat,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }

    });
}

export default apiTool;