import { Link } from "react-router";

export default function FeaturedSalon({ name, address, image, id, className, city }) {
    return (
        <Link to={`/studioView/${id}`}>
            <div className={className}>
                <img src={image} alt={name} />
                <div style={{ padding: "0 0 10px 10px" }}>
                    <h3>{name}</h3>
                    <p>
                        {address}, {city.charAt(0).toUpperCase() + city.slice(1)}
                    </p>
                </div>
            </div>
        </Link>
    );
}
