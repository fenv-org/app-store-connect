# .AppEventsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventsCreateInstance**](AppEventsApi.md#appEventsCreateInstance) | **POST** /v1/appEvents | 
[**appEventsDeleteInstance**](AppEventsApi.md#appEventsDeleteInstance) | **DELETE** /v1/appEvents/{id} | 
[**appEventsGetInstance**](AppEventsApi.md#appEventsGetInstance) | **GET** /v1/appEvents/{id} | 
[**appEventsLocalizationsGetToManyRelated**](AppEventsApi.md#appEventsLocalizationsGetToManyRelated) | **GET** /v1/appEvents/{id}/localizations | 
[**appEventsUpdateInstance**](AppEventsApi.md#appEventsUpdateInstance) | **PATCH** /v1/appEvents/{id} | 


# **appEventsCreateInstance**
> AppEventResponse appEventsCreateInstance(appEventCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventsApi(configuration);

let body:.AppEventsApiAppEventsCreateInstanceRequest = {
  // AppEventCreateRequest | AppEvent representation
  appEventCreateRequest: {
    data: {
      type: "appEvents",
      attributes: {
        referenceName: "referenceName_example",
        badge: "LIVE_EVENT",
        deepLink: "deepLink_example",
        purchaseRequirement: "NO_COST_ASSOCIATED",
        primaryLocale: "primaryLocale_example",
        priority: "HIGH",
        purpose: "APPROPRIATE_FOR_ALL_USERS",
        territorySchedules: [
          {
            territories: [
              "territories_example",
            ],
            publishStart: new Date('1970-01-01T00:00:00.00Z'),
            eventStart: new Date('1970-01-01T00:00:00.00Z'),
            eventEnd: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appEventsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventCreateRequest** | **AppEventCreateRequest**| AppEvent representation |


### Return type

**AppEventResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**201** | Single AppEvent |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventsDeleteInstance**
> void appEventsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventsApi(configuration);

let body:.AppEventsApiAppEventsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appEventsDeleteInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventsGetInstance**
> AppEventResponse appEventsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventsApi(configuration);

let body:.AppEventsApiAppEventsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'> | the fields to include for returned resources of type appEvents (optional)
  fieldsAppEvents: [
    "app",
  ],
  // Array<'localizations'> | comma-separated list of relationships to include (optional)
  include: [
    "localizations",
  ],
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'> | the fields to include for returned resources of type appEventLocalizations (optional)
  fieldsAppEventLocalizations: [
    "appEvent",
  ],
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
};

apiInstance.appEventsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEvents** | **Array<&#39;app&#39; &#124; &#39;archivedTerritorySchedules&#39; &#124; &#39;badge&#39; &#124; &#39;deepLink&#39; &#124; &#39;eventState&#39; &#124; &#39;localizations&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;priority&#39; &#124; &#39;purchaseRequirement&#39; &#124; &#39;purpose&#39; &#124; &#39;referenceName&#39; &#124; &#39;territorySchedules&#39;>** | the fields to include for returned resources of type appEvents | (optional) defaults to undefined
 **include** | **Array<&#39;localizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppEventLocalizations** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39; &#124; &#39;locale&#39; &#124; &#39;longDescription&#39; &#124; &#39;name&#39; &#124; &#39;shortDescription&#39;>** | the fields to include for returned resources of type appEventLocalizations | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppEventResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Single AppEvent |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventsLocalizationsGetToManyRelated**
> AppEventLocalizationsResponse appEventsLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventsApi(configuration);

let body:.AppEventsApiAppEventsLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appEventScreenshots (optional)
  fieldsAppEventScreenshots: [
    "appEventAssetType",
  ],
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appEventVideoClips (optional)
  fieldsAppEventVideoClips: [
    "appEventAssetType",
  ],
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'> | the fields to include for returned resources of type appEventLocalizations (optional)
  fieldsAppEventLocalizations: [
    "appEvent",
  ],
  // Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'> | the fields to include for returned resources of type appEvents (optional)
  fieldsAppEvents: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appEventScreenshots returned (when they are included) (optional)
  limitAppEventScreenshots: 1,
  // number | maximum number of related appEventVideoClips returned (when they are included) (optional)
  limitAppEventVideoClips: 1,
  // Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'> | comma-separated list of relationships to include (optional)
  include: [
    "appEvent",
  ],
};

apiInstance.appEventsLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventScreenshots** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appEventScreenshots | (optional) defaults to undefined
 **fieldsAppEventVideoClips** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appEventVideoClips | (optional) defaults to undefined
 **fieldsAppEventLocalizations** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39; &#124; &#39;locale&#39; &#124; &#39;longDescription&#39; &#124; &#39;name&#39; &#124; &#39;shortDescription&#39;>** | the fields to include for returned resources of type appEventLocalizations | (optional) defaults to undefined
 **fieldsAppEvents** | **Array<&#39;app&#39; &#124; &#39;archivedTerritorySchedules&#39; &#124; &#39;badge&#39; &#124; &#39;deepLink&#39; &#124; &#39;eventState&#39; &#124; &#39;localizations&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;priority&#39; &#124; &#39;purchaseRequirement&#39; &#124; &#39;purpose&#39; &#124; &#39;referenceName&#39; &#124; &#39;territorySchedules&#39;>** | the fields to include for returned resources of type appEvents | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppEventScreenshots** | [**number**] | maximum number of related appEventScreenshots returned (when they are included) | (optional) defaults to undefined
 **limitAppEventVideoClips** | [**number**] | maximum number of related appEventVideoClips returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appEvent&#39; &#124; &#39;appEventScreenshots&#39; &#124; &#39;appEventVideoClips&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppEventLocalizationsResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | List of AppEventLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventsUpdateInstance**
> AppEventResponse appEventsUpdateInstance(appEventUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventsApi(configuration);

let body:.AppEventsApiAppEventsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppEventUpdateRequest | AppEvent representation
  appEventUpdateRequest: {
    data: {
      type: "appEvents",
      id: "id_example",
      attributes: {
        referenceName: "referenceName_example",
        badge: "LIVE_EVENT",
        deepLink: "deepLink_example",
        purchaseRequirement: "NO_COST_ASSOCIATED",
        primaryLocale: "primaryLocale_example",
        priority: "HIGH",
        purpose: "APPROPRIATE_FOR_ALL_USERS",
        territorySchedules: [
          {
            territories: [
              "territories_example",
            ],
            publishStart: new Date('1970-01-01T00:00:00.00Z'),
            eventStart: new Date('1970-01-01T00:00:00.00Z'),
            eventEnd: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
      },
    },
  },
};

apiInstance.appEventsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventUpdateRequest** | **AppEventUpdateRequest**| AppEvent representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppEventResponse**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Single AppEvent |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


