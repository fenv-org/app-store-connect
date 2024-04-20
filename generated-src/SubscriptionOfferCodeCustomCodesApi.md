# .SubscriptionOfferCodeCustomCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodeCustomCodesCreateInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesCreateInstance) | **POST** /v1/subscriptionOfferCodeCustomCodes | 
[**subscriptionOfferCodeCustomCodesGetInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesGetInstance) | **GET** /v1/subscriptionOfferCodeCustomCodes/{id} | 
[**subscriptionOfferCodeCustomCodesUpdateInstance**](SubscriptionOfferCodeCustomCodesApi.md#subscriptionOfferCodeCustomCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodeCustomCodes/{id} | 


# **subscriptionOfferCodeCustomCodesCreateInstance**
> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesCreateInstance(subscriptionOfferCodeCustomCodeCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeCustomCodesApi(configuration);

let body:.SubscriptionOfferCodeCustomCodesApiSubscriptionOfferCodeCustomCodesCreateInstanceRequest = {
  // SubscriptionOfferCodeCustomCodeCreateRequest | SubscriptionOfferCodeCustomCode representation
  subscriptionOfferCodeCustomCodeCreateRequest: {
    data: {
      type: "subscriptionOfferCodeCustomCodes",
      attributes: {
        customCode: "customCode_example",
        numberOfCodes: 1,
        expirationDate: new Date('1970-01-01').toISOString().split('T')[0];,
      },
      relationships: {
        offerCode: {
          data: {
            type: "subscriptionOfferCodes",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.subscriptionOfferCodeCustomCodesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeCustomCodeCreateRequest** | **SubscriptionOfferCodeCustomCodeCreateRequest**| SubscriptionOfferCodeCustomCode representation |


### Return type

**SubscriptionOfferCodeCustomCodeResponse**

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
**201** | Single SubscriptionOfferCodeCustomCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodeCustomCodesGetInstance**
> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeCustomCodesApi(configuration);

let body:.SubscriptionOfferCodeCustomCodesApiSubscriptionOfferCodeCustomCodesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'> | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes (optional)
  fieldsSubscriptionOfferCodeCustomCodes: [
    "active",
  ],
  // Array<'offerCode'> | comma-separated list of relationships to include (optional)
  include: [
    "offerCode",
  ],
};

apiInstance.subscriptionOfferCodeCustomCodesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionOfferCodeCustomCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;customCode&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeCustomCodes | (optional) defaults to undefined
 **include** | **Array<&#39;offerCode&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodeCustomCodeResponse**

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
**200** | Single SubscriptionOfferCodeCustomCode |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodeCustomCodesUpdateInstance**
> SubscriptionOfferCodeCustomCodeResponse subscriptionOfferCodeCustomCodesUpdateInstance(subscriptionOfferCodeCustomCodeUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeCustomCodesApi(configuration);

let body:.SubscriptionOfferCodeCustomCodesApiSubscriptionOfferCodeCustomCodesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionOfferCodeCustomCodeUpdateRequest | SubscriptionOfferCodeCustomCode representation
  subscriptionOfferCodeCustomCodeUpdateRequest: {
    data: {
      type: "subscriptionOfferCodeCustomCodes",
      id: "id_example",
      attributes: {
        active: true,
      },
    },
  },
};

apiInstance.subscriptionOfferCodeCustomCodesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeCustomCodeUpdateRequest** | **SubscriptionOfferCodeCustomCodeUpdateRequest**| SubscriptionOfferCodeCustomCode representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionOfferCodeCustomCodeResponse**

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
**200** | Single SubscriptionOfferCodeCustomCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


