import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
const Header = () => {
    const { user, isAuth } = useTypedSelector((state) => state.auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Авто США
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuth ? (<>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Продукти
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product/create">
                                    Додати продукт
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-success px-3 mx-2 rounded-pill text-light border-0" to="/profile">
                                    {user?.email}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-danger px-4 mx-2 rounded-pill text-light border-0" to="/logout">
                                    Вихід
                                </Link>
                            </li>
                        </ul>
                    </>
                    ) : (
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Реєстрація
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Вхід
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;