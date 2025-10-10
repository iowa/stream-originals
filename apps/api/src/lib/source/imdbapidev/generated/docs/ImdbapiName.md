# ImdbapiName

The Name message represents a person in the IMDb database, such as an actor, director, or producer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the name in the IMDb database. | [optional] [default to undefined]
**displayName** | **string** | The display name of the person, typically their full name. | [optional] [default to undefined]
**alternativeNames** | **Array&lt;string&gt;** | Alternative names for the person, which may include stage names, nicknames, or other variations. | [optional] [default to undefined]
**primaryImage** | [**ImdbapiImage**](ImdbapiImage.md) |  | [optional] [default to undefined]
**primaryProfessions** | **Array&lt;string&gt;** | A list of primary professions associated with the person, such as \&quot;Actor\&quot;, \&quot;Director\&quot;, \&quot;Producer\&quot;, etc. | [optional] [default to undefined]
**biography** | **string** | A brief biography or description of the person, which may include their career highlights, achievements, and other relevant information. | [optional] [default to undefined]
**heightCm** | **number** | The height of the person in centimeters. | [optional] [default to undefined]
**birthName** | **string** | The birth name of the person, which may differ from their display name. | [optional] [default to undefined]
**birthDate** | [**ImdbapiPrecisionDate**](ImdbapiPrecisionDate.md) |  | [optional] [default to undefined]
**birthLocation** | **string** | The birth location of the person, which may include the city and country of birth. | [optional] [default to undefined]
**deathDate** | [**ImdbapiPrecisionDate**](ImdbapiPrecisionDate.md) |  | [optional] [default to undefined]
**deathLocation** | **string** | The death location of the person, which may include the city and country of death. | [optional] [default to undefined]
**deathReason** | **string** | The reason for the person\&#39;s death, if applicable. | [optional] [default to undefined]
**meterRanking** | [**ImdbapiNameMeterRanking**](ImdbapiNameMeterRanking.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiName } from './api';

const instance: ImdbapiName = {
    id,
    displayName,
    alternativeNames,
    primaryImage,
    primaryProfessions,
    biography,
    heightCm,
    birthName,
    birthDate,
    birthLocation,
    deathDate,
    deathLocation,
    deathReason,
    meterRanking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
