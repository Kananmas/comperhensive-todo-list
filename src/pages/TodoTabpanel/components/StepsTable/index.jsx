import { Box, Button, Dialog, DialogContent, Paper, Table, TableContainer } from "@mui/material";
import { StepsTableHead } from "./components/StepsTableHead";
import { StepsTableBody } from "./components/StepsTableBody";
import { Add } from "@mui/icons-material";
import { StepsForm } from "./components/StepsForm";
import { useState } from "react";

export function StepsTable() {
    const [open , setOpen] = useState(false);
    const [selectedData , setSelectedData] = useState();

    const handleClickAdd = () => {
        setOpen(true);
    }


    return <>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", padding: "12px" }}>
            <Button onClick={handleClickAdd} 
            sx={{ boxShadow: "1px 1px gainsboro" }}>
                <Add />
            </Button>
        </Box>
        <TableContainer component={Paper}>
            <Table>
                <StepsTableHead />
                <StepsTableBody />
            </Table>
        </TableContainer>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
                <StepsForm data={selectedData} />
            </DialogContent>
        </Dialog>
    </>
}