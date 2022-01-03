import React, { useState } from "react";
import styled from "styled-components";

import {
  Page,
  Dropdown,
  Label,
  Input,
  Checkbox,
  Button,
  Loader,
} from "lib/components";
import { activityTypes } from "./activityTypes";
import useActivitySuggestion from "./useActivitySuggestion";

const PageWrapper = styled.div`
  margin: 80px auto;
  margin-inline: clamp(25px, 5%, 70px);
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;

  @media (max-width: 375px) {
    flex-direction: column;
  }

  & > :first-child {
    padding-right: 20px;
  }
`;

const StyledDetails = styled.details`
  width: fit-content;
  margin: 0 auto;
`;

const ActivityContentWrapper = styled.div`
  margin-left: 0px;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid white;
  width: fit-content;
`;

const ActivityWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const isParticipantValid = (val) => {
  return !isNaN(val) && val >= 0 && val <= 100;
};

const buildQuery = (queryParamsArr) => {
  if (!queryParamsArr || queryParamsArr.length === 0)
    throw new Error("Array expected with at least one element");

  const filteredArr = queryParamsArr.filter((q) => q.included);

  if (filteredArr.length === 0) return "";

  let params = "?";

  filteredArr.forEach((query, i) => {
    if (i !== 0) params += "&";
    params += `${query.key}=${query.value}`;
  });

  return params;
};

function SuggestionPage() {
  const [participantNumber, setParticipantNumber] = useState(1);
  const [activity, setActivity] = useState(activityTypes[0]);
  const [includeActivity, setIncludeActivity] = useState(false);
  const [includeParticipant, setIncludeParticipant] = useState(false);
  const [isParticipantError, setIsParticipantError] = useState(false);

  const { refetch, data, isSuccess, isFetching } = useActivitySuggestion(
    { enabled: false },
    buildQuery([
      {
        included: includeActivity,
        key: "type",
        value: activity.value,
      },
      {
        included: includeParticipant,
        key: "participants",
        value: participantNumber,
      },
    ])
  );

  const onParticipantChange = (val) => {
    setIsParticipantError(!isParticipantValid(participantNumber));
    setParticipantNumber(val);
  };

  const onParticipantBlur = (val) => {
    setParticipantNumber(parseInt(val) || 1);
  };

  const onActivityChange = (item) => setActivity(item);
  const onIncludeActivityChange = (e) => setIncludeActivity(e.target.checked);

  const onIncludeParticipantChange = (e) =>
    setIncludeParticipant(e.target.checked);

  const getActivity = () => !isFetching && refetch();

  return (
    <Page>
      <PageWrapper>
        <StyledDetails>
          <summary style={{ textAlign: "center" }}>Filters:</summary>
          <Checkbox
            label="Include activity type"
            checked={includeActivity}
            style={{ marginTop: 15, justifyContent: "center" }}
            onChange={onIncludeActivityChange}
          />
          <DropdownWrapper>
            <Label>Select:</Label>
            <Dropdown
              items={activityTypes}
              value={activity}
              onChange={onActivityChange}
            />
          </DropdownWrapper>
          <Checkbox
            label="Include participants"
            checked={includeParticipant}
            style={{ marginTop: 50, justifyContent: "center" }}
            onChange={onIncludeParticipantChange}
          />
          <Input
            label="Participants"
            style={{ width: 250 }}
            value={participantNumber}
            onChange={onParticipantChange}
            onBlur={onParticipantBlur}
            type="number"
            error={
              !isParticipantValid(participantNumber)
                ? "Participant number must be between 1 and 100"
                : undefined
            }
          />
        </StyledDetails>
        <Button
          style={{ margin: "20px auto", display: "flex" }}
          onClick={getActivity}
          disabled={(isParticipantError && includeParticipant) || isFetching}
        >
          Get Activity
        </Button>
        <ActivityWrapper>
          {isFetching && <Loader />}
          {isSuccess && !isFetching && (
            <ActivityContentWrapper>
              Activity: {data.activity || data?.error}
            </ActivityContentWrapper>
          )}
        </ActivityWrapper>
      </PageWrapper>
    </Page>
  );
}

export default SuggestionPage;
