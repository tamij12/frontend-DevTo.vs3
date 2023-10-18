const URL_FIREBASE = 'https://devto-97a68-default-rtdb.firebaseio.com/';
const buttonSearch = document.querySelector("#button-search");
const postsContainer = document.querySelector("#posts-main-search");

const test = [
  {
    cardId: 1,
    profile: "https://dbkpop.com/wp-content/uploads/2019/01/TXT_Beomgyu_Profile_Blue_Hour.jpg",
    name: "Karishma Shukla",
    date: "07/12/23",
    title: "300 + react Interview Questions",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 2,
    profile: "https://dbkpop.com/wp-content/uploads/2017/01/april_hello_summer_concept_chaewon_profile.jpg",
    name: "Luias",
    date: "07/12/23",
    title: "awesome things related to react hooks",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 3,
    profile: "http.jajjjaj.com",
    name: "Juan",
    date: "07/12/23",
    title: "gestor de paquetes que permite a las comunidades de JavaScript y Node.js publicar y compartir sus módulos de node con otras personas",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 4,
    profile: "https://dbkpop.com/wp-content/uploads/2017/01/april_hello_summer_concept_chaewon_profile.jpg",
    name: "Kjilo Shukla",
    date: "07/12/23",
    title: "React fue creado por Jordan Walke, un ingeniero de software de Facebook, quien liberó un primer prototipo de react llamado “FaxJS”.​",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 5,
    profile: "https://dbkpop.com/wp-content/uploads/2016/11/b1a4_cnu_1-2000x1341.jpg",
    name: "Karishma Shukla",
    date: "07/12/23",
    title: "react love",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 6,
    profile: "https://dbkpop.com/wp-content/uploads/2023/03/xin_aria_profile.jpg",
    name: "Alan",
    date: "07/12/23",
    title: "El núcleo del lenguaje javascript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 7,
    profile: "",
    name: "Ian Derek",
    date: "07/12/23",
    title: "react es una biblioteca de JavaScript declarativa, eficiente y flexible para construir interfaces de usuario. Permite componer IUs complejas de pequeñas y aisladas piezas de código llamadas “componentes”.",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 8,
    profile: "https://dbkpop.com/wp-content/uploads/2023/03/xin_aria_profile.jpg",
    name: "Park Chanyeol",
    date: "07/12/23",
    title: "javascript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
];

const renderPost = (postInfo) => {

  const ulPosts = document.querySelector("#posts-main-search");

  const name = document.createElement("a");
  name.textContent = postInfo.name;

  const date = document.createElement("a");
  date.textContent = postInfo.fechaNacimiento;

  const nameDateDiv = document.createElement("div");
  nameDateDiv.className = "name__date--container d-flex flex-column";

  nameDateDiv.appendChild(name);
  nameDateDiv.appendChild(date);

  const profile = document.createElement("img");
  profile.className = "aImg-card rounded-circle"

  profile.src = postInfo.profile;

  const spanImg = document.createElement("span");

  const aImg = document.createElement("a");


  const divContainerImgProfile = document.createElement("div");
  divContainerImgProfile.className = "card__comment--image--final d-flex";

  spanImg.appendChild(profile);
  aImg.appendChild(spanImg);
  divContainerImgProfile.appendChild(aImg);

  const cardPhotoName = document.createElement("div");
  cardPhotoName.appendChild(divContainerImgProfile);
  cardPhotoName.appendChild(nameDateDiv);

  const divCardTop = document.createElement("div");
  divCardTop.className = "card__top--content d-flex flex-row";
  divCardTop.appendChild(cardPhotoName);

  const liTag = document.createElement("li");
  liTag.className = "card__tag me-2";

  const ulCardTags = document.createElement("ul");
  ulCardTags.className = "card__tags d-flex flex-wrap list-unstyled";
  ulCardTags.appendChild(liTag);

  const h5CardTitle = document.createElement("h5");
  h5CardTitle.className = "card-title";
  h5CardTitle.textContent = postInfo.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(divCardTop);
  cardBody.appendChild(h5CardTitle);
  cardBody.appendChild(ulCardTags);

  const reactionImgFire = document.createElement("img");
  reactionImgFire.src =
    "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg";

  const spanReaction1 = document.createElement("span");
  spanReaction1.className = "reaction--item";
  spanReaction1.appendChild(reactionImgFire);

  const reactionImgRaisedHands = document.createElement("img");
  reactionImgRaisedHands.src =
    "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg";

  const spanReaction2 = document.createElement("span");
  spanReaction2.className = "reaction--item";
  spanReaction2.appendChild(reactionImgRaisedHands);

  const reactionImgExploding = document.createElement("img");
  reactionImgExploding.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction3 = document.createElement("span");
  spanReaction3.className = "reaction--item";
  spanReaction3.appendChild(reactionImgExploding);

  const reactionImgMultiUnicorn = document.createElement("img");
  reactionImgMultiUnicorn.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction4 = document.createElement("span");
  spanReaction4.className = "reaction--item";
  spanReaction4.appendChild(reactionImgMultiUnicorn);

  const reactionImgSparkleHeart = document.createElement("img");
  reactionImgSparkleHeart.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction5 = document.createElement("span");
  spanReaction5.className = "reaction--item";
  spanReaction5.appendChild(reactionImgSparkleHeart);

  const reactionsContainer = document.createElement("span");
  reactionsContainer.className = "multiple__reactions--container";

  reactionsContainer.appendChild(spanReaction1);
  reactionsContainer.appendChild(spanReaction2);
  reactionsContainer.appendChild(spanReaction3);
  reactionsContainer.appendChild(spanReaction4);
  reactionsContainer.appendChild(spanReaction5);

  const imgComments = document.createElement("img");
  imgComments.src = "/src/comments.svg";

  const spanCommentsNumber = document.createElement("span");
  spanCommentsNumber.className = "comments__number--card text-primary-emphasis";
  spanCommentsNumber.textContent = "8 comments";

  const commentsNumberCard = document.createElement("a");
  commentsNumberCard.className =
    "comments__number--cards d-flex align-items-center";

  commentsNumberCard.appendChild(imgComments);
  commentsNumberCard.appendChild(spanCommentsNumber);

  const imgBookmark = document.createElement("img");
  imgBookmark.src = "/src/bookmark.svg";

  const spanButtonReactionMenu = document.createElement("span");
  spanButtonReactionMenu.className = "button-reaction-menu";
  spanButtonReactionMenu.appendChild(imgBookmark);

  const pMinuteRead = document.createElement("p");
  pMinuteRead.className = "minute-read-font text-primary-emphasis";
  pMinuteRead.textContent = "3min read";

  const divLastMinute = document.createElement("div");
  divLastMinute.className = "last__minute__reaction d-flex";
  divLastMinute.appendChild(pMinuteRead);
  divLastMinute.appendChild(spanButtonReactionMenu);

  const aMainReactionContainer = document.createElement("a");
  aMainReactionContainer.className = "main__reaction--container";

  aMainReactionContainer.appendChild(reactionsContainer);
  aMainReactionContainer.appendChild(commentsNumberCard);
  aMainReactionContainer.appendChild(divLastMinute);

  const divMultipleReactionNumber = document.createElement("div");
  divMultipleReactionNumber.className = "multiple__reactions__number";
  divMultipleReactionNumber.appendChild(aMainReactionContainer);

  const divCard = document.createElement("div");
  divCard.className = "card";

  divCard.appendChild(cardBody);
  divCard.appendChild(divMultipleReactionNumber);

  const liPost = document.createElement("li");
  liPost.appendChild(divCard);

  ulPosts.appendChild(liPost);
};


const renderListPosts = (list) => {
  list.forEach((post) => {
    renderPost(post)
  });
};

const search = (word, listPosts) => {
  const result = listPosts.filter((e) => e.title.includes(word));

  console.log(result);
  renderListPosts(result);
};


const parserResponseFireBase = (response) => {
  const parsedResponse = []
      for(const key in response ){
          const element = {
              id: key,
              avatar: response[key].avatar,
              nombre: response[key].nombre,
              fechaNacimiento: response[key].fechaNacimiento,
              descripcion: response[key].descripcion
          };
          parsedResponse.push(element)
      };
  return parsedResponse;
};


const getInfo = async() => {
  try {
      // codigo que se ejecutara por default
      const url = URL_FIREBASE + '.json'
      const response = await fetch(url);
      console.log(response)
      if(response.status !== 201){
          const parsed = await response.json();
          const responseParsered = parserResponseFireBase(parsed);
        renderListPosts(responseParsered);
        }

      // throw new Error('este es un eror en el try')
  } catch (error) {
      // codigo a ejecutarse cuando hay un error
      console.error(error, 'xxxx')
  }
};



buttonSearch.addEventListener("click", (event) => {
  const inputSearch = document.querySelector("#input-search");
  const wordSearch = inputSearch.value;
  console.log(wordSearch);
  event.preventDefault();

  search(wordSearch, test);
});