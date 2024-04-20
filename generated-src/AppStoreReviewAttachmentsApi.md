# .AppStoreReviewAttachmentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreReviewAttachmentsCreateInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsCreateInstance) | **POST** /v1/appStoreReviewAttachments | 
[**appStoreReviewAttachmentsDeleteInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsDeleteInstance) | **DELETE** /v1/appStoreReviewAttachments/{id} | 
[**appStoreReviewAttachmentsGetInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsGetInstance) | **GET** /v1/appStoreReviewAttachments/{id} | 
[**appStoreReviewAttachmentsUpdateInstance**](AppStoreReviewAttachmentsApi.md#appStoreReviewAttachmentsUpdateInstance) | **PATCH** /v1/appStoreReviewAttachments/{id} | 


# **appStoreReviewAttachmentsCreateInstance**
> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsCreateInstance(appStoreReviewAttachmentCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewAttachmentsApi(configuration);

let body:.AppStoreReviewAttachmentsApiAppStoreReviewAttachmentsCreateInstanceRequest = {
  // AppStoreReviewAttachmentCreateRequest | AppStoreReviewAttachment representation
  appStoreReviewAttachmentCreateRequest: {
    data: {
      type: "appStoreReviewAttachments",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        appStoreReviewDetail: {
          data: {
            type: "appStoreReviewDetails",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreReviewAttachmentsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreReviewAttachmentCreateRequest** | **AppStoreReviewAttachmentCreateRequest**| AppStoreReviewAttachment representation |


### Return type

**AppStoreReviewAttachmentResponse**

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
**201** | Single AppStoreReviewAttachment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreReviewAttachmentsDeleteInstance**
> void appStoreReviewAttachmentsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewAttachmentsApi(configuration);

let body:.AppStoreReviewAttachmentsApiAppStoreReviewAttachmentsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreReviewAttachmentsDeleteInstance(body).then((data:any) => {
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

# **appStoreReviewAttachmentsGetInstance**
> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewAttachmentsApi(configuration);

let body:.AppStoreReviewAttachmentsApiAppStoreReviewAttachmentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appStoreReviewAttachments (optional)
  fieldsAppStoreReviewAttachments: [
    "appStoreReviewDetail",
  ],
  // Array<'appStoreReviewDetail'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewDetail",
  ],
};

apiInstance.appStoreReviewAttachmentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreReviewAttachments** | **Array<&#39;appStoreReviewDetail&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appStoreReviewAttachments | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewDetail&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreReviewAttachmentResponse**

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
**200** | Single AppStoreReviewAttachment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreReviewAttachmentsUpdateInstance**
> AppStoreReviewAttachmentResponse appStoreReviewAttachmentsUpdateInstance(appStoreReviewAttachmentUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewAttachmentsApi(configuration);

let body:.AppStoreReviewAttachmentsApiAppStoreReviewAttachmentsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreReviewAttachmentUpdateRequest | AppStoreReviewAttachment representation
  appStoreReviewAttachmentUpdateRequest: {
    data: {
      type: "appStoreReviewAttachments",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.appStoreReviewAttachmentsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreReviewAttachmentUpdateRequest** | **AppStoreReviewAttachmentUpdateRequest**| AppStoreReviewAttachment representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreReviewAttachmentResponse**

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
**200** | Single AppStoreReviewAttachment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


