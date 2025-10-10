# ImdbapiListTitleVideosResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**videos** | [**Array&lt;ImdbapiVideo&gt;**](ImdbapiVideo.md) | List of videos associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | Total count of videos associated with the title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleVideosResponse } from './api';

const instance: ImdbapiListTitleVideosResponse = {
    videos,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
