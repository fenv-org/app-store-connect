# .CustomerReviewsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerReviewsGetInstance**](CustomerReviewsApi.md#customerReviewsGetInstance) | **GET** /v1/customerReviews/{id} | 
[**customerReviewsResponseGetToOneRelated**](CustomerReviewsApi.md#customerReviewsResponseGetToOneRelated) | **GET** /v1/customerReviews/{id}/response | 


# **customerReviewsGetInstance**
> CustomerReviewResponse customerReviewsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerReviewsApi(configuration);

let body:.CustomerReviewsApiCustomerReviewsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'> | the fields to include for returned resources of type customerReviews (optional)
  fieldsCustomerReviews: [
    "body",
  ],
  // Array<'response'> | comma-separated list of relationships to include (optional)
  include: [
    "response",
  ],
  // Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'> | the fields to include for returned resources of type customerReviewResponses (optional)
  fieldsCustomerReviewResponses: [
    "lastModifiedDate",
  ],
};

apiInstance.customerReviewsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCustomerReviews** | **Array<&#39;body&#39; &#124; &#39;createdDate&#39; &#124; &#39;rating&#39; &#124; &#39;response&#39; &#124; &#39;reviewerNickname&#39; &#124; &#39;territory&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type customerReviews | (optional) defaults to undefined
 **include** | **Array<&#39;response&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCustomerReviewResponses** | **Array<&#39;lastModifiedDate&#39; &#124; &#39;responseBody&#39; &#124; &#39;review&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type customerReviewResponses | (optional) defaults to undefined


### Return type

**CustomerReviewResponse**

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
**200** | Single CustomerReview |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerReviewsResponseGetToOneRelated**
> CustomerReviewResponseV1Response customerReviewsResponseGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerReviewsApi(configuration);

let body:.CustomerReviewsApiCustomerReviewsResponseGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'> | the fields to include for returned resources of type customerReviews (optional)
  fieldsCustomerReviews: [
    "body",
  ],
  // Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'> | the fields to include for returned resources of type customerReviewResponses (optional)
  fieldsCustomerReviewResponses: [
    "lastModifiedDate",
  ],
  // Array<'review'> | comma-separated list of relationships to include (optional)
  include: [
    "review",
  ],
};

apiInstance.customerReviewsResponseGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCustomerReviews** | **Array<&#39;body&#39; &#124; &#39;createdDate&#39; &#124; &#39;rating&#39; &#124; &#39;response&#39; &#124; &#39;reviewerNickname&#39; &#124; &#39;territory&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type customerReviews | (optional) defaults to undefined
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


