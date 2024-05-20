
import Image from 'next/image';
import svg1 from "../../public/images/svg1.svg"
import svg2 from "../../public/images/svg2.svg"
import svg3 from "../../public/images/img3.webp"

export default function header() {
    return (
        <div className="container-fluid b-hero d-flex align-items-center">
            <div className="row">
                <div className="col-12 text-center d-flex justify-content-center">
                    <h1 className="f-60 fw-bold">FAST ONLINE VISION TEST</h1>
                </div>
                <div className="col-12 text-center d-flex justify-content-center">
                    <p className="f-20 fw-bold">New York requires a vision test to renew your license.<br />
                        Take it online in just minutes.</p>
                </div>
                <div className="col-12 text-center d-flex justify-content-center z-3">
                    <button className="btn-header bg-white text-black m-2 ">Schedule For Later</button>
                    <button className="btn-header bg-yellow text-black m-2">Take Test Now</button>
                </div>
                <div className="col-12 text-center d-flex justify-content-center z-3">
                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                    <Image src={svg2} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                    <Image src={svg3} alt='logo' className='object-fit-contain text-white m-2' width={119} height={45} quality={100} style={{ opacity: '0.7' }} />
                </div>
            </div>
        </div>
    );
}