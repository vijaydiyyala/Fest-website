import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './SimpleCard.css';
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const SimpleCard = ({ props }) => {
    const navigate = useNavigate()
    function handlePush(id) {
        navigate(`/gallery-${id}`)
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };
    return (
        <div className='memories'>
            <Slider {...settings}>
                {
                    props.map((data) => {
                        return (
                            <div className='single-card'>
                                <div className='card' onClick={() => handlePush(data.id)}>
                                    <img src={data.img} className='img' alt='error' />
                                    <h3>{data.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SimpleCard
