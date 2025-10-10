# ImdbapiImage

The Image message represents an image associated with a person or title in the IMDb database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL of the image, which can be used to access the image file. | [optional] [default to undefined]
**width** | **number** | The width of the image in pixels. | [optional] [default to undefined]
**height** | **number** | The height of the image in pixels. | [optional] [default to undefined]
**type** | **string** | The type of the image, such as \&quot;poster\&quot;, \&quot;still_frame\&quot;, \&quot;event\&quot;, etc. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiImage } from './api';

const instance: ImdbapiImage = {
    url,
    width,
    height,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
