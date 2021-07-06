import './../styles/MainTopMenu.css';
import logo from './../images/Logo.svg'
import search from './../images/Search.svg'

const MainTopMenu = () => {
  return (
    <div className="MainTopMenu">
      <div className="MainTopMenuLeft">
          <div className="Logo-Breezzor">
              <img src={logo} />
          </div>
          <div className="MainTopMenuItems">
              <div className="Heading"><a>Пляжи</a></div>
              <div className="Heading"><a>Breezzor pass</a></div>
              <div className="Heading"><a>Впечатления</a></div>
              <div className="Heading"><a>Маршруты</a></div>
          </div>
      </div>
      <div className="MainTopMenuRight">
          <div className="top_menu_search">
              <img src={search} />
          </div>
          <div className="Buttons">
              <a>Вход</a>
          </div>
      </div>
    </div>
  );
}

export default MainTopMenu;
