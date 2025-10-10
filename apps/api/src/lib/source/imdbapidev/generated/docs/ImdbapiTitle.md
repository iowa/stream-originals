# ImdbapiTitle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the title. | [optional] [default to undefined]
**type** | **string** | The type of the title, such as \&quot;movie\&quot;, \&quot;tvSeries\&quot;, \&quot;tvEpisode\&quot;, etc. | [optional] [default to undefined]
**isAdult** | **boolean** | The is_adult field indicates whether the title is intended for adult audiences. | [optional] [default to undefined]
**primaryTitle** | **string** | The primary title of the title, which is typically the most recognized name. | [optional] [default to undefined]
**originalTitle** | **string** | The original title of the title, normally which is the title as it was originally released. | [optional] [default to undefined]
**primaryImage** | [**ImdbapiImage**](ImdbapiImage.md) |  | [optional] [default to undefined]
**startYear** | **number** | The start_year field is used for titles that have a defined start, such as movies or TV series. | [optional] [default to undefined]
**endYear** | **number** | The end_year field is used for titles that have a defined end, such as TV series. | [optional] [default to undefined]
**runtimeSeconds** | **number** | The runtime_seconds field contains the total runtime of the title in minutes. | [optional] [default to undefined]
**genres** | **Array&lt;string&gt;** | The genres field contains a list of genres associated with the title. | [optional] [default to undefined]
**rating** | [**ImdbapiRating**](ImdbapiRating.md) |  | [optional] [default to undefined]
**metacritic** | [**ImdbapiMetacritic**](ImdbapiMetacritic.md) |  | [optional] [default to undefined]
**plot** | **string** | The plot field contains a brief summary or description of the title\&#39;s storyline. | [optional] [default to undefined]
**directors** | [**Array&lt;ImdbapiName&gt;**](ImdbapiName.md) | The list of directors associated with the title, which can include multiple directors. | [optional] [default to undefined]
**writers** | [**Array&lt;ImdbapiName&gt;**](ImdbapiName.md) | The list of writers associated with the title, which can include multiple writers. | [optional] [default to undefined]
**stars** | [**Array&lt;ImdbapiName&gt;**](ImdbapiName.md) | The list of stars associated with the title, which can include multiple actors or actresses. | [optional] [default to undefined]
**originCountries** | [**Array&lt;ImdbapiCountry&gt;**](ImdbapiCountry.md) | The list of countries where the title was produced or is associated with. | [optional] [default to undefined]
**spokenLanguages** | [**Array&lt;ImdbapiLanguage&gt;**](ImdbapiLanguage.md) | The list of languages spoken in the title, which can include multiple languages. | [optional] [default to undefined]
**interests** | [**Array&lt;ImdbapiInterest&gt;**](ImdbapiInterest.md) | The list of interests associated with the title. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiTitle } from './api';

const instance: ImdbapiTitle = {
    id,
    type,
    isAdult,
    primaryTitle,
    originalTitle,
    primaryImage,
    startYear,
    endYear,
    runtimeSeconds,
    genres,
    rating,
    metacritic,
    plot,
    directors,
    writers,
    stars,
    originCountries,
    spokenLanguages,
    interests,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
