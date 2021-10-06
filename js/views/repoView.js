import { elements } from "./base.js";

export const renderRepositories = (repositories) => {
  let markup = "";

  repositories.forEach((repo) => {
    markup += `
      <a href="${repo.html_url}" class="repo-url" target="_blank">
        ${repo.name}
      </a>
    `;
  });

  elements.repos.innerHTML = markup;
};
