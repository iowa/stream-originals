# ImdbapiListTitleCreditsResponse

Response message for listing credits associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits** | [**Array&lt;ImdbapiCredit&gt;**](ImdbapiCredit.md) | List of credits associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | Total count of credits associated with the title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleCreditsResponse } from './api';

const instance: ImdbapiListTitleCreditsResponse = {
    credits,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
