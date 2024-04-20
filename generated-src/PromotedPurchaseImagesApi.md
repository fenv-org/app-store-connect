# .PromotedPurchaseImagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**promotedPurchaseImagesCreateInstance**](PromotedPurchaseImagesApi.md#promotedPurchaseImagesCreateInstance) | **POST** /v1/promotedPurchaseImages | 
[**promotedPurchaseImagesDeleteInstance**](PromotedPurchaseImagesApi.md#promotedPurchaseImagesDeleteInstance) | **DELETE** /v1/promotedPurchaseImages/{id} | 
[**promotedPurchaseImagesGetInstance**](PromotedPurchaseImagesApi.md#promotedPurchaseImagesGetInstance) | **GET** /v1/promotedPurchaseImages/{id} | 
[**promotedPurchaseImagesUpdateInstance**](PromotedPurchaseImagesApi.md#promotedPurchaseImagesUpdateInstance) | **PATCH** /v1/promotedPurchaseImages/{id} | 


# **promotedPurchaseImagesCreateInstance**
> PromotedPurchaseImageResponse promotedPurchaseImagesCreateInstance(promotedPurchaseImageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchaseImagesApi(configuration);

let body:.PromotedPurchaseImagesApiPromotedPurchaseImagesCreateInstanceRequest = {
  // PromotedPurchaseImageCreateRequest | PromotedPurchaseImage representation
  promotedPurchaseImageCreateRequest: {
    data: {
      type: "promotedPurchaseImages",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        promotedPurchase: {
          data: {
            type: "promotedPurchases",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.promotedPurchaseImagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotedPurchaseImageCreateRequest** | **PromotedPurchaseImageCreateRequest**| PromotedPurchaseImage representation |


### Return type

**PromotedPurchaseImageResponse**

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
**201** | Single PromotedPurchaseImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **promotedPurchaseImagesDeleteInstance**
> void promotedPurchaseImagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchaseImagesApi(configuration);

let body:.PromotedPurchaseImagesApiPromotedPurchaseImagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.promotedPurchaseImagesDeleteInstance(body).then((data:any) => {
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

# **promotedPurchaseImagesGetInstance**
> PromotedPurchaseImageResponse promotedPurchaseImagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchaseImagesApi(configuration);

let body:.PromotedPurchaseImagesApiPromotedPurchaseImagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type promotedPurchaseImages (optional)
  fieldsPromotedPurchaseImages: [
    "assetToken",
  ],
  // Array<'promotedPurchase'> | comma-separated list of relationships to include (optional)
  include: [
    "promotedPurchase",
  ],
};

apiInstance.promotedPurchaseImagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsPromotedPurchaseImages** | **Array<&#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type promotedPurchaseImages | (optional) defaults to undefined
 **include** | **Array<&#39;promotedPurchase&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**PromotedPurchaseImageResponse**

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
**200** | Single PromotedPurchaseImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **promotedPurchaseImagesUpdateInstance**
> PromotedPurchaseImageResponse promotedPurchaseImagesUpdateInstance(promotedPurchaseImageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchaseImagesApi(configuration);

let body:.PromotedPurchaseImagesApiPromotedPurchaseImagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // PromotedPurchaseImageUpdateRequest | PromotedPurchaseImage representation
  promotedPurchaseImageUpdateRequest: {
    data: {
      type: "promotedPurchaseImages",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.promotedPurchaseImagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotedPurchaseImageUpdateRequest** | **PromotedPurchaseImageUpdateRequest**| PromotedPurchaseImage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**PromotedPurchaseImageResponse**

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
**200** | Single PromotedPurchaseImage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


