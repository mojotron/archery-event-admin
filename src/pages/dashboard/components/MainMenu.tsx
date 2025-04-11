import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../../lib/api";
// icons
import {
  GiBarracksTent as IconClub,
  GiArcher as IconArcher,
  GiTrophy as IconSeason,
  GiSettingsKnobs as IconSettings,
  GiExitDoor as IconLogout,
  GiTargetArrows as IconTournament,
} from "react-icons/gi";

import MenuOption from "./MenuOption";

const MainMenu = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logoutUser } = useMutation({
    mutationFn: () => logout(),
    onSettled: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });

  return (
    <nav>
      <ul className="flex flex-col">
        <MenuOption
          label="clubs"
          onClick={() => navigate("clubs")}
          icon={<IconClub />}
        />

        <MenuOption
          label="archers"
          onClick={() => navigate("archers")}
          icon={<IconArcher />}
        />

        <MenuOption
          label="seasons"
          onClick={() => navigate("seasons")}
          icon={<IconSeason />}
        />

        <MenuOption
          label="tournaments"
          onClick={() => navigate("tournaments")}
          icon={<IconTournament />}
        />

        <MenuOption
          label="settings"
          onClick={() => navigate("settings")}
          icon={<IconSettings />}
        />

        <MenuOption
          label="logout"
          onClick={() => logoutUser()}
          icon={<IconLogout />}
        />
      </ul>
    </nav>
  );
};

export default MainMenu;
