import { Link } from "react-router";

export default function DashboardItemService({ id, className, service, showMoreStyle }) {
    return (
        <li>
            <Link to={`/studioView/${id}`} className={className}>
                <span className={showMoreStyle ? showMoreStyle : ""}>{service.name}</span>
                <span>{service.price ? `${service.price} lv` : ""}</span>
            </Link>
        </li>
    );
}
