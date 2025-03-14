import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { benefits } from "../constants";
import ClipPath from "../assets/svg/ClipPath";
const Benefits = () => {
    const cardsUrl = {
        1: "bg-[url(assets/benefits/card-1.svg)]",
        2: "bg-[url(assets/benefits/card-2.svg)]",
        3: "bg-[url(assets/benefits/card-3.svg)]",
        4: "bg-[url(assets/benefits/card-4.svg)]",
        5: "bg-[url(assets/benefits/card-5.svg)]",
        6: "bg-[url(assets/benefits/card-6.svg)]"
    };

    return (
        <Section id={"features"}>
            <div className="container relative z-2 ">
                <Heading
                    className={`md:max-w-md lg:max-w-2xl`}
                    title="Chat Smarter, Not Harder with Brainwave"
                />
                <div className="flex flex-wrap gap-10 mb-10 md:justify-center  ">
                    {benefits.map((item) => (
                        <div
                            key={item.id}
                            className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] ${
                                cardsUrl[item.id]
                            } md:max-w-[24rem]`}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 text-n-3 mb-6">
                                    {item.text}
                                </p>
                                <div className="flex items-center mt-auto ">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-n-1 text-xs font-bold uppercase">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                            <div
                                className="absolute inset-0.5 bg-n-8 "
                                style={{
                                    clipPath: "url(#benefits)"
                                }}
                            >
                                <ClipPath />
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            width={380}
                                            height={362}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
