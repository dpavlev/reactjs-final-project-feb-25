import { Link } from "react-router";

export default function FeaturedSalon({ name, address, image, id, className }) {
    return (
        <Link to={`/studioView/${id}`}>
            <div className={className}>
                <img src={image} alt={name} />
                <div style={{ padding: "0 0 10px 10px" }}>
                    <h3>{name}</h3>
                    <p>{address}</p>
                </div>
            </div>
        </Link>
    );
}
