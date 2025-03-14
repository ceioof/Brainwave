import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
    return (
        <div
            className={`${
                className || ""
            } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur-sm border border-n-1/10 rounded-2xl gap-5`}
        >
            <img
                src={notification1}
                width={62}
                height={62}
                alt="image"
                className="rounded-xl"
            />
            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base  ">{title}</h6>
                <div className="flex items-center justify-between">
                    <ul className="flex ">
                        {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className=" -m-0.5 mt-auto rounded-full overflow-hidden w-6 h-6 border border-n-12"
                            >
                                <img
                                    src={item}
                                    alt={item}
                                    width={20}
                                    height={20}
                                    className="w-full"
                                />
                            </li>
                        ))}
                    </ul>
                    <p className="body-2 text-n-13">1m ago</p>
                </div>
            </div>
        </div>
    );
};

export default Notification;
