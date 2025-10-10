# ImdbapiInterest

Interest represents a specific interest in the IMDB API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the interest. | [optional] [default to undefined]
**name** | **string** | The name of the interest, e.g., \&quot;Action\&quot;, \&quot;Action Epic\&quot;, \&quot;Adult Animation\&quot;, etc. | [optional] [default to undefined]
**primaryImage** | [**ImdbapiImage**](ImdbapiImage.md) |  | [optional] [default to undefined]
**description** | **string** | A brief description of the interest, which can include details about the genre or type. | [optional] [default to undefined]
**isSubgenre** | **boolean** | Indicates whether the interest is a subgenre of another genre. | [optional] [default to undefined]
**similarInterests** | [**Array&lt;ImdbapiInterest&gt;**](ImdbapiInterest.md) | A list of similar interests that are related to this interest. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiInterest } from './api';

const instance: ImdbapiInterest = {
    id,
    name,
    primaryImage,
    description,
    isSubgenre,
    similarInterests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
