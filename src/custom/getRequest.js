import axios from "axios";
import { _API } from "../api/api";

export const getRequest = (url) => {
    const response = axios.get(`${_API}` + url);
    return response;
};