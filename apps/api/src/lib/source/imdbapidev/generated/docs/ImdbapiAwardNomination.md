# ImdbapiAwardNomination

AwardNomination represents a nomination for an award.  The unique identifier for the award nomination.   string id = 1  [(google.api.field_visibility).restriction = \"INTERNAL\"];

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**titles** | [**Array&lt;ImdbapiTitle&gt;**](ImdbapiTitle.md) | The titles associated with the award nomination. | [optional] [default to undefined]
**nominees** | [**Array&lt;ImdbapiName&gt;**](ImdbapiName.md) | The nominees associated with the award nomination. | [optional] [default to undefined]
**event** | [**ImdbapiEvent**](ImdbapiEvent.md) |  | [optional] [default to undefined]
**year** | **number** | The year of the award nomination. | [optional] [default to undefined]
**text** | **string** | The text description of the award nomination. | [optional] [default to undefined]
**category** | **string** | The category of the award nomination. | [optional] [default to undefined]
**isWinner** | **boolean** | Whether the nomination is a winner. | [optional] [default to undefined]
**winnerRank** | **number** | The rank of the winner in the nomination. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiAwardNomination } from './api';

const instance: ImdbapiAwardNomination = {
    titles,
    nominees,
    event,
    year,
    text,
    category,
    isWinner,
    winnerRank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
