import './../styles/MainTopMenu.css';
import logo from './../images/Logo.svg'
import search from './../images/Search.svg'

const MainTopMenu = () => {
  return (
    <div className="main_top_menu">
      <div className="top_menu_left_part">
          <div>
              <img src={logo} />
          </div>
          <div className="top_menu_left_part_two">
              <div className="top_menu_link">Пляжи</div>
              <div className="top_menu_link">Breezzor pass</div>
              <div className="top_menu_link">Впечатления</div>
              <div className="top_menu_link">Маршруты</div>
          </div>
      </div>
      <div className="top_menu_right_part">
          <div>
              <img src={search} />
          </div>
          <div className="top_menu_sign_in">
              <a>Вход</a>
          </div>
      </div>
    </div>
  );
}

export default MainTopMenu;
