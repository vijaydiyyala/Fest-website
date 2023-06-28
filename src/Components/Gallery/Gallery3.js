import React, { useState } from 'react'
import './Gallery.css'
import { file3 } from '../../Images/2018'
const Gallery3 = () => {
    const [slide, setSlide] = useState(0)

    const [openimg, setOpenimg] = useState(false)

    const handleOpen = (index) => {
        setSlide(index)
        setOpenimg(true)
    }
    const handlePrevious = () => {
        slide === 0 ? setSlide(file3.length - 1) : setSlide(slide - 1)
    }
    const handleNext = () => {
        slide === file3.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }
    return (
        <div className={openimg && 'openimg'}>
            <h1 style={{ textAlign: 'center', color: '#19caf2' }}>PHASOR 2018</h1>
            {
                openimg &&
                <div className='slider'>

                    <div>
                        <button className='close' onClick={() => setOpenimg(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                        <button className='btn-prev' onClick={handlePrevious}><i class="fa-solid fa-circle-chevron-left"></i></button>
                        <button className='btn-next' onClick={handleNext}><i class="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                    <div className='slider-singleimg' >
                        <img src={file3[slide].src} alt='' />
                    </div>
                </div>
            }
            <div className='gallery'>
                {
                    file3.map((img, index) => {
                        return (
                            <div key={index} className='images'>
                                <img src={img.src} alt='error' onClick={() => handleOpen(index)} />
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Gallery3
