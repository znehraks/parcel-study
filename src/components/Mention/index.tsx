import React, { useCallback, useState } from "react";
import { Mention, MentionsInput, SuggestionDataItem } from "react-mentions";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { SuggestionBox } from "./styles";

const MentionComponent = () => {
  const { data: DummyData, error } = useSWR("dummy", fetcher);
  const [data, setData] = useState("");
  const renderSuggestion = useCallback(
    (
      suggestion: SuggestionDataItem,
      search: string,
      highlightedDisplay: React.ReactNode,
      index: number,
      focused: boolean
    ): React.ReactNode => {
      return <SuggestionBox>{suggestion.display}</SuggestionBox>;
    },
    []
  );
  return (
    <MentionsInput
      placeholder="MentionsInput"
      a11ySuggestionsListLabel="Suggested Mentions"
      value={data}
      onChange={(e) => {
        setData(e.target.value);
      }}
    >
      <Mention
        trigger="@"
        appendSpaceOnAdd
        data={
          DummyData?.map((elem) => ({
            id: elem.id,
            display: elem.value,
          })) || []
        }
        renderSuggestion={renderSuggestion}
      />
    </MentionsInput>
  );
};
export default MentionComponent;
