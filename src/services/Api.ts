import axios from "axios";

export function apiGetArticles() {
    return axios.get("http://localhost:3006/api/articles");
}

export function apiGetArticle(id) {
    return axios.get("http://localhost:3006/api/article/" + id);
}
