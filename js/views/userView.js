import { elements } from "./base.js";

export const renderUser = (user) => {
  const markup = `
    <div class="profile-header">
      <img src="${user.avatar_url}" alt="Avatar">
      <a href="${user.html_url}" target="_blank">Visitar perfil</a>
    </div>   
    <ul class="profile-list">
      <li>Repositórios: ${user.public_repos}</li>
      <li>Seguidores: ${user.followers}</li>
      <li>Seguindo: ${user.following}</li>
    </ul> 
  `;

  elements.profile.insertAdjacentHTML("afterbegin", markup);
};
