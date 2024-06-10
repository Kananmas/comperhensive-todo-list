// components
import { AccountCircle, Close, Language, Logout, Menu } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select } from "@mui/material";
import { HeaderLink } from "../HeaderLink";

// utils
import { randomString } from "../../../../utils/random-string.utils";

// hooks
import { useDictionary } from "../../../../hooks/dictionary.hook";
import { userSelectBox } from "../../index.styles";
import { useEffect, useState } from "react";

const containerStyles = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "110vh",
    display: "flex",
    flexDirection: "column",
}

const boxStyles = {
    marginTop: "12px"
}

export function MobileHeader({ links, handleClickAccount, handleClickLogout, changeMobileBarState }) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        changeMobileBarState();
    }
    const handleClickClose = () => {
        setOpen(false);
        changeMobileBarState();
    }
    const { getWord, getLang, changeLang } = useDictionary();
    const stdFontSize = 16;
    const handleChangeLang = (e) => changeLang(e.target.value)

    useEffect(() => {
        document.getElementsByTagName("body")[0].style.overflow = open ? "hidden" : "visible"
    }, [open])


    if (!open) {
        return <IconButton
            sx={{ color: 'white' }}
            onClick={handleClickOpen}>
            <Menu />
        </IconButton>
    }


    return <Box sx={containerStyles}>
        {links.map((item) => <Box sx={boxStyles} key={randomString()}>
            <HeaderLink
                {...item}
                sx={{ ...item.sx, fontSize: item?.sx?.fontSize + "px" ?? stdFontSize + "px" }}
            />
        </Box>)}

        <Box sx={boxStyles}>
            <Language />
            <Select
                onChange={handleChangeLang}
                sx={userSelectBox}
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

        <Box sx={boxStyles}>
            <IconButton onClick={handleClickAccount}>
                <AccountCircle color="primary" style={{
                    width: "37px",
                    height: "37px"
                }} />
            </IconButton>
        </Box>

        <Box sx={{boxStyles}}>
            <IconButton sx={{color:"white" , fontSize:"16px"}} onClick={handleClickLogout}>
               <Logout sx={{color:"white"}} /> {getWord("logout")}
            </IconButton>
        </Box>

        <Box sx={boxStyles}>
            <IconButton onClick={handleClickClose}>
                <Close sx={{color:"white"}} />
            </IconButton>
        </Box>
    </Box>
}