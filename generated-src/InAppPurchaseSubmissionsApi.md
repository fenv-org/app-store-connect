# .InAppPurchaseSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseSubmissionsCreateInstance**](InAppPurchaseSubmissionsApi.md#inAppPurchaseSubmissionsCreateInstance) | **POST** /v1/inAppPurchaseSubmissions | 


# **inAppPurchaseSubmissionsCreateInstance**
> InAppPurchaseSubmissionResponse inAppPurchaseSubmissionsCreateInstance(inAppPurchaseSubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseSubmissionsApi(configuration);

let body:.InAppPurchaseSubmissionsApiInAppPurchaseSubmissionsCreateInstanceRequest = {
  // InAppPurchaseSubmissionCreateRequest | InAppPurchaseSubmission representation
  inAppPurchaseSubmissionCreateRequest: {
    data: {
      type: "inAppPurchaseSubmissions",
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

apiInstance.inAppPurchaseSubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseSubmissionCreateRequest** | **InAppPurchaseSubmissionCreateRequest**| InAppPurchaseSubmission representation |


### Return type

**InAppPurchaseSubmissionResponse**

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
**201** | Single InAppPurchaseSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


