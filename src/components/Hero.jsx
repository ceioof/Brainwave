import { useRef } from "react";
import Section from "./Section.jsx";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero.jsx";
import Generating from "./Generating.jsx";
import Notification from "./Notification.jsx";
import CompanysLogo from "./CompanysLogo.jsx";

const Hero = () => {
    const parallaxRef = useRef(null);
    return (
        <Section
            className={" pt-[12rem] "}
            customPaddings
            crossesOffset={"lg:translate-y-[5.25rem]"}
            crosses
            id={"#hero"}
        >
            <div className="container relative " ref={parallaxRef}>
                <div className="max-w-[61rem] relative z-1 mb-[4rem] md:mb-20 lg:mb-[6rem] mx-auto text-center">
                    <h1 className="h1">
                        Explore the possibilites &nbsp;of AI&nbsp; Chating with{" "}
                        <span className="relative ">
                            Brainwave
                            <img
                                src={curve}
                                width={624}
                                height={28}
                                alt={"Curve"}
                                className="w-full absolute top-full left-0 xl:-mt-2 "
                            />
                        </span>
                    </h1>
                    <p className=" body-1 mx-auto max-w-3xl mb-6 lg:mb-8 text-n-2 mt-6">
                        Unleash the power of AI within Brainwave. Upgrage your
                        productivity with Brainwave, the open AI chat app.
                    </p>
                    <Button href={"/pricing"} white>
                        get started
                    </Button>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="bg-conic-custom relative z-1 p-0.5 rounded-2xl ">
                        <div className="w-full rounded-t-[0.9rem] h-[1.4rem] bg-n-10" />
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img
                                src={robot}
                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] "
                                width={1024}
                                height={490}
                                alt="AI"
                            />
                        </div>

                        <Generating className="absolute left-4 right-4 bottom-[5rem] md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                        <ScrollParallax isAbsolutelyPositioned>
                            <ul className="hidden absolute -left-[5.5rem] max-xl:-left-[2rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex ">
                                {heroIcons.map((icon, index) => (
                                    <li key={index} className="p-5">
                                        <img
                                            src={icon}
                                            width={24}
                                            height={25}
                                            alt={icon}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </ScrollParallax>
                        <ScrollParallax isAbsolutelyPositioned>
                            <Notification
                                className={`hidden lg:flex absolute -right-[5.5rem] max-xl:-right-[4rem] bottom-[11rem] w-[18rem] `}
                                title={"Code generation"}
                            />
                        </ScrollParallax>

                        <Gradient />
                    </div>

                    <div className=" absolute left-1/2 -translate-x-1/2 -top-[54%]  w-[234%] md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
                        <img
                            src={heroBackground}
                            className=" w-full "
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>
                    <BackgroundCircles parallaxRef={parallaxRef} />
                </div>
                <CompanysLogo
                    className={"hidden relative z-10 mt-20 lg:block"}
                />
            </div>
            <BottomLine />
        </Section>
    );
};
export default Hero;
