import { Box, FormControl, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { useCheckAuth } from "../../hooks/check-auth.hook";
import { Outlet, useNavigate } from "react-router-dom";
import { randomString } from "../../utils/random-string.utils";
import { links } from "./utils/links.utils";
import { headerStyles, userBoxStyles, userSelectBox } from "./index.styles";
import { HeaderLink } from "./component/HeaderLink";
import { AccountCircle, Logout } from "@mui/icons-material";
import { useProportion } from "../../hooks/proportion.hook";

export function Header() {
  useCheckAuth();
  const nav = useNavigate();
  const proportion = useProportion(35);

  const handleClickAccount = () => {
    nav("/user")
  }

  return <Box>
    <Box sx={headerStyles}>
      {links.map((item) => <HeaderLink
        key={randomString()}
        {...item}
        sx={{ ...item.sx, fontSize:proportion.custom(item?.sx?.fontSize??16).width }}
      />)}

      <Box
        sx={userBoxStyles}
      >
        <IconButton onClick={handleClickAccount}>
          <AccountCircle color="primary" style={{ width: proportion.pWidth, 
            height: proportion.pHeight }} />
        </IconButton>
        <Select
          sx={userSelectBox}>
          <MenuItem>
            <Logout />
            <Typography variant="button" padding={"0px  12px"}>
              Log out
            </Typography>
          </MenuItem>
        </Select>
      </Box>
    </Box>
    <Outlet />
  </Box>
}