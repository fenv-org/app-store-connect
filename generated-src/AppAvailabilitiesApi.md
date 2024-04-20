# .AppAvailabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appAvailabilitiesAvailableTerritoriesGetToManyRelated**](AppAvailabilitiesApi.md#appAvailabilitiesAvailableTerritoriesGetToManyRelated) | **GET** /v1/appAvailabilities/{id}/availableTerritories | 
[**appAvailabilitiesCreateInstance**](AppAvailabilitiesApi.md#appAvailabilitiesCreateInstance) | **POST** /v1/appAvailabilities | 
[**appAvailabilitiesGetInstance**](AppAvailabilitiesApi.md#appAvailabilitiesGetInstance) | **GET** /v1/appAvailabilities/{id} | 
[**appAvailabilitiesV2CreateInstance**](AppAvailabilitiesApi.md#appAvailabilitiesV2CreateInstance) | **POST** /v2/appAvailabilities | 
[**appAvailabilitiesV2GetInstance**](AppAvailabilitiesApi.md#appAvailabilitiesV2GetInstance) | **GET** /v2/appAvailabilities/{id} | 
[**appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated**](AppAvailabilitiesApi.md#appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated) | **GET** /v2/appAvailabilities/{id}/territoryAvailabilities | 


# **appAvailabilitiesAvailableTerritoriesGetToManyRelated**
> TerritoriesResponse appAvailabilitiesAvailableTerritoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.appAvailabilitiesAvailableTerritoriesGetToManyRelated(body).then((data:any) => {
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

# **appAvailabilitiesCreateInstance**
> AppAvailabilityResponse appAvailabilitiesCreateInstance(appAvailabilityCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesCreateInstanceRequest = {
  // AppAvailabilityCreateRequest | AppAvailability representation
  appAvailabilityCreateRequest: {
    data: {
      type: "appAvailabilities",
      attributes: {
        availableInNewTerritories: true,
      },
      relationships: {
        app: {
          data: {
            type: "apps",
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

apiInstance.appAvailabilitiesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appAvailabilityCreateRequest** | **AppAvailabilityCreateRequest**| AppAvailability representation |


### Return type

**AppAvailabilityResponse**

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
**201** | Single AppAvailability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appAvailabilitiesGetInstance**
> AppAvailabilityResponse appAvailabilitiesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'availableInNewTerritories' | 'availableTerritories'> | the fields to include for returned resources of type appAvailabilities (optional)
  fieldsAppAvailabilities: [
    "app",
  ],
  // Array<'app' | 'availableTerritories'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related availableTerritories returned (when they are included) (optional)
  limitAvailableTerritories: 1,
};

apiInstance.appAvailabilitiesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppAvailabilities** | **Array<&#39;app&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39;>** | the fields to include for returned resources of type appAvailabilities | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;availableTerritories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined


### Return type

**AppAvailabilityResponse**

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
**200** | Single AppAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appAvailabilitiesV2CreateInstance**
> AppAvailabilityV2Response appAvailabilitiesV2CreateInstance(appAvailabilityV2CreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesV2CreateInstanceRequest = {
  // AppAvailabilityV2CreateRequest | AppAvailability representation
  appAvailabilityV2CreateRequest: {
    data: {
      type: "appAvailabilities",
      attributes: {
        availableInNewTerritories: true,
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
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
    included: [
      {
        type: "territoryAvailabilities",
        id: "id_example",
      },
    ],
  },
};

apiInstance.appAvailabilitiesV2CreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appAvailabilityV2CreateRequest** | **AppAvailabilityV2CreateRequest**| AppAvailability representation |


### Return type

**AppAvailabilityV2Response**

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
**201** | Single AppAvailability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appAvailabilitiesV2GetInstance**
> AppAvailabilityV2Response appAvailabilitiesV2GetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesV2GetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'availableInNewTerritories' | 'territoryAvailabilities'> | the fields to include for returned resources of type appAvailabilities (optional)
  fieldsAppAvailabilities: [
    "app",
  ],
  // Array<'territoryAvailabilities'> | comma-separated list of relationships to include (optional)
  include: [
    "territoryAvailabilities",
  ],
  // Array<'available' | 'contentStatuses' | 'preOrderEnabled' | 'preOrderPublishDate' | 'releaseDate' | 'territory'> | the fields to include for returned resources of type territoryAvailabilities (optional)
  fieldsTerritoryAvailabilities: [
    "available",
  ],
  // number | maximum number of related territoryAvailabilities returned (when they are included) (optional)
  limitTerritoryAvailabilities: 1,
};

apiInstance.appAvailabilitiesV2GetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppAvailabilities** | **Array<&#39;app&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;territoryAvailabilities&#39;>** | the fields to include for returned resources of type appAvailabilities | (optional) defaults to undefined
 **include** | **Array<&#39;territoryAvailabilities&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritoryAvailabilities** | **Array<&#39;available&#39; &#124; &#39;contentStatuses&#39; &#124; &#39;preOrderEnabled&#39; &#124; &#39;preOrderPublishDate&#39; &#124; &#39;releaseDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type territoryAvailabilities | (optional) defaults to undefined
 **limitTerritoryAvailabilities** | [**number**] | maximum number of related territoryAvailabilities returned (when they are included) | (optional) defaults to undefined


### Return type

**AppAvailabilityV2Response**

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
**200** | Single AppAvailability |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated**
> TerritoryAvailabilitiesResponse appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppAvailabilitiesApi(configuration);

let body:.AppAvailabilitiesApiAppAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'available' | 'contentStatuses' | 'preOrderEnabled' | 'preOrderPublishDate' | 'releaseDate' | 'territory'> | the fields to include for returned resources of type territoryAvailabilities (optional)
  fieldsTerritoryAvailabilities: [
    "available",
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

apiInstance.appAvailabilitiesV2TerritoryAvailabilitiesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsTerritoryAvailabilities** | **Array<&#39;available&#39; &#124; &#39;contentStatuses&#39; &#124; &#39;preOrderEnabled&#39; &#124; &#39;preOrderPublishDate&#39; &#124; &#39;releaseDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type territoryAvailabilities | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**TerritoryAvailabilitiesResponse**

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
**200** | List of TerritoryAvailabilities |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


