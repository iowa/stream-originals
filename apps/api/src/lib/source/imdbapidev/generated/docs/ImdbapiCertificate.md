# ImdbapiCertificate

The Certificate message represents a content rating certificate for a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **string** | The rating of the certificate, such as \&quot;PG-13\&quot;, \&quot;R\&quot;, etc. | [optional] [default to undefined]
**country** | [**ImdbapiCountry**](ImdbapiCountry.md) |  | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiCertificate } from './api';

const instance: ImdbapiCertificate = {
    rating,
    country,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
