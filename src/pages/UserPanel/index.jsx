import { Box } from "@mui/material";
import { useSelector } from "react-redux"

export function UserPanel() {
    const user = useSelector((store) => store.auth);
    const id = user.tokenKeys.userId;
    return <Box>    
    </Box>
}