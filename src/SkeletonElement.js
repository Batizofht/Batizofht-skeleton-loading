import React from 'react'
import "./Skeleton.css"

const SkeletonElement = ({ type }) => {
    const classes = `SkeletonElement ${type}`;
  return (
    <div className={classes}></div>
  )
}

export default SkeletonElement