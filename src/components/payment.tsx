
import Image from 'next/image';
import visa from "../../public/images/payment/visa.svg"
import american_express from "../../public/images/payment/american_express.svg"
import discover from "../../public/images/payment/discover.webp"
import mastercard from "../../public/images/payment/mastercard.svg"
import paypal from "../../public/images/payment/paypal.svg"
import people from "../../public/images/people.webp"
export default function Payment() {
    return (
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center ">
                    <h1>
                        Payment
                    </h1>
                </div>
                <div className="col-12 text-center d-flex justify-content-center my-4  ">
                    <div className="row justify-content-center">
                        <div className='payment-box m-2 col '>
                            <Image src={visa} alt='logo' className='object-fit-contain text-white m-2 img ' quality={100} />
                        </div>
                        <div className='payment-box m-2 col box_american_express'>
                            <Image src={american_express} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                        </div>
                        <div className='payment-box m-2 col'>
                            <Image src={discover} alt='logo' className='object-fit-contain text-white m-2 img' quality={100} />
                        </div>
                        <div className='payment-box m-2 col'>
                            <Image src={mastercard} alt='logo' className='object-fit-contain text-white m-2 img' quality={100} />
                        </div>
                        <div className='payment-box m-2 col'>
                            <Image src={paypal} alt='logo' className='object-fit-contain text-white m-2 img' quality={100} />
                        </div>
                    </div>
                </div>
                <div className='col-12 text-center mt-5 pt-5'>
                    <h1>
                        A Team of Real People
                    </h1>
                    <h4 className="fw-normal">We're excited to help make renewing your license as fast and smooth as possible!
                    </h4>

                </div>
                <div className='col-12'>
                    <Image src={people} alt='logo' className='object-fit-contain text-white m-2 img ' quality={100} />
                </div>
                <div className="col-12 text-center d-flex justify-content-center z-3 py-3">
                    <button className="btn-header btn-yellow text-black m-2">Make Virtual Appointment</button>
                </div>
            </div>
        </div>
    );
}