import { AxiosResponse } from "axios";
import { ShorteningLinkDto } from "../interfaces/shorteningLinkDto";
import http from "./http"

export default class ShortLinkService {
	async getLink(link: string): Promise<ShorteningLinkDto> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/shorten?url=${link}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}