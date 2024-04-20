# .AppClipHeaderImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipHeaderImagesCreateInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesCreateInstance) | **POST** /v1/appClipHeaderImages | 
[**appClipHeaderImagesDeleteInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesDeleteInstance) | **DELETE** /v1/appClipHeaderImages/{id} | 
[**appClipHeaderImagesGetInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesGetInstance) | **GET** /v1/appClipHeaderImages/{id} | 
[**appClipHeaderImagesUpdateInstance**](AppClipHeaderImagesApi.md#appClipHeaderImagesUpdateInstance) | **PATCH** /v1/appClipHeaderImages/{id} | 


# **appClipHeaderImagesCreateInstance**
> AppClipHeaderImageResponse appClipHeaderImagesCreateInstance(appClipHeaderImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipHeaderImagesApi(configuration);

let body:.AppClipHeaderImagesApiAppClipHeaderImagesCreateInstanceRequest = {
  // AppClipHeaderImageCreateRequest | AppClipHeaderImage representation
  appClipHeaderImageCreateRequest: {
    data: {
      type: "appClipHeaderImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        appClipDefaultExperienceLocalization: {
          data: {
            type: "appClipDefaultExperienceLocalizations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appClipHeaderImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipHeaderImageCreateRequest** | **AppClipHeaderImageCreateRequest**| AppClipHeaderImage representation |


### Return type

**AppClipHeaderImageResponse**

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
**201** | Single AppClipHeaderImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipHeaderImagesDeleteInstance**
> void appClipHeaderImagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipHeaderImagesApi(configuration);

let body:.AppClipHeaderImagesApiAppClipHeaderImagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appClipHeaderImagesDeleteInstance(body).then((data:any) => {
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

# **appClipHeaderImagesGetInstance**
> AppClipHeaderImageResponse appClipHeaderImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipHeaderImagesApi(configuration);

let body:.AppClipHeaderImagesApiAppClipHeaderImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appClipDefaultExperienceLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipHeaderImages (optional)
  fieldsAppClipHeaderImages: [
    "appClipDefaultExperienceLocalization",
  ],
  // Array<'appClipDefaultExperienceLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperienceLocalization",
  ],
};

apiInstance.appClipHeaderImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipHeaderImages** | **Array<&#39;appClipDefaultExperienceLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipHeaderImages | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperienceLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipHeaderImageResponse**

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
**200** | Single AppClipHeaderImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipHeaderImagesUpdateInstance**
> AppClipHeaderImageResponse appClipHeaderImagesUpdateInstance(appClipHeaderImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipHeaderImagesApi(configuration);

let body:.AppClipHeaderImagesApiAppClipHeaderImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipHeaderImageUpdateRequest | AppClipHeaderImage representation
  appClipHeaderImageUpdateRequest: {
    data: {
      type: "appClipHeaderImages",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appClipHeaderImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipHeaderImageUpdateRequest** | **AppClipHeaderImageUpdateRequest**| AppClipHeaderImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipHeaderImageResponse**

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
**200** | Single AppClipHeaderImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


