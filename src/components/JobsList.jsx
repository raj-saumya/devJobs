import React, { useEffect, useContext } from "react";
import Card from "../Card";
import axios from "axios";
import { CTX } from "../services/DataStore";
import styled from "styled-components";
import Loader from "../assets/chatBot";
import Lottie from "react-lottie";

const JobsList = () => {
  const { state, dispatch } = useContext(CTX);

  useEffect(() => {
    dispatch({ type: "TOGGLE_LOADING" });
    axios
      .get("https://github-jobs.glitch.me/positions.json?page=0")
      .then(resp => {
        dispatch({ type: "UPDATE_JOBS", payload: resp.data });
        dispatch({ type: "TOGGLE_LOADING" });
      });
  }, []);

  return (
    <JobsBody>
      {!state.isLoading ? (
        <JobsGrid>
          {state.jobsList.map((d, i) => (
            <Card key={i} {...d} />
          ))}
        </JobsGrid>
      ) : (
        <LoaderIcon>
          <Lottie options={defaultOptions} height={400} width={400} />
        </LoaderIcon>
      )}
    </JobsBody>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
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

const LoaderIcon = styled.div`
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
`;

export default JobsList;
