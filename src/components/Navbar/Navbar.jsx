import { Link, useLocation } from "react-router"
import { Sparkles, House, Plus } from "lucide-react"
import styles from "./Navbar.module.css"

function Navbar() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Sparkles />
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>Creatorverse</h1>
              <p className={styles.logoSubtitle}>Discover amazing creators</p>
            </div>
          </Link>

          <div className={styles.navLinks}>
            <Link
              to="/"
              className={`${styles.navLink} ${
                location.pathname === "/" ? styles.active : styles.inactive
              }`}
            >
              <House size={16} />
              Creators
            </Link>

            <Link
              to="/add"
              className={`${styles.navLink} ${
                location.pathname === "/add" ? styles.active : styles.inactive
              }`}
            >
              <Plus size={16} />
              Add Creator
            </Link>
          </div>

          <div className={styles.actions}>
            <Link to="/add" className={styles.mobileAddButton}>
              <Plus size={16} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
