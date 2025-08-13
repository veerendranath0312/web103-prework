import { useState } from "react"
import { SparklesIcon, UsersIcon, PlusIcon } from "lucide-react"
import { Link } from "react-router"

import CreatorCard from "../../components/CreatorCard/CreatorCard"
import styles from "./ShowCreators.module.css"

const creatorsData = [
  {
    id: "1",
    name: "Marques Brownlee",
    url: "https://www.youtube.com/@mkbhd",
    description:
      "MKBHD is one of the most respected tech reviewers on YouTube, known for his crisp video quality and in-depth analysis of the latest consumer technology. From smartphones to electric vehicles, his reviews help millions make informed purchasing decisions.",
    imageURL:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Emma Chamberlain",
    url: "https://www.youtube.com/@emmachamberlain",
    description:
      "Emma Chamberlain revolutionized YouTube with her authentic, unfiltered approach to lifestyle content. Her editing style and genuine personality have influenced countless creators and made her a voice for Gen Z.",
    imageURL:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Mr. Beast",
    url: "https://www.youtube.com/@mrbeast",
    description:
      "Jimmy Donaldson, known as Mr. Beast, has redefined what it means to be a content creator through his elaborate challenges, massive giveaways, and philanthropic efforts. His videos consistently break the internet and push the boundaries of YouTube content.",
    imageURL:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Simone Giertz",
    url: "https://www.youtube.com/@simonegiertz",
    description:
      'The "Queen of Shitty Robots," Simone Giertz combines engineering, humor, and creativity to build wonderfully useless inventions. Her content inspires makers worldwide and proves that failure can be just as entertaining as success.',
    imageURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Casey Neistat",
    url: "https://www.youtube.com/@caseyneistat",
    description:
      "Casey Neistat is a pioneering vlogger and filmmaker whose cinematic approach to daily life documentation has inspired a generation of creators. His work ethic, storytelling ability, and unique perspective on life make every video a mini-movie.",
    imageURL:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "ContraPoints",
    url: "https://www.youtube.com/@contrapoints",
    description:
      "Natalie Wynn creates elaborate video essays exploring philosophy, politics, and social issues through theatrical performances and stunning visuals. Her thoughtful analysis and artistic presentation make complex topics accessible and engaging.",
    imageURL:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  },
]

function ShowCreatorsPage() {
  const [creators, setCreators] = useState(creatorsData) // This should be replaced with actual data fetching logic

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
