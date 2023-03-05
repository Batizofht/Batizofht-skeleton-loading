import React from 'react'
import "./Skeleton.css"
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'
const KeletonProfile = ({ theme }) => {
    const classNametheme = theme || 'light'; 
  return (
    <div className={`skeleton1 ${classNametheme}`}>
      <div className='skeletonpro2'>
         <div>
            <SkeletonElement type="avatar" />
         </div>
         <div>
         <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
         </div>
      </div>
      <Shimmer />
    </div>
  )
}

export default KeletonProfile