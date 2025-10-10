# ImdbapiListNameFilmographyResponse

Response message for listing filmography associated with a name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits** | [**Array&lt;ImdbapiCredit&gt;**](ImdbapiCredit.md) | List of filmography credits associated with the name. | [optional] [default to undefined]
**totalCount** | **number** | Total count of filmography credits associated with the name. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListNameFilmographyResponse } from './api';

const instance: ImdbapiListNameFilmographyResponse = {
    credits,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
