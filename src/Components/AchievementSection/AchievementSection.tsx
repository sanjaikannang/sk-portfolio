import { useState } from "react";
import { MoveRight, MoveLeft } from 'lucide-react';
import screenshot from '../../assets/Images/certificate.png';
import whatsappImage from '../../assets/Images/PriceImage.jpeg';

const images = [
    { src: whatsappImage, alt: 'WhatsApp Achievement' },
    { src: screenshot, alt: 'Achievement Screenshot' }
];

const AchievementSection = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [modalAlt, setModalAlt] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const openModal = (imageSrc: string, imageAlt: string) => {
        setModalImage(imageSrc);
        setModalAlt(imageAlt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center text-center mb-44">
                    <h1 className="font-Agrandir text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 mb-10 text-blackColor">Achievements</h1>

                    {/* Mobile Slider */}
                    <div className="md:hidden flex flex-col items-center">
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="w-full max-w-[90%] sm:max-w-sm shadow-2xl cursor-pointer"
                            onClick={() => openModal(images[currentIndex].src, images[currentIndex].alt)}
                        />
                        <div className="flex justify-center space-x-4 w-full mt-6">
                            <button onClick={goToPreviousImage} className="flex items-center justify-center rounded-tl-[20px] px-4 py-2 font-Agrandir text-whiteColor bg-blueColor transition-all duration-300 hover:rounded-tl-[0px] hover:scale-105 shadow-2xl">
                                <MoveLeft size={24} strokeWidth={2} />
                            </button>
                            <button onClick={goToNextImage} className="flex items-center justify-center rounded-tr-[20px] px-4 py-2 font-Agrandir text-whiteColor bg-blueColor transition-all duration-300 hover:rounded-tr-[0px] hover:scale-105 shadow-2xl">
                                <MoveRight size={24} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden p-4 md:flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full max-w-[90%] sm:max-w-sm shadow-2xl hover:scale-110 cursor-pointer transition-transform"
                                    onClick={() => openModal(image.src, image.alt)}
                                />
                            </div>
                        ))}
                    </div>

                    <p className="font-Agrandir mt-0 md:mt-10 p-7 sm:p-8 text-xl text-black text-center">
                        " Details about the WhatsApp achievement. Explain the context and significance of this accomplishment.
                        Details about the WhatsApp achievement. Explain the context and significance "
                    </p>
                </div>
            </div>

            {/* Modal Implementation */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-blackColor bg-opacity-50 flex items-center justify-center z-50 p-5"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-whiteColor p-4 max-w-4xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-0 right-3 text-5xl text-black"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        {modalImage && (
                            <img
                                src={modalImage}
                                alt={modalAlt}
                                className="w-full h-auto mt-6 p-3"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default AchievementSection