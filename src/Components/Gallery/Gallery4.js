import React, { useState } from 'react'
import './Gallery.css'
import { file4 } from '../../Images/2019'
const Gallery4 = () => {
    const [slide, setSlide] = useState(0)

    const [openimg, setOpenimg] = useState(false)

    const handleOpen = (index) => {
        setSlide(index)
        setOpenimg(true)
    }
    const handlePrevious = () => {
        slide === 0 ? setSlide(file4.length - 1) : setSlide(slide - 1)
    }
    const handleNext = () => {
        slide === file4.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }
    return (
        <div className={openimg && 'openimg'}>
            <h1 style={{ textAlign: 'center', color: '#19caf2' }}>PHASOR 2019</h1>
            {
                openimg &&
                <div className='slider'>

                    <div>
                        <button className='close' onClick={() => setOpenimg(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                        <button className='btn-prev' onClick={handlePrevious}><i class="fa-solid fa-circle-chevron-left"></i></button>
                        <button className='btn-next' onClick={handleNext}><i class="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                    <div className='slider-singleimg' >
                        <img src={file4[slide].src} alt='' />
                    </div>
                </div>
            }
            <div className='gallery'>
                {
                    file4.map((img, index) => {
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

export default Gallery4
