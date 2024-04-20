# .SubscriptionSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionSubmissionsCreateInstance**](SubscriptionSubmissionsApi.md#subscriptionSubmissionsCreateInstance) | **POST** /v1/subscriptionSubmissions | 


# **subscriptionSubmissionsCreateInstance**
> SubscriptionSubmissionResponse subscriptionSubmissionsCreateInstance(subscriptionSubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionSubmissionsApi(configuration);

let body:.SubscriptionSubmissionsApiSubscriptionSubmissionsCreateInstanceRequest = {
  // SubscriptionSubmissionCreateRequest | SubscriptionSubmission representation
  subscriptionSubmissionCreateRequest: {
    data: {
      type: "subscriptionSubmissions",
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

apiInstance.subscriptionSubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionSubmissionCreateRequest** | **SubscriptionSubmissionCreateRequest**| SubscriptionSubmission representation |


### Return type

**SubscriptionSubmissionResponse**

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
**201** | Single SubscriptionSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


