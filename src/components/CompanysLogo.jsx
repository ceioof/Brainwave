import { companyLogos } from "../constants";

const CompanysLogo = ({ className }) => {
    return (
        <div className={`${className}`}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                helping people create beatiful content at
            </h5>
            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li
                        className="flex flex-1 justify-center h-[8.5rem] "
                        key={index}
                    >
                        <img src={logo} alt={logo} width={134} height={28} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanysLogo;
