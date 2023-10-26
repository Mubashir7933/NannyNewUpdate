import React from 'react'
import Point1 from '../subSections/Point1'
import Point2 from  '../subSections/Point2'
import Point3 from '../subSections/Point3'
import Point4 from '../subSections/Point4'
import Point5 from '../subSections/Point5'
import Point6 from '../subSections/Point6'

function Points() {
  return (
    <div className='Points'>
        <div className='textContainer'>
        <h2>
        Duties of a Governess
        </h2>
        </div>

        <div className='pointsContainer'>
            <Point1/>
             <Point2/>
             <Point3/>          
             <Point4/>          
             <Point5/>          
             <Point6/>          
          
        </div>
    </div>
  )
}

export default Points