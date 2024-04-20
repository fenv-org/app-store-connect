# .SandboxTestersClearPurchaseHistoryRequestApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandboxTestersClearPurchaseHistoryRequestV2CreateInstance**](SandboxTestersClearPurchaseHistoryRequestApi.md#sandboxTestersClearPurchaseHistoryRequestV2CreateInstance) | **POST** /v2/sandboxTestersClearPurchaseHistoryRequest | 


# **sandboxTestersClearPurchaseHistoryRequestV2CreateInstance**
> SandboxTestersClearPurchaseHistoryRequestV2Response sandboxTestersClearPurchaseHistoryRequestV2CreateInstance(sandboxTestersClearPurchaseHistoryRequestV2CreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SandboxTestersClearPurchaseHistoryRequestApi(configuration);

let body:.SandboxTestersClearPurchaseHistoryRequestApiSandboxTestersClearPurchaseHistoryRequestV2CreateInstanceRequest = {
  // SandboxTestersClearPurchaseHistoryRequestV2CreateRequest | SandboxTestersClearPurchaseHistoryRequest representation
  sandboxTestersClearPurchaseHistoryRequestV2CreateRequest: {
    data: {
      type: "sandboxTestersClearPurchaseHistoryRequest",
      relationships: {
        sandboxTesters: {
          data: [
            {
              type: "sandboxTesters",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.sandboxTestersClearPurchaseHistoryRequestV2CreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandboxTestersClearPurchaseHistoryRequestV2CreateRequest** | **SandboxTestersClearPurchaseHistoryRequestV2CreateRequest**| SandboxTestersClearPurchaseHistoryRequest representation |


### Return type

**SandboxTestersClearPurchaseHistoryRequestV2Response**

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
**201** | Single SandboxTestersClearPurchaseHistoryRequest |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


