import axios from "axios";
import { FAKE_POST_DATA } from "../constants/fakePost";

export const postService  = () => {
  const getPosts = async(): Promise<typeof FAKE_POST_DATA> => {
    /* given api doesn't answer with current network situation,
           So using Promise to give fake answer instead of api is recommended,
            if connection to api is neccessary
            let me know to run a backend server instead of given api
            code example of using api by axios:
            */
    // return await axios.get("https://jsonplaceholder.typicode.com/posts")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(FAKE_POST_DATA);
      }, 500);
    });
  };
  return {
    getPosts
  }
};
