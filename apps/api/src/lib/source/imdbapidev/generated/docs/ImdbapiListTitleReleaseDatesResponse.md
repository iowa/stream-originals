# ImdbapiListTitleReleaseDatesResponse

Response message for listing release dates associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseDates** | [**Array&lt;ImdbapiReleaseDate&gt;**](ImdbapiReleaseDate.md) | List of release dates associated with the title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleReleaseDatesResponse } from './api';

const instance: ImdbapiListTitleReleaseDatesResponse = {
    releaseDates,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
