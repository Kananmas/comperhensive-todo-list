import { WebAssetOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useProportion } from "../../hooks/proportion.hook";

export function NotFound() {
    const proportion = useProportion(360)

    return <Box sx={{textAlign:"center" , marginTop:"12.5%"}}>
        <Box>
        <WebAssetOff  style={{width:proportion.pWidth , height:proportion.pHeight , color:"gainsboro"}} />
        </Box>
        <Typography variant="button" fontSize={proportion.custom(24).width}>
            Page Not Found
        </Typography>
    </Box>
}