import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountRequest } from "../../actions/AdminDashboardAction";
import CountUp from "react-countup";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}));

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.fetchdashboard.data);
  console.log(dashboard);
  useEffect(() => {
    dispatch(fetchCountRequest());
  }, []);
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container spacing={4} columnGap={4} marginLeft={5} marginRight={5}>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{
                borderBottom: "7px solid #0F62FE",
                // boxShadow: "10px 5px  #378ce7",
              }}
              variant=""
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#0F62FE" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Learners
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <CountUp duration={8} end={dashboard.noOfLearners} />
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{
                borderBottom: "7px solid #97247E",
                // boxShadow: "10px 5px 5px #AC5098",
              }}
              variant=""
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#97247E" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Courses
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <CountUp duration={8.75} end={dashboard.noOfCourse} />
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Card
              style={{
                borderBottom: "7px solid #24A148",
                // boxShadow: "10px 5px 5px #1bde52",
              }}
              variant=""
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#24A148" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Active Learners
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <CountUp duration={8} end={dashboard.noOfActiveLearners} />
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={4} columnGap={4} mt={3} marginLeft={5}>
        <Grid item xs={12} md={3}>
          <Item style={{ backgroundColor: "#D5A7CB" }}>
            <Card variant="">
              <CardContent sx={{ height: "220px" }}>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#D5A7CB" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Top Learners
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: 15 }}>
                  {dashboard.getTopLearners &&
                    dashboard.getTopLearners.map((learner, index) => (
                      <React.Fragment key={index}>
                        {learner}
                        <hr
                          style={{ width: "100%", borderTop: "1px solid #ccc" }}
                        />
                      </React.Fragment>
                    ))}
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item style={{ backgroundColor: "#524F7D" }}>
            <Card variant="">
              <CardContent sx={{ height: "220px" }}>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "#524F7D" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Highest Enrollment Course
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: 15 }}>
                  {dashboard.highestEnrolledCourse &&
                    dashboard.highestEnrolledCourse.map((course, index) => (
                      <React.Fragment key={index}>
                        {course}
                        <hr
                          style={{ width: "100%", borderTop: "1px solid #ccc" }}
                        />
                      </React.Fragment>
                    ))}
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Item>
            <Card variant="">
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", color: "black" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Recent Feedback
                </Typography>
                <Typography variant="h6" gutterBottom></Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
