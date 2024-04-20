# .SubscriptionOfferCodeOneTimeUseCodesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionOfferCodeOneTimeUseCodesCreateInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesCreateInstance) | **POST** /v1/subscriptionOfferCodeOneTimeUseCodes | 
[**subscriptionOfferCodeOneTimeUseCodesGetInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesGetInstance) | **GET** /v1/subscriptionOfferCodeOneTimeUseCodes/{id} | 
[**subscriptionOfferCodeOneTimeUseCodesUpdateInstance**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesUpdateInstance) | **PATCH** /v1/subscriptionOfferCodeOneTimeUseCodes/{id} | 
[**subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated**](SubscriptionOfferCodeOneTimeUseCodesApi.md#subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated) | **GET** /v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values | 


# **subscriptionOfferCodeOneTimeUseCodesCreateInstance**
> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesCreateInstance(subscriptionOfferCodeOneTimeUseCodeCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeOneTimeUseCodesApi(configuration);

let body:.SubscriptionOfferCodeOneTimeUseCodesApiSubscriptionOfferCodeOneTimeUseCodesCreateInstanceRequest = {
  // SubscriptionOfferCodeOneTimeUseCodeCreateRequest | SubscriptionOfferCodeOneTimeUseCode representation
  subscriptionOfferCodeOneTimeUseCodeCreateRequest: {
    data: {
      type: "subscriptionOfferCodeOneTimeUseCodes",
      attributes: {
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

apiInstance.subscriptionOfferCodeOneTimeUseCodesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeOneTimeUseCodeCreateRequest** | **SubscriptionOfferCodeOneTimeUseCodeCreateRequest**| SubscriptionOfferCodeOneTimeUseCode representation |


### Return type

**SubscriptionOfferCodeOneTimeUseCodeResponse**

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
**201** | Single SubscriptionOfferCodeOneTimeUseCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodeOneTimeUseCodesGetInstance**
> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeOneTimeUseCodesApi(configuration);

let body:.SubscriptionOfferCodeOneTimeUseCodesApiSubscriptionOfferCodeOneTimeUseCodesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'> | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes (optional)
  fieldsSubscriptionOfferCodeOneTimeUseCodes: [
    "active",
  ],
  // Array<'offerCode'> | comma-separated list of relationships to include (optional)
  include: [
    "offerCode",
  ],
};

apiInstance.subscriptionOfferCodeOneTimeUseCodesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionOfferCodeOneTimeUseCodes** | **Array<&#39;active&#39; &#124; &#39;createdDate&#39; &#124; &#39;expirationDate&#39; &#124; &#39;numberOfCodes&#39; &#124; &#39;offerCode&#39; &#124; &#39;values&#39;>** | the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes | (optional) defaults to undefined
 **include** | **Array<&#39;offerCode&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionOfferCodeOneTimeUseCodeResponse**

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
**200** | Single SubscriptionOfferCodeOneTimeUseCode |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodeOneTimeUseCodesUpdateInstance**
> SubscriptionOfferCodeOneTimeUseCodeResponse subscriptionOfferCodeOneTimeUseCodesUpdateInstance(subscriptionOfferCodeOneTimeUseCodeUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeOneTimeUseCodesApi(configuration);

let body:.SubscriptionOfferCodeOneTimeUseCodesApiSubscriptionOfferCodeOneTimeUseCodesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionOfferCodeOneTimeUseCodeUpdateRequest | SubscriptionOfferCodeOneTimeUseCode representation
  subscriptionOfferCodeOneTimeUseCodeUpdateRequest: {
    data: {
      type: "subscriptionOfferCodeOneTimeUseCodes",
      id: "id_example",
      attributes: {
        active: true,
      },
    },
  },
};

apiInstance.subscriptionOfferCodeOneTimeUseCodesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionOfferCodeOneTimeUseCodeUpdateRequest** | **SubscriptionOfferCodeOneTimeUseCodeUpdateRequest**| SubscriptionOfferCodeOneTimeUseCode representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionOfferCodeOneTimeUseCodeResponse**

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
**200** | Single SubscriptionOfferCodeOneTimeUseCode |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated**
> string subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionOfferCodeOneTimeUseCodesApi(configuration);

let body:.SubscriptionOfferCodeOneTimeUseCodesApiSubscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**string**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | Single SubscriptionOfferCodeOneTimeUseCodeValue |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


