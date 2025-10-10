# InterestApi

All URIs are relative to *https://api.imdbapi.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**iMDbAPIServiceGetInterest**](#imdbapiservicegetinterest) | **GET** /interests/{interestId} | Get interest by ID|
|[**iMDbAPIServiceListInterestCategories**](#imdbapiservicelistinterestcategories) | **GET** /interests | List interest categories|

# **iMDbAPIServiceGetInterest**
> ImdbapiInterest iMDbAPIServiceGetInterest()

Retrieve details of a specific interest using its ID.

### Example

```typescript
import {
    InterestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InterestApi(configuration);

let interestId: string; //Required. The ID of the interest to retrieve. (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceGetInterest(
    interestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestId** | [**string**] | Required. The ID of the interest to retrieve. | defaults to undefined|


### Return type

**ImdbapiInterest**

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

# **iMDbAPIServiceListInterestCategories**
> ImdbapiListListInterestCategoriesResponse iMDbAPIServiceListInterestCategories()

Retrieve all interest categories available in the IMDb API.

### Example

```typescript
import {
    InterestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InterestApi(configuration);

const { status, data } = await apiInstance.iMDbAPIServiceListInterestCategories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ImdbapiListListInterestCategoriesResponse**

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

