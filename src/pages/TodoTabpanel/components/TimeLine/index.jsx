// components
import { Box, Paper, Typography } from "@mui/material";

// hooks
import { useSelector } from "react-redux";

// utils
import { randomString } from "../../../../utils/random-string.utils";

// styles
import { dateText, floatLeft, floatRight, styles, timeEvent } from "./index.styles";
import { useDictionary } from "../../../../hooks/dictionary.hook";

export function StepsTimeline() {
    const steps = useSelector((store) => store.todo.selectedTodo.todoSteps);
    const {getWord , translateDate} = useDictionary();

    if (!steps.length) return <div style={{ textAlign: "center"}}><Typography variant="button">
        there are not steps defined for this item
    </Typography></div>

    let lineStyles = steps.length == 1 ? {...styles , height:"auto"}:styles;

    return <div style={lineStyles}>
        {
            steps.map((item, index) => {
                var endDateStr = item.endDate ? translateDate(item.endDate)
                :getWord("no end date specified");

                return <Paper key={randomString()} sx={timeEvent}>
                    <Paper sx={index % 2 === 0 ? floatLeft : floatRight}>
                        <Typography sx={dateText} variant="h6">
                            {getWord("startDate")}:  {translateDate(item.startDate)}
                        </Typography>
                        <Box sx={{ marginTop: "12px" }}>
                            {item.description}
                        </Box>
                        <Typography sx={{ ...dateText, marginTop: "12px" }} variant="h6">
                            {getWord("endDate")}: {endDateStr}
                        </Typography>
                    </Paper>
                </Paper>
            })
        }
    </div>
}