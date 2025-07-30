import styles from "./appheader.module.css";
import SearchBar from "./SearchBar/searchbar";
import DateTime from "./DateTime/datetime";

export default function AppHeader() {
    return (
        <div className={styles.header_holder}>
            <header className="grid grid-cols-3 items-center justify-between w-full">
                <DateTime />
                <SearchBar />
            </header>
        </div>
    );
}