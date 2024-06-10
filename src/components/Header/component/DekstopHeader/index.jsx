import { AccountCircle, Language, Logout } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { useDictionary } from "../../../../hooks/dictionary.hook";

export function DekstopHeader({
    userBoxStyles , 
    handleChangeLang ,
    handleClickAccount, 
    stdFontSize, 
    userSelectBox,
}) {
    const {getLang , getWord} = useDictionary();

    return  <Box
    sx={userBoxStyles}
  >
    <Language />
    <Select
      onChange={handleChangeLang}
      value={getLang()}
      sx={{ ...userSelectBox }}>
      <MenuItem value="en">
        🇬🇧󠁧󠁢 {getWord("english")}
      </MenuItem>
      <MenuItem value="fa">
        🇮🇷 {getWord("Persian")}
      </MenuItem>
      <MenuItem value="ch">
        🇨🇳 {getWord("chinese")}
      </MenuItem>
    </Select>
    <IconButton onClick={handleClickAccount}>
      <AccountCircle color="primary" style={{
        width: "37px",
        height: "37px"
      }} />
    </IconButton>
    <Select
      sx={userSelectBox}>
      <MenuItem>
        <Logout />
        <Typography
          fontSize={stdFontSize + "px"}
          variant="button"
          padding={"0px  12px"}>
          {getWord("Logout")}
        </Typography>
      </MenuItem>
    </Select>
  </Box>
}