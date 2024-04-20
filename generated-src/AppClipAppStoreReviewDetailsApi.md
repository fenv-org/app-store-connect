# .AppClipAppStoreReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAppStoreReviewDetailsCreateInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsCreateInstance) | **POST** /v1/appClipAppStoreReviewDetails | 
[**appClipAppStoreReviewDetailsGetInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsGetInstance) | **GET** /v1/appClipAppStoreReviewDetails/{id} | 
[**appClipAppStoreReviewDetailsUpdateInstance**](AppClipAppStoreReviewDetailsApi.md#appClipAppStoreReviewDetailsUpdateInstance) | **PATCH** /v1/appClipAppStoreReviewDetails/{id} | 


# **appClipAppStoreReviewDetailsCreateInstance**
> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsCreateInstance(appClipAppStoreReviewDetailCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAppStoreReviewDetailsApi(configuration);

let body:.AppClipAppStoreReviewDetailsApiAppClipAppStoreReviewDetailsCreateInstanceRequest = {
  // AppClipAppStoreReviewDetailCreateRequest | AppClipAppStoreReviewDetail representation
  appClipAppStoreReviewDetailCreateRequest: {
    data: {
      type: "appClipAppStoreReviewDetails",
      attributes: {
        invocationUrls: [
          "invocationUrls_example",
        ],
      },
      relationships: {
        appClipDefaultExperience: {
          data: {
            type: "appClipDefaultExperiences",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appClipAppStoreReviewDetailsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAppStoreReviewDetailCreateRequest** | **AppClipAppStoreReviewDetailCreateRequest**| AppClipAppStoreReviewDetail representation |


### Return type

**AppClipAppStoreReviewDetailResponse**

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
**201** | Single AppClipAppStoreReviewDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAppStoreReviewDetailsGetInstance**
> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAppStoreReviewDetailsApi(configuration);

let body:.AppClipAppStoreReviewDetailsApiAppClipAppStoreReviewDetailsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appClipDefaultExperience' | 'invocationUrls'> | the fields to include for returned resources of type appClipAppStoreReviewDetails (optional)
  fieldsAppClipAppStoreReviewDetails: [
    "appClipDefaultExperience",
  ],
  // Array<'appClipDefaultExperience'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperience",
  ],
};

apiInstance.appClipAppStoreReviewDetailsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipAppStoreReviewDetails** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;invocationUrls&#39;>** | the fields to include for returned resources of type appClipAppStoreReviewDetails | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperience&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipAppStoreReviewDetailResponse**

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
**200** | Single AppClipAppStoreReviewDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAppStoreReviewDetailsUpdateInstance**
> AppClipAppStoreReviewDetailResponse appClipAppStoreReviewDetailsUpdateInstance(appClipAppStoreReviewDetailUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAppStoreReviewDetailsApi(configuration);

let body:.AppClipAppStoreReviewDetailsApiAppClipAppStoreReviewDetailsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipAppStoreReviewDetailUpdateRequest | AppClipAppStoreReviewDetail representation
  appClipAppStoreReviewDetailUpdateRequest: {
    data: {
      type: "appClipAppStoreReviewDetails",
      id: "id_example",
      attributes: {
        invocationUrls: [
          "invocationUrls_example",
        ],
      },
    },
  },
};

apiInstance.appClipAppStoreReviewDetailsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAppStoreReviewDetailUpdateRequest** | **AppClipAppStoreReviewDetailUpdateRequest**| AppClipAppStoreReviewDetail representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipAppStoreReviewDetailResponse**

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
**200** | Single AppClipAppStoreReviewDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


