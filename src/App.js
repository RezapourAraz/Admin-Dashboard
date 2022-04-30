// Mui Components
import { Grid } from "@mui/material";

// Components
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const userData = [
  {
      userName: "Vahid Rezapour",
      userRole: "Admin"
  }
]

function App() {
  return (
    <Grid container>
        <Grid item xs={2.5}>
          <Sidebar userData={userData} />
        </Grid>
        <Grid item xs={9.5}>
          <Main userData={userData} />
        </Grid>
    </Grid>
  );
}

export default App;
