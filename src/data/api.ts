import axios, { AxiosResponse } from "axios";
import ArticleData from "../types/server/ArticleData";

const url = "https://api.spaceflightnewsapi.net/v3/articles";

// Requests all coaches from the server
export const getArticles = async (): Promise<void | ArticleData[]> => {
  try {
    const res: AxiosResponse<ArticleData[]> = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(`error in api.ts -> getArticles.\n`, { error });
  }
};
