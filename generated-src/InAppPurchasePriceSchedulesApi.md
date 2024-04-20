# .InAppPurchasePriceSchedulesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/automaticPrices | 
[**inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/baseTerritory | 
[**inAppPurchasePriceSchedulesCreateInstance**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesCreateInstance) | **POST** /v1/inAppPurchasePriceSchedules | 
[**inAppPurchasePriceSchedulesGetInstance**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesGetInstance) | **GET** /v1/inAppPurchasePriceSchedules/{id} | 
[**inAppPurchasePriceSchedulesManualPricesGetToManyRelated**](InAppPurchasePriceSchedulesApi.md#inAppPurchasePriceSchedulesManualPricesGetToManyRelated) | **GET** /v1/inAppPurchasePriceSchedules/{id}/manualPrices | 


# **inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated**
> InAppPurchasePricesResponse inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasePriceSchedulesApi(configuration);

let body:.InAppPurchasePriceSchedulesApiInAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type inAppPurchasePricePoints (optional)
  fieldsInAppPurchasePricePoints: [
    "customerPrice",
  ],
  // Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type inAppPurchasePrices (optional)
  fieldsInAppPurchasePrices: [
    "endDate",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'inAppPurchasePricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchasePricePoint",
  ],
};

apiInstance.inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsInAppPurchasePricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePricePoints | (optional) defaults to undefined
 **fieldsInAppPurchasePrices** | **Array<&#39;endDate&#39; &#124; &#39;inAppPurchasePricePoint&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePrices | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchasePricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchasePricesResponse**

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
**200** | List of InAppPurchasePrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated**
> TerritoryResponse inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasePriceSchedulesApi(configuration);

let body:.InAppPurchasePriceSchedulesApiInAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
};

apiInstance.inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(body).then((data:any) => {
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

# **inAppPurchasePriceSchedulesCreateInstance**
> InAppPurchasePriceScheduleResponse inAppPurchasePriceSchedulesCreateInstance(inAppPurchasePriceScheduleCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasePriceSchedulesApi(configuration);

let body:.InAppPurchasePriceSchedulesApiInAppPurchasePriceSchedulesCreateInstanceRequest = {
  // InAppPurchasePriceScheduleCreateRequest | InAppPurchasePriceSchedule representation
  inAppPurchasePriceScheduleCreateRequest: {
    data: {
      type: "inAppPurchasePriceSchedules",
      relationships: {
        inAppPurchase: {
          data: {
            type: "inAppPurchases",
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
              type: "inAppPurchasePrices",
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

apiInstance.inAppPurchasePriceSchedulesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inAppPurchasePriceScheduleCreateRequest** | **InAppPurchasePriceScheduleCreateRequest**| InAppPurchasePriceSchedule representation |


### Return type

**InAppPurchasePriceScheduleResponse**

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
**201** | Single InAppPurchasePriceSchedule |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasePriceSchedulesGetInstance**
> InAppPurchasePriceScheduleResponse inAppPurchasePriceSchedulesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasePriceSchedulesApi(configuration);

let body:.InAppPurchasePriceSchedulesApiInAppPurchasePriceSchedulesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'> | the fields to include for returned resources of type inAppPurchasePriceSchedules (optional)
  fieldsInAppPurchasePriceSchedules: [
    "automaticPrices",
  ],
  // Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'> | comma-separated list of relationships to include (optional)
  include: [
    "automaticPrices",
  ],
  // Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type inAppPurchasePrices (optional)
  fieldsInAppPurchasePrices: [
    "endDate",
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

apiInstance.inAppPurchasePriceSchedulesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsInAppPurchasePriceSchedules** | **Array<&#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;inAppPurchase&#39; &#124; &#39;manualPrices&#39;>** | the fields to include for returned resources of type inAppPurchasePriceSchedules | (optional) defaults to undefined
 **include** | **Array<&#39;automaticPrices&#39; &#124; &#39;baseTerritory&#39; &#124; &#39;inAppPurchase&#39; &#124; &#39;manualPrices&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsInAppPurchasePrices** | **Array<&#39;endDate&#39; &#124; &#39;inAppPurchasePricePoint&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePrices | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAutomaticPrices** | [**number**] | maximum number of related automaticPrices returned (when they are included) | (optional) defaults to undefined
 **limitManualPrices** | [**number**] | maximum number of related manualPrices returned (when they are included) | (optional) defaults to undefined


### Return type

**InAppPurchasePriceScheduleResponse**

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
**200** | Single InAppPurchasePriceSchedule |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **inAppPurchasePriceSchedulesManualPricesGetToManyRelated**
> InAppPurchasePricesResponse inAppPurchasePriceSchedulesManualPricesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InAppPurchasePriceSchedulesApi(configuration);

let body:.InAppPurchasePriceSchedulesApiInAppPurchasePriceSchedulesManualPricesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type inAppPurchasePricePoints (optional)
  fieldsInAppPurchasePricePoints: [
    "customerPrice",
  ],
  // Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'> | the fields to include for returned resources of type inAppPurchasePrices (optional)
  fieldsInAppPurchasePrices: [
    "endDate",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'inAppPurchasePricePoint' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "inAppPurchasePricePoint",
  ],
};

apiInstance.inAppPurchasePriceSchedulesManualPricesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsInAppPurchasePricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePricePoints | (optional) defaults to undefined
 **fieldsInAppPurchasePrices** | **Array<&#39;endDate&#39; &#124; &#39;inAppPurchasePricePoint&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;manual&#39; &#124; &#39;startDate&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type inAppPurchasePrices | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;inAppPurchasePricePoint&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**InAppPurchasePricesResponse**

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
**200** | List of InAppPurchasePrices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


