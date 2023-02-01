const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-TEXT";

function profileReducer(state, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likesCount: 0,
        text: state.newPostText,
        url: "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg",
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export default profileReducer;
