# ImdbapiInterestCategory

InterestCategory represents a category of interests in the IMDB API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **string** | Unique identifier for the interest category. | [optional] [default to undefined]
**interests** | [**Array&lt;ImdbapiInterest&gt;**](ImdbapiInterest.md) | A list of interests that belong to this category. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiInterestCategory } from './api';

const instance: ImdbapiInterestCategory = {
    category,
    interests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
