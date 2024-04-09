import axios from "axios";

export const getLeaderboard = async (setData, url) => {
    try {
        const response = await privateGateway.get(
            `${url}`, {
				maxBodyLength: Infinity,
			}
        );
        const message = response.data.response;
		setData(message)
    } catch (err) {
        const error = err;
        if (error?.response) {
            throw error;
        }
    }
};

export const privateGateway = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json"
    }
});