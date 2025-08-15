import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router"
import { toast } from "sonner"
import { ArrowLeft, User, Globe, Trash2, ExternalLink, SquarePen } from "lucide-react"

import supabase from "../../lib/supabaseClient"
import styles from "./ViewCreator.module.css"

export default function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", Number(id))
        .single()

      if (error) {
        toast.error("Error fetching creator:", error)
      } else {
        setCreator(data)
      }
    }

    fetchCreator()
  }, [id])

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", Number(id))

    if (error) {
      toast.error("Error deleting creator:", error.message)
    } else {
      toast.success("Creator deleted successfully!")
      navigate("/")
    }
  }

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

              <button
                onClick={handleDelete}
                className={`${styles.button} ${styles.buttonDestructive}`}
              >
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
