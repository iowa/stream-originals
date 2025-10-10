# ImdbapiPrecisionDate

The PrecisionDate message represents a specific date, typically used for birth dates, death dates, or release dates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**year** | **number** | The year of the date, represented as an integer. | [optional] [default to undefined]
**month** | **number** | The month of the date, represented as an integer. | [optional] [default to undefined]
**day** | **number** | The day of the date, represented as an integer. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiPrecisionDate } from './api';

const instance: ImdbapiPrecisionDate = {
    year,
    month,
    day,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
