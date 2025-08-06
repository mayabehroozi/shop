'use client';

import { Carousel } from 'antd';
import { useState } from 'react';
import styles from './Home.module.css';

const images = [
    {
        desktop: '/images/slide1-desktop.jpg',
        mobile: '/images/slide1-mobile.jpg',
    },
    {
        desktop: '/images/slide2-desktop.jpg',
        mobile: '/images/slide2-mobile.jpg',
    },
    {
        desktop: '/images/slide3-desktop.jpg',
        mobile: '/images/slide3-mobile.jpg',
    },
];

const HomeSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className={styles.sliderWrapper}>
            <Carousel
                autoplay
                autoplaySpeed={4000}
                dots
                arrows
                pauseOnHover
                beforeChange={(_, next) => setActiveSlide(next)}
            >
                {images.map((img, index) => (
                    <div key={index} className={styles.slide}>
                        <picture>
                            <source srcSet={img.desktop} media="(min-width: 768px)" />
                            <img
                                src={img.mobile}
                                alt={`slide-${index}`}
                                className={styles.slideImage}
                                fetchPriority="high"
                            />
                        </picture>

                        {/* متن با انیمیشن فقط وقتی اسلاید فعال هست */}
                        {index === activeSlide && (
                            <div key={index} className={styles.slideText}>
                                <span>Maison</span>
                                <span>Francis Kurkdjian</span>
                                <span>Paris</span>
                            </div>
                        )}
                        {index === activeSlide && (
  <a
    href="/collection"
    className={styles.desktopLink}
  >
    Découvrir la collection
  </a>
)}


                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeSlider;
