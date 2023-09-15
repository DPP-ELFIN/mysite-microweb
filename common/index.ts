/** @format */

import axios from "axios";

export const getRes = (url: string) => axios.get(url);

export const a = (url: string) => axios.post(url);
