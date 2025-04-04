import { useEffect, useState } from "react";
import { useStudioApi } from "../api/studioApi";
import DashboardItem from "../components/common/DashboardItem/DashboardItem";
import dashboardStyles from "../styles/Dashboard.module.css";
import { useSearchParams } from "react-router";

export default function Dashboard() {
    const [studios, setStudios] = useState([]);
    const { getAllStudios } = useStudioApi();
    const [queryParams] = useSearchParams();
    const city = queryParams.get("city")?.charAt(0).toUpperCase() + queryParams.get("city")?.slice(1) || "";

    useEffect(() => {
        if (studios.length === 0) {
            getAllStudios({ city }).then((data) => setStudios(data));
        }
    }, [getAllStudios, studios.length, city]);

    return (
        <main className="main">
            <div className={dashboardStyles.miniHeader}>
                <h1 className={dashboardStyles.infoHeading}>{city ? `Beauty salons in ${city}` : `All studios and salons`}</h1>
            </div>
            {!studios.length ? (
                <div className={dashboardStyles.emptyContainer}>
                    <h1>There aren't matching studios</h1>
                </div>
            ) : (
                <div className={dashboardStyles.listingContainer}>
                    {studios.map((studio, index) => (
                        <DashboardItem key={index} itemData={studio} />
                    ))}
                </div>
            )}
        </main>
    );
}
