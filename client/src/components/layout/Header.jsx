export default function Header() {
    return (
        <header className="header">
            <a href="/views/index.html" className="header-logo-background">
                <img src="/images/logo_rectangle.png" alt="StyleGo" className="header-logo-size" />
            </a>
            <nav className="nav hide-on-small">
                {/* <div className="searchbar-container">
                    <i className="fa-solid fa-magnifying-glass magglass"></i>
                    <input className="searchbar" type="search" name="search" placeholder="Search" />
                </div> */}
                <a href="/views/login.html" className="button">
                    Login
                </a>
                <a href="/views/register.html" className="button">
                    Register
                </a>
                <a href="#" className="button">
                    Profile
                </a>
                <a href="/views/register.html" className="button">
                    Logout
                </a>
            </nav>
        </header>
    );
}
