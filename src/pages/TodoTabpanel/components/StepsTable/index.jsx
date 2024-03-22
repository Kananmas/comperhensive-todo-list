import { Table, TableContainer } from "@mui/material";
import { StepsTableHead } from "./components/StepsTableHead";
import { StepsTableRow } from "./components/StepsTableBody";

export function StepsTable() {

    return <TableContainer>
        <Table>
            <StepsTableHead/>
            <StepsTableRow />
        </Table>
    </TableContainer>
}