# ImdbapiCredit

The Credit message represents a credit for a person in a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | [**ImdbapiTitle**](ImdbapiTitle.md) |  | [optional] [default to undefined]
**name** | [**ImdbapiName**](ImdbapiName.md) |  | [optional] [default to undefined]
**category** | **string** | The category of the credit. | [optional] [default to undefined]
**characters** | **Array&lt;string&gt;** | The characters played by the actor/actress in the title. | [optional] [default to undefined]
**episodeCount** | **number** | The number of episodes in which the person has appeared. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiCredit } from './api';

const instance: ImdbapiCredit = {
    title,
    name,
    category,
    characters,
    episodeCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
