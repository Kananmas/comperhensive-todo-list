import { Dialog, DialogContent } from "@mui/material";
import { FormGenerator } from "../../../../components/FormGenerator";
import { todoForm } from "./utils/form.utils";

export function FormDialog({open , onClose}) {
    function handleSubmitForm(data) {
        onClose();
    }
    return <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <FormGenerator fields={todoForm()} onSubmit={handleSubmitForm}/>
            </DialogContent>
        </Dialog>
}