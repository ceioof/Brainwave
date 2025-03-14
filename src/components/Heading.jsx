import brackets from "../assets/svg/Brackets";
const Heading = ({ className, title, text, tag }) => {
    return (
        <div
            className={`${
                className || ""
            } max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center `}
        >
            {tag ? (
                <Tagline className="mb-4 md:justify-center">{tag}</Tagline>
            ) : null}

            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
        </div>
    );
};

export const Tagline = ({ className, children }) => {
    return (
        <div className={`${className || ""} tagline flex items-center`}>
            {brackets("left")}
            <div className="mx-3 text-n-3">{children}</div>
            {brackets("right")}
        </div>
    );
};

export default Heading;
