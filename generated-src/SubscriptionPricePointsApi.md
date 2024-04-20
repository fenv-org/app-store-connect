# .SubscriptionPricePointsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPricePointsEqualizationsGetToManyRelated**](SubscriptionPricePointsApi.md#subscriptionPricePointsEqualizationsGetToManyRelated) | **GET** /v1/subscriptionPricePoints/{id}/equalizations | 
[**subscriptionPricePointsGetInstance**](SubscriptionPricePointsApi.md#subscriptionPricePointsGetInstance) | **GET** /v1/subscriptionPricePoints/{id} | 


# **subscriptionPricePointsEqualizationsGetToManyRelated**
> SubscriptionPricePointsResponse subscriptionPricePointsEqualizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPricePointsApi(configuration);

let body:.SubscriptionPricePointsApiSubscriptionPricePointsEqualizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'subscription\' (optional)
  filterSubscription: [
    "filter[subscription]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
    "customerPrice",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "territory",
  ],
};

apiInstance.subscriptionPricePointsEqualizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterSubscription** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;subscription\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPricePointsResponse**

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
**200** | List of SubscriptionPricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionPricePointsGetInstance**
> SubscriptionPricePointResponse subscriptionPricePointsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionPricePointsApi(configuration);

let body:.SubscriptionPricePointsApiSubscriptionPricePointsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'> | the fields to include for returned resources of type subscriptionPricePoints (optional)
  fieldsSubscriptionPricePoints: [
    "customerPrice",
  ],
  // Array<'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "territory",
  ],
};

apiInstance.subscriptionPricePointsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;proceedsYear2&#39; &#124; &#39;subscription&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type subscriptionPricePoints | (optional) defaults to undefined
 **include** | **Array<&#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**SubscriptionPricePointResponse**

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
**200** | Single SubscriptionPricePoint |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


