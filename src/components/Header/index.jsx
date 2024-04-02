import { Box } from "@mui/material";
import { useCheckAuth } from "../../hooks/check-auth.hook";
import { Outlet } from "react-router-dom";

export function Header() {
    
  useCheckAuth();
    return <Box>
        <Outlet />
    </Box>
}