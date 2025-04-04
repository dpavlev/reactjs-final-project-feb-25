import { useEffect, useState } from "react";
import { useStudioApi } from "../api/studioApi";
import FeaturedSalon from "../components/common/FeaturedSalon";
import SearchForm from "../components/features/SearchForm";
import indexStyles from "../styles/Index.module.css";

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
            <div className={indexStyles.imageBackground}>
                <div className={indexStyles.topContent}>
                    <div className={`${indexStyles.formContainer} ${indexStyles.centerForm}`}>
                        <h1 className={indexStyles.infoHeading}>Welcome to StyleGo. Browse many beauty salons and studios!</h1>
                        <SearchForm />
                    </div>
                </div>
            </div>
            <div className={indexStyles.infoPanel}>
                <h1 className={indexStyles.infoHeading}>Book a beauty appointment quickly and easily</h1>
                <div className={indexStyles.infoBoxes}>
                    <div className={indexStyles.infoDiv}>
                        <img src="/images/beauty-saloon-grad.png" className={indexStyles.infoPanelImgSize} />
                        Choose between {studiosCount} professional beauty salons and studios
                    </div>
                    <div className={indexStyles.infoDiv}>
                        <img src="/images/moon-grad.png" className={indexStyles.infoPanelImgSize} />
                        Book an appointment online at any time of the day
                    </div>
                    <div className={indexStyles.infoDiv}>
                        <img src="/images/check-grad.png" className={indexStyles.infoPanelImgSize} />
                        Many customers have booked an appointment and have been satisfied
                    </div>
                </div>
            </div>
            <div className={`${indexStyles.specialSalons} ${indexStyles.mainContentDisplay}`}>
                <h1 className={indexStyles.infoHeading}>New salons</h1>
                <div className={indexStyles.salonItemsDiv}>
                    {studios.map((studio, index) => (
                        <FeaturedSalon
                            key={index}
                            name={studio.studioName}
                            address={studio.studioAddress}
                            image={studio.studioImg}
                            id={studio._id}
                            className={indexStyles.salonItem}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
