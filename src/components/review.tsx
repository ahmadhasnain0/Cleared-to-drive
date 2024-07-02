import React, { useEffect } from 'react';
import Image from 'next/image';
import svg1 from "../../public/images/Reviews/1.webp";
import svg2 from "../../public/images/Reviews/2.webp";
import img3 from "../../public/images/Reviews/facebook.jpg";
export default function Review() {
    useEffect(() => {
        const sliderContainer = document.querySelector('.swiffy-slider .slider-container');
        const prevButton = document.querySelector('.swiffy-slider .slider-nav');
        const nextButton = document.querySelector('.swiffy-slider .slider-nav-next');
        if (!sliderContainer || !prevButton || !nextButton) return;
        const sliderElement = sliderContainer.children[0] as HTMLElement;
        const scrollStep = sliderElement.offsetWidth;

        prevButton.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -scrollStep,
                behavior: 'smooth'
            });
        });
        nextButton.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: scrollStep,
                behavior: 'smooth'
            });
        });
        return () => {
            prevButton.removeEventListener('click', () => { });
            nextButton.removeEventListener('click', () => { });
        };
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Review</h1>
                </div>
                <div className="col-12 text-center d-block d-sm-flex justify-content-center z-3">
                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                    <Image src={svg2} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                    <Image src={img3} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                </div>
                <div className="col-12 mt-5">
                    <div className="swiffy-slider slider-item-reveal slider-item-nosnap-touch slider-nav-round slider-nav-visible slider-nav-page slider-indicators-outside slider-indicators-sm slider-item-helper">
                        <ul className="slider-container border-0">
                            <li>
                                <div className="slide" id="slide1">
                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                                    <h1 className="wp-block-heading has-text-align-center display-3">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div className="slide" id="slide2">
                                    <Image src={svg2} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                                    <h1 className="wp-block-heading has-text-align-center display-3">Another Heading</h1>
                                </div>
                            </li>
                            <li>
                                <div className="slide" id="slide3">
                                    <Image src={img3} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                                    <h1 className="wp-block-heading has-text-align-center display-3">Yet Another Heading</h1>
                                </div>
                            </li>
                            {/* Add more slides as needed */}
                        </ul>
                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav-next"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
