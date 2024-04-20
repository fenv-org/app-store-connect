# .PromotedPurchasesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**promotedPurchasesCreateInstance**](PromotedPurchasesApi.md#promotedPurchasesCreateInstance) | **POST** /v1/promotedPurchases | 
[**promotedPurchasesDeleteInstance**](PromotedPurchasesApi.md#promotedPurchasesDeleteInstance) | **DELETE** /v1/promotedPurchases/{id} | 
[**promotedPurchasesGetInstance**](PromotedPurchasesApi.md#promotedPurchasesGetInstance) | **GET** /v1/promotedPurchases/{id} | 
[**promotedPurchasesPromotionImagesGetToManyRelated**](PromotedPurchasesApi.md#promotedPurchasesPromotionImagesGetToManyRelated) | **GET** /v1/promotedPurchases/{id}/promotionImages | 
[**promotedPurchasesUpdateInstance**](PromotedPurchasesApi.md#promotedPurchasesUpdateInstance) | **PATCH** /v1/promotedPurchases/{id} | 


# **promotedPurchasesCreateInstance**
> PromotedPurchaseResponse promotedPurchasesCreateInstance(promotedPurchaseCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchasesApi(configuration);

let body:.PromotedPurchasesApiPromotedPurchasesCreateInstanceRequest = {
  // PromotedPurchaseCreateRequest | PromotedPurchase representation
  promotedPurchaseCreateRequest: {
    data: {
      type: "promotedPurchases",
      attributes: {
        visibleForAllUsers: true,
        enabled: true,
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        inAppPurchaseV2: {
          data: {
            type: "inAppPurchases",
            id: "id_example",
          },
        },
        subscription: {
          data: {
            type: "subscriptions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.promotedPurchasesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotedPurchaseCreateRequest** | **PromotedPurchaseCreateRequest**| PromotedPurchase representation |


### Return type

**PromotedPurchaseResponse**

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
**201** | Single PromotedPurchase |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **promotedPurchasesDeleteInstance**
> void promotedPurchasesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchasesApi(configuration);

let body:.PromotedPurchasesApiPromotedPurchasesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.promotedPurchasesDeleteInstance(body).then((data:any) => {
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

# **promotedPurchasesGetInstance**
> PromotedPurchaseResponse promotedPurchasesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchasesApi(configuration);

let body:.PromotedPurchasesApiPromotedPurchasesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'inAppPurchaseV2' | 'promotionImages' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
  // Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type promotedPurchaseImages (optional)
  fieldsPromotedPurchaseImages: [
    "assetToken",
  ],
  // number | maximum number of related promotionImages returned (when they are included) (optional)
  limitPromotionImages: 1,
};

apiInstance.promotedPurchasesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsPromotedPurchaseImages** | **Array<&#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type promotedPurchaseImages | (optional) defaults to undefined
 **limitPromotionImages** | [**number**] | maximum number of related promotionImages returned (when they are included) | (optional) defaults to undefined


### Return type

**PromotedPurchaseResponse**

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
**200** | Single PromotedPurchase |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **promotedPurchasesPromotionImagesGetToManyRelated**
> PromotedPurchaseImagesResponse promotedPurchasesPromotionImagesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchasesApi(configuration);

let body:.PromotedPurchasesApiPromotedPurchasesPromotionImagesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'promotedPurchase' | 'sourceFileChecksum' | 'state' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type promotedPurchaseImages (optional)
  fieldsPromotedPurchaseImages: [
    "assetToken",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'promotedPurchase'> | comma-separated list of relationships to include (optional)
  include: [
    "promotedPurchase",
  ],
};

apiInstance.promotedPurchasesPromotionImagesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsPromotedPurchaseImages** | **Array<&#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type promotedPurchaseImages | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;promotedPurchase&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**PromotedPurchaseImagesResponse**

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
**200** | List of PromotedPurchaseImages |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **promotedPurchasesUpdateInstance**
> PromotedPurchaseResponse promotedPurchasesUpdateInstance(promotedPurchaseUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PromotedPurchasesApi(configuration);

let body:.PromotedPurchasesApiPromotedPurchasesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // PromotedPurchaseUpdateRequest | PromotedPurchase representation
  promotedPurchaseUpdateRequest: {
    data: {
      type: "promotedPurchases",
      id: "id_example",
      attributes: {
        visibleForAllUsers: true,
        enabled: true,
      },
    },
  },
};

apiInstance.promotedPurchasesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promotedPurchaseUpdateRequest** | **PromotedPurchaseUpdateRequest**| PromotedPurchase representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**PromotedPurchaseResponse**

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
**200** | Single PromotedPurchase |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


