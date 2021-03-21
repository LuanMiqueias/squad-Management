***REMOVED***
import Box from "../../components/Box/index";
import Column from "../../components/Column";
import PlayersPainel from "./components/PlayersPainel/index";
import TableContainer from "./components/TableContainer/index";
import TableTeams from "./components/TableTeams/index";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container";

const dataFakeTeams = [
  { name: "zzMilan", description: "zzMilan Squad", id: 1 },
  { name: "Livepool", description: "Livepool Squad", id: 2 },
  { name: "gggBayern Munich", description: "aaaBayern Munich Squad", id: 3 },
  { name: "lazio", description: "aaaaalazio Squad" },
  { name: "aaaaBarcelona", description: "zzzBarcelona Squad", id: 5 },
  { name: "Real Madrid", description: "Real Madrid Squad", id: 4 },
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
  const navigate = useHistory();
***REMOVED***
    <Container
      classNameContainer={styles.dashboard}
      classNameContent={styles.dashboardContent}
    >
      <Column>
        <Box
          title="My teams"
          isAddItems
          onClick={() => {
            navigate.push("/create-team");
    ***REMOVED***}
        >
          <TableTeams data={dataFakeTeams} />
        </Box>
      </Column>
      <Column>
        <Box title="Top 5">
          <TableContainer data={dataFakeTop} />
        </Box>
        <Box isBackground classNameBox={styles.dashboard_box_playerPainel}>
          <PlayersPainel data={dataFakePlayers} />
        </Box>
      </Column>
    </Container>
***REMOVED***
***REMOVED***

export default Dashboard;
