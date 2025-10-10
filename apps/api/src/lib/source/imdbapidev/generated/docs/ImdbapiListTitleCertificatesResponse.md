# ImdbapiListTitleCertificatesResponse

Response message for listing certificates associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**Array&lt;ImdbapiCertificate&gt;**](ImdbapiCertificate.md) | List of certificates associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | Total count of certificates associated with the title. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleCertificatesResponse } from './api';

const instance: ImdbapiListTitleCertificatesResponse = {
    certificates,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
