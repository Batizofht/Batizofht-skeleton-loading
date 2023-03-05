import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer';
const SkeletonArticle = ({theme}) => {
    const classNametheme = theme || 'light'; 
  return (
    <div className={`skeleton1 ${classNametheme}`}>
        <div className='skeleton2'>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
        </div>
        <Shimmer />
    </div>
  )
}

export default SkeletonArticle