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
  const {pWidth , pHeight , custom} = useProportion(35);
  const stdFontSize = 16;

  const handleClickAccount = () => {
    nav("/user")
  }

  return <Box>
    <Box sx={headerStyles}>
      {links.map((item) => <HeaderLink
        key={randomString()}
        {...item}
        sx={{ ...item.sx, fontSize:custom(item?.sx?.fontSize??stdFontSize).width }}
      />)}

      <Box
        sx={userBoxStyles}
      >
        <IconButton onClick={handleClickAccount}> 
          <AccountCircle color="primary" style={{ width:pWidth, 
            height:pHeight }} />
        </IconButton>
        <Select
          sx={{...userSelectBox }}>
          <MenuItem>
            <Logout width={custom(stdFontSize).width} height={custom(stdFontSize).height}/>
            <Typography fontSize={custom(stdFontSize).width} variant="button" padding={"0px  12px"}>
              Log out
            </Typography>
          </MenuItem>
        </Select>
      </Box>
    </Box>
    <Outlet />
  </Box>
}