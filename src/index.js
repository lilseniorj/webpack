const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $description = document.getElementById('description')
const $img2 = document.getElementById('img2');
const $text = document.getElementById('text')

const data = {
  name: "Jesus Vargas",
  nickname: "lilSeniorj",
  description: "Colombiano, actulmente viviendo en Montería, aun soy un Junior en el mercado gobal, aspiro a ser un Full Stack para trabajar y tener un gran empleo y disfrutar de los conocimientos que me ofrezca la vida y el trabajo.",
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

const desc = () =>{
  let description = document.createTextNode(data?.description);
  $description.appendChild(description)
}

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.ulr}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();
desc();
