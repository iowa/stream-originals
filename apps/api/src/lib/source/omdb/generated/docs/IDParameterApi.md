# IDParameterApi

All URIs are relative to *http://omdbapi.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getId**](#getid) | **GET** /?i | Returns a single result based on the ID provided|

# **getId**
> getId()


### Example

```typescript
import {
    IDParameterApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IDParameterApi(configuration);

let i: string; //A valid IMDb ID (e.g. tt0000001) (default to undefined)
let plot: 'short' | 'full'; //Return short or full plot (optional) (default to undefined)
let r: 'json' | 'xml'; //The response type to return (optional) (default to undefined)
let callback: string; //JSONP callback name (optional) (default to undefined)

const { status, data } = await apiInstance.getId(
    i,
    plot,
    r,
    callback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **i** | [**string**] | A valid IMDb ID (e.g. tt0000001) | defaults to undefined|
| **plot** | [**&#39;short&#39; | &#39;full&#39;**]**Array<&#39;short&#39; &#124; &#39;full&#39;>** | Return short or full plot | (optional) defaults to undefined|
| **r** | [**&#39;json&#39; | &#39;xml&#39;**]**Array<&#39;json&#39; &#124; &#39;xml&#39;>** | The response type to return | (optional) defaults to undefined|
| **callback** | [**string**] | JSONP callback name | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[APIKeyQueryParam](../README.md#APIKeyQueryParam)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation |  -  |
|**401** | Not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

