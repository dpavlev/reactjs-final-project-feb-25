import { useEffect, useState } from "react";
import { useStudioApi } from "../api/studioApi";
import DashboardItem from "../components/common/DashboardItem/DashboardItem";
import dashboardStyles from "../styles/Dashboard.module.css";

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
            <div className={dashboardStyles.miniHeader}>
                <h1 className={dashboardStyles.infoHeading}>Beauty salons in city</h1>
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
