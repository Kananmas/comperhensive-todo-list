import { TableCell, TableRow } from "@mui/material";
import { removeKeysFromEntires } from "../../../../../../../../utils/remove-keys-from-entry.utils"
import { randomString } from "../../../../../../../../utils/random-string.utils";

export function StepTableRow({todoStep}) {
    const entries = removeKeysFromEntires(todoStep , ["id" , "todoId"]);

    return <TableRow>
        {
            entries.map((ent) => {
                let [ ,value] = ent;

                if(value instanceof Date) {
                    value = value.toDateString();
                }

                return <TableCell key={randomString()}>
                    {value}
                </TableCell>
            })
        }
    </TableRow>

}