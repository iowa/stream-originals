# ImdbapiReleaseDate

The ReleaseDate message represents the release date of a title in a specific country.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**ImdbapiCountry**](ImdbapiCountry.md) |  | [optional] [default to undefined]
**releaseDate** | [**ImdbapiPrecisionDate**](ImdbapiPrecisionDate.md) |  | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | The attributes field contains additional attributes related to the release date.  These attributes can include information such as the format of the release (e.g., \&quot;Theatrical\&quot;, \&quot;DVD\&quot;, \&quot;Blu-ray\&quot;). | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiReleaseDate } from './api';

const instance: ImdbapiReleaseDate = {
    country,
    releaseDate,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
