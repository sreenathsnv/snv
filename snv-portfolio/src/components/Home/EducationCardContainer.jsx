import React from 'react'
import EduacationCard from './EduacationCard'

const EducationCardContainer = () => {

    const CardData = [
        {
            title:"Bsc Mathematics",
            content:"Mahatma Gandhi College,Kannur University",
        },
        {
            title:"Master Of Computer Appications",
            content:"Christ Deemed to be University,Banglore",
        },
    ]
  return (
    <div className="time-line-container">
        <div class="timeline">
            <div class="outer">
                <div class="card">
                    {
                        CardData.map((data,i)=>(
                            <EduacationCard data={data} key={i}/>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationCardContainer