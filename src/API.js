import axios from "axios";

export default class API {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getInstance() {
    return this.instance;
  }
}
