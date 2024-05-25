import React from 'react'

const EduacationCard = ({data}) => {
    const {title,content}  =  data
  return (
    <div class="card">
        <div class="info">
            <h3 class="title">{title}</h3>
            <p className='time-desc'>{content}</p>
        </div>
    </div>

  )
}

export default EduacationCard