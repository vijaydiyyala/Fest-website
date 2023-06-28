import React, { useState } from 'react'
import { file6 } from '../../Images/2014'
import './Gallery.css'
const Gallery6 = () => {
    const [slide, setSlide] = useState(0)

    const [openimg, setOpenimg] = useState(false)

    const handleOpen = (index) => {
        setSlide(index)
        setOpenimg(true)
    }
    const handlePrevious = () => {
        slide === 0 ? setSlide(file6.length - 1) : setSlide(slide - 1)
    }
    const handleNext = () => {
        slide === file6.length - 1 ? setSlide(0) : setSlide(slide + 1)
    }

    return (
        <div className={openimg && 'openimg'}>
            <h1 style={{ textAlign: 'center', color: '#19caf2' }}>EEL 2014</h1>
            {
                openimg &&
                <div className='slider'>

                    <div>
                        <button className='close' onClick={() => setOpenimg(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                        <button className='btn-prev' onClick={handlePrevious}><i class="fa-solid fa-circle-chevron-left"></i></button>
                        <button className='btn-next' onClick={handleNext}><i class="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                    <div className='slider-singleimg' >
                        <img src={file6[slide].src} alt='' />
                    </div>
                </div>
            }
            <div className='gallery'>
                {
                    file6.map((img, index) => {
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

export default Gallery6
