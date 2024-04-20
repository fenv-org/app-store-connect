# .AppPreviewsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPreviewsCreateInstance**](AppPreviewsApi.md#appPreviewsCreateInstance) | **POST** /v1/appPreviews | 
[**appPreviewsDeleteInstance**](AppPreviewsApi.md#appPreviewsDeleteInstance) | **DELETE** /v1/appPreviews/{id} | 
[**appPreviewsGetInstance**](AppPreviewsApi.md#appPreviewsGetInstance) | **GET** /v1/appPreviews/{id} | 
[**appPreviewsUpdateInstance**](AppPreviewsApi.md#appPreviewsUpdateInstance) | **PATCH** /v1/appPreviews/{id} | 


# **appPreviewsCreateInstance**
> AppPreviewResponse appPreviewsCreateInstance(appPreviewCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewsApi(configuration);

let body:.AppPreviewsApiAppPreviewsCreateInstanceRequest = {
  // AppPreviewCreateRequest | AppPreview representation
  appPreviewCreateRequest: {
    data: {
      type: "appPreviews",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
        previewFrameTimeCode: "previewFrameTimeCode_example",
        mimeType: "mimeType_example",
      },
      relationships: {
        appPreviewSet: {
          data: {
            type: "appPreviewSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appPreviewsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreviewCreateRequest** | **AppPreviewCreateRequest**| AppPreview representation |


### Return type

**AppPreviewResponse**

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
**201** | Single AppPreview |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreviewsDeleteInstance**
> void appPreviewsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewsApi(configuration);

let body:.AppPreviewsApiAppPreviewsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appPreviewsDeleteInstance(body).then((data:any) => {
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

# **appPreviewsGetInstance**
> AppPreviewResponse appPreviewsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewsApi(configuration);

let body:.AppPreviewsApiAppPreviewsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'> | the fields to include for returned resources of type appPreviews (optional)
  fieldsAppPreviews: [
    "appPreviewSet",
  ],
  // Array<'appPreviewSet'> | comma-separated list of relationships to include (optional)
  include: [
    "appPreviewSet",
  ],
};

apiInstance.appPreviewsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPreviews** | **Array<&#39;appPreviewSet&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;mimeType&#39; &#124; &#39;previewFrameTimeCode&#39; &#124; &#39;previewImage&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39; &#124; &#39;videoUrl&#39;>** | the fields to include for returned resources of type appPreviews | (optional) defaults to undefined
 **include** | **Array<&#39;appPreviewSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPreviewResponse**

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
**200** | Single AppPreview |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPreviewsUpdateInstance**
> AppPreviewResponse appPreviewsUpdateInstance(appPreviewUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPreviewsApi(configuration);

let body:.AppPreviewsApiAppPreviewsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppPreviewUpdateRequest | AppPreview representation
  appPreviewUpdateRequest: {
    data: {
      type: "appPreviews",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        previewFrameTimeCode: "previewFrameTimeCode_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appPreviewsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPreviewUpdateRequest** | **AppPreviewUpdateRequest**| AppPreview representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppPreviewResponse**

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
**200** | Single AppPreview |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


