import styles from './CardCarouselSkeleton.module.scss'
import SimpleCardSkeleton from "../SimpleCard/SimpleCardSkeleton"

const CardCarouselSkeleton = props => (
  <div className={styles.skeletonContainer}>
    <SimpleCardSkeleton />
    <SimpleCardSkeleton />
    <SimpleCardSkeleton />
    <SimpleCardSkeleton />
    <SimpleCardSkeleton />
    <SimpleCardSkeleton />
  </div >
)

export default CardCarouselSkeleton
