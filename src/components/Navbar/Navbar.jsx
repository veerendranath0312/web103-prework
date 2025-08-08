import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { Sparkles, House, Plus, Sun, MoonStar } from "lucide-react"
import styles from "./Navbar.module.css"

function Navbar() {
  const location = useLocation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

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
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div
                className={styles.themeIcon}
                style={{ transform: `rotate(${isDark ? 180 : 0}deg)` }}
              >
                {isDark ? <MoonStar size={16} /> : <Sun size={16} />}
              </div>
            </button>

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
