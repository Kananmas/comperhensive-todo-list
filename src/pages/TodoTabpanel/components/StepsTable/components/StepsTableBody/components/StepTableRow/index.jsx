import { TableCell, TableRow } from "@mui/material";
import { removeKeysFromEntires } from "../../../../../../../../utils/remove-keys-from-entry.utils"
import { randomString } from "../../../../../../../../utils/random-string.utils";
import { useDictionary } from "../../../../../../../../hooks/dictionary.hook";

export function StepTableRow({todoStep}) {
    const entries = removeKeysFromEntires(todoStep , ["id" , "todoId"]);
    const {translateDate} = useDictionary();
    return <TableRow>
        {
            entries.map((ent) => {
                let [ ,value] = ent;

                if(value instanceof Date) {
                    value = translateDate(value);
                }

                return <TableCell key={randomString()}>
                    {value}
                </TableCell>
            })
        }
    </TableRow>

}