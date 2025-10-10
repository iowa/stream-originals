# ImdbapiRating

The Rating message represents the aggregate rating and votes count for a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregateRating** | **number** | The aggregate_rating field contains the average rating of the title, typically on a scale from 1 to 10. | [optional] [default to undefined]
**voteCount** | **number** | The votes_count field contains the total number of votes cast for the title. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiRating } from './api';

const instance: ImdbapiRating = {
    aggregateRating,
    voteCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
