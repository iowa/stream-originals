# ImdbapiListNameTriviaResponse

Response message for listing trivia associated with a name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triviaEntries** | [**Array&lt;ImdbapiNameTrivia&gt;**](ImdbapiNameTrivia.md) | List of trivia entries associated with the name. | [optional] [default to undefined]
**totalCount** | **number** | Total count of trivia entries associated with the name. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListNameTriviaResponse } from './api';

const instance: ImdbapiListNameTriviaResponse = {
    triviaEntries,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
