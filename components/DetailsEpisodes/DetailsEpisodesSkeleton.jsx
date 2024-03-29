import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1400}
    height={100}
    viewBox="0 0 1400 100"
    backgroundColor="var(--background2)"
    foregroundColor="var(--background3)"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="1400" height="83" />
  </ContentLoader>
)

export default MyLoader

