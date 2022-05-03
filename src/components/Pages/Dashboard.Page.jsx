import React from "react";

// Mui Components
import { Grid } from "@mui/material";
import InformationCard from "../Cards/Information.Card";

const infosData = [
  {
    id: 1,
    title: "Bookings",
    count: 352,
    viewPercent: 55,
    icon: "chair",
    color: "grey.800",
  },
  {
    id: 2,
    title: "Today's Users",
    count: 2300,
    viewPercent: 3,
    icon: "chart",
    color: "info.main",
  },
  {
    id: 3,
    title: "Revenue",
    count: "34K",
    viewPercent: 1,
    icon: "store",
    color: "success.light",
  },
  {
    id: 4,
    title: "Followers",
    count: 91,
    viewPercent: 5,
    icon: "person",
    color: "error.light",
  },
];

const DashboardPage = () => {
  return (
    <>
      <Grid container p={2} spacing={2}>
        {infosData.map((item) => (
          <Grid minWidth={210} item xs={12} sm={6} md={3} key={item.id}>
            <InformationCard data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardPage;
