# ImdbapiEpisode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**primaryImage** | [**ImdbapiImage**](ImdbapiImage.md) |  | [optional] [default to undefined]
**season** | **string** |  | [optional] [default to undefined]
**episodeNumber** | **number** |  | [optional] [default to undefined]
**runtimeSeconds** | **number** |  | [optional] [default to undefined]
**plot** | **string** |  | [optional] [default to undefined]
**rating** | [**ImdbapiRating**](ImdbapiRating.md) |  | [optional] [default to undefined]
**releaseDate** | [**ImdbapiPrecisionDate**](ImdbapiPrecisionDate.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiEpisode } from './api';

const instance: ImdbapiEpisode = {
    id,
    title,
    primaryImage,
    season,
    episodeNumber,
    runtimeSeconds,
    plot,
    rating,
    releaseDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
