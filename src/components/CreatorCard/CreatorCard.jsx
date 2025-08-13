import { Link } from "react-router"
import { User, Eye, SquarePen, SquareArrowOutUpRight } from "lucide-react"
import styles from "./CreatorCard.module.css"

export default function CreatorCard({ creator, index = 0, showActions = true }) {
  const animationDelay = index * 0.1

  return (
    <div
      className={styles.cardContainer}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {creator.imageURL ? (
            <img
              src={creator.imageURL}
              alt={creator.name}
              className={styles.image}
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextSibling.style.display = "flex"
              }}
            />
          ) : null}
          <div
            className={styles.placeholder}
            style={{ display: creator.imageURL ? "none" : "flex" }}
          >
            <User className={styles.placeholderIcon} />
          </div>
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{creator.name}</h3>

          <p className={styles.description}>{creator.description}</p>

          {showActions && (
            <div className={styles.actions}>
              <Link
                to={`/creator/${creator.id}`}
                className={`${styles.button} ${styles.buttonOutline}`}
              >
                <Eye className={styles.icon} />
                View
              </Link>

              <Link
                to={`/edit/${creator.id}`}
                className={`${styles.button} ${styles.buttonOutline}`}
              >
                <SquarePen className={styles.icon} />
                Edit
              </Link>

              <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                <SquareArrowOutUpRight className={styles.icon} />
                Visit
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
