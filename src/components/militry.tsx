
import Image from 'next/image';
import milirty from "../../public/images/military_icon.svg"
export default function militry() {
    return (
        <div className='container my-5'>
            <div className="row ">
                <div className="col-12 my-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center ">
                            <Image src={milirty} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                        </div>
                        <div className="col-12 text-center">
                            <h1>
                                Active military or veteran?
                            </h1>
                            <h4 className="fw-normal mt-2">We are proud to offer you a<span className='fw-bold'> 10% discount!</span> Just mention your military <br /> status during the eye test.<span> <a href="" className="text-decoration-none" style={{ color: 'aqua' }}> Learn more</a></span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/qkvUDpaJjBc" title="Take Your Driver&#39;s License Vision Test Online with Cleared to Drive!"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}