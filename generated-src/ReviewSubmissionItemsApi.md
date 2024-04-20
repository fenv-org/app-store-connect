# .ReviewSubmissionItemsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewSubmissionItemsCreateInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsCreateInstance) | **POST** /v1/reviewSubmissionItems | 
[**reviewSubmissionItemsDeleteInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsDeleteInstance) | **DELETE** /v1/reviewSubmissionItems/{id} | 
[**reviewSubmissionItemsUpdateInstance**](ReviewSubmissionItemsApi.md#reviewSubmissionItemsUpdateInstance) | **PATCH** /v1/reviewSubmissionItems/{id} | 


# **reviewSubmissionItemsCreateInstance**
> ReviewSubmissionItemResponse reviewSubmissionItemsCreateInstance(reviewSubmissionItemCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionItemsApi(configuration);

let body:.ReviewSubmissionItemsApiReviewSubmissionItemsCreateInstanceRequest = {
  // ReviewSubmissionItemCreateRequest | ReviewSubmissionItem representation
  reviewSubmissionItemCreateRequest: {
    data: {
      type: "reviewSubmissionItems",
      relationships: {
        reviewSubmission: {
          data: {
            type: "reviewSubmissions",
            id: "id_example",
          },
        },
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
        appCustomProductPageVersion: {
          data: {
            type: "appCustomProductPageVersions",
            id: "id_example",
          },
        },
        appStoreVersionExperiment: {
          data: {
            type: "appStoreVersionExperiments",
            id: "id_example",
          },
        },
        appStoreVersionExperimentV2: {
          data: {
            type: "appStoreVersionExperiments",
            id: "id_example",
          },
        },
        appEvent: {
          data: {
            type: "appEvents",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.reviewSubmissionItemsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewSubmissionItemCreateRequest** | **ReviewSubmissionItemCreateRequest**| ReviewSubmissionItem representation |


### Return type

**ReviewSubmissionItemResponse**

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
**201** | Single ReviewSubmissionItem |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reviewSubmissionItemsDeleteInstance**
> void reviewSubmissionItemsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionItemsApi(configuration);

let body:.ReviewSubmissionItemsApiReviewSubmissionItemsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.reviewSubmissionItemsDeleteInstance(body).then((data:any) => {
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

# **reviewSubmissionItemsUpdateInstance**
> ReviewSubmissionItemResponse reviewSubmissionItemsUpdateInstance(reviewSubmissionItemUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionItemsApi(configuration);

let body:.ReviewSubmissionItemsApiReviewSubmissionItemsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // ReviewSubmissionItemUpdateRequest | ReviewSubmissionItem representation
  reviewSubmissionItemUpdateRequest: {
    data: {
      type: "reviewSubmissionItems",
      id: "id_example",
      attributes: {
        resolved: true,
        removed: true,
      },
    },
  },
};

apiInstance.reviewSubmissionItemsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewSubmissionItemUpdateRequest** | **ReviewSubmissionItemUpdateRequest**| ReviewSubmissionItem representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**ReviewSubmissionItemResponse**

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
**200** | Single ReviewSubmissionItem |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


