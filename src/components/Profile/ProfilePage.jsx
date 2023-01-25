import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsDataMyPosts={props.postsDataApp} />
    </div>
  );
}

export default ProfilePage;
