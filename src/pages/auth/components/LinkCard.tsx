import { Link } from "react-router";

type Props = {
  message: string;
  linkText: string;
  linkPath: string;
  replace?: boolean; // replace in browser history
};

const LinkCard = ({ message, linkText, linkPath, replace = false }: Props) => {
  return (
    <div className="text-center font-inter w-full sm:w-96 px-4 py-2 ">
      <p className="text-main-300">
        {message}{" "}
        <Link
          to={linkPath}
          replace={replace}
          className="text-sec-blue-500 hover:text-sec-blue-300 font-bold"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default LinkCard;
