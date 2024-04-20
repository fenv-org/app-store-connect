# .AppClipAdvancedExperienceImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAdvancedExperienceImagesCreateInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesCreateInstance) | **POST** /v1/appClipAdvancedExperienceImages | 
[**appClipAdvancedExperienceImagesGetInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesGetInstance) | **GET** /v1/appClipAdvancedExperienceImages/{id} | 
[**appClipAdvancedExperienceImagesUpdateInstance**](AppClipAdvancedExperienceImagesApi.md#appClipAdvancedExperienceImagesUpdateInstance) | **PATCH** /v1/appClipAdvancedExperienceImages/{id} | 


# **appClipAdvancedExperienceImagesCreateInstance**
> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesCreateInstance(appClipAdvancedExperienceImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperienceImagesApi(configuration);

let body:.AppClipAdvancedExperienceImagesApiAppClipAdvancedExperienceImagesCreateInstanceRequest = {
  // AppClipAdvancedExperienceImageCreateRequest | AppClipAdvancedExperienceImage representation
  appClipAdvancedExperienceImageCreateRequest: {
    data: {
      type: "appClipAdvancedExperienceImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
    },
  },
};

apiInstance.appClipAdvancedExperienceImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAdvancedExperienceImageCreateRequest** | **AppClipAdvancedExperienceImageCreateRequest**| AppClipAdvancedExperienceImage representation |


### Return type

**AppClipAdvancedExperienceImageResponse**

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
**201** | Single AppClipAdvancedExperienceImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAdvancedExperienceImagesGetInstance**
> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperienceImagesApi(configuration);

let body:.AppClipAdvancedExperienceImagesApiAppClipAdvancedExperienceImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipAdvancedExperienceImages (optional)
  fieldsAppClipAdvancedExperienceImages: [
    "assetDeliveryState",
  ],
};

apiInstance.appClipAdvancedExperienceImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipAdvancedExperienceImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipAdvancedExperienceImages | (optional) defaults to undefined


### Return type

**AppClipAdvancedExperienceImageResponse**

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
**200** | Single AppClipAdvancedExperienceImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAdvancedExperienceImagesUpdateInstance**
> AppClipAdvancedExperienceImageResponse appClipAdvancedExperienceImagesUpdateInstance(appClipAdvancedExperienceImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperienceImagesApi(configuration);

let body:.AppClipAdvancedExperienceImagesApiAppClipAdvancedExperienceImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipAdvancedExperienceImageUpdateRequest | AppClipAdvancedExperienceImage representation
  appClipAdvancedExperienceImageUpdateRequest: {
    data: {
      type: "appClipAdvancedExperienceImages",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appClipAdvancedExperienceImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAdvancedExperienceImageUpdateRequest** | **AppClipAdvancedExperienceImageUpdateRequest**| AppClipAdvancedExperienceImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipAdvancedExperienceImageResponse**

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
**200** | Single AppClipAdvancedExperienceImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


