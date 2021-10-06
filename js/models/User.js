class User {
  constructor(user) {
    this.user = user;
  }

  async getUser() {
    try {
      const apiUrl = `https://api.github.com/users/${this.user}`;
      const apiUrlStarred = `https://api.github.com/users/${this.user}/starred`;
      const response = await fetch(apiUrl);
      const result = await response.json();

      this.avatar_url = result.avatar_url;
      this.followers = result.followers;
      this.following = result.following;
      this.public_repos = result.public_repos;
      this.html_url = result.html_url;
      this.starred_url = apiUrlStarred;
    } catch (error) {
      console.log(error);
    }
  }
}

export { User };
