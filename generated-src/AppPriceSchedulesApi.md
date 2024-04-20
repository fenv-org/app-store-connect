# .AppPriceSchedulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPriceSchedulesAutomaticPricesGetToManyRelated**](AppPriceSchedulesApi.md#appPriceSchedulesAutomaticPricesGetToManyRelated) | **GET** /v1/appPriceSchedules/{id}/automaticPrices | 
[**appPriceSchedulesBaseTerritoryGetToOneRelated**](AppPriceSchedulesApi.md#appPriceSchedulesBaseTerritoryGetToOneRelated) | **GET** /v1/appPriceSchedules/{id}/baseTerritory | 
[**appPriceSchedulesCreateInstance**](AppPriceSchedulesApi.md#appPriceSchedulesCreateInstance) | **POST** /v1/appPriceSchedules | 
[**appPriceSchedulesGetInstance**](AppPriceSchedulesApi.md#appPriceSchedulesGetInstance) | **GET** /v1/appPriceSchedules/{id} | 
[**appPriceSchedulesManualPricesGetToManyRelated**](AppPriceSchedulesApi.md#appPriceSchedulesManualPricesGetToManyRelated) | **GET** /v1/appPriceSchedules/{id}/manualPrices | 


# **appPriceSchedulesAutomaticPricesGetToManyRelated**
> AppPricesV2Response appPriceSchedulesAutomaticPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceSchedulesApi(configuration);

let body:.AppPriceSchedulesApiAppPriceSchedulesAutomaticPricesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'endDate\' (optional)
  filterEndDate: [
    "filter[endDate]_example",
  ],
  // Array<string> | filter by attribute \'startDate\' (optional)
  filterStartDate: [
    "filter[startDate]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'appPricePoint' | 'endDate' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type appPrices (optional)
  fieldsAppPrices: [
    "appPricePoint",
  ],
  // Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "app",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "appPricePoint",
  ],
};

apiInstance.appPriceSchedulesAutomaticPricesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterEndDate** | **Array&lt;string&gt;** | filter by attribute \&#39;endDate\&#39; | (optional) defaults to undefined
 **filterStartDate** | **Array&lt;string&gt;** | filter by attribute \&#39;startDate\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsAppPrices** | **Array<&#39;appPricePoint&#39; &#124; &#39;endDate&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPrices | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;app&#39; &#124; &#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPricesV2Response**

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
**200** | List of AppPrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceSchedulesBaseTerritoryGetToOneRelated**
> TerritoryResponse appPriceSchedulesBaseTerritoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceSchedulesApi(configuration);

let body:.AppPriceSchedulesApiAppPriceSchedulesBaseTerritoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
};

apiInstance.appPriceSchedulesBaseTerritoryGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined


### Return type

**TerritoryResponse**

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
**200** | Single Territory |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceSchedulesCreateInstance**
> AppPriceScheduleResponse appPriceSchedulesCreateInstance(appPriceScheduleCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceSchedulesApi(configuration);

let body:.AppPriceSchedulesApiAppPriceSchedulesCreateInstanceRequest = {
  // AppPriceScheduleCreateRequest | AppPriceSchedule representation
  appPriceScheduleCreateRequest: {
    data: {
      type: "appPriceSchedules",
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        baseTerritory: {
          data: {
            type: "territories",
            id: "id_example",
          },
        },
        manualPrices: {
          data: [
            {
              type: "appPrices",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      null,
    ],
  },
};

apiInstance.appPriceSchedulesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPriceScheduleCreateRequest** | **AppPriceScheduleCreateRequest**| AppPriceSchedule representation |


### Return type

**AppPriceScheduleResponse**

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
**201** | Single AppPriceSchedule |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceSchedulesGetInstance**
> AppPriceScheduleResponse appPriceSchedulesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceSchedulesApi(configuration);

let body:.AppPriceSchedulesApiAppPriceSchedulesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'> | the fields to include for returned resources of type appPriceSchedules (optional)
  fieldsAppPriceSchedules: [
    "app",
  ],
  // Array<'app' | 'automaticPrices' | 'baseTerritory' | 'manualPrices'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'appPricePoint' | 'endDate' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type appPrices (optional)
  fieldsAppPrices: [
    "appPricePoint",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related automaticPrices returned (when they are included) (optional)
  limitAutomaticPrices: 1,
  // number | maximum number of related manualPrices returned (when they are included) (optional)
  limitManualPrices: 1,
};

apiInstance.appPriceSchedulesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPriceSchedules** | **Array<&#39;app&#39; &#124; &#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;manualPrices&#39;>** | the fields to include for returned resources of type appPriceSchedules | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;manualPrices&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppPrices** | **Array<&#39;appPricePoint&#39; &#124; &#39;endDate&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPrices | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAutomaticPrices** | [**number**] | maximum number of related automaticPrices returned (when they are included) | (optional) defaults to undefined
 **limitManualPrices** | [**number**] | maximum number of related manualPrices returned (when they are included) | (optional) defaults to undefined


### Return type

**AppPriceScheduleResponse**

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
**200** | Single AppPriceSchedule |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceSchedulesManualPricesGetToManyRelated**
> AppPricesV2Response appPriceSchedulesManualPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceSchedulesApi(configuration);

let body:.AppPriceSchedulesApiAppPriceSchedulesManualPricesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'endDate\' (optional)
  filterEndDate: [
    "filter[endDate]_example",
  ],
  // Array<string> | filter by attribute \'startDate\' (optional)
  filterStartDate: [
    "filter[startDate]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'appPricePoint' | 'endDate' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type appPrices (optional)
  fieldsAppPrices: [
    "appPricePoint",
  ],
  // Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "app",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appPricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "appPricePoint",
  ],
};

apiInstance.appPriceSchedulesManualPricesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterEndDate** | **Array&lt;string&gt;** | filter by attribute \&#39;endDate\&#39; | (optional) defaults to undefined
 **filterStartDate** | **Array&lt;string&gt;** | filter by attribute \&#39;startDate\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsAppPrices** | **Array<&#39;appPricePoint&#39; &#124; &#39;endDate&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPrices | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;app&#39; &#124; &#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appPricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPricesV2Response**

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
**200** | List of AppPrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


