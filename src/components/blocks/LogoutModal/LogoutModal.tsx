import { createPortal } from "react-dom";
import classes from "./LogoutModal.module.scss";
import { logOutUser } from "../../../helpers/HelpersFirebase";
import { Dispatch, SetStateAction, useRef } from "react";

interface IProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LogoutModal({ isOpen, setIsOpen }: IProps) {
  const handleLogOut = () => logOutUser();

  const modalRoot = document.getElementById("modal");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == wrapperRef.current) setIsOpen(false);
  };

  if (!modalRoot) return;

  return createPortal(
    <>
      {isOpen && (
        <div ref={wrapperRef} onClick={handleClick} className={classes.wrapper}>
          <div className={classes.modal}>
            <h3 className={classes.title}>Leaving already? :)</h3>

            <div className={classes.buttonsWrapper}>
              <button onClick={handleLogOut} className={classes.logout}>
                Logout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={classes.close}
              >
                Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    modalRoot
  );
}
