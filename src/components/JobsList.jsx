import React, { useEffect, useContext } from "react";
import Card from "../Card";
import axios from "axios";
import { CTX } from "../services/DataStore";
import styled from "styled-components";

const JobsList = () => {
  const { state, dispatch } = useContext(CTX);

  useEffect(() => {
    axios
      .get("https://github-jobs.glitch.me/positions.json?page=0")
      .then(resp => {
        dispatch({ type: "UPDATE_JOBS", payload: resp.data });
      });
  }, []);

  return (
    <JobsBody>
      <JobsGrid>
        {state.jobsList.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </JobsGrid>
    </JobsBody>
  );
};

const JobsBody = styled.div`
  background: ${({ theme }) => theme.bodyBg};
  flex: 1;
  padding: 72px 48px 24px 48px;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 40px;
`;

export default JobsList;
