import styles from "./searchbar.module.css";

export default function SearchBar() {
    return(
        <input type="text" placeholder="Search" className={styles.searchBar} /> 
    );
}