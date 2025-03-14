import { loading } from "../assets";

const Generating = ({ className }) => {
    return (
        <div
            className={`${
                className || ""
            } flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base backdrop-blur-sm`}
        >
            <img
                src={loading}
                width={20}
                height={20}
                className=" mr-4 animate-spin"
                alt="loading"
            />
            AI is generating
        </div>
    );
};

export default Generating;
