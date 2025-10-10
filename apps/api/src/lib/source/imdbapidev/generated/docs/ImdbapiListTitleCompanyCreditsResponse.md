# ImdbapiListTitleCompanyCreditsResponse

Response message for listing company credits associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyCredits** | [**Array&lt;ImdbapiCompanyCredit&gt;**](ImdbapiCompanyCredit.md) | List of company credits associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | Total count of company credits matched for listing. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleCompanyCreditsResponse } from './api';

const instance: ImdbapiListTitleCompanyCreditsResponse = {
    companyCredits,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
