# NameApi

All URIs are relative to *https://api.imdbapi.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**iMDbAPIServiceBatchGetNames**](#imdbapiservicebatchgetnames) | **GET** /names:batchGet | Batch get names by IDs|
|[**iMDbAPIServiceGetName**](#imdbapiservicegetname) | **GET** /names/{nameId} | Get name by ID|
|[**iMDbAPIServiceListNameFilmography**](#imdbapiservicelistnamefilmography) | **GET** /names/{nameId}/filmography | List filmography for a name|
|[**iMDbAPIServiceListNameImages**](#imdbapiservicelistnameimages) | **GET** /names/{nameId}/images | List images for a name|
|[**iMDbAPIServiceListNameRelationships**](#imdbapiservicelistnamerelationships) | **GET** /names/{nameId}/relationships | List relationships for a name|
|[**iMDbAPIServiceListNameTrivia**](#imdbapiservicelistnametrivia) | **GET** /names/{nameId}/trivia | List trivia for a name|
|[**iMDbAPIServiceListStarMeters**](#imdbapiserviceliststarmeters) | **GET** /chart/starmeter | List star meter rankings|

# **iMDbAPIServiceBatchGetNames**
> ImdbapiBatchGetNamesResponse iMDbAPIServiceBatchGetNames()

Retrieve details of multiple names using their IMDb IDs.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameIds: Array<string>; //Required. List of IMDb name IDs in the format \"nm1234567\". The maximum number of IDs is 5. (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceBatchGetNames(
    nameIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameIds** | **Array&lt;string&gt;** | Required. List of IMDb name IDs in the format \&quot;nm1234567\&quot;. The maximum number of IDs is 5. | defaults to undefined|


### Return type

**ImdbapiBatchGetNamesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceGetName**
> ImdbapiName iMDbAPIServiceGetName()

Retrieve a name\'s details using its IMDb ID.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameId: string; //Required. IMDB name ID in the format \"nm1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceGetName(
    nameId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameId** | [**string**] | Required. IMDB name ID in the format \&quot;nm1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiName**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceListNameFilmography**
> ImdbapiListNameFilmographyResponse iMDbAPIServiceListNameFilmography()

Retrieve the filmography associated with a specific name.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameId: string; //Required. IMDB name ID in the format \"nm1234567\". (default to undefined)
let categories: Array<string>; //Optional. The categories of credits to filter by. If not specified, all categories are returned. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListNameFilmography(
    nameId,
    categories,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameId** | [**string**] | Required. IMDB name ID in the format \&quot;nm1234567\&quot;. | defaults to undefined|
| **categories** | **Array&lt;string&gt;** | Optional. The categories of credits to filter by. If not specified, all categories are returned. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListNameFilmographyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceListNameImages**
> ImdbapiListNameImagesResponse iMDbAPIServiceListNameImages()

Retrieve the images associated with a specific name.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameId: string; //Required. IMDB name ID in the format \"nm1234567\". (default to undefined)
let types: Array<string>; //Optional. The types of images to filter by. If not specified, all types are returned. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of images to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListNameImages(
    nameId,
    types,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameId** | [**string**] | Required. IMDB name ID in the format \&quot;nm1234567\&quot;. | defaults to undefined|
| **types** | **Array&lt;string&gt;** | Optional. The types of images to filter by. If not specified, all types are returned. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of images to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListNameImagesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceListNameRelationships**
> ImdbapiListNameRelationshipsResponse iMDbAPIServiceListNameRelationships()

Retrieve the relationships associated with a specific name.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameId: string; //Required. IMDB name ID in the format \"nm1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListNameRelationships(
    nameId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameId** | [**string**] | Required. IMDB name ID in the format \&quot;nm1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiListNameRelationshipsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceListNameTrivia**
> ImdbapiListNameTriviaResponse iMDbAPIServiceListNameTrivia()

Retrieve the trivia associated with a specific name.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let nameId: string; //Required. IMDB name ID in the format \"nm1234567\". (default to undefined)
let pageSize: number; //Optional. The maximum number of trivia entries to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListNameTrivia(
    nameId,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameId** | [**string**] | Required. IMDB name ID in the format \&quot;nm1234567\&quot;. | defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of trivia entries to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListNameTriviaResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iMDbAPIServiceListStarMeters**
> ImdbapiListStarMetersResponse iMDbAPIServiceListStarMeters()

Retrieve the star meter rankings for names.

### Example

```typescript
import {
    NameApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NameApi(configuration);

let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListStarMeters(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListStarMetersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A successful response. |  -  |
|**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

