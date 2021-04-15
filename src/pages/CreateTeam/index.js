import React from "react";
import Box from "../../components/Box";
import Column from "../../components/Column";
import Container from "../../components/Container";
import style from "./style.module.css";
import Form from "./components/Form";
import { CreateTeamProvider } from "./context";

const CreateTeam = () => {
  React.useEffect(() => {
    //top of page in loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container classNameContainer={style.createTeam_container}>
        <Column>
          <Box
            title="Create your team"
            classNameBox={style.createTeam_box_container}
          >
            <CreateTeamProvider>
              <Form />
            </CreateTeamProvider>
          </Box>
        </Column>
      </Container>
    </div>
  );
};

export default CreateTeam;
