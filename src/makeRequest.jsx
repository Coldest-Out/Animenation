import axios from "axios";

export const makeRequest = axios.create({
	baseURL : `http://localhost:5678/api`,
	headers : {
		Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
	},
});