import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../lib/api";

import {
  MdOutlineSettings as IconSettings,
  MdLogout as IconLogout,
  MdGridView as IconGrid,
} from "react-icons/md";
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
          label="seasons"
          onClick={() => navigate("seasons")}
          icon={<IconGrid />}
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
