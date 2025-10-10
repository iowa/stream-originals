# ImdbapiListStarMetersResponse

Response message for listing star meter rankings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | [**Array&lt;ImdbapiName&gt;**](ImdbapiName.md) | List of names with their star meter rankings. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListStarMetersResponse } from './api';

const instance: ImdbapiListStarMetersResponse = {
    names,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
