import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCardSlider from './UI/MovieCardSlider/MovieCardSlider';

import film1Image from '../../assets/picture2/1.webp';
import film2Image from '../../assets/picture2/2.webp';
import film3Image from '../../assets/picture2/3.webp';
import film13Image from '../../assets/picture2/13.webp';

function Block1() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="block1">
            <h2>Новинки</h2>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <MovieCardSlider
                        imageUrl={film1Image}
                        title="Фильм 1"
                        rating="8.3"
                        ageRestriction="16"
                        premiere={true}
                    />
                    <MovieCardSlider
                        imageUrl={film2Image}
                        title="Фильм 2"
                        rating="8.1"
                        ageRestriction="16"
                    />
                    <MovieCardSlider
                        imageUrl={film3Image}
                        title="Фильм 3"
                        rating="7.9"
                        ageRestriction="18"
                    />
                    <MovieCardSlider
                        imageUrl={film13Image}
                        title="Фильм 4"
                        rating="8.5"
                        ageRestriction="12"
                    />
                </Slider>
            </div>
        </section>
    );
}

export default Block1;
