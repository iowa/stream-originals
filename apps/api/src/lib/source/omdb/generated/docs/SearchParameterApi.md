# SearchParameterApi

All URIs are relative to *http://omdbapi.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**titleSearch**](#titlesearch) | **GET** /?s | Returns an array of results for a given title|

# **titleSearch**
> titleSearch()


### Example

```typescript
import {
    SearchParameterApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchParameterApi(configuration);

let s: string; //Title of movie or series (default to undefined)
let y: number; //Year of release (optional) (default to undefined)
let type: 'movie' | 'series'; //Return movie or series (optional) (default to undefined)
let r: 'json' | 'xml'; //The response type to return (optional) (default to undefined)
let page: number; //Page number to return (optional) (default to undefined)
let callback: string; //JSONP callback name (optional) (default to undefined)

const { status, data } = await apiInstance.titleSearch(
    s,
    y,
    type,
    r,
    page,
    callback
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **s** | [**string**] | Title of movie or series | defaults to undefined|
| **y** | [**number**] | Year of release | (optional) defaults to undefined|
| **type** | [**&#39;movie&#39; | &#39;series&#39;**]**Array<&#39;movie&#39; &#124; &#39;series&#39;>** | Return movie or series | (optional) defaults to undefined|
| **r** | [**&#39;json&#39; | &#39;xml&#39;**]**Array<&#39;json&#39; &#124; &#39;xml&#39;>** | The response type to return | (optional) defaults to undefined|
| **page** | [**number**] | Page number to return | (optional) defaults to undefined|
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

