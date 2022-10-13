const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
  name: "Jesus Vargas",
  nickname: "lilSeniorj",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/SeniorJOfficial",
      username: "",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/lilseniorj/",
      username: "",
    },
  ],
  links: [
    {
      name: "Primer Video Juego",
      url: "https://lilseniorj.github.io/javascript-practico-videogames/",
      color: "red",
      emoji: "🎮",
    },
    {
      name: "Cursos",
      url: "https://platzi.com/escuela/escuela-web/",
      color: "yellow",
      emoji: "💬",
    },
    {
      name: "Precio de Platzi",
      url: "https://platzi.com/precios/",
      color: "blue",
      emoji: "💵",
    },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links.map((network) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
            <span>${link.emoji}</span>
          </div>`
  }).join('');
  let newItem = document.createElement('section');
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();