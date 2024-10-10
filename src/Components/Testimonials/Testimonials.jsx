import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import TestimonialData from './TestimonialData'
import Card from './TestimonyCard'
const Testimonials = () => {

    const slider = useRef(null);
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

    const cardElements = TestimonialData.map(testimony => <Card key={testimony.name } {...testimony} />)
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
           {cardElements}
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
