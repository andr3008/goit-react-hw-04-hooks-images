import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24155040-09394a9154ec72d89d619259b";

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};
export default apiService;
