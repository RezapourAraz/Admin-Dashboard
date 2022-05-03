import React from "react";

// Mui Components
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

// Mui Icons
import ChairIcon from "@mui/icons-material/Chair";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const InformationCard = ({ data }) => {
  const { title, count, viewPercent, color, icon } = data;

  return (
    <Card sx={{ backgroundColor: "common.white", minWidth: "200px" }}>
      <CardContent sx={{ padding: "10px 10px" }}>
        <Grid container justifyContent="space-between">
          <Grid item p={1}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight="bold"
            >
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight="bold">
              {count}
            </Typography>
          </Grid>
          <Grid item position="relative">
            <Box bgcolor={color} p={0.5} borderRadius={2} boxShadow={4} >
              {icon === "chair" && (
                <ChairIcon fontSize="large" sx={{ color: "common.white" }} />
              )}
              {icon === "chart" && (
                <BarChartIcon fontSize="large" sx={{ color: "common.white" }} />
              )}
              {icon === "store" && (
                <StoreIcon fontSize="large" sx={{ color: "common.white" }} />
              )}
              {icon === "person" && (
                <PersonAddAlt1Icon
                  fontSize="large"
                  sx={{ color: "common.white" }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize={16}
          color="success.main"
          mt={2}
        >
          +{viewPercent}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InformationCard;
