import FeaturedSalon from "../components/common/FeaturedSalon";
import SearchForm from "../components/features/SearchForm";

const featuredSalons = [
    {
        name: "Студио за красота Test",
        address: "София",
        image: "https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small"
    },
    {
        name: "Студио за красота Testasdasdasd",
        address: "София",
        image: "https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small"
    },
    {
        name: "Студио за красота Test",
        address: "София",
        image: "https://images.fresha.com/locations/location-profile-images/643848/2160592/e90e3cd2-04d2-4702-a946-6c0e38af9ab4.jpg?className=width-small"
    }
];

export default function Home() {
    return (
        <>
            <div className="image-background">
                <div className="top-content">
                    <div className="form-container center-form">
                        <SearchForm />
                    </div>
                </div>
            </div>
            <div className="info-panel">
                <h1 className="info-heading">Запази си час за разкрасяване бързо и лесно</h1>
                <div className="info-boxes">
                    <div className="info-div">
                        <img src="/images/beauty-saloon-grad.png" className="info-panel-img-size" />
                        Избирай между count салона с оценки
                    </div>
                    <div className="info-div">
                        <img src="/images/moon-grad.png" className="info-panel-img-size" />
                        Запази си час онлайн по всяко време от денонощието
                    </div>
                    <div className="info-div">
                        <img src="/images/check-grad.png" className="info-panel-img-size" />
                        count клиенти, които са си запази час и са останали доволни
                    </div>
                </div>
            </div>
            <div className="special-salons main-content-display">
                <h1 className="info-heading">Избрани салони</h1>
                <div className="salon-items-div">
                    {featuredSalons.map((salon, index) => (
                        <FeaturedSalon key={index} name={salon.name} address={salon.address} image={salon.image} />
                    ))}
                </div>
            </div>
        </>
    );
}
