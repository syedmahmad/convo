import Store from '../store';
import axios from 'axios';

class ServiceCalls {
  static headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  static get(path: string, data: any = null, sendToken: boolean = false) {
    const url = process.env.NEXT_PUBLIC_API_ORIGIN + path;
    const headers = ServiceCalls.headers;
    return axios({
      method: 'GET',
      url: url,
      headers: headers,
    })
      .then((res:any) => {
        return res;
      })
      .catch((err:any) => {
        return err.response;
      });
  }
}

export default ServiceCalls;
