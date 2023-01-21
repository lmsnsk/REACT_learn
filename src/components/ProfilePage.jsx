function ProfilePage() {
  return (
    <div className="main-content">
      <div>
        <img
          className="main-content-img"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
      </div>
      <div className="profile">
        <img
          className="content-img"
          src="https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg"
        />
        <div className="description">
          <h2>Это луна</h2>
          <p>Здесь всякое описание этой луны</p>
          <p>Ей очень много лет</p>
          <p>И у нее нет телефона</p>
        </div>
      </div>
      <div className="posts">
        <p className="post-title">My posts</p>
        <div>
          <form action="">
            <textarea
              className="input"
              name="enterpost"
              id="enterpost"
              cols="70"
              rows="3"
              placeholder="Ваши новости..."
            ></textarea>
            <button className="btn-h" type="submit"></button>
            <button className="btn" type="submit">
              Отправить
            </button>
          </form>
          <ul>
            <li>Привет, почему так грустно?</li>
            <li>Есть кто дома?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
