import axios from "axios";

const KEY = "AIzaSyDaK27Sz59eZD6w5nLUEh8MMaijeSvz6vk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    },
});
