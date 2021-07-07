import './../styles/EmotionsAbout.css';
import MainImage from './../images/MainImage.jpg'
import img1 from './../images/Image (1).jpg'

const EmotionsAbout = () => {
  return (
    <div className="emotionsAbout">
      <div className="emotionsAboutImages">
        <div className="mainImage"><img src={MainImage}/></div>
        <div className="images">
          <div className="image"><img src={img1}/></div>
          <div className="image"><img src={img1}/></div>
          <div className="image"><img src={img1}/></div>
          <div className="image"><img src={img1}/></div>
          <div className="image"><img src={img1}/></div>
          <div className="frame">
            <div className="frame_icon"></div>
            <div className="frame_text">Все фото: 99</div>
          </div>
        </div>
      </div>
      <div>
        <div className="emotionsAboutTitle">
          Обзор тура:
        </div>
        <div className="emotionsAboutGrid">
          Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!
        </div>
      </div>
    </div>
  );
}

export default EmotionsAbout;

