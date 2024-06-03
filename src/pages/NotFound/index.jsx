import { WebAssetOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useProportion } from "../../hooks/proportion.hook";

export function NotFound() {
    const {pWidth, pHeight , custom} = useProportion(360)

    return <Box sx={{textAlign:"center"}}>
        <Box>
        <WebAssetOff  style={{width:pWidth , height:pHeight , color:"gainsboro"}} />
        </Box>
        <Typography variant="button" fontSize={custom(24).width}>
            Page Not Found
        </Typography>
    </Box>
}