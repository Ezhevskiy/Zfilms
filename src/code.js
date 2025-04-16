
import React from 'react';
import './App.css';
// Assuming your CSS and image assets are properly set up in your project.

function App() {
  return (
    <div className="App">
      <head> {/* Moved head content here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Главная</title>
        <link rel="stylesheet" href="css/style.css" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="icon.png" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#fafafa" />
      </head>
      <div className="wrapper">
        <header className="header">
          <div className="navbar-logo">
            <a href="index.html">ZFILMS</a>
          </div>
          <input type="text" className="input-search" placeholder="Поиск" />
          <nav className="navbar">
            <ul>
              <li><a href="catalogs1.html">Фильмы</a></li>
              <li><a href="catalogs2.html">Аниме</a></li>
              <li><a href="catalogs3.html">Сериалы</a></li>
            </ul>
            <h1><a href="../pages/login.html">Вход</a></h1>
          </nav>
          <span></span>
        </header>
      </div>

      <main>
        <div className="block1">
          <div className="title1"><h1>Новинки</h1></div>
          <div className="cards1">
            <div className="card1">
              <a href="#">
                <div className="img1"><img src="picture2/1.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>

            <div className="card1">
              <a href="#">
                <div className="img1"><img src="picture2/2.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>

            <div className="card1">
              <a href="#">
                <div className="img1"><img src="picture2/3.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>
          </div>
        </div>

        <div className="block2">
          <div className="title2"><h1>Популярное</h1></div>
          <div className="cards2">
            <div className="card2">
              <a href="#">
                <div className="img1"><img src="picture2/13.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>

            <div className="card2">
              <a href="#">
                <div className="img1"><img src="picture2/14.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>

            <div className="card2">
              <a href="#">
                <div className="img1"><img src="picture2/15.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>
            <div className="card2">
              <a href="#">
                <div className="img1"><img src="picture2/16.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>
            <div className="card2">
              <a href="#">
                <div className="img1"><img src="picture2/1.webp" alt="" /></div>
                <div className="title">Фильм 1</div>
                <div className="text">Описание</div>
                <a href="#"><div className="catagory">Кол-во серий <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">Год <i className="far fa-eye"></i> </div></a>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>О нас</h6>
              <p className="text-justify">Текст</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Меню</h6>
              <ul className="footer-links">
                <li><a href="#2">Фильмы</a></li>
                <li><a href="#3">Аниме</a></li>
                <li><a href="#4">Сериалы</a></li>
              </ul>
            </div>

            <div className="links">
              <h6>Написать нам</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">Почта</a></li>
                <li><a href="http://scanfcode.com/contact/">Телеграм</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                <a href="#">Z films</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/*  Removed script tag to avoid rendering issue.*/}

    </div>
  );
}

export default App;
