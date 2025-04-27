import axios from "axios";

export const BASE_API = "https://randomuser.me/api";

export const getData = async (url: string, params: { [key: string]: number | string }) => {
    try {
        const response = await axios.get(BASE_API + url, {
            params,
        });
        return { data: response.data, status: "success" };
    } catch (error) {
        throw error
    }
};
