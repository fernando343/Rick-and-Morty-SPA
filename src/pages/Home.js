import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters content">
      ${characters.results.map(character => `
        <article class="character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <div class="character-info">
              <h2 >${character.name}</h2>
              <p class="${character.status.toLowerCase()} status">${character.status}</p>
            </div>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;