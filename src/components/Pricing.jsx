import Section from "./Section";
import Button from "./Button";
import { check, smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import { pricing } from "../constants";
const Pricing = () => {
    return (
        <Section id={"pricing"}>
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
                    <img
                        src={smallSphere}
                        className="relative z-1 "
                        width={255}
                        height={255}
                        alt="Sphere"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
                        <img
                            src={stars}
                            className="w-full"
                            alt="Stars"
                            width={950}
                            height={400}
                        />
                    </div>
                </div>

                <Heading
                    tag={"Get started with brainwave"}
                    title={"Pay once, use forever"}
                />

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex items-center justify-center mt-10">
                    <a className="hover:underline text-xs font-bold font-code tracking-wider uppercase">
                        see the full details{" "}
                    </a>
                </div>
            </div>
        </Section>
    );
};

const PricingList = () => {
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div
                    key={item.id}
                    className=" max-lg:w-full lg:w-auto h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-16 odd:py-8 odd:my-4 first:[&>h4]:text-2  even:[&>h4]:text-1 last:[&>h4]:text-3"
                >
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                    </p>
                    <div className="flex items-center h-[5.5rem] mb-6 ">
                        {item.price && (
                            <>
                                <div className="h4 font-semibold">$</div>
                                <div className="text-[5.5rem] leading-none font-bold">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>
                    <Button
                        className={`w-full mb-6`}
                        href={
                            item.price ? "/pricing" : "mailto:contact@brainwave"
                        }
                        white={!!item.price}
                    >
                        {item.price ? "Get started" : "Contact Us"}
                    </Button>
                    <ul>
                        {item.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start py-5 border-t border-n-6"
                            >
                                <img
                                    src={check}
                                    width={24}
                                    height={24}
                                    alt="check"
                                />
                                <p className="body-2 text-n-3 ml-4">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Pricing;
