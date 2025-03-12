import { useState } from "react";
import { logOutUser } from "../../../helpers/HelpersFirebase";
import LogoutModal from "../../blocks/LogoutModal/LogoutModal";
import classes from "./LogoutButton.module.scss";
import { MdLogout } from "react-icons/md";

export default function LogoutButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={classes.logout}>
        <MdLogout className={classes.linkIcon} size={40} />
      </button>

      <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
