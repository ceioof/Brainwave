import { brainwave } from "../assets";
import { HamburgerMenu } from "./design/Header.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import Button from "./Button.jsx";
import { navigation } from "../constants/index.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
    disablePageScroll,
    enablePageScroll
} from "scroll-lock/dist/scroll-lock.js";

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handelClick = () => {
        setOpenNavigation(false);
        enablePageScroll();
    };
    const { hash } = useLocation();
    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90  lg:backdrop-blur ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur"
            } `}
        >
            <div
                className={
                    "flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 "
                }
            >
                <a
                    href={"#hero"}
                    className={"block w-[12rem] xl:mr-8 "}
                    onClick={handelClick}
                >
                    <img
                        src={brainwave}
                        height={40}
                        width={190}
                        alt={"Brainwave"}
                    />
                </a>
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
                >
                    <div
                        className={
                            "relative flex flex-col lg:flex-row items-center justify-center m-auto "
                        }
                    >
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  text-2xl uppercase font-code text-n-1 transition-colors hover:text-1 ${
                                    item.onlyMobile ? "lg:hidden" : ""
                                } ${
                                    item.url === hash
                                        ? "lg:text-n-1"
                                        : "lg:text-n-1/50"
                                } xl:px-12 `}
                                onClick={handelClick}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a
                    href={"#sign-up"}
                    className={
                        "button mr-8 text-n-1/50 transition-colors hover:text-1 hidden lg:flex"
                    }
                >
                    new account
                </a>
                <Button className="!hidden lg:!inline-flex" href={"#sign-in"}>
                    sign in
                </Button>
                <Button
                    className={"lg:hidden ml-auto"}
                    px={"px-3"}
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};
export default Header;
