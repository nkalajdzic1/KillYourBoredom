import { Label } from "lib/components";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px auto;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
`;

const StyledLabel = styled(Label)`
  padding: 5px;
  font-weight: 500;
`;

const StyledDetails = styled.details`
  margin-top: 20px;

  summary {
    font-size: 20px;
  }
`;

function UserInfo({ data }) {
  const { name, picture, gender, cell, email, dob, location } = data.results[0];

  return (
    <Wrapper>
      <img src={picture.large} width={128} height={128} alt="" />
      <TextWrapper>
        <StyledLabel>
          Name: {`${name.title} ${name.first} ${name.last}`}
        </StyledLabel>
        <StyledLabel>Gender: {`${gender}`}</StyledLabel>
        <StyledLabel>Phone number: {cell}</StyledLabel>
        <StyledLabel>Email: {email}</StyledLabel>
        <StyledLabel>
          Birth date: {new Date(dob.date).toUTCString()}
        </StyledLabel>
        <StyledLabel>Age: {dob.age}</StyledLabel>
        <StyledDetails>
          <summary>Location info</summary>
          <StyledLabel>Country: {location.country}</StyledLabel>
          <StyledLabel>State: {location.state}</StyledLabel>
          <StyledLabel>City: {location.city}</StyledLabel>
          <StyledLabel>Post code: {location.postcode}</StyledLabel>
          <StyledLabel>
            Address: {`${location.street.name} ${location.street.number}`}
          </StyledLabel>
          <StyledLabel>
            Coordinates: {location.coordinates.latitude}{" "}
            {location.coordinates.longitude}
          </StyledLabel>
        </StyledDetails>
      </TextWrapper>
    </Wrapper>
  );
}

export default UserInfo;
