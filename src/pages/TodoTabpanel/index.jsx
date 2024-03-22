import { Tab, Tabs } from "@mui/material";
import { StepsTable } from "./components/StepsTable";

export function TodoTabpanel() {

    return <Tabs>
        <Tab>
            <StepsTable />
        </Tab>
        <Tab>
        </Tab>
    </Tabs>
}