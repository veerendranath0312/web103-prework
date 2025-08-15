import { useState, useEffect } from "react"
import { Link } from "react-router"
import { toast } from "sonner"
import { SparklesIcon, UsersIcon, PlusIcon } from "lucide-react"

import supabase from "../../lib/supabaseClient"
import CreatorCard from "../../components/CreatorCard/CreatorCard"
import styles from "./ShowCreators.module.css"

function ShowCreatorsPage() {
  const [creators, setCreators] = useState([]) // This should be replaced with actual data fetching logic

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*")
      if (error) {
        toast.error("Error fetching creators:", error.message)
      } else {
        setCreators(data)
      }
    }
    fetchCreators()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <SparklesIcon className={styles.badgeIcon} />
            <span className={styles.badgeText}>Discover Amazing Creators</span>
          </div>

          <h1 className={styles.title}>Your Creatorverse</h1>

          <p className={styles.subtitle}>
            Curate and explore the content creators that inspire you most. From tech
            reviewers to lifestyle vloggers, build your personal universe of creativity.
          </p>

          <Link to="/add" className={styles.addButton}>
            <PlusIcon className={styles.addButtonIcon} />
            Add New Creator
          </Link>
        </div>

        {creators.length === 0 ? (
          <div className={styles.emptyState}>
            <UsersIcon className={styles.emptyIcon} />
            <h2 className={styles.emptyTitle}>No creators yet</h2>
            <p className={styles.emptyDescription}>
              Start building your creatorverse by adding your favorite content creators.
              Whether they&apos;re on YouTube, Twitch, TikTok, or anywhere else!
            </p>
            <Link to="/add" className={styles.addButton}>
              <PlusIcon className={styles.addButtonIcon} />
              Add Your First Creator
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.statsSection}>
              <div className={styles.stats}>
                <UsersIcon className={styles.statsIcon} />
                <span>
                  {creators.length} creator{creators.length !== 1 ? "s" : ""} in your
                  collection
                </span>
              </div>
            </div>

            <div className={styles.grid}>
              {creators.map((creator, index) => (
                <CreatorCard key={creator.id} creator={creator} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ShowCreatorsPage
