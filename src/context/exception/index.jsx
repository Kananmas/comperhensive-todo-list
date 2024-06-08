import { useMemo, useState } from "react";
import { errorContext } from "./error.context";
import { Box, IconButton, Typography } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";


const errorBoxStyles = {
    bgcolor: 'red',
    color: "white",
    position: "absolute",
    left: "14px",
    top: "14px",
    borderRadius: "12px",
    padding: "12px"
}

const containerStyles = {
    display: "flex",
    minWidth: "280px",
    justifyContent: "space-between",
    alignItems: "center"
}

export function ErrorProvider({ children }) {
    const Context = errorContext;
    const [value, setVal] = useState(null);

    const isOpen = useMemo(() => {
        return !!value;
    }, [value])


    function setValue(error) {
        setVal(error.message);
    }

    return <Context.Provider value={{
        value, setValue
    }}>
        {isOpen && <Box sx={errorBoxStyles}>
            <div style={containerStyles}>
                <Box>
                    <Typography sx={{ fontWeight: "bold" }} variant="h6">{value}</Typography>
                    <Typography variant="button">encountered error</Typography>
                </Box>
                <Box>
                    <IconButton onClick={() => setValue({ message: null })}>
                        <CloseRounded />
                    </IconButton>
                </Box>
            </div>
        </Box>}
        {children}
    </Context.Provider>
}