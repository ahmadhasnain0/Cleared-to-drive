import React, { useState } from 'react';
import Image from 'next/image';
import military from "../../public/images/military_icon.svg";

export default function Military() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Explicitly specify the type as number or null

    const toggleFAQ = (index: number) => { // Explicitly specify the type of 'index'
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const faqs = [
        { question: "Is this legitimate?", answer: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence matter more." },
        { question: "How does it work?", answer: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence matter more." },
        { question: "Who does the test?", answer: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence matter more." },
    ];

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-12 my-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <Image src={military} alt='Military Logo' className='object-fit-contain text-white m-2' quality={100} />
                        </div>
                        <div className="col-12 text-center">
                            <h1>Active military or veteran?</h1>
                            <h4 className="fw-normal mt-2">
                                We are proud to offer you a <span className='fw-bold'>10% discount!</span> Just mention your military <br />
                                status during the eye test.
                                <span> <a href="#" className="text-decoration-none" style={{ color: 'aqua' }}> Learn more</a></span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <iframe
                        width="853"
                        height="480"
                        src="https://www.youtube.com/embed/qkvUDpaJjBc"
                        title="Take Your Driver's License Vision Test Online with Cleared to Drive!"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <ul className="list-group d-flex mt-5 mb-3 listStyleNone" style={{ width: '830px' }} >
                        {faqs.map((faq, index) => (
                            <li className="border-top py-2" key={index}>
                                <div className="text-nowrap d-flex justify-content-between align-items-center" onClick={() => toggleFAQ(index)}>
                                    <h3 className="text-gray">{faq.question}</h3>
                                    <button
                                        className="fs-1 bg-transparent d-flex border-0"
                                    >
                                        {expandedIndex === index ? '-' : '+'}
                                    </button>
                                </div>
                                {expandedIndex === index && (
                                    <div className="bg-white rounded my-1 p-1">
                                        <p className="px-1 px-md-4 f-20">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
