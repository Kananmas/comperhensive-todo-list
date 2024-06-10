// components
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// hooks
import { useCheckAuth } from "../../hooks/check-auth.hook";
import { useDictionary } from "../../hooks/dictionary.hook";
import { useNavigate } from "react-router-dom";
import { useWindow } from "../../hooks/window.hook";

// utils
import { links } from "./utils/links.utils";
import { randomString } from "../../utils/random-string.utils";

// styles
import { headerStyles, userBoxStyles, userSelectBox } from "./index.styles";
import { MobileHeader } from "./component/MobileSidebar";
import { DekstopHeader } from "./component/DekstopHeader";
import { HeaderLink } from "./component/HeaderLink";

export function Header() {
  useCheckAuth();
  const nav = useNavigate();
  const { changeLang } = useDictionary();
  let stdFontSize = 16;
  const { width } = useWindow();

  if (width < 400) {
    stdFontSize = 12
  }

  const handleClickAccount = () => {
    nav("/user")
  }

  const handleChangeLang = (e) => {
    changeLang(e.target.value)
  }

  return <Box width="100vw">
    <Box sx={headerStyles}>
      {
        (width >= 538) ?  links.map((item) => <HeaderLink
          key={randomString()}
          {...item}
          sx={{ ...item.sx, fontSize: item?.sx?.fontSize + "px" ?? stdFontSize + "px" }}
        />):null
      }

      {(width >= 538) ? <DekstopHeader 
      links={links}
      handleChangeLang={handleChangeLang}
      handleClickAccount={handleClickAccount}
      stdFontSize={stdFontSize}
      userBoxStyles={userBoxStyles}
      userSelectBox={userSelectBox}
      /> : <MobileHeader links={links} handleClickAccount={handleClickAccount} />}
    </Box>
    <Outlet />
  </Box>
}