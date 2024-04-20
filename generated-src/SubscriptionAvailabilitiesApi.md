# .SubscriptionAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated) | **GET** /v1/subscriptionAvailabilities/{id}/availableTerritories | 
[**subscriptionAvailabilitiesCreateInstance**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesCreateInstance) | **POST** /v1/subscriptionAvailabilities | 
[**subscriptionAvailabilitiesGetInstance**](SubscriptionAvailabilitiesApi.md#subscriptionAvailabilitiesGetInstance) | **GET** /v1/subscriptionAvailabilities/{id} | 


# **subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated**
> TerritoriesResponse subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAvailabilitiesApi(configuration);

let body:.SubscriptionAvailabilitiesApiSubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**TerritoriesResponse**

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
**200** | List of Territories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionAvailabilitiesCreateInstance**
> SubscriptionAvailabilityResponse subscriptionAvailabilitiesCreateInstance(subscriptionAvailabilityCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAvailabilitiesApi(configuration);

let body:.SubscriptionAvailabilitiesApiSubscriptionAvailabilitiesCreateInstanceRequest = {
  // SubscriptionAvailabilityCreateRequest | SubscriptionAvailability representation
  subscriptionAvailabilityCreateRequest: {
    data: {
      type: "subscriptionAvailabilities",
      attributes: {
        availableInNewTerritories: true,
      },
      relationships: {
        subscription: {
          data: {
            type: "subscriptions",
            id: "id_example",
          },
        },
        availableTerritories: {
          data: [
            {
              type: "territories",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.subscriptionAvailabilitiesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionAvailabilityCreateRequest** | **SubscriptionAvailabilityCreateRequest**| SubscriptionAvailability representation |


### Return type

**SubscriptionAvailabilityResponse**

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
**201** | Single SubscriptionAvailability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscriptionAvailabilitiesGetInstance**
> SubscriptionAvailabilityResponse subscriptionAvailabilitiesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SubscriptionAvailabilitiesApi(configuration);

let body:.SubscriptionAvailabilitiesApiSubscriptionAvailabilitiesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'subscription'> | the fields to include for returned resources of type subscriptionAvailabilities (optional)
  fieldsSubscriptionAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'availableTerritories' | 'subscription'> | comma-separated list of relationships to include (optional)
  include: [
    "availableTerritories",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related availableTerritories returned (when they are included) (optional)
  limitAvailableTerritories: 1,
};

apiInstance.subscriptionAvailabilitiesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsSubscriptionAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | the fields to include for returned resources of type subscriptionAvailabilities | (optional) defaults to undefined
 **include** | **Array<&#39;availableTerritories&#39; &#124; &#39;subscription&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined


### Return type

**SubscriptionAvailabilityResponse**

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
**200** | Single SubscriptionAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


