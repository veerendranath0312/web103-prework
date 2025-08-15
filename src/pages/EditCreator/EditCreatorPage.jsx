import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { toast } from "sonner"

import supabase from "../../lib/supabaseClient"
import { ArrowLeft, SquarePen, Save, Trash2 } from "lucide-react"
import styles from "../AddCreator/AddCreator.module.css" // Reusing the same styles

export default function EditCreator() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", Number(id))
        .single()

      if (error) {
        toast.error("Error fetching creator:", error.message)
      } else {
        setFormData(data)
      }
    }

    fetchCreator()
  }, [id])

  if (!formData) {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const { error } = await supabase
      .from("creators")
      .update(formData)
      .eq("id", Number(id))

    if (error) {
      toast.error("Error updating creator:", error.message)
    } else {
      toast.success("Creator updated successfully!")
      navigate(`/`)
    }

    setIsSubmitting(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to={`/`} className={styles.backButton}>
          <ArrowLeft className={styles.backIcon} />
          Back to Creator
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>Edit Creator</h1>
          <p className={styles.subtitle}>Update {formData.name}&apos;s information</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <SquarePen className={styles.cardIcon} />
              Update Details
            </h2>
          </div>
          <div className={styles.cardContent}>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                  to={`/creator/${id}`}
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
