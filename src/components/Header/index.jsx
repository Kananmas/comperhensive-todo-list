// components
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MobileHeader } from "./component/MobileSidebar";
import { DekstopHeader } from "./component/DekstopHeader";
import { HeaderLink } from "./component/HeaderLink";


// hooks
import { useCheckAuth } from "../../hooks/check-auth.hook";
import { useDictionary } from "../../hooks/dictionary.hook";
import { useNavigate } from "react-router-dom";
import { useWindow } from "../../hooks/window.hook";
import { useDispatch } from "react-redux";

// utils
import { links } from "./utils/links.utils";
import { randomString } from "../../utils/random-string.utils";

// styles
import { headerStyles, userBoxStyles, userSelectBox } from "./index.styles";

// actions
import { clearAuthStateAction } from "../../store/auth/auth.actions";
import { useState } from "react";

export function Header() {
  useCheckAuth();
  const nav = useNavigate();
  const [mobileBarOpen, setMobileBarOpen] = useState(false)
  const { changeLang } = useDictionary();
  const { width } = useWindow();
  const dispatch = useDispatch();
  let stdFontSize = 16;


  const changeMobileBarState = () => {
    setMobileBarOpen(!mobileBarOpen)
  }

  if (width < 400) {
    stdFontSize = 12
  }

  const handleClickAccount = () => {
    nav("/user")
  }

  const handleChangeLang = (e) => {
    changeLang(e.target.value)
  }

  const handleClickLogout = () => {
    localStorage.removeItem("access-token");
    dispatch(clearAuthStateAction());
    nav("/signin")
  }

  return <Box width="100vw">
    <Box sx={headerStyles}>
      {
        (width >= 538) ? links.map((item) => <HeaderLink
          key={randomString()}
          {...item}
          sx={{ ...item.sx, fontSize: item?.sx?.fontSize + "px" ?? stdFontSize + "px" }}
        />) : null
      }

      {(width >= 538) ? <DekstopHeader
        links={links}
        handleChangeLang={handleChangeLang}
        handleClickAccount={handleClickAccount}
        stdFontSize={stdFontSize}
        userBoxStyles={userBoxStyles}
        userSelectBox={userSelectBox}
        handleClickLogout={handleClickLogout}
      /> : <MobileHeader
        links={links}
        handleClickLogout={handleClickLogout}
        handleClickAccount={handleClickAccount}
        changeMobileBarState={changeMobileBarState}
      />}
    </Box>
    {!mobileBarOpen && <Outlet />}
  </Box>
}