import { Box, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { randomString } from "../../../../utils/random-string.utils";


const styles = {
    backgroundColor: "orange",
    border: "3px solid white",
    width: "8px",
    margin: "0px auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
};
const timeEvent = {
    backgroundColor: "white",
    border: "4px solid orange",
    borderRadius: "50%",
    height: "16px",
    width: "16px",
}
const floatLeft = { position: "absolute", left: "5%", maxWidth: "30%"  , padding:'12px'}
const floatRight = { position: "absolute", right: "5%", maxWidth: "30%" , padding:"12px" }
const dateText = { padding: "12px", background: "gainsboro", borderRadius: "12px" };

export function StepsTimeline() {
    const steps = useSelector((store) => store.todo.selectedTodo.steps);

    return <div style={styles}>
        {
            steps.map((item, index) => {
                return <Paper key={randomString()} sx={timeEvent}>
                    <Paper sx={index % 2 === 0 ? floatLeft : floatRight}>
                        <Typography sx={dateText} variant="h6">
                          Start:  {item.startDate.toDateString()}
                        </Typography>
                        <Box sx={{marginTop:"12px"}}>
                            Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida rutrum quisque non tellus. Elit pellentesque habitant morbi tristique senectus et netus. In massa tempor nec feugiat nisl pretium fusce id. Adipiscing commodo elit at imperdiet dui. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Ultrices tincidunt arcu non sodales neque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Vitae suscipit tellus mauris a diam maecenas sed enim. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nisl purus in mollis nunc sed id semper risus.
                        </Box>
                        <Typography sx={{...dateText , marginTop:"12px"}} variant="h6">
                           End: {item.endDate.toDateString()}
                        </Typography>
                    </Paper>

                </Paper>
            })
        }
    </div>
}