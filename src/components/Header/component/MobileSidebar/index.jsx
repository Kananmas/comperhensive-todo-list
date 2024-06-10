import { AccountCircle, Close, Language, Menu } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { HeaderLink } from "../HeaderLink";
import { randomString } from "../../../../utils/random-string.utils";
import { useDictionary } from "../../../../hooks/dictionary.hook";

export function MobileHeader({ links  , handleClickAccount}) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClickClose = () => setOpen(false);
    const { getWord, getLang, changeLang } = useDictionary();
    const stdFontSize = 16;
    const handleChangeLang = (e) => changeLang(e.target.value)

    if (!open) {
        return <IconButton
            sx={{ color: 'white' }}
            onClick={handleClickOpen}>
            <Menu />
        </IconButton>
    }


    return <Box sx={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", height: "100vh" }}>
        {links.map((item) => <Box key={randomString()}>
            <HeaderLink
                {...item}
                sx={{ ...item.sx, fontSize: item?.sx?.fontSize + "px" ?? stdFontSize + "px" }}
            />
        </Box>)}

        <Box>
            <Language />
            <Select
                onChange={handleChangeLang}
                value={getLang()}>
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
        </Box>

        <Box>
            <IconButton onClick={handleClickAccount}>
                <AccountCircle color="primary" style={{
                    width: "37px",
                    height: "37px"
                }} />
            </IconButton>
        </Box>

        <Box>
            <IconButton onClick={handleClickClose}>
                <Close />
            </IconButton>
        </Box>
    </Box>
}