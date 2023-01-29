import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.profilePage.postsData}
        newPostText={props.state.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default ProfilePage;
