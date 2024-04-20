# .SubscriptionPricesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPricesCreateInstance**](SubscriptionPricesApi.md#subscriptionPricesCreateInstance) | **POST** /v1/subscriptionPrices | 
[**subscriptionPricesDeleteInstance**](SubscriptionPricesApi.md#subscriptionPricesDeleteInstance) | **DELETE** /v1/subscriptionPrices/{id} | 


# **subscriptionPricesCreateInstance**
> SubscriptionPriceResponse subscriptionPricesCreateInstance(subscriptionPriceCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPricesApi(configuration);

let body:.SubscriptionPricesApiSubscriptionPricesCreateInstanceRequest = {
  // SubscriptionPriceCreateRequest | SubscriptionPrice representation
  subscriptionPriceCreateRequest: {
    data: {
      type: "subscriptionPrices",
      attributes: {
        startDate: new Date('1970-01-01').toISOString().split('T')[0];,
        preserveCurrentPrice: true,
      },
      relationships: {
        subscription: {
          data: {
            type: "subscriptions",
            id: "id_example",
          },
        },
        territory: {
          data: {
            type: "territories",
            id: "id_example",
          },
        },
        subscriptionPricePoint: {
          data: {
            type: "subscriptionPricePoints",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionPricesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPriceCreateRequest** | **SubscriptionPriceCreateRequest**| SubscriptionPrice representation |


### Return type

**SubscriptionPriceResponse**

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
**201** | Single SubscriptionPrice |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionPricesDeleteInstance**
> void subscriptionPricesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPricesApi(configuration);

let body:.SubscriptionPricesApiSubscriptionPricesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionPricesDeleteInstance(body).then((data:any) => {
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


