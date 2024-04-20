# .EndAppAvailabilityPreOrdersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endAppAvailabilityPreOrdersCreateInstance**](EndAppAvailabilityPreOrdersApi.md#endAppAvailabilityPreOrdersCreateInstance) | **POST** /v1/endAppAvailabilityPreOrders | 


# **endAppAvailabilityPreOrdersCreateInstance**
> EndAppAvailabilityPreOrderResponse endAppAvailabilityPreOrdersCreateInstance(endAppAvailabilityPreOrderCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EndAppAvailabilityPreOrdersApi(configuration);

let body:.EndAppAvailabilityPreOrdersApiEndAppAvailabilityPreOrdersCreateInstanceRequest = {
  // EndAppAvailabilityPreOrderCreateRequest | EndAppAvailabilityPreOrder representation
  endAppAvailabilityPreOrderCreateRequest: {
    data: {
      type: "endAppAvailabilityPreOrders",
      relationships: {
        territoryAvailabilities: {
          data: [
            {
              type: "territoryAvailabilities",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.endAppAvailabilityPreOrdersCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endAppAvailabilityPreOrderCreateRequest** | **EndAppAvailabilityPreOrderCreateRequest**| EndAppAvailabilityPreOrder representation |


### Return type

**EndAppAvailabilityPreOrderResponse**

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
**201** | Single EndAppAvailabilityPreOrder |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


