import useAuth from "../hooks/useAuth";

import MainMenu from "../components/dashboard/MainMenu";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <header>
        <h2 className="p-4 font-passion-one text-main-300 uppercase text-2xl">
          Archery Event Control Dashboard
        </h2>
        <p className="font-source-code-pro text-main-300">
          current admin: {user?.firstName} {user?.lastName}
        </p>
      </header>

      <section className="flex">
        <aside className="bg-main-500 w-[400px]">
          <MainMenu />
        </aside>
      </section>
    </div>
  );
};

export default Dashboard;
