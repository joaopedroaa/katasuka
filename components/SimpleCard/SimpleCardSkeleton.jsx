import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './SimpleCardSkeleton.module.scss'

const SimpleCardSkeleton = props => (
  <ContentLoader
    speed={2}
    width={300}
    height={522}
    viewBox="0 0 300 522"
    backgroundColor="var(--background3)"
    foregroundColor="var(--background4)"

    className={styles.SimpleCardSkeleton}
    {...props}
  >
    <rect x="4" y="-1" rx="0" ry="0" width="297" height="400" />
    <rect x="5" y="410" rx="0" ry="0" width="194" height="39" />
    <rect x="3" y="468" rx="0" ry="0" width="145" height="34" />
  </ContentLoader>
)



export default SimpleCardSkeleton
