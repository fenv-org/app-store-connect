# .InAppPurchaseAppStoreReviewScreenshotsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseAppStoreReviewScreenshotsCreateInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsCreateInstance) | **POST** /v1/inAppPurchaseAppStoreReviewScreenshots | 
[**inAppPurchaseAppStoreReviewScreenshotsDeleteInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsDeleteInstance) | **DELETE** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 
[**inAppPurchaseAppStoreReviewScreenshotsGetInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsGetInstance) | **GET** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 
[**inAppPurchaseAppStoreReviewScreenshotsUpdateInstance**](InAppPurchaseAppStoreReviewScreenshotsApi.md#inAppPurchaseAppStoreReviewScreenshotsUpdateInstance) | **PATCH** /v1/inAppPurchaseAppStoreReviewScreenshots/{id} | 


# **inAppPurchaseAppStoreReviewScreenshotsCreateInstance**
> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsCreateInstance(inAppPurchaseAppStoreReviewScreenshotCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAppStoreReviewScreenshotsApi(configuration);

let body:.InAppPurchaseAppStoreReviewScreenshotsApiInAppPurchaseAppStoreReviewScreenshotsCreateInstanceRequest = {
  // InAppPurchaseAppStoreReviewScreenshotCreateRequest | InAppPurchaseAppStoreReviewScreenshot representation
  inAppPurchaseAppStoreReviewScreenshotCreateRequest: {
    data: {
      type: "inAppPurchaseAppStoreReviewScreenshots",
      attributes: {
        fileSize: 1,
        fileName: "fileName_example",
      },
      relationships: {
        inAppPurchaseV2: {
          data: {
            type: "inAppPurchases",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.inAppPurchaseAppStoreReviewScreenshotsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseAppStoreReviewScreenshotCreateRequest** | **InAppPurchaseAppStoreReviewScreenshotCreateRequest**| InAppPurchaseAppStoreReviewScreenshot representation |


### Return type

**InAppPurchaseAppStoreReviewScreenshotResponse**

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
**201** | Single InAppPurchaseAppStoreReviewScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchaseAppStoreReviewScreenshotsDeleteInstance**
> void inAppPurchaseAppStoreReviewScreenshotsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAppStoreReviewScreenshotsApi(configuration);

let body:.InAppPurchaseAppStoreReviewScreenshotsApiInAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.inAppPurchaseAppStoreReviewScreenshotsDeleteInstance(body).then((data:any) => {
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

# **inAppPurchaseAppStoreReviewScreenshotsGetInstance**
> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAppStoreReviewScreenshotsApi(configuration);

let body:.InAppPurchaseAppStoreReviewScreenshotsApiInAppPurchaseAppStoreReviewScreenshotsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'inAppPurchaseV2' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots (optional)
  fieldsInAppPurchaseAppStoreReviewScreenshots: [
    "assetDeliveryState",
  ],
  // Array<'inAppPurchaseV2'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchaseV2",
  ],
};

apiInstance.inAppPurchaseAppStoreReviewScreenshotsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseAppStoreReviewScreenshots** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;assetToken&#39; &#124; &#39;assetType&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type inAppPurchaseAppStoreReviewScreenshots | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchaseV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchaseAppStoreReviewScreenshotResponse**

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
**200** | Single InAppPurchaseAppStoreReviewScreenshot |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchaseAppStoreReviewScreenshotsUpdateInstance**
> InAppPurchaseAppStoreReviewScreenshotResponse inAppPurchaseAppStoreReviewScreenshotsUpdateInstance(inAppPurchaseAppStoreReviewScreenshotUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAppStoreReviewScreenshotsApi(configuration);

let body:.InAppPurchaseAppStoreReviewScreenshotsApiInAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // InAppPurchaseAppStoreReviewScreenshotUpdateRequest | InAppPurchaseAppStoreReviewScreenshot representation
  inAppPurchaseAppStoreReviewScreenshotUpdateRequest: {
    data: {
      type: "inAppPurchaseAppStoreReviewScreenshots",
      id: "id_example",
      attributes: {
        sourceFileChecksum: "sourceFileChecksum_example",
        uploaded: true,
      },
    },
  },
};

apiInstance.inAppPurchaseAppStoreReviewScreenshotsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseAppStoreReviewScreenshotUpdateRequest** | **InAppPurchaseAppStoreReviewScreenshotUpdateRequest**| InAppPurchaseAppStoreReviewScreenshot representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**InAppPurchaseAppStoreReviewScreenshotResponse**

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
**200** | Single InAppPurchaseAppStoreReviewScreenshot |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


