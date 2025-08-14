import { useState, useEffect } from "react"
import { Link } from "react-router"
import { ArrowLeft, SquarePen, Save, Trash2 } from "lucide-react"
import styles from "../AddCreator/AddCreator.module.css" // Reusing the same styles

export default function EditCreator() {
  const [creator, setCreator] = useState({
    id: "1",
    name: "Marques Brownlee",
    url: "https://www.youtube.com/@mkbhd",
    description:
      "MKBHD is one of the most respected tech reviewers on YouTube, known for his crisp video quality and in-depth analysis of the latest consumer technology. From smartphones to electric vehicles, his reviews help millions make informed purchasing decisions.",
    imageURL:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  })
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (creator) {
      setFormData({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL || "",
      })
    }
  }, [creator])

  if (!creator) {
    return (
      <div
        className={styles.container}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "1rem",
            }}
          >
            Creator not found
          </h1>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
            The creator you&apos;re trying to edit doesn&apos;t exist.
          </p>
          <Link to="/" className={`${styles.button} ${styles.buttonPrimary}`}>
            <ArrowLeft className={styles.buttonIcon} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleChange = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to={`/creator/${creator.id}`} className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to Creator
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>Edit Creator</h1>
          <p className={styles.subtitle}>Update {creator.name}&apos;s information</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <SquarePen className={styles.cardIcon} />
              Update Details
            </h2>
          </div>
          <div className={styles.cardContent}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={`${styles.label} ${styles.required}`}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Creator's name"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="url" className={`${styles.label} ${styles.required}`}>
                  Channel URL
                </label>
                <input
                  id="url"
                  name="url"
                  type="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/@creator"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label
                  htmlFor="description"
                  className={`${styles.label} ${styles.required}`}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what this creator is known for..."
                  className={styles.textarea}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="imageURL" className={styles.label}>
                  Image URL (optional)
                </label>
                <input
                  id="imageURL"
                  name="imageURL"
                  type="url"
                  value={formData.imageURL}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className={styles.input}
                />
              </div>

              <div className={styles.actions}>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className={styles.loadingSpinner} />
                  ) : (
                    <Save className={styles.buttonIcon} />
                  )}
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>

                <Link
                  to={`/creator/${creator.id}`}
                  className={`${styles.button} ${styles.buttonOutline}`}
                >
                  Cancel
                </Link>

                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonDestructive}`}
                  style={{
                    background: "var(--destructive)",
                    color: "var(--primary)",
                    padding: "0.75rem",
                  }}
                >
                  <Trash2 className={styles.buttonIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
