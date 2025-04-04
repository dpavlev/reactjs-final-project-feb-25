import { Link } from "react-router";
import styles from "./DashboardItem.module.css";
import DashboardItemService from "../DashboardItemService";

export default function DashboardItem({ itemData }) {
    return (
        <div className={styles.listItem}>
            <div>
                <Link to={`/studioView/${itemData._id}`} className={styles.imgLink}>
                    <img src={itemData.studioImg} alt={itemData.studioName} className={styles.dashboardImg} />
                </Link>
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.itemHeader}>
                    <Link to={`/studioView/${itemData._id}`} className={styles.itemsLink}>
                        <h2 className={styles.itemHeading}>{itemData.studioName}</h2>
                    </Link>
                    <p className={styles.itemAddress}>
                        {itemData.studioAddress}, {itemData.studioCity.charAt(0).toUpperCase() + itemData.studioCity.slice(1)}
                    </p>
                </div>
                <ul>
                    {itemData.services.slice(0, 3).map((service, index) => (
                        <DashboardItemService key={index} id={itemData._id} className={styles.itemsLink} service={service} />
                    ))}
                    {itemData.services.length > 3 && (
                        <DashboardItemService
                            id={itemData._id}
                            className={styles.itemsLink}
                            showMoreStyle={styles.showMore}
                            service={{ name: "Show more..." }}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}
