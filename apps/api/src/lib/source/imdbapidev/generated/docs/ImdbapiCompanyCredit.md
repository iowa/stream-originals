# ImdbapiCompanyCredit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | [**ImdbapiCompany**](ImdbapiCompany.md) |  | [optional] [default to undefined]
**category** | **string** | Category of the company credit, such as production, sales, distribution, etc. | [optional] [default to undefined]
**countries** | [**Array&lt;ImdbapiCountry&gt;**](ImdbapiCountry.md) | Countries where the company is based or operates. | [optional] [default to undefined]
**yearsInvolved** | [**ImdbapiYearsInvolved**](ImdbapiYearsInvolved.md) |  | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiCompanyCredit } from './api';

const instance: ImdbapiCompanyCredit = {
    company,
    category,
    countries,
    yearsInvolved,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
