import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={413}
    viewBox="0 0 250 413"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="100" cy="100" r="100" /> 
    <rect x="31" y="207" rx="11" ry="11" width="134" height="22" /> 
    <rect x="31" y="254" rx="11" ry="11" width="133" height="35" /> 
    <rect x="31" y="316" rx="12" ry="12" width="55" height="22" /> 
    <rect x="99" y="316" rx="12" ry="12" width="55" height="22" />
  </ContentLoader>
)

export default Skeleton