export default function FeaturedSalon({ name, address, image }) {
    return (
        <a href="#">
            <div className="salon-item">
                <img src={image} alt={name} />
                <div style={{ padding: "0 0 10px 10px" }}>
                    <h3>{name}</h3>
                    <p>{address}</p>
                </div>
            </div>
        </a>
    );
}
