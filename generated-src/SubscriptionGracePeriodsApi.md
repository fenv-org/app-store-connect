# .SubscriptionGracePeriodsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGracePeriodsGetInstance**](SubscriptionGracePeriodsApi.md#subscriptionGracePeriodsGetInstance) | **GET** /v1/subscriptionGracePeriods/{id} | 
[**subscriptionGracePeriodsUpdateInstance**](SubscriptionGracePeriodsApi.md#subscriptionGracePeriodsUpdateInstance) | **PATCH** /v1/subscriptionGracePeriods/{id} | 


# **subscriptionGracePeriodsGetInstance**
> SubscriptionGracePeriodResponse subscriptionGracePeriodsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGracePeriodsApi(configuration);

let body:.SubscriptionGracePeriodsApiSubscriptionGracePeriodsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'> | the fields to include for returned resources of type subscriptionGracePeriods (optional)
  fieldsSubscriptionGracePeriods: [
    "duration",
  ],
};

apiInstance.subscriptionGracePeriodsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionGracePeriods** | **Array<&#39;duration&#39; &#124; &#39;optIn&#39; &#124; &#39;renewalType&#39; &#124; &#39;sandboxOptIn&#39;>** | the fields to include for returned resources of type subscriptionGracePeriods | (optional) defaults to undefined


### Return type

**SubscriptionGracePeriodResponse**

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
**200** | Single SubscriptionGracePeriod |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionGracePeriodsUpdateInstance**
> SubscriptionGracePeriodResponse subscriptionGracePeriodsUpdateInstance(subscriptionGracePeriodUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionGracePeriodsApi(configuration);

let body:.SubscriptionGracePeriodsApiSubscriptionGracePeriodsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // SubscriptionGracePeriodUpdateRequest | SubscriptionGracePeriod representation
  subscriptionGracePeriodUpdateRequest: {
    data: {
      type: "subscriptionGracePeriods",
      id: "id_example",
      attributes: {
        optIn: true,
        sandboxOptIn: true,
        duration: "THREE_DAYS",
        renewalType: "ALL_RENEWALS",
      },
    },
  },
};

apiInstance.subscriptionGracePeriodsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionGracePeriodUpdateRequest** | **SubscriptionGracePeriodUpdateRequest**| SubscriptionGracePeriod representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**SubscriptionGracePeriodResponse**

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
**200** | Single SubscriptionGracePeriod |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


