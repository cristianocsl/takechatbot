module.exports = class ReposModel {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  getRepos = async () => {
    const data = await this.axiosInstance.get();
    return data;
  };
};
