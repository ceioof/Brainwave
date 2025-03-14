import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Heading from "./Heading";
const Collaboration = () => {
    const rotateClasses = {
        0: "rotate-0",
        1: "rotate-45",
        2: "rotate-90",
        3: "rotate-135",
        4: "rotate-180",
        5: "rotate-225",
        6: "rotate-270",
        7: "rotate-315"
    };
    const _rotateClasses = {
        0: "-rotate-0",
        1: "-rotate-45",
        2: "-rotate-90",
        3: "-rotate-135",
        4: "-rotate-180",
        5: "-rotate-225",
        6: "-rotate-270",
        7: "-rotate-315"
    };

    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <Heading
                        title={"AI Chat App for seamless collaboration"}
                        className={"!mb-4 md:!mb-8 md:!text-start"}
                    />
                    <ul className="max-w-[22rem] mb-10 md:mb-14 ">
                        {collabContent.map((item) => (
                            <li key={item.id} className="mb-3 py-3 ">
                                <div className="flex items-center ">
                                    <img
                                        src={check}
                                        width={24}
                                        height={24}
                                        alt="check"
                                    />
                                    <h6 className="body-2 ml-5">
                                        {item.title}
                                    </h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4">
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button>try it now</Button>
                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-8 lg:mt-0">
                    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>

                    <div className="relative left-1/2 -translate-x-1/2 flex w-[22rem] aspect-square rounded-full border border-n-6 scale-75 md:scale-100">
                        <div className="w-60 flex aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square rounded-full bg-conic-custom m-auto p-[0.2rem]">
                                <div className="bg-n-8 w-full h-full flex items-center justify-center rounded-full">
                                    <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={index}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom ${rotateClasses[index]}`}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl ${_rotateClasses[index]}`}
                                    >
                                        <img
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
