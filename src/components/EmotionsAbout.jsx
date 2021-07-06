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
            <div className="frame_group"></div>
            <div className="frame_text"></div>
          </div>
        </div>
      </div>
      <div>
        text
      </div>
    </div>
  );
}

export default EmotionsAbout;

