import qs from "qs";
import { CLIENT_ID, ROOT_URL } from "../config/config";
import axios from "axios";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  fetchFaves(token) {
    return axios.get(`${ROOT_URL}/3/account/me/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  upload(images, token) {
    const promises = Array.from(images).map((image) => {
      const formData = new FormData();
      formData.append("image", image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    });
    // takes an array of promises and waits for every one of those
    // inner promises to be resolved 
    return Promise.all(promises);
  },
};
