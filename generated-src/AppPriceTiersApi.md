# .AppPriceTiersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPriceTiersGetCollection**](AppPriceTiersApi.md#appPriceTiersGetCollection) | **GET** /v1/appPriceTiers | 
[**appPriceTiersGetInstance**](AppPriceTiersApi.md#appPriceTiersGetInstance) | **GET** /v1/appPriceTiers/{id} | 
[**appPriceTiersPricePointsGetToManyRelated**](AppPriceTiersApi.md#appPriceTiersPricePointsGetToManyRelated) | **GET** /v1/appPriceTiers/{id}/pricePoints | 


# **appPriceTiersGetCollection**
> AppPriceTiersResponse appPriceTiersGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceTiersApi(configuration);

let body:.AppPriceTiersApiAppPriceTiersGetCollectionRequest = {
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'pricePoints'> | the fields to include for returned resources of type appPriceTiers (optional)
  fieldsAppPriceTiers: [
    "pricePoints",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'pricePoints'> | comma-separated list of relationships to include (optional)
  include: [
    "pricePoints",
  ],
  // Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "customerPrice",
  ],
  // number | maximum number of related pricePoints returned (when they are included) (optional)
  limitPricePoints: 1,
};

apiInstance.appPriceTiersGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsAppPriceTiers** | **Array<&#39;pricePoints&#39;>** | the fields to include for returned resources of type appPriceTiers | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;pricePoints&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **limitPricePoints** | [**number**] | maximum number of related pricePoints returned (when they are included) | (optional) defaults to undefined


### Return type

**AppPriceTiersResponse**

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
**200** | List of AppPriceTiers |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceTiersGetInstance**
> AppPriceTierResponse appPriceTiersGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceTiersApi(configuration);

let body:.AppPriceTiersApiAppPriceTiersGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'pricePoints'> | the fields to include for returned resources of type appPriceTiers (optional)
  fieldsAppPriceTiers: [
    "pricePoints",
  ],
  // Array<'pricePoints'> | comma-separated list of relationships to include (optional)
  include: [
    "pricePoints",
  ],
  // Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "customerPrice",
  ],
  // number | maximum number of related pricePoints returned (when they are included) (optional)
  limitPricePoints: 1,
};

apiInstance.appPriceTiersGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPriceTiers** | **Array<&#39;pricePoints&#39;>** | the fields to include for returned resources of type appPriceTiers | (optional) defaults to undefined
 **include** | **Array<&#39;pricePoints&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **limitPricePoints** | [**number**] | maximum number of related pricePoints returned (when they are included) | (optional) defaults to undefined


### Return type

**AppPriceTierResponse**

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
**200** | Single AppPriceTier |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPriceTiersPricePointsGetToManyRelated**
> AppPricePointsResponse appPriceTiersPricePointsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPriceTiersApi(configuration);

let body:.AppPriceTiersApiAppPriceTiersPricePointsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'pricePoints'> | the fields to include for returned resources of type appPriceTiers (optional)
  fieldsAppPriceTiers: [
    "pricePoints",
  ],
  // Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "customerPrice",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'priceTier' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "priceTier",
  ],
};

apiInstance.appPriceTiersPricePointsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsAppPriceTiers** | **Array<&#39;pricePoints&#39;>** | the fields to include for returned resources of type appPriceTiers | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;priceTier&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPricePointsResponse**

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
**200** | List of AppPricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


