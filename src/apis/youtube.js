import axios from "axios";

const KEY = "AIzaSyAIQ7C_lr59xy6rfum9l8DFw24aTjiSuF4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
