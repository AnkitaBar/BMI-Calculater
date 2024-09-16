import React, { useMemo, useState } from 'react'
import "./Bmi.css"

const Bmi = () => {
    const [height, setHeight] = useState(180);
    const [weight,setweight] = useState(70)

    function onWeightChange (e) {
        setweight(e.target.value)
    }
    function onHeightChange (e) {
        setHeight(e.target.value)
        }

        const output = useMemo(() => {
            const calculateHeight = height/100;
            return (weight/(calculateHeight*calculateHeight)).toFixed(1)
            }, [height, weight])
        
  return (
    <div>
      <h>BMI Calculater</h>
      <div className='input-section'>
        <p className='slider-section'>Weight : {weight}kg</p>
        <input type="range" min="40" max="200" className='input-slider ' onChange={onWeightChange}/>
        <p className='slider-section'>Height : {height}cm</p>
        <input type="range" min="140" max="250" className='input-slider ' onChange={onHeightChange}/>
      </div>
      <div className='output-section'> 
      <p>Your BMI</p>
      <p className='output'>{output}</p>
      
      </div>
    </div>
  )
}

export default Bmi
