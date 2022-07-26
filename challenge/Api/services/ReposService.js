module.exports = class ReposService {
  constructor(model) {
    this.reposModel = model;
  }

  getRepos = async () => {
    const repos = await this.reposModel.getRepos();
    if (repos.name === 'AxiosError') throw new Error('Não foi possível obter os repositórios');

    const filteredRepos = repos.filter((repo) => repo.language === 'C#').slice(0, 5);
    const formatRepos = filteredRepos.map(
      ({
        language, full_name: fullName, description, created_at: createdAt,
      }) => ({
        language, fullName, description, createdAt,
      }),
    );
    return formatRepos;
  };
};
