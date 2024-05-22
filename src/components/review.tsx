import { useEffect } from 'react';
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

        const scrollStep = sliderContainer.children[0].offsetWidth;
        
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
                                <div id="slide1 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div id="slide2 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div id="slide3 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div id="slide4 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div id="slide5 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>
                            <li>
                                <div id="slide6 slide">

                                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2' quality={100} />


                                    <h1 className="wp-block-heading has-text-align-center display-3 ">A Team of Real People</h1>
                                </div>
                            </li>                        </ul>
                        <button type="button" className="slider-nav"></button>
                        <button type="button" className="slider-nav slider-nav-next"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
