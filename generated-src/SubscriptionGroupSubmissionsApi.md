# .SubscriptionGroupSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupSubmissionsCreateInstance**](SubscriptionGroupSubmissionsApi.md#subscriptionGroupSubmissionsCreateInstance) | **POST** /v1/subscriptionGroupSubmissions | 


# **subscriptionGroupSubmissionsCreateInstance**
> SubscriptionGroupSubmissionResponse subscriptionGroupSubmissionsCreateInstance(subscriptionGroupSubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGroupSubmissionsApi(configuration);

let body:.SubscriptionGroupSubmissionsApiSubscriptionGroupSubmissionsCreateInstanceRequest = {
  // SubscriptionGroupSubmissionCreateRequest | SubscriptionGroupSubmission representation
  subscriptionGroupSubmissionCreateRequest: {
    data: {
      type: "subscriptionGroupSubmissions",
      relationships: {
        subscriptionGroup: {
          data: {
            type: "subscriptionGroups",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionGroupSubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGroupSubmissionCreateRequest** | **SubscriptionGroupSubmissionCreateRequest**| SubscriptionGroupSubmission representation |


### Return type

**SubscriptionGroupSubmissionResponse**

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
**201** | Single SubscriptionGroupSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

