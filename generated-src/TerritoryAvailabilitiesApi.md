# .TerritoryAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**territoryAvailabilitiesUpdateInstance**](TerritoryAvailabilitiesApi.md#territoryAvailabilitiesUpdateInstance) | **PATCH** /v1/territoryAvailabilities/{id} | 


# **territoryAvailabilitiesUpdateInstance**
> TerritoryAvailabilityResponse territoryAvailabilitiesUpdateInstance(territoryAvailabilityUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TerritoryAvailabilitiesApi(configuration);

let body:.TerritoryAvailabilitiesApiTerritoryAvailabilitiesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // TerritoryAvailabilityUpdateRequest | TerritoryAvailability representation
  territoryAvailabilityUpdateRequest: {
    data: {
      type: "territoryAvailabilities",
      id: "id_example",
      attributes: {
        available: true,
        releaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
        preOrderEnabled: true,
      },
    },
  },
};

apiInstance.territoryAvailabilitiesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **territoryAvailabilityUpdateRequest** | **TerritoryAvailabilityUpdateRequest**| TerritoryAvailability representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**TerritoryAvailabilityResponse**

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
**200** | Single TerritoryAvailability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


