import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";
import { todoForm } from "./utils/form.utils";

export function FormDialog({open , onClose}) {
    return <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <FormGenerator fields={todoForm()}/>
            </DialogContent>
        </Dialog>
}