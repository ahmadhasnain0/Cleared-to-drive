
import Image from "next/image";
import newyork from "../../public/images/featured/the_new_york_times.svg"
import boomer from "../../public/images/featured/boomer_gio_play.svg"
import as from "../../public/images/featured/as.svg"
import ab9 from "../../public/images/featured/9abc.svg"
import new12 from "../../public/images/featured/news12_longisland.svg"
import obc from "../../public/images/featured/cbs_news.svg"
export default function featured() {
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="fw-normal bg-light py-2">Featured in
                    </h2>
                </div>
                <div className="col-12 text-center d-block d-md-flex justify-content-center">
                    <Image src={newyork} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.7" }} quality={100} />
                    <Image src={boomer} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.8" }} quality={100} />
                </div>
                <div className="col-12 text-center d-block d-md-flex justify-content-center">
                    <Image src={ab9} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.8" }} quality={100} />
                    <Image src={new12} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.8" }} quality={100} />
                    <Image src={obc} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.8" }} quality={100} />
                    <Image src={as} alt='logo' className='object-fit-contain text-white m-3' style={{ opacity: "0.8" }} quality={100} />
                </div>
                <div className="col-12 text-center mt-5">
                    <h1>
                        Already renewed your driver’s license?
                    </h1>
                    <h3 className="fw-normal">If you <span> <a href="" className="text-decoration-none" style={{ color: 'aqua' }}>self-certified</a></span> , take your vision test with us!
                    </h3>
                </div>
                <div className="col-12 text-center d-block d-md-flex justify-content-center mt-3">
                    <button className="btn-header btn-yellow text-black m-2">Make Virtual Appointment</button>
                </div>
            </div>
        </div>
    );
}