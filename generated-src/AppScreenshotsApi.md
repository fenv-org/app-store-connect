# .AppScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appScreenshotsCreateInstance**](AppScreenshotsApi.md#appScreenshotsCreateInstance) | **POST** /v1/appScreenshots | 
[**appScreenshotsDeleteInstance**](AppScreenshotsApi.md#appScreenshotsDeleteInstance) | **DELETE** /v1/appScreenshots/{id} | 
[**appScreenshotsGetInstance**](AppScreenshotsApi.md#appScreenshotsGetInstance) | **GET** /v1/appScreenshots/{id} | 
[**appScreenshotsUpdateInstance**](AppScreenshotsApi.md#appScreenshotsUpdateInstance) | **PATCH** /v1/appScreenshots/{id} | 


# **appScreenshotsCreateInstance**
> AppScreenshotResponse appScreenshotsCreateInstance(appScreenshotCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotsApi(configuration);

let body:.AppScreenshotsApiAppScreenshotsCreateInstanceRequest = {
  // AppScreenshotCreateRequest | AppScreenshot representation
  appScreenshotCreateRequest: {
    data: {
      type: "appScreenshots",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        appScreenshotSet: {
          data: {
            type: "appScreenshotSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appScreenshotsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appScreenshotCreateRequest** | **AppScreenshotCreateRequest**| AppScreenshot representation |


### Return type

**AppScreenshotResponse**

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
**201** | Single AppScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotsDeleteInstance**
> void appScreenshotsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotsApi(configuration);

let body:.AppScreenshotsApiAppScreenshotsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appScreenshotsDeleteInstance(body).then((data:any) => {
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

# **appScreenshotsGetInstance**
> AppScreenshotResponse appScreenshotsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotsApi(configuration);

let body:.AppScreenshotsApiAppScreenshotsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appScreenshots (optional)
  fieldsAppScreenshots: [
    "appScreenshotSet",
  ],
  // Array<'appScreenshotSet'> | comma-separated list of relationships to include (optional)
  include: [
    "appScreenshotSet",
  ],
};

apiInstance.appScreenshotsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppScreenshots** | **Array<&#39;appScreenshotSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appScreenshots | (optional) defaults to undefined
 **include** | **Array<&#39;appScreenshotSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppScreenshotResponse**

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
**200** | Single AppScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appScreenshotsUpdateInstance**
> AppScreenshotResponse appScreenshotsUpdateInstance(appScreenshotUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppScreenshotsApi(configuration);

let body:.AppScreenshotsApiAppScreenshotsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppScreenshotUpdateRequest | AppScreenshot representation
  appScreenshotUpdateRequest: {
    data: {
      type: "appScreenshots",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appScreenshotsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appScreenshotUpdateRequest** | **AppScreenshotUpdateRequest**| AppScreenshot representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppScreenshotResponse**

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
**200** | Single AppScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


