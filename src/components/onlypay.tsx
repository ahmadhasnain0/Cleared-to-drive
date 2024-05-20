
import Image from "next/image";
import device from "../../public/images/onlypay/icon_devices.svg"
import online from "../../public/images/onlypay/icon_online.svg"
import snap from "../../public/images/onlypay/icon_snap.svg"

export default function onlyPay() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>
                        Only pay if you pass!
                    </h1>
                    <h2 className="fw-normal">$49 instant results submission to DMV
                    </h2>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center ">
                            <Image src={online} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                        </div>
                        <div className="col-12 text-center">
                            <h3>
                                Online
                            </h3>
                            <p className="fw-normal">Do it from anywhere
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center ">
                            <Image src={snap} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                        </div>
                        <div className="col-12 text-center">
                            <h3>
                                Instant
                            </h3>
                            <p className="fw-normal">Results submission to DMV
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center ">
                            <Image src={device} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                        </div>
                        <div className="col-12 text-center">
                            <h3>
                                Easy
                            </h3>
                            <p className="fw-normal">Works across devices
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}