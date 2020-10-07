import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import styled from "styled-components";

const Card = ({
  company_logo: companyLogo,
  created_at: createdAt,
  type,
  title,
  company,
  location
}) => {
  return (
    <CardWrapper>
      <JobPostInfo>
        {companyLogo ? (
          <CompanyLogo src={companyLogo} alt="company-logo" />
        ) : (
          <DefaultCompanyLogo />
        )}
        <div>
          <JobSubText>{getDaysPassed(createdAt)}</JobSubText>
          <JobSubTextSeparator />
          <JobSubText>{type}</JobSubText>
        </div>
      </JobPostInfo>
      <div className="h-2x"></div>
      <JobTitle>{title}</JobTitle>
      <div className="h-x"></div>
      <JobCompany>{company}</JobCompany>
      <div className="h-4x"></div>
      <CardFooter>
        <LocationIcon />
        <JobLocation>{location}</JobLocation>
      </CardFooter>
    </CardWrapper>
  );
};

const getDaysPassed = date => {
  const dateDiff = new Date().getTime() - new Date(date).getTime();
  const days = Math.ceil(dateDiff / 86400000);
  return `${days} days ago`;
};

const CardWrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.cardShadow};
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.05);
  }
`;

const JobPostInfo = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyLogo = styled.img`
  height: auto;
  width: 24px;
`;

const DefaultCompanyLogo = styled(BusinessIcon)`
  width: 24px !important;
  fill: ${({ theme }) => theme.cardMainText} !important;
`;

const JobSubText = styled.label`
  font-size: 10px;
  color: ${({ theme }) => theme.cardSubText};
`;

const JobSubTextSeparator = styled(FiberManualRecordIcon)`
  height: 8px !important;
  fill: ${({ theme }) => theme.cardSubText} !important;
`;

const JobTitle = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.cardMainText};
`;

const JobCompany = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.cardSubText};
`;

const CardFooter = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: auto;
`;

const JobLocation = styled.label`
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  color: ${({ theme }) => theme.cardFooter};
`;

const LocationIcon = styled(RoomIcon)`
  height: 16px !important;
  fill: ${({ theme }) => theme.cardFooter} !important;
`;

export default Card;
