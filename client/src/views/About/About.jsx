import styles from "./About.module.css";

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.contentWrapper}>
                <h1>About</h1>
                <div className={styles.infoBoxesWrapper}>
                    <div className={styles.infoBox}>
                        <h2>For Users</h2>
                        <p>
                            StyleGo makes finding and booking beauty services simple. Browse through our collection of professional salons and
                            studios, compare services and prices, and book appointments online with just a few clicks.
                        </p>
                        <p>Our platform offers:</p>
                        <ul>
                            <li>Easy search by city location</li>
                            <li>Detailed salon profiles with services and pricing</li>
                            <li>Convenient online booking system</li>
                            <li>Personalized user profiles to track your appointments</li>
                        </ul>
                        <p>Join StyleGo today and transform your beauty routine!</p>
                    </div>
                    <div className={styles.infoBox}>
                        <h2>For Businesses</h2>
                        <p>
                            Partner with StyleGo to expand your salon's online presence and attract new clients effortlessly. Our platform provides
                            beauty professionals with powerful tools to showcase services and manage bookings.
                        </p>
                        <p>Business benefits include:</p>
                        <ul>
                            <li>Free profile creation and customization</li>
                            <li>Complete control over your service listings and pricing</li>
                            <li>Simple appointment management system</li>
                            <li>Increased visibility to potential customers in your area</li>
                        </ul>
                        <p>Register your studio today and watch your business grow!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
