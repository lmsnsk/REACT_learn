import MyPosts from "./MyPosts/MyPosts";
import stl from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div>
      <div>
        <img
          className={stl.maincontentimg}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="main-content-img"
        />
      </div>
      <div className={stl.profile}>
        <img
          className={stl.contentimg}
          src="https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg"
          alt="content-img"
        />
        <div className={stl.description}>
          <h2>Это луна</h2>
          <p className={stl.decrtext}>Здесь всякое описание этой луны</p>
          <p className={stl.decrtext}>Ей очень много лет</p>
          <p className={stl.decrtext}>И у нее нет телефона</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}

export default ProfilePage;
