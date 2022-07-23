const axios = require('axios');

module.exports = class AxiosInstance {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.github.com/users/takenet/repos?sort=created&direction=asc',
      headers: {
        Accept: 'application/json',
      },
    });
  }

  get = async () => {
    try {
      const { data } = await this.axiosInstance.get();
      return data;
    } catch (err) {
      return err;
    }
  };
};
