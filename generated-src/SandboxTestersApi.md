# .SandboxTestersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sandboxTestersV2GetCollection**](SandboxTestersApi.md#sandboxTestersV2GetCollection) | **GET** /v2/sandboxTesters | 
[**sandboxTestersV2UpdateInstance**](SandboxTestersApi.md#sandboxTestersV2UpdateInstance) | **PATCH** /v2/sandboxTesters/{id} | 


# **sandboxTestersV2GetCollection**
> SandboxTestersV2Response sandboxTestersV2GetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SandboxTestersApi(configuration);

let body:.SandboxTestersApiSandboxTestersV2GetCollectionRequest = {
  // Array<'acAccountName' | 'applePayCompatible' | 'firstName' | 'interruptPurchases' | 'lastName' | 'subscriptionRenewalRate' | 'territory'> | the fields to include for returned resources of type sandboxTesters (optional)
  fieldsSandboxTesters: [
    "acAccountName",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.sandboxTestersV2GetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldsSandboxTesters** | **Array<&#39;acAccountName&#39; &#124; &#39;applePayCompatible&#39; &#124; &#39;firstName&#39; &#124; &#39;interruptPurchases&#39; &#124; &#39;lastName&#39; &#124; &#39;subscriptionRenewalRate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type sandboxTesters | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**SandboxTestersV2Response**

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
**200** | List of SandboxTesters |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sandboxTestersV2UpdateInstance**
> SandboxTesterV2Response sandboxTestersV2UpdateInstance(sandboxTesterV2UpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SandboxTestersApi(configuration);

let body:.SandboxTestersApiSandboxTestersV2UpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SandboxTesterV2UpdateRequest | SandboxTester representation
  sandboxTesterV2UpdateRequest: {
    data: {
      type: "sandboxTesters",
      id: "id_example",
      attributes: {
        territory: "ABW",
        interruptPurchases: true,
        subscriptionRenewalRate: "MONTHLY_RENEWAL_EVERY_ONE_HOUR",
      },
    },
  },
};

apiInstance.sandboxTestersV2UpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sandboxTesterV2UpdateRequest** | **SandboxTesterV2UpdateRequest**| SandboxTester representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SandboxTesterV2Response**

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
**200** | Single SandboxTester |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


