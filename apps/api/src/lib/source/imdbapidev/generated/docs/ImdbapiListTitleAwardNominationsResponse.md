# ImdbapiListTitleAwardNominationsResponse

Response message for listing award nominations associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**ImdbapiAwardNominationStats**](ImdbapiAwardNominationStats.md) |  | [optional] [default to undefined]
**awardNominations** | [**Array&lt;ImdbapiAwardNomination&gt;**](ImdbapiAwardNomination.md) | List of award nominations associated with the title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleAwardNominationsResponse } from './api';

const instance: ImdbapiListTitleAwardNominationsResponse = {
    stats,
    awardNominations,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
