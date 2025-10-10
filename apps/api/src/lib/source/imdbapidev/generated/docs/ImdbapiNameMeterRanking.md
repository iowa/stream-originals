# ImdbapiNameMeterRanking

The NameMeterRanking message represents the IMDb popularity meter ranking for a person, including their current rank, change direction, and difference from the previous measurement. This ranking is used to indicate the popularity of the person over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentRank** | **number** | The current rank of the person in the IMDb popularity meter. | [optional] [default to undefined]
**changeDirection** | **string** | The direction of the change in rank, which can be \&quot;UP\&quot;, \&quot;DOWN\&quot;, or \&quot;none\&quot;. | [optional] [default to undefined]
**difference** | **number** | The difference in rank compared to the previous measurement. Positive for an increase, negative for a decrease, and zero for no change. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiNameMeterRanking } from './api';

const instance: ImdbapiNameMeterRanking = {
    currentRank,
    changeDirection,
    difference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
