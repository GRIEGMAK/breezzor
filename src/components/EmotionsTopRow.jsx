import './../styles/EmotionsTopRow.css';

const EmotionsTopRow = () => {
  return (
    <div className="EmotionsTopRowContainer">
      <div className="EmotionsTopRow">
        <div className="EmotionsBreadcrumps">
          <div className="EmotionsBreadcrumpsLeft">
            <div>Франция</div>
            <div className="arrow-right"></div>
            <div>Париж</div>
            <div className="arrow-right"></div>
            <div>Туры</div>
            <div className="arrow-right"></div>
            <div>Своими руками</div>
          </div>
          <div className="EmotionsBreadcrumpsRight">
            <div className="item-share">
              <div className="share"></div>
              <div className="header_share">Поделится</div>
            </div>
            <div className="item-favorites">
              <div className="favorites"></div>
              <div className="header_favorites">В избранное</div>
            </div>
          </div>
        </div>
        <div className="title_header">
          Урок сыроделия 
        </div>
        <div className="EmotionsTabs">
          <div className="RoutsRibbonButtons">
            <div className="icon-overview"></div>
            <div className="title-overview">Обзор</div>
          </div>
          <div className="RoutsRibbonButtons">
            <div className="icon-organizer"></div>
            <div className="title-organizer">Организатор</div>
          </div>
          <div className="RoutsRibbonButtons">
            <div className="icon-information"></div>
            <div className="title-information">Информация</div>
          </div>
          <div className="RoutsRibbonButtons">
            <div className="icon-date"></div>
            <div className="title-date">Выбрать даты</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionsTopRow;
