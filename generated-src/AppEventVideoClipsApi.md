# .AppEventVideoClipsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appEventVideoClipsCreateInstance**](AppEventVideoClipsApi.md#appEventVideoClipsCreateInstance) | **POST** /v1/appEventVideoClips | 
[**appEventVideoClipsDeleteInstance**](AppEventVideoClipsApi.md#appEventVideoClipsDeleteInstance) | **DELETE** /v1/appEventVideoClips/{id} | 
[**appEventVideoClipsGetInstance**](AppEventVideoClipsApi.md#appEventVideoClipsGetInstance) | **GET** /v1/appEventVideoClips/{id} | 
[**appEventVideoClipsUpdateInstance**](AppEventVideoClipsApi.md#appEventVideoClipsUpdateInstance) | **PATCH** /v1/appEventVideoClips/{id} | 


# **appEventVideoClipsCreateInstance**
> AppEventVideoClipResponse appEventVideoClipsCreateInstance(appEventVideoClipCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventVideoClipsApi(configuration);

let body:.AppEventVideoClipsApiAppEventVideoClipsCreateInstanceRequest = {
  // AppEventVideoClipCreateRequest | AppEventVideoClip representation
  appEventVideoClipCreateRequest: {
    data: {
      type: "appEventVideoClips",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
        previewFrameTimeCode: "previewFrameTimeCode_example",
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

apiInstance.appEventVideoClipsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventVideoClipCreateRequest** | **AppEventVideoClipCreateRequest**| AppEventVideoClip representation |


### Return type

**AppEventVideoClipResponse**

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
**201** | Single AppEventVideoClip |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventVideoClipsDeleteInstance**
> void appEventVideoClipsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventVideoClipsApi(configuration);

let body:.AppEventVideoClipsApiAppEventVideoClipsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appEventVideoClipsDeleteInstance(body).then((data:any) => {
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

# **appEventVideoClipsGetInstance**
> AppEventVideoClipResponse appEventVideoClipsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventVideoClipsApi(configuration);

let body:.AppEventVideoClipsApiAppEventVideoClipsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appEventVideoClips (optional)
  fieldsAppEventVideoClips: [
    "appEventAssetType",
  ],
  // Array<'appEventLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appEventLocalization",
  ],
};

apiInstance.appEventVideoClipsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEventVideoClips** | **Array<&#39;appEventAssetType&#39; &#124; &#39;appEventLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appEventVideoClips | (optional) defaults to undefined
 **include** | **Array<&#39;appEventLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppEventVideoClipResponse**

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
**200** | Single AppEventVideoClip |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appEventVideoClipsUpdateInstance**
> AppEventVideoClipResponse appEventVideoClipsUpdateInstance(appEventVideoClipUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppEventVideoClipsApi(configuration);

let body:.AppEventVideoClipsApiAppEventVideoClipsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppEventVideoClipUpdateRequest | AppEventVideoClip representation
  appEventVideoClipUpdateRequest: {
    data: {
      type: "appEventVideoClips",
      id: "id_example",
      attributes: {
        previewFrameTimeCode: "previewFrameTimeCode_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appEventVideoClipsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appEventVideoClipUpdateRequest** | **AppEventVideoClipUpdateRequest**| AppEventVideoClip representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppEventVideoClipResponse**

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
**200** | Single AppEventVideoClip |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


