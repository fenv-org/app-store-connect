# .AppStoreVersionReleaseRequestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionReleaseRequestsCreateInstance**](AppStoreVersionReleaseRequestsApi.md#appStoreVersionReleaseRequestsCreateInstance) | **POST** /v1/appStoreVersionReleaseRequests | 


# **appStoreVersionReleaseRequestsCreateInstance**
> AppStoreVersionReleaseRequestResponse appStoreVersionReleaseRequestsCreateInstance(appStoreVersionReleaseRequestCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionReleaseRequestsApi(configuration);

let body:.AppStoreVersionReleaseRequestsApiAppStoreVersionReleaseRequestsCreateInstanceRequest = {
  // AppStoreVersionReleaseRequestCreateRequest | AppStoreVersionReleaseRequest representation
  appStoreVersionReleaseRequestCreateRequest: {
    data: {
      type: "appStoreVersionReleaseRequests",
      relationships: {
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionReleaseRequestsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionReleaseRequestCreateRequest** | **AppStoreVersionReleaseRequestCreateRequest**| AppStoreVersionReleaseRequest representation |


### Return type

**AppStoreVersionReleaseRequestResponse**

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
**201** | Single AppStoreVersionReleaseRequest |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


