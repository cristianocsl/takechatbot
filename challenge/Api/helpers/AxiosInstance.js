const axios = require('axios');

module.exports = class AxiosInstance {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
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
