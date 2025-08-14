import { useState } from "react"
import { Link } from "react-router"
import { Sparkles, Plus, ArrowLeft } from "lucide-react"
import styles from "./AddCreator.module.css"

export default function AddCreator() {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to Creators
        </Link>

        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            <span className={styles.badgeText}>Add New Creator</span>
          </div>
          <h1 className={styles.title}>Expand Your Universe</h1>
          <p className={styles.subtitle}>
            Add a new content creator to your personal collection
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <Plus className={styles.cardIcon} />
              Creator Details
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
                  placeholder="e.g., MKBHD, Simone Giertz"
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
                  placeholder="Describe what this creator is known for, their content style, and why you enjoy their work..."
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
                  placeholder="https://example.com/creator-image.jpg"
                  className={styles.input}
                />
                <p className={styles.helpText}>
                  Optional: Add a profile picture or image representing this creator
                </p>
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
                    <Plus className={styles.buttonIcon} />
                  )}
                  {isSubmitting ? "Adding..." : "Add Creator"}
                </button>
                <Link to="/" className={`${styles.button} ${styles.buttonOutline}`}>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
