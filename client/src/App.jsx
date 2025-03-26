function App() {
    return (
        <>
            <header className="header">
                <a href="/views/index.html" className="header-logo-background">
                    <img src="/imgs/logo_rectangle.png" alt="" className="header-logo-size" />
                </a>
                <nav className="nav hide-on-small">
                    <div className="searchbar-container">
                        <i className="fa-solid fa-magnifying-glass magglass"></i>
                        <input className="searchbar" type="search" name="search" placeholder="Search" />
                    </div>
                    <a href="/views/login.html" className="button">
                        Login
                    </a>
                    <a href="/views/register.html" className="button">
                        Register
                    </a>
                    <a href="/views/register.html" className="button">
                        Logout
                    </a>
                    <a href="#" className="button">
                        Profile
                    </a>
                </nav>
            </header>
            <main className="main">
                <div className="image-background">
                    <div className="top-content">
                        <div className="form-container center-form">
                            <form className="form-content">
                                <h1 className="form-header">Запази час за красота</h1>
                                <div className="form-div">
                                    <i className="fa-solid fa-location-dot form-ico"></i>
                                    <select className="form-selector" name="test1" id="test1">
                                        <option value="test" selected disabled hidden>
                                            Избери град
                                        </option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                    </select>
                                </div>
                                <div className="form-div">
                                    <i className="fa-solid fa-spa form-ico"></i>
                                    <select className="form-selector" name="test2" id="test2">
                                        <option value="test" selected disabled hidden>
                                            Избери услуга
                                        </option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                        <option value="test">Test</option>
                                    </select>
                                </div>
                                <div className="datetime-container" onclick="document.querySelector('#date').showPicker()">
                                    <input type="datetime-local" name="date" id="date" className="datetime-input" onclick="focusDatetime()" />
                                    {/* <!-- TODO: Add functionality for adding date and time --> */}
                                </div>
                                <button className="form-submit-btn">Покажи салоните</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="info-panel">
                    <h1 className="info-heading">Запази си час за разкрасяване бързо и лесно</h1>
                    <div className="info-boxes">
                        <div className="info-div">
                            <img src="/imgs/beauty-saloon-grad.png" alt="" className="info-panel-img-size" />
                            Избирай между count салона с оценки
                        </div>
                        <div className="info-div">
                            <img src="/imgs/moon-grad.png" alt="" className="info-panel-img-size" />
                            Запази си час онлайн по всяко време от денонощието
                        </div>
                        <div className="info-div">
                            <img src="/imgs/check-grad.png" alt="" className="info-panel-img-size" />
                            count клиенти, които са си запази час и са останали доволни
                        </div>
                    </div>
                </div>
                <div className="special-salons main-content-display">
                    <h1 className="info-heading">Избрани салони</h1>
                    <div className="salon-items-div">
                        <a href="#">
                            <div className="salon-item">
                                <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small" alt="" />
                                <div style="padding: 0 0 10px 10px;">
                                    <h3>Студио за красота Test</h3>
                                    <p>София</p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="salon-item">
                                <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small" alt="" />
                                <div style="padding: 0 0 10px 10px;">
                                    <h3>Студио за красота Testasdasdasd</h3>
                                    <p>София</p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div className="salon-item">
                                <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small" alt="" />
                                <div style="padding: 0 0 10px 10px;">
                                    <h3>Студио за красота Test</h3>
                                    <p>София</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer-info-container">
                    <div className="footer-item">
                        <a href="/views/index.html" className="header-logo-background">
                            <img src="/imgs/logo_rectangle.png" alt="" className="header-logo-size" />
                        </a>
                        <a href="#" className="new-salon-btn">
                            Добави салон
                        </a>
                    </div>
                    <div className="footer-item-ul">
                        <h2>Бързи линкове</h2>
                        <ul>
                            <li>
                                <a href="#" className="footer-link">
                                    Вход
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Регистрация
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Повече информация
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy 2025 StyleGo Изготвено от Димитър Павлев (dimitar557) </p>
                </div>
            </footer>
        </>
    );
}

export default App;
