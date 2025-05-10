import { API_PATH } from '@/shared/constants/api';
import HttpService from '@/shared/services/http.service';

export const getSignedUrl = async (fileName: string, filePath: string, contentType: string) => {
	const response = await HttpService.get(`${API_PATH.STORAGE.PRE_SIGNED_URL}`, { fileName, filePath, contentType });
	return response;
};
