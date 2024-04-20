# .AppEventScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventScreenshotsCreateInstance**](AppEventScreenshotsApi.md#appEventScreenshotsCreateInstance) | **POST** /v1/appEventScreenshots | 
[**appEventScreenshotsDeleteInstance**](AppEventScreenshotsApi.md#appEventScreenshotsDeleteInstance) | **DELETE** /v1/appEventScreenshots/{id} | 
[**appEventScreenshotsGetInstance**](AppEventScreenshotsApi.md#appEventScreenshotsGetInstance) | **GET** /v1/appEventScreenshots/{id} | 
[**appEventScreenshotsUpdateInstance**](AppEventScreenshotsApi.md#appEventScreenshotsUpdateInstance) | **PATCH** /v1/appEventScreenshots/{id} | 


# **appEventScreenshotsCreateInstance**
> AppEventScreenshotResponse appEventScreenshotsCreateInstance(appEventScreenshotCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventScreenshotsApi(configuration);

let body:.AppEventScreenshotsApiAppEventScreenshotsCreateInstanceRequest = {
  // AppEventScreenshotCreateRequest | AppEventScreenshot representation
  appEventScreenshotCreateRequest: {
    data: {
      type: "appEventScreenshots",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
        appEventAssetType: "EVENT_CARD",
      },
      relationships: {
        appEventLocalization: {
          data: {
            type: "appEventLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appEventScreenshotsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventScreenshotCreateRequest** | **AppEventScreenshotCreateRequest**| AppEventScreenshot representation |


### Return type

**AppEventScreenshotResponse**

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
**201** | Single AppEventScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventScreenshotsDeleteInstance**
> void appEventScreenshotsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventScreenshotsApi(configuration);

let body:.AppEventScreenshotsApiAppEventScreenshotsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appEventScreenshotsDeleteInstance(body).then((data:any) => {
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

# **appEventScreenshotsGetInstance**
> AppEventScreenshotResponse appEventScreenshotsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventScreenshotsApi(configuration);

let body:.AppEventScreenshotsApiAppEventScreenshotsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appEventScreenshots (optional)
  fieldsAppEventScreenshots: [
    "appEventAssetType",
  ],
  // Array<'appEventLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appEventLocalization",
  ],
};

apiInstance.appEventScreenshotsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventScreenshots** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appEventScreenshots | (optional) defaults to undefined
 **include** | **Array<&#39;appEventLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppEventScreenshotResponse**

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
**200** | Single AppEventScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventScreenshotsUpdateInstance**
> AppEventScreenshotResponse appEventScreenshotsUpdateInstance(appEventScreenshotUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventScreenshotsApi(configuration);

let body:.AppEventScreenshotsApiAppEventScreenshotsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppEventScreenshotUpdateRequest | AppEventScreenshot representation
  appEventScreenshotUpdateRequest: {
    data: {
      type: "appEventScreenshots",
      id: "id_example",
      attributes: {
        uploaded: true,
      },
    },
  },
};

apiInstance.appEventScreenshotsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventScreenshotUpdateRequest** | **AppEventScreenshotUpdateRequest**| AppEventScreenshot representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppEventScreenshotResponse**

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
**200** | Single AppEventScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


