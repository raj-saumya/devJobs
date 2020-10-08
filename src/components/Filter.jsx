import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import axios from "axios";
import { CTX } from "../services/DataStore";

const Search = withStyles({
  root: {
    fontSize: 12,
    padding: "6px 16px",
    color: "#fff",
    background: "#5a65e4",
    height: "fit-content",
    "&:hover": {
      backgroundColor: "#5a65e4e0"
    }
  }
})(Button);

const Check = withStyles({
  root: {
    color: "#5a65e4",
    "&$checked": {
      color: "#5a65e4"
    }
  },
  checked: {}
})(Checkbox);

const Filter = () => {
  const [filterProfile, setFilterProfile] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterJobType, setFilterJobType] = useState(true);
  const { dispatch } = useContext(CTX);

  const handleSearch = () => {
    dispatch({ type: "TOGGLE_LOADING" });
    axios
      .get("https://github-jobs.glitch.me/positions.json", {
        params: {
          page: 0,
          description: filterProfile,
          location: filterLocation,
          full_time: filterJobType
        }
      })
      .then(resp => {
        dispatch({ type: "UPDATE_JOBS", payload: resp.data });
        dispatch({ type: "TOGGLE_LOADING" });
      });
  };

  return (
    <FilterWrapper>
      <JobSearchFilter>
        <SearchIcon style={{ color: "#5a65e4" }} />
        <Input
          type="text"
          name="filter-any"
          placeholder="Filter by title,companies,etc."
          value={filterProfile}
          onChange={e => setFilterProfile(e.target.value)}
        />
      </JobSearchFilter>
      <Divider />
      <LocationFilter>
        <LocationOnIcon style={{ color: "#5a65e4" }} />
        <Input
          type="text"
          name="filter-location"
          placeholder="Filter by location"
          value={filterLocation}
          onChange={e => setFilterLocation(e.target.value)}
        />
      </LocationFilter>
      <Divider />
      <SearchWrapper>
        <Check
          name="filterJobType"
          checked={filterJobType}
          onChange={e => setFilterJobType(e.target.checked)}
        />
        <Label>Full Time Only</Label>
        <Search variant="contained" disableElevation onClick={handleSearch}>
          Search
        </Search>
      </SearchWrapper>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  width: calc(100% - 136px);
  padding: 8px 0;
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const JobSearchFilter = styled.div`
  flex: 2;
  display: flex;
  padding: 0 16px;
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: ${({ theme }) => theme.divider};
`;

const LocationFilter = styled.div`
  flex: 1;
  display: flex;
  padding: 0 16px;
`;

const SearchWrapper = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 12px;
  color: ${({ theme }) => theme.cardMainText};
`;

const Input = styled.input`
  font-size: 14px;
  border: none;
  text-decoration: none;
  outline: none;
  padding: 4px 12px;
  flex: 1;
  background: none;
  color: ${({ theme }) => theme.cardMainText};
`;

export default Filter;
