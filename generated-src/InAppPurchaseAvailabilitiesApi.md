# .InAppPurchaseAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated) | **GET** /v1/inAppPurchaseAvailabilities/{id}/availableTerritories | 
[**inAppPurchaseAvailabilitiesCreateInstance**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesCreateInstance) | **POST** /v1/inAppPurchaseAvailabilities | 
[**inAppPurchaseAvailabilitiesGetInstance**](InAppPurchaseAvailabilitiesApi.md#inAppPurchaseAvailabilitiesGetInstance) | **GET** /v1/inAppPurchaseAvailabilities/{id} | 


# **inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated**
> TerritoriesResponse inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAvailabilitiesApi(configuration);

let body:.InAppPurchaseAvailabilitiesApiInAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(body).then((data:any) => {
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

# **inAppPurchaseAvailabilitiesCreateInstance**
> InAppPurchaseAvailabilityResponse inAppPurchaseAvailabilitiesCreateInstance(inAppPurchaseAvailabilityCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAvailabilitiesApi(configuration);

let body:.InAppPurchaseAvailabilitiesApiInAppPurchaseAvailabilitiesCreateInstanceRequest = {
  // InAppPurchaseAvailabilityCreateRequest | InAppPurchaseAvailability representation
  inAppPurchaseAvailabilityCreateRequest: {
    data: {
      type: "inAppPurchaseAvailabilities",
      attributes: {
        availableInNewTerritories: true,
      },
      relationships: {
        inAppPurchase: {
          data: {
            type: "inAppPurchases",
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

apiInstance.inAppPurchaseAvailabilitiesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchaseAvailabilityCreateRequest** | **InAppPurchaseAvailabilityCreateRequest**| InAppPurchaseAvailability representation |


### Return type

**InAppPurchaseAvailabilityResponse**

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
**201** | Single InAppPurchaseAvailability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchaseAvailabilitiesGetInstance**
> InAppPurchaseAvailabilityResponse inAppPurchaseAvailabilitiesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchaseAvailabilitiesApi(configuration);

let body:.InAppPurchaseAvailabilitiesApiInAppPurchaseAvailabilitiesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'availableInNewTerritories' | 'availableTerritories' | 'inAppPurchase'> | the fields to include for returned resources of type inAppPurchaseAvailabilities (optional)
  fieldsInAppPurchaseAvailabilities: [
    "availableInNewTerritories",
  ],
  // Array<'availableTerritories'> | comma-separated list of relationships to include (optional)
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

apiInstance.inAppPurchaseAvailabilitiesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchaseAvailabilities** | **Array<&#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;inAppPurchase&#39;>** | the fields to include for returned resources of type inAppPurchaseAvailabilities | (optional) defaults to undefined
 **include** | **Array<&#39;availableTerritories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined


### Return type

**InAppPurchaseAvailabilityResponse**

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
**200** | Single InAppPurchaseAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


