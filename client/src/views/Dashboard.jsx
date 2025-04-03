import { useEffect, useState } from "react";
import { useStudioApi } from "../api/studioApi";
export default function Dashboard() {
    const [studios, setStudios] = useState([]);
    const { getAllStudios } = useStudioApi();
    useEffect(() => {
        if (studios.length === 0) {
            getAllStudios().then((data) => setStudios(data));
        }
    }, [getAllStudios, studios]);

    return (
        <main className="main">
            <div className="mini-header">
                <h1 className="info-heading">Салони за красота в city</h1>
            </div>
            <div className="listing-container">
                <div className="list-item">
                    <div>
                        <a href="#">
                            <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?class=width-small" alt="" className="item-img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <div className="item-header">
                            <a href="#" className="items-link">
                                <h3 className="item-heading">Студио за красота Test</h3>
                            </a>
                            <p style={{ color: "grey", borderBottom: "solid thin lightgray", paddingBottom: "5px" }}>София</p>
                        </div>
                        <ul>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list-item">
                    <div>
                        <a href="#">
                            <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?class=width-small" alt="" className="item-img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <div className="item-header">
                            <a href="#" className="items-link">
                                <h3 className="item-heading">Студио за красота Testасота TestСтудио за красота Test</h3>
                            </a>
                            <p style={{ color: "grey", borderBottom: "solid thin lightgray", paddingBottom: "5px" }}>София</p>
                        </div>
                        <ul>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list-item">
                    <div>
                        <a href="#">
                            <img src="https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?class=width-small" alt="" className="item-img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <div className="item-header">
                            <a href="#" className="items-link">
                                <h3 className="item-heading">Студио за красота </h3>
                            </a>
                            <p style={{ color: "grey", borderBottom: "solid thin lightgray", paddingBottom: "5px" }}>София</p>
                        </div>
                        <ul>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-link">
                                    <span className="item-name">Test item</span>
                                    <span className="item-price">Test price</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
