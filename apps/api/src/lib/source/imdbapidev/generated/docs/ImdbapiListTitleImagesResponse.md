# ImdbapiListTitleImagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | [**Array&lt;ImdbapiImage&gt;**](ImdbapiImage.md) | List of images associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | Total count of images associated with the title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleImagesResponse } from './api';

const instance: ImdbapiListTitleImagesResponse = {
    images,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
