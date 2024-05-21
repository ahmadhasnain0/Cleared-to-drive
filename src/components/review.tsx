import Image from 'next/image';
import svg1 from "../../public/images/Reviews/1.webp"
import svg2 from "../../public/images/Reviews/2.webp"
 import img3 from "../../public/images/Reviews/facebook.jpg"

export default function Review(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <h1>
                Review
                    </h1>
                </div>
                <div className="col-12 text-center d-flex justify-content-center z-3 ">
                    <Image src={svg1} alt='logo' className='object-fit-contain text-white m-2 ' quality={100} />
                    <Image src={svg2} alt='logo' className='object-fit-contain text-white m-2' quality={100} />
                    <Image src={img3} alt='logo' className='object-fit-contain text-white m-2'  quality={100} />
                </div>
            </div>
        </div>
    );
}