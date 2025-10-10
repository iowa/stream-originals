# TitleApi

All URIs are relative to *https://api.imdbapi.dev*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**iMDbAPIServiceBatchGetTitles**](#imdbapiservicebatchgettitles) | **GET** /titles:batchGet | Batch get titles by IDs|
|[**iMDbAPIServiceGetTitle**](#imdbapiservicegettitle) | **GET** /titles/{titleId} | Get title by ID|
|[**iMDbAPIServiceGetTitleBoxOffice**](#imdbapiservicegettitleboxoffice) | **GET** /titles/{titleId}/boxOffice | Get box office information for a title|
|[**iMDbAPIServiceListTitleAKAs**](#imdbapiservicelisttitleakas) | **GET** /titles/{titleId}/akas | List AKAs for a title|
|[**iMDbAPIServiceListTitleAwardNominations**](#imdbapiservicelisttitleawardnominations) | **GET** /titles/{titleId}/awardNominations | List award nominations for a title|
|[**iMDbAPIServiceListTitleCertificates**](#imdbapiservicelisttitlecertificates) | **GET** /titles/{titleId}/certificates | List certificates for a title|
|[**iMDbAPIServiceListTitleCompanyCredits**](#imdbapiservicelisttitlecompanycredits) | **GET** /titles/{titleId}/companyCredits | List company credits for a title|
|[**iMDbAPIServiceListTitleCredits**](#imdbapiservicelisttitlecredits) | **GET** /titles/{titleId}/credits | List credits for a title|
|[**iMDbAPIServiceListTitleEpisodes**](#imdbapiservicelisttitleepisodes) | **GET** /titles/{titleId}/episodes | List episodes for a title|
|[**iMDbAPIServiceListTitleImages**](#imdbapiservicelisttitleimages) | **GET** /titles/{titleId}/images | List images for a title|
|[**iMDbAPIServiceListTitleParentsGuide**](#imdbapiservicelisttitleparentsguide) | **GET** /titles/{titleId}/parentsGuide | List parents guide for a title|
|[**iMDbAPIServiceListTitleReleaseDates**](#imdbapiservicelisttitlereleasedates) | **GET** /titles/{titleId}/releaseDates | List release dates for a title|
|[**iMDbAPIServiceListTitleSeasons**](#imdbapiservicelisttitleseasons) | **GET** /titles/{titleId}/seasons | List seasons for a title|
|[**iMDbAPIServiceListTitleVideos**](#imdbapiservicelisttitlevideos) | **GET** /titles/{titleId}/videos | List videos for a title|
|[**iMDbAPIServiceListTitles**](#imdbapiservicelisttitles) | **GET** /titles | List titles|
|[**iMDbAPIServiceSearchTitles**](#imdbapiservicesearchtitles) | **GET** /search/titles | Search titles by query|

# **iMDbAPIServiceBatchGetTitles**
> ImdbapiBatchGetTitlesResponse iMDbAPIServiceBatchGetTitles()

Retrieve details of multiple titles using their IMDb IDs.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleIds: Array<string>; //List of IMDb title IDs. Maximum 5 IDs. (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceBatchGetTitles(
    titleIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleIds** | **Array&lt;string&gt;** | List of IMDb title IDs. Maximum 5 IDs. | defaults to undefined|


### Return type

**ImdbapiBatchGetTitlesResponse**

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

# **iMDbAPIServiceGetTitle**
> ImdbapiTitle iMDbAPIServiceGetTitle()

Retrieve a title\'s details using its IMDb ID.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //The IMDb title ID in the format \'tt1234567\'. (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceGetTitle(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | The IMDb title ID in the format \&#39;tt1234567\&#39;. | defaults to undefined|


### Return type

**ImdbapiTitle**

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

# **iMDbAPIServiceGetTitleBoxOffice**
> ImdbapiBoxOffice iMDbAPIServiceGetTitleBoxOffice()

Retrieve the box office information associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceGetTitleBoxOffice(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiBoxOffice**

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

# **iMDbAPIServiceListTitleAKAs**
> ImdbapiListTitleAKAsResponse iMDbAPIServiceListTitleAKAs()

Retrieve the alternative titles (AKAs) associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleAKAs(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiListTitleAKAsResponse**

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

# **iMDbAPIServiceListTitleAwardNominations**
> ImdbapiListTitleAwardNominationsResponse iMDbAPIServiceListTitleAwardNominations()

Retrieve the award nominations associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let pageSize: number; //Optional. The maximum number of award nominations to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleAwardNominations(
    titleId,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of award nominations to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleAwardNominationsResponse**

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

# **iMDbAPIServiceListTitleCertificates**
> ImdbapiListTitleCertificatesResponse iMDbAPIServiceListTitleCertificates()

Retrieve the certificates associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleCertificates(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiListTitleCertificatesResponse**

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

# **iMDbAPIServiceListTitleCompanyCredits**
> ImdbapiListTitleCompanyCreditsResponse iMDbAPIServiceListTitleCompanyCredits()

Retrieve the company credits associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let categories: Array<string>; //Optional. The categories of company credits to filter by. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of company credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleCompanyCredits(
    titleId,
    categories,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **categories** | **Array&lt;string&gt;** | Optional. The categories of company credits to filter by. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of company credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleCompanyCreditsResponse**

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

# **iMDbAPIServiceListTitleCredits**
> ImdbapiListTitleCreditsResponse iMDbAPIServiceListTitleCredits()

Retrieve the credits associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let categories: Array<string>; //Optional. The categories of credits to filter by. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleCredits(
    titleId,
    categories,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **categories** | **Array&lt;string&gt;** | Optional. The categories of credits to filter by. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleCreditsResponse**

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

# **iMDbAPIServiceListTitleEpisodes**
> ImdbapiListTitleEpisodesResponse iMDbAPIServiceListTitleEpisodes()

Retrieve the episodes associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let season: string; //Optional. The season number to filter episodes by. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of episodes to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleEpisodes(
    titleId,
    season,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **season** | [**string**] | Optional. The season number to filter episodes by. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of episodes to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleEpisodesResponse**

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

# **iMDbAPIServiceListTitleImages**
> ImdbapiListTitleImagesResponse iMDbAPIServiceListTitleImages()

Retrieve the images associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let types: Array<string>; //Optional. The types of images to filter by. If not specified, all types are returned. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of images to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleImages(
    titleId,
    types,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **types** | **Array&lt;string&gt;** | Optional. The types of images to filter by. If not specified, all types are returned. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of images to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleImagesResponse**

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

# **iMDbAPIServiceListTitleParentsGuide**
> ImdbapiListTitleParentsGuideResponse iMDbAPIServiceListTitleParentsGuide()

Retrieve the parents guide associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleParentsGuide(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiListTitleParentsGuideResponse**

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

# **iMDbAPIServiceListTitleReleaseDates**
> ImdbapiListTitleReleaseDatesResponse iMDbAPIServiceListTitleReleaseDates()

Retrieve the release dates associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let pageSize: number; //Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleReleaseDates(
    titleId,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of credits to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleReleaseDatesResponse**

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

# **iMDbAPIServiceListTitleSeasons**
> ImdbapiListTitleSeasonsResponse iMDbAPIServiceListTitleSeasons()

Retrieve the seasons associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleSeasons(
    titleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|


### Return type

**ImdbapiListTitleSeasonsResponse**

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

# **iMDbAPIServiceListTitleVideos**
> ImdbapiListTitleVideosResponse iMDbAPIServiceListTitleVideos()

Retrieve the videos associated with a specific title.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let titleId: string; //Required. IMDb title ID in the format \"tt1234567\". (default to undefined)
let types: Array<string>; //Optional. The types of videos to filter by. If not specified, all types are returned. (optional) (default to undefined)
let pageSize: number; //Optional. The maximum number of videos to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitleVideos(
    titleId,
    types,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **titleId** | [**string**] | Required. IMDb title ID in the format \&quot;tt1234567\&quot;. | defaults to undefined|
| **types** | **Array&lt;string&gt;** | Optional. The types of videos to filter by. If not specified, all types are returned. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Optional. The maximum number of videos to return per page. If not specified, a default value will be used.  The value must be between 1 and 50. Default is 20. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitleVideosResponse**

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

# **iMDbAPIServiceListTitles**
> ImdbapiListTitlesResponse iMDbAPIServiceListTitles()

Retrieve a list of titles with optional filters.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let types: Array<'MOVIE' | 'TV_SERIES' | 'TV_MINI_SERIES' | 'TV_SPECIAL' | 'TV_MOVIE' | 'SHORT' | 'VIDEO' | 'VIDEO_GAME'>; //Optional. The type of titles to filter by. If not specified, all types are returned.   - MOVIE: Represents a movie title.  - TV_SERIES: Represents a TV series title.  - TV_MINI_SERIES: Represents a TV mini-series title.  - TV_SPECIAL: Represents a TV special title.  - TV_MOVIE: Represents a TV movie title.  - SHORT: Represents a short title.  - VIDEO: Represents a video title.  - VIDEO_GAME: Represents a video game title. (optional) (default to undefined)
let genres: Array<string>; //Optional. The genres to filter titles by. If not specified, titles from all genres are returned. (optional) (default to undefined)
let countryCodes: Array<string>; //Optional. The ISO 3166-1 alpha-2 country codes to filter titles by. If not specified, titles from all countries are returned. Example: \"US\" for United States, \"GB\" for United Kingdom. (optional) (default to undefined)
let languageCodes: Array<string>; //Optional. The ISO 639-1 or ISO 639-2 language codes to filter titles by. If not specified, titles in all languages are returned. (optional) (default to undefined)
let nameIds: Array<string>; //Optional. The IDs of names to filter titles by. (optional) (default to undefined)
let interestIds: Array<string>; //Optional. The IDs of interests to filter titles by. If not specified, titles associated with all interests are returned. (optional) (default to undefined)
let startYear: number; //Optional. The start year for filtering titles. (optional) (default to undefined)
let endYear: number; //Optional. The end year for filtering titles. (optional) (default to undefined)
let minVoteCount: number; //Optional. The minimum number of votes a title must have to be included. If not specified, titles with any number of votes are included. The value must be between 0 and 1,000,000,000. Default is 0. (optional) (default to undefined)
let maxVoteCount: number; //Optional. The maximum number of votes a title can have to be included. If not specified, titles with any number of votes are included. The value must be between 0 and 1,000,000,000. (optional) (default to undefined)
let minAggregateRating: number; //Optional. The minimum rating a title must have to be included. If not specified, titles with any rating are included. The value must be between 0.0 and 10.0. (optional) (default to undefined)
let maxAggregateRating: number; //Optional. The maximum rating a title can have to be included. If not specified, titles with any rating are included. The value must be between 0.0 and 10.0. (optional) (default to undefined)
let sortBy: 'SORT_BY_POPULARITY' | 'SORT_BY_RELEASE_DATE' | 'SORT_BY_USER_RATING' | 'SORT_BY_USER_RATING_COUNT' | 'SORT_BY_YEAR'; //Optional. The sorting order for the titles. If not specified, titles are sorted by popularity.   - SORT_BY_POPULARITY: Sort by popularity. This is used to rank titles based on their popularity, which can be influenced by various factors such as viewership, ratings, and cultural impact.  - SORT_BY_RELEASE_DATE: Sort by release date. This is used to rank titles based on their release dates, with newer titles typically appearing before older ones.  - SORT_BY_USER_RATING: Sort by user rating. This is used to rank titles based on the average user rating, which reflects the overall audience reception.  - SORT_BY_USER_RATING_COUNT: Sort by user rating count. This is used to rank titles based on the number of user ratings they have received, which can indicate the level of engagement or popularity among viewers.  - SORT_BY_YEAR: Sort by year. This is used to rank titles based on their release year, with newer titles typically appearing before older ones. (optional) (default to undefined)
let sortOrder: 'ASC' | 'DESC'; //Optional. The sorting order for the titles. If not specified, titles are sorted in ascending order.   - ASC: Sort in ascending order.  - DESC: Sort in descending order. (optional) (default to undefined)
let pageToken: string; //Optional. Token for pagination, if applicable. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceListTitles(
    types,
    genres,
    countryCodes,
    languageCodes,
    nameIds,
    interestIds,
    startYear,
    endYear,
    minVoteCount,
    maxVoteCount,
    minAggregateRating,
    maxAggregateRating,
    sortBy,
    sortOrder,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **types** | **Array<&#39;MOVIE&#39; &#124; &#39;TV_SERIES&#39; &#124; &#39;TV_MINI_SERIES&#39; &#124; &#39;TV_SPECIAL&#39; &#124; &#39;TV_MOVIE&#39; &#124; &#39;SHORT&#39; &#124; &#39;VIDEO&#39; &#124; &#39;VIDEO_GAME&#39;>** | Optional. The type of titles to filter by. If not specified, all types are returned.   - MOVIE: Represents a movie title.  - TV_SERIES: Represents a TV series title.  - TV_MINI_SERIES: Represents a TV mini-series title.  - TV_SPECIAL: Represents a TV special title.  - TV_MOVIE: Represents a TV movie title.  - SHORT: Represents a short title.  - VIDEO: Represents a video title.  - VIDEO_GAME: Represents a video game title. | (optional) defaults to undefined|
| **genres** | **Array&lt;string&gt;** | Optional. The genres to filter titles by. If not specified, titles from all genres are returned. | (optional) defaults to undefined|
| **countryCodes** | **Array&lt;string&gt;** | Optional. The ISO 3166-1 alpha-2 country codes to filter titles by. If not specified, titles from all countries are returned. Example: \&quot;US\&quot; for United States, \&quot;GB\&quot; for United Kingdom. | (optional) defaults to undefined|
| **languageCodes** | **Array&lt;string&gt;** | Optional. The ISO 639-1 or ISO 639-2 language codes to filter titles by. If not specified, titles in all languages are returned. | (optional) defaults to undefined|
| **nameIds** | **Array&lt;string&gt;** | Optional. The IDs of names to filter titles by. | (optional) defaults to undefined|
| **interestIds** | **Array&lt;string&gt;** | Optional. The IDs of interests to filter titles by. If not specified, titles associated with all interests are returned. | (optional) defaults to undefined|
| **startYear** | [**number**] | Optional. The start year for filtering titles. | (optional) defaults to undefined|
| **endYear** | [**number**] | Optional. The end year for filtering titles. | (optional) defaults to undefined|
| **minVoteCount** | [**number**] | Optional. The minimum number of votes a title must have to be included. If not specified, titles with any number of votes are included. The value must be between 0 and 1,000,000,000. Default is 0. | (optional) defaults to undefined|
| **maxVoteCount** | [**number**] | Optional. The maximum number of votes a title can have to be included. If not specified, titles with any number of votes are included. The value must be between 0 and 1,000,000,000. | (optional) defaults to undefined|
| **minAggregateRating** | [**number**] | Optional. The minimum rating a title must have to be included. If not specified, titles with any rating are included. The value must be between 0.0 and 10.0. | (optional) defaults to undefined|
| **maxAggregateRating** | [**number**] | Optional. The maximum rating a title can have to be included. If not specified, titles with any rating are included. The value must be between 0.0 and 10.0. | (optional) defaults to undefined|
| **sortBy** | [**&#39;SORT_BY_POPULARITY&#39; | &#39;SORT_BY_RELEASE_DATE&#39; | &#39;SORT_BY_USER_RATING&#39; | &#39;SORT_BY_USER_RATING_COUNT&#39; | &#39;SORT_BY_YEAR&#39;**]**Array<&#39;SORT_BY_POPULARITY&#39; &#124; &#39;SORT_BY_RELEASE_DATE&#39; &#124; &#39;SORT_BY_USER_RATING&#39; &#124; &#39;SORT_BY_USER_RATING_COUNT&#39; &#124; &#39;SORT_BY_YEAR&#39;>** | Optional. The sorting order for the titles. If not specified, titles are sorted by popularity.   - SORT_BY_POPULARITY: Sort by popularity. This is used to rank titles based on their popularity, which can be influenced by various factors such as viewership, ratings, and cultural impact.  - SORT_BY_RELEASE_DATE: Sort by release date. This is used to rank titles based on their release dates, with newer titles typically appearing before older ones.  - SORT_BY_USER_RATING: Sort by user rating. This is used to rank titles based on the average user rating, which reflects the overall audience reception.  - SORT_BY_USER_RATING_COUNT: Sort by user rating count. This is used to rank titles based on the number of user ratings they have received, which can indicate the level of engagement or popularity among viewers.  - SORT_BY_YEAR: Sort by year. This is used to rank titles based on their release year, with newer titles typically appearing before older ones. | (optional) defaults to undefined|
| **sortOrder** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Optional. The sorting order for the titles. If not specified, titles are sorted in ascending order.   - ASC: Sort in ascending order.  - DESC: Sort in descending order. | (optional) defaults to undefined|
| **pageToken** | [**string**] | Optional. Token for pagination, if applicable. | (optional) defaults to undefined|


### Return type

**ImdbapiListTitlesResponse**

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

# **iMDbAPIServiceSearchTitles**
> ImdbapiSearchTitlesResponse iMDbAPIServiceSearchTitles()

Search for titles using a query string.

### Example

```typescript
import {
    TitleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TitleApi(configuration);

let query: string; //Required. The search query for titles. (default to undefined)
let limit: number; //Optional. Limit the number of results returned. Maximum is 50. (optional) (default to undefined)

const { status, data } = await apiInstance.iMDbAPIServiceSearchTitles(
    query,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Required. The search query for titles. | defaults to undefined|
| **limit** | [**number**] | Optional. Limit the number of results returned. Maximum is 50. | (optional) defaults to undefined|


### Return type

**ImdbapiSearchTitlesResponse**

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

