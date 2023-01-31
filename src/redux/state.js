let renderEntireTree;

let state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        likesCount: 15,
        text: "Это мой первый пост!!!",
        url: "https://shapka-youtube.ru/wp-content/uploads/2021/03/kartinka-na-avatarku-dlya-devushek.jpg",
      },
      {
        id: 2,
        likesCount: 57,
        text: "Привет, народ",
        url: "https://kartinkivsem.ru/img/vyzdoravlivaj/kartinki-vyzdoravlivaj-1.jpg",
      },
      {
        id: 3,
        likesCount: 2,
        text: "Клевый сайт",
        url: "https://iecards.ru/wp-content/uploads/images/stories/virtuemart/product/prikolnaya-kartinka-parnu-kotoryj-nravitsya.jpg",
      },
      {
        id: 4,
        likesCount: 93,
        text: "А тут есть харумамбуру??",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gLH4En3BnVSk8UxNmPTU5DhXTNdK5QJQBw&usqp=CAU",
      },
    ],
    newPostText: "lmsnsk",
  },
  messagesPage: {
    dialogsData: [
      {
        id: 1,
        name: "Петрович",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiJ6m6tZBcv9FLCkSh7pHAmpRLREJa8SiOw&usqp=CAU",
      },
      {
        id: 2,
        name: "Эммануэль",
        url: "https://i.pinimg.com/236x/f3/fe/1d/f3fe1dd69bf54aa4822e9aab096afc62.jpg",
      },
      {
        id: 3,
        name: "Жмых",
        url: "https://img2.akspic.ru/previews/3/9/7/9/6/169793/169793-kalmar-netfliks-rukav-golovnoj_ubor-astronomicheskij_obekt-500x.jpg",
      },
      {
        id: 4,
        name: "Франсуа",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20m9wKPaT9wvUrI4y8Wshme78G5FETBf_SQ&usqp=CAU",
      },
      {
        id: 5,
        name: "Колено",
        url: "https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg",
      },
    ],
    messagesData: [
      { id: 1, messageText: "Привет, чувак! Чокаво?" },
      { id: 2, messageText: "Сколько пиво вчера выпил? Признавайся, алкаш" },
      { id: 3, messageText: "Я завтра не выйду на работу, Семен Петрович" },
      { id: 4, messageText: "Пипец голова после вчерашнего болит:(" },
      { id: 5, messageText: "Я обожрался)))))))))" },
    ],
    newMessageText: "Новое сообщение",
  },
};

window.state = state;

export function addPost() {
  let newPost = {
    id: 5,
    likesCount: 0,
    text: state.profilePage.newPostText,
    url: "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";

  renderEntireTree(state);
}

export function updateNewPostText(newText) {
  state.profilePage.newPostText = newText;

  renderEntireTree(state);
}

export function addMessage() {
  let newMessage = { id: 5, messageText: state.messagesPage.newMessageText };
  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = "";

  renderEntireTree(state);
}

export function updateNewMessageText(newMessage) {
  state.messagesPage.newMessageText = newMessage;

  renderEntireTree(state);
}

export function subscribe(observer) {
  renderEntireTree = observer;
}

export default state;
