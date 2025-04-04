import { useEffect, useState } from "react";
import { useStudioApi } from "../api/studioApi";
import FeaturedSalon from "../components/common/FeaturedSalon";
import SearchForm from "../components/features/SearchForm";

export default function Home() {
    const { getAllStudios } = useStudioApi();
    const [studios, setStudios] = useState([]);
    const [studiosCount, setStudiosCount] = useState(0);

    useEffect(() => {
        if (studios.length > 0) return;
        getAllStudios().then((data) => {
            setStudiosCount(data.length);
            const sorted = data.sort((a, b) => Date.parse(b.dateCreated) - Date.parse(a.dateCreated)).slice(0, 4);
            setStudios(sorted);
        });
    }, [studios, getAllStudios]);

    return (
        <main className="main">
            <div className="image-background">
                <div className="top-content">
                    <div className="form-container center-form">
                        <SearchForm />
                    </div>
                </div>
            </div>
            <div className="info-panel">
                <h1 className="info-heading">Book a beauty appointment quickly and easily</h1>
                <div className="info-boxes">
                    <div className="info-div">
                        <img src="/images/beauty-saloon-grad.png" className="info-panel-img-size" />
                        Choose between {studiosCount} salons with ratings
                    </div>
                    <div className="info-div">
                        <img src="/images/moon-grad.png" className="info-panel-img-size" />
                        Book an appointment online at any time of the day
                    </div>
                    <div className="info-div">
                        <img src="/images/check-grad.png" className="info-panel-img-size" />
                        Many customers have booked an appointment and have been satisfied
                    </div>
                </div>
            </div>
            <div className="special-salons main-content-display">
                <h1 className="info-heading">New salons</h1>
                <div className="salon-items-div">
                    {studios.map((studio, index) => (
                        <FeaturedSalon key={index} name={studio.studioName} address={studio.studioAddress} image={studio.studioImg} id={studio._id} />
                    ))}
                </div>
            </div>
        </main>
    );
}
