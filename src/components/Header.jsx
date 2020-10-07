import React from "react";
import Filter from "./Filter";
import ToggleTheme from "./ToggleTheme";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <div>
          <Label>devJobs</Label>
        </div>
        <div>
          <ToggleTheme />
        </div>
      </HeaderWrapper>
      <Filter />
    </div>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px 40px 40px;
  background: ${({ theme }) => theme.headerBg};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.headerText};
  font-size: 32px;
  font-weight: bold;
`;

export default Header;
