import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import stl from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default ProfilePage;
