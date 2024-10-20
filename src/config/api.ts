import axios from 'axios';
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios';
import Config from 'react-native-config';

const ResponseInterceptor = (response: AxiosResponse) => {
	if (response.data.error) {
		return Promise.reject(response.data.error);
	}

	return Promise.resolve(response);
};

const serverClient = axios.create({
	baseURL: Config.API_URL
});

serverClient.interceptors.response.use(ResponseInterceptor);

export default serverClient;
