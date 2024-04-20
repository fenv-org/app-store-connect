# .SubscriptionAppStoreReviewScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionAppStoreReviewScreenshotsCreateInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsCreateInstance) | **POST** /v1/subscriptionAppStoreReviewScreenshots | 
[**subscriptionAppStoreReviewScreenshotsDeleteInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsDeleteInstance) | **DELETE** /v1/subscriptionAppStoreReviewScreenshots/{id} | 
[**subscriptionAppStoreReviewScreenshotsGetInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsGetInstance) | **GET** /v1/subscriptionAppStoreReviewScreenshots/{id} | 
[**subscriptionAppStoreReviewScreenshotsUpdateInstance**](SubscriptionAppStoreReviewScreenshotsApi.md#subscriptionAppStoreReviewScreenshotsUpdateInstance) | **PATCH** /v1/subscriptionAppStoreReviewScreenshots/{id} | 


# **subscriptionAppStoreReviewScreenshotsCreateInstance**
> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsCreateInstance(subscriptionAppStoreReviewScreenshotCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAppStoreReviewScreenshotsApi(configuration);

let body:.SubscriptionAppStoreReviewScreenshotsApiSubscriptionAppStoreReviewScreenshotsCreateInstanceRequest = {
  // SubscriptionAppStoreReviewScreenshotCreateRequest | SubscriptionAppStoreReviewScreenshot representation
  subscriptionAppStoreReviewScreenshotCreateRequest: {
    data: {
      type: "subscriptionAppStoreReviewScreenshots",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
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

apiInstance.subscriptionAppStoreReviewScreenshotsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionAppStoreReviewScreenshotCreateRequest** | **SubscriptionAppStoreReviewScreenshotCreateRequest**| SubscriptionAppStoreReviewScreenshot representation |


### Return type

**SubscriptionAppStoreReviewScreenshotResponse**

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
**201** | Single SubscriptionAppStoreReviewScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionAppStoreReviewScreenshotsDeleteInstance**
> void subscriptionAppStoreReviewScreenshotsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAppStoreReviewScreenshotsApi(configuration);

let body:.SubscriptionAppStoreReviewScreenshotsApiSubscriptionAppStoreReviewScreenshotsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionAppStoreReviewScreenshotsDeleteInstance(body).then((data:any) => {
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

# **subscriptionAppStoreReviewScreenshotsGetInstance**
> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAppStoreReviewScreenshotsApi(configuration);

let body:.SubscriptionAppStoreReviewScreenshotsApiSubscriptionAppStoreReviewScreenshotsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'subscription' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots (optional)
  fieldsSubscriptionAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "subscription",
  ],
};

apiInstance.subscriptionAppStoreReviewScreenshotsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;subscription&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type subscriptionAppStoreReviewScreenshots | (optional) defaults to undefined
 **include** | **Array<&#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionAppStoreReviewScreenshotResponse**

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
**200** | Single SubscriptionAppStoreReviewScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionAppStoreReviewScreenshotsUpdateInstance**
> SubscriptionAppStoreReviewScreenshotResponse subscriptionAppStoreReviewScreenshotsUpdateInstance(subscriptionAppStoreReviewScreenshotUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAppStoreReviewScreenshotsApi(configuration);

let body:.SubscriptionAppStoreReviewScreenshotsApiSubscriptionAppStoreReviewScreenshotsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionAppStoreReviewScreenshotUpdateRequest | SubscriptionAppStoreReviewScreenshot representation
  subscriptionAppStoreReviewScreenshotUpdateRequest: {
    data: {
      type: "subscriptionAppStoreReviewScreenshots",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.subscriptionAppStoreReviewScreenshotsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionAppStoreReviewScreenshotUpdateRequest** | **SubscriptionAppStoreReviewScreenshotUpdateRequest**| SubscriptionAppStoreReviewScreenshot representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionAppStoreReviewScreenshotResponse**

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
**200** | Single SubscriptionAppStoreReviewScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


