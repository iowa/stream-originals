# ImdbapiListTitlesResponse

Response message for listing titles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**titles** | [**Array&lt;ImdbapiTitle&gt;**](ImdbapiTitle.md) | List of titles matching the request criteria. | [optional] [default to undefined]
**totalCount** | **number** | Total number of titles matching the request criteria. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitlesResponse } from './api';

const instance: ImdbapiListTitlesResponse = {
    titles,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
