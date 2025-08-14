import { useState } from "react"
import { Link } from "react-router"
import { ArrowLeft, User, Globe, Trash2, ExternalLink, SquarePen } from "lucide-react"
import styles from "./ViewCreator.module.css"

export default function ViewCreator() {
  const [creator, setCreator] = useState({
    id: "1",
    name: "Marques Brownlee",
    url: "https://www.youtube.com/@mkbhd",
    description:
      "MKBHD is one of the most respected tech reviewers on YouTube, known for his crisp video quality and in-depth analysis of the latest consumer technology. From smartphones to electric vehicles, his reviews help millions make informed purchasing decisions.",
    imageURL:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  })

  if (!creator) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1 className={styles.notFoundTitle}>Creator not found</h1>
          <p className={styles.notFoundText}>
            The creator you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/" className={`${styles.button} ${styles.buttonPrimary}`}>
            <ArrowLeft className={styles.buttonIcon} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to Creators
        </Link>

        <div className={styles.card}>
          <div className={styles.heroSection}>
            {creator.imageURL ? (
              <img
                src={creator.imageURL}
                alt={creator.name}
                className={styles.heroImage}
                onError={(e) => {
                  e.target.style.display = "none"
                  e.target.nextSibling.style.display = "flex"
                }}
              />
            ) : null}
            <div
              className={styles.heroPlaceholder}
              style={{ display: creator.imageURL ? "none" : "flex" }}
            >
              <User className={styles.heroPlaceholderIcon} />
            </div>
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{creator.name}</h1>
              <div className={styles.heroSubtitle}>
                <Globe className={styles.heroIcon} />
                <span>Content Creator</span>
              </div>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>About</h2>
              <p className={styles.aboutText}>{creator.description}</p>
            </div>

            <div className={styles.actions}>
              <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                <ExternalLink className={styles.buttonIcon} />
                Visit Channel
              </a>

              <Link
                to={`/edit/${creator.id}`}
                className={`${styles.button} ${styles.buttonOutline}`}
              >
                <SquarePen className={styles.buttonIcon} />
                Edit Creator
              </Link>

              <button className={`${styles.button} ${styles.buttonDestructive}`}>
                <Trash2 className={styles.buttonIcon} />
                Delete Creator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
