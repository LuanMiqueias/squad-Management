***REMOVED***
import Box from "../../components/Box/index";
import Column from "../../components/Column";
import PlayersPainel from "./components/PlayersPainel/index";
import TableContainer from "./components/TableContainer/index";
import TableTeams from "./components/TableTeams/index";
import styles from "./style.module.css";

const dataFakeTeams = [
  { name: "Barcelona", description: "Barcelona Squad" },
  { name: "Real Madrid", description: "Real Madrid Squad" },
  { name: "Milan", description: "Milan Squad" },
  { name: "Livepool", description: "Livepool Squad" },
  { name: "Bayern Munich", description: "Bayern Munich Squad" },
  { name: "lazio", description: "lazio Squad" },
];
const dataFakeTop = [
  { name: "Barcelona", description: "31.8" },
  { name: "Real Madrid", description: "25.4" },
  { name: "Milan", description: "24.8" },
  { name: "Livepool", description: "23.4" },
  { name: "Bayern Munich", description: "22.9" },
];
const dataFakePlayers = [
  { name: "Lionel Messi", percent: 25 },
  { name: "Cristiano Ronaldo", percent: 75 },
];
const Dashboard = () => {
***REMOVED***
    <div className={`${styles.dashboard} container`}>
      <div className={`${styles.dashboardContent} content`}>
        <Column>
          <Box title="My teams" isAddItems>
            <TableTeams data={dataFakeTeams} />
          </Box>
        </Column>
        <Column>
          <Box title="Top 5">
            <TableContainer data={dataFakeTop} />
          </Box>
          <Box isBackground>
***REMOVED***sPainel data={dataFakePlayers} />
          </Box>
        </Column>
      </div>
    </div>
***REMOVED***
***REMOVED***

export default Dashboard;
