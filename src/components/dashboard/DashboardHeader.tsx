type Props = {
  heading: string;
};

const DashboardHeader = ({ heading }: Props) => {
  return (
    <header>
      <h2 className="p-4 font-passion-one text-main-300 uppercase text-2xl">
        {heading}
      </h2>
    </header>
  );
};

export default DashboardHeader;
