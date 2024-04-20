# .AppPricePointsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appPricePointsGetCollection**](AppPricePointsApi.md#appPricePointsGetCollection) | **GET** /v1/appPricePoints | 
[**appPricePointsGetInstance**](AppPricePointsApi.md#appPricePointsGetInstance) | **GET** /v1/appPricePoints/{id} | 
[**appPricePointsTerritoryGetToOneRelated**](AppPricePointsApi.md#appPricePointsTerritoryGetToOneRelated) | **GET** /v1/appPricePoints/{id}/territory | 
[**appPricePointsV3EqualizationsGetToManyRelated**](AppPricePointsApi.md#appPricePointsV3EqualizationsGetToManyRelated) | **GET** /v3/appPricePoints/{id}/equalizations | 
[**appPricePointsV3GetInstance**](AppPricePointsApi.md#appPricePointsV3GetInstance) | **GET** /v3/appPricePoints/{id} | 


# **appPricePointsGetCollection**
> AppPricePointsResponse appPricePointsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricePointsApi(configuration);

let body:.AppPricePointsApiAppPricePointsGetCollectionRequest = {
  // Array<string> | filter by id(s) of related \'priceTier\' (optional)
  filterPriceTier: [
    "filter[priceTier]_example",
  ],
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "customerPrice",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'priceTier' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "priceTier",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
};

apiInstance.appPricePointsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterPriceTier** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;priceTier\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;priceTier&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined


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
**200** | List of AppPricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPricePointsGetInstance**
> AppPricePointResponse appPricePointsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricePointsApi(configuration);

let body:.AppPricePointsApiAppPricePointsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'customerPrice' | 'priceTier' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "customerPrice",
  ],
  // Array<'priceTier' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "priceTier",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
};

apiInstance.appPricePointsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;customerPrice&#39; &#124; &#39;priceTier&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **include** | **Array<&#39;priceTier&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined


### Return type

**AppPricePointResponse**

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
**200** | Single AppPricePoint |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPricePointsTerritoryGetToOneRelated**
> TerritoryResponse appPricePointsTerritoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricePointsApi(configuration);

let body:.AppPricePointsApiAppPricePointsTerritoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
};

apiInstance.appPricePointsTerritoryGetToOneRelated(body).then((data:any) => {
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

# **appPricePointsV3EqualizationsGetToManyRelated**
> AppPricePointsV3Response appPricePointsV3EqualizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricePointsApi(configuration);

let body:.AppPricePointsApiAppPricePointsV3EqualizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'territory\' (optional)
  filterTerritory: [
    "filter[territory]_example",
  ],
  // Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.appPricePointsV3EqualizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterTerritory** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;territory\&#39; | (optional) defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;app&#39; &#124; &#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPricePointsV3Response**

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
**200** | List of AppPricePoints |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appPricePointsV3GetInstance**
> AppPricePointV3Response appPricePointsV3GetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppPricePointsApi(configuration);

let body:.AppPricePointsApiAppPricePointsV3GetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory'> | the fields to include for returned resources of type appPricePoints (optional)
  fieldsAppPricePoints: [
    "app",
  ],
  // Array<'app' | 'territory'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.appPricePointsV3GetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppPricePoints** | **Array<&#39;app&#39; &#124; &#39;customerPrice&#39; &#124; &#39;equalizations&#39; &#124; &#39;proceeds&#39; &#124; &#39;territory&#39;>** | the fields to include for returned resources of type appPricePoints | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;territory&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppPricePointV3Response**

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
**200** | Single AppPricePoint |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


