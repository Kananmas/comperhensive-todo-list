import { Box } from "@mui/material";

export function TabPanel({selectedTab , tabValue , children}) {
    if(selectedTab !== tabValue) return null;
    return <Box>
        {children}
    </Box>
}