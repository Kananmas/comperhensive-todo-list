import { Box, IconButton } from "@mui/material";
import { useCheckAuth } from "../../hooks/check-auth.hook";
import { Outlet } from "react-router-dom";
import { randomString } from "../../utils/random-string.utils";
import { links } from "./utils/links.utils";
import { headerStyles } from "./index.styles";
import { HeaderLink } from "./component/HeaderLink";
import { AccountCircle } from "@mui/icons-material";



export function Header() {
  useCheckAuth();
  return <Box>
    <Box sx={headerStyles}>
      {links.map((item) => <HeaderLink key={randomString()} {...item}/>)}
      <IconButton sx={{marginLeft:"auto"}}>
        <AccountCircle color="primary" style={{width:"35px" , height:"35px"}} />
      </IconButton>
    </Box>
    <Outlet />
  </Box>
}