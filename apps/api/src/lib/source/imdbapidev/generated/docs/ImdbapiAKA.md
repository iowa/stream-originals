# ImdbapiAKA

The AKA (Also Known As) message represents alternative titles for a movie or TV show in different languages and countries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The display text of the title in the specified language and country. | [optional] [default to undefined]
**country** | [**ImdbapiCountry**](ImdbapiCountry.md) |  | [optional] [default to undefined]
**language** | [**ImdbapiLanguage**](ImdbapiLanguage.md) |  | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | Additional attributes related to the title, such as \&quot;original title\&quot;, \&quot;working title\&quot;, or \&quot;alternative title\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiAKA } from './api';

const instance: ImdbapiAKA = {
    text,
    country,
    language,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
