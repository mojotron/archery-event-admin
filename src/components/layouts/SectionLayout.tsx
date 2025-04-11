import { useNavigate, Outlet } from "react-router";

type Props = {
  section: string;
};

const SectionLayout = ({ section }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="p-4 flex items-center justify-between">
        <h2 className="font-passion-one text-main-300 text-2xl uppercase">
          {section} control
        </h2>
        <nav>
          <ul className="flex items-center gap-1">
            <li
              className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
              onClick={() => navigate("/dashboard")}
            >
              dashboard
            </li>
            <li
              className="font-bold text-main-100 cursor-pointer hover:text-sec-blue-500"
              onClick={() => navigate(`/dashboard/${section}`)}
            >
              {section}
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default SectionLayout;
