# .CustomerReviewResponsesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerReviewResponsesCreateInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesCreateInstance) | **POST** /v1/customerReviewResponses | 
[**customerReviewResponsesDeleteInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesDeleteInstance) | **DELETE** /v1/customerReviewResponses/{id} | 
[**customerReviewResponsesGetInstance**](CustomerReviewResponsesApi.md#customerReviewResponsesGetInstance) | **GET** /v1/customerReviewResponses/{id} | 


# **customerReviewResponsesCreateInstance**
> CustomerReviewResponseV1Response customerReviewResponsesCreateInstance(customerReviewResponseV1CreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerReviewResponsesApi(configuration);

let body:.CustomerReviewResponsesApiCustomerReviewResponsesCreateInstanceRequest = {
  // CustomerReviewResponseV1CreateRequest | CustomerReviewResponse representation
  customerReviewResponseV1CreateRequest: {
    data: {
      type: "customerReviewResponses",
      attributes: {
        responseBody: "responseBody_example",
      },
      relationships: {
        review: {
          data: {
            type: "customerReviews",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.customerReviewResponsesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerReviewResponseV1CreateRequest** | **CustomerReviewResponseV1CreateRequest**| CustomerReviewResponse representation |


### Return type

**CustomerReviewResponseV1Response**

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
**201** | Single CustomerReviewResponse |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerReviewResponsesDeleteInstance**
> void customerReviewResponsesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerReviewResponsesApi(configuration);

let body:.CustomerReviewResponsesApiCustomerReviewResponsesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.customerReviewResponsesDeleteInstance(body).then((data:any) => {
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

# **customerReviewResponsesGetInstance**
> CustomerReviewResponseV1Response customerReviewResponsesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerReviewResponsesApi(configuration);

let body:.CustomerReviewResponsesApiCustomerReviewResponsesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'> | the fields to include for returned resources of type customerReviewResponses (optional)
  fieldsCustomerReviewResponses: [
    "lastModifiedDate",
  ],
  // Array<'review'> | comma-separated list of relationships to include (optional)
  include: [
    "review",
  ],
};

apiInstance.customerReviewResponsesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCustomerReviewResponses** | **Array<&#39;lastModifiedDate&#39; &#124; &#39;responseBody&#39; &#124; &#39;review&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type customerReviewResponses | (optional) defaults to undefined
 **include** | **Array<&#39;review&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CustomerReviewResponseV1Response**

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
**200** | Single CustomerReviewResponse |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


