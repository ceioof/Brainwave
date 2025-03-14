import Heading from "./Heading";
import Section from "./Section";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
    PhotoChatMessage,
    Gradient,
    VideoBar,
    VideoChatMessage
} from "./design/Services";

const Services = () => {
    return (
        <Section id={"how-to-use"}>
            <div className="container">
                <Heading
                    title={"Generative Ai made for creators."}
                    text={
                        "Brainwave unlocks the potential of AI-powered applications"
                    }
                />
                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] xl:h-[46rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20  ">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img
                                src={service1}
                                width={800}
                                height={730}
                                className="w-full h-full object-cover md:object-right"
                                alt="smartest AI"
                            />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto ">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 text-n-3 mb-[3rem]">
                                Brainwave unlocks the potential of AI-powered
                                applications
                            </p>
                            <ul>
                                {brainwaveServices.map((serv, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start py-4 border-t border-n-6"
                                    >
                                        <img
                                            src={check}
                                            alt={serv}
                                            width={24}
                                            height={24}
                                        />
                                        <p className="body-2 ml-4 text-sm font-code font-semibold text-n-2 ">
                                            {serv}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating
                            className={`absolute left-1/2 -translate-x-1/2 w-xs md:w-md lg:w-lg xl:w-3xl bottom-4 lg:bottom-6  `}
                        />
                    </div>
                    <div className="realtive z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden ">
                            <div className="absolute inset-0">
                                <img
                                    src={service2}
                                    className="w-full h-full object-cover"
                                    width={630}
                                    height={750}
                                    alt="robot"
                                />
                            </div>
                            <div className="absolute inset-0 flex justify-end flex-col p-8 bg-gradient-to-b from-transparent to-n-8/90 ">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3 ">
                                    Automatically enhance your photos using our
                                    AI app's photo editing feature. Try it now!
                                </p>
                            </div>
                            <PhotoChatMessage />
                        </div>

                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] ">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4 ">Video generation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    The world’s most powerful AI photo and video
                                    art generation engine. What will you create?
                                </p>
                                <ul className="flex items-center justify-between">
                                    {brainwaveServicesIcons.map(
                                        (icon, index) => (
                                            <li
                                                key={icon}
                                                className={`rounded-2xl flex items-center justify-center ${
                                                    index === 2
                                                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-custom md:w-[4.5rem] md:h-[4.5rem] "
                                                        : " w-10 h-10 bg-n-6 md:w-15 md:h-15"
                                                }`}
                                            >
                                                <div
                                                    className={`${
                                                        index === 2
                                                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                                            : ""
                                                    }`}
                                                >
                                                    <img
                                                        src={icon}
                                                        width={24}
                                                        height={24}
                                                        alt={icon}
                                                    />
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 overflow-hidden rounded-2xl md:h-[25rem] ">
                                <img
                                    src={service3}
                                    width={520}
                                    height={400}
                                    alt="scary robot"
                                    className="w-full h-full object-cover"
                                />
                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section>
    );
};

export default Services;
