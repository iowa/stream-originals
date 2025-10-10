# ImdbapiVideo

Video is a message that represents a video associated with a title.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the video. | [optional] [default to undefined]
**type** | **string** | The type of the video. | [optional] [default to undefined]
**name** | **string** | The name of the video. | [optional] [default to undefined]
**primaryImage** | [**ImdbapiImage**](ImdbapiImage.md) |  | [optional] [default to undefined]
**description** | **string** | A description of the video. | [optional] [default to undefined]
**width** | **number** | The width of the video in pixels. | [optional] [default to undefined]
**height** | **number** | The height of the video in pixels. | [optional] [default to undefined]
**runtimeSeconds** | **number** | The runtime of the video in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiVideo } from './api';

const instance: ImdbapiVideo = {
    id,
    type,
    name,
    primaryImage,
    description,
    width,
    height,
    runtimeSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
