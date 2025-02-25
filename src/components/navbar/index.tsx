"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbar}>

                <div className={styles.left}>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.right}>
                    <div className={styles.icons}>
                        <Link href="https://www.linkedin.com/in/leung-han-xi-ba844b1a8" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        </Link>
                        <Link href="https://github.com/Lhanxi?tab=repositories" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        </Link>
                    </div>

                    <div className={styles.separator}></div>

                    <span className={styles.name}>Leung Han Xi</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
