# ImdbapiListTitleEpisodesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | [**Array&lt;ImdbapiEpisode&gt;**](ImdbapiEpisode.md) | List of episodes associated with the title. | [optional] [default to undefined]
**totalCount** | **number** | The total number of episodes that have aired for this title. | [optional] [default to undefined]
**nextPageToken** | **string** | Token for the next page of results, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiListTitleEpisodesResponse } from './api';

const instance: ImdbapiListTitleEpisodesResponse = {
    episodes,
    totalCount,
    nextPageToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
