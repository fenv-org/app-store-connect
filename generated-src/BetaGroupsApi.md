# .BetaGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaGroupsAppGetToOneRelated**](BetaGroupsApi.md#betaGroupsAppGetToOneRelated) | **GET** /v1/betaGroups/{id}/app | 
[**betaGroupsBetaTesterUsagesGetMetrics**](BetaGroupsApi.md#betaGroupsBetaTesterUsagesGetMetrics) | **GET** /v1/betaGroups/{id}/metrics/betaTesterUsages | 
[**betaGroupsBetaTestersCreateToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersCreateToManyRelationship) | **POST** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBetaTestersDeleteToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersDeleteToManyRelationship) | **DELETE** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBetaTestersGetToManyRelated**](BetaGroupsApi.md#betaGroupsBetaTestersGetToManyRelated) | **GET** /v1/betaGroups/{id}/betaTesters | 
[**betaGroupsBetaTestersGetToManyRelationship**](BetaGroupsApi.md#betaGroupsBetaTestersGetToManyRelationship) | **GET** /v1/betaGroups/{id}/relationships/betaTesters | 
[**betaGroupsBuildsCreateToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsCreateToManyRelationship) | **POST** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsBuildsDeleteToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsDeleteToManyRelationship) | **DELETE** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsBuildsGetToManyRelated**](BetaGroupsApi.md#betaGroupsBuildsGetToManyRelated) | **GET** /v1/betaGroups/{id}/builds | 
[**betaGroupsBuildsGetToManyRelationship**](BetaGroupsApi.md#betaGroupsBuildsGetToManyRelationship) | **GET** /v1/betaGroups/{id}/relationships/builds | 
[**betaGroupsCreateInstance**](BetaGroupsApi.md#betaGroupsCreateInstance) | **POST** /v1/betaGroups | 
[**betaGroupsDeleteInstance**](BetaGroupsApi.md#betaGroupsDeleteInstance) | **DELETE** /v1/betaGroups/{id} | 
[**betaGroupsGetCollection**](BetaGroupsApi.md#betaGroupsGetCollection) | **GET** /v1/betaGroups | 
[**betaGroupsGetInstance**](BetaGroupsApi.md#betaGroupsGetInstance) | **GET** /v1/betaGroups/{id} | 
[**betaGroupsUpdateInstance**](BetaGroupsApi.md#betaGroupsUpdateInstance) | **PATCH** /v1/betaGroups/{id} | 


# **betaGroupsAppGetToOneRelated**
> AppWithoutIncludesResponse betaGroupsAppGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsAppGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
};

apiInstance.betaGroupsAppGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined


### Return type

**AppWithoutIncludesResponse**

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
**200** | Single App with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBetaTesterUsagesGetMetrics**
> AppsBetaTesterUsagesV1MetricResponse betaGroupsBetaTesterUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBetaTesterUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'betaTesters'> | the dimension by which to group the results (optional)
  groupBy: [
    "betaTesters",
  ],
  // string | filter by \'betaTesters\' relationship dimension (optional)
  filterBetaTesters: "filter[betaTesters]_example",
  // 'P7D' | 'P30D' | 'P90D' | 'P365D' | the duration of the reporting period (optional)
  period: "P7D",
};

apiInstance.betaGroupsBetaTesterUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;betaTesters&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterBetaTesters** | [**string**] | filter by \&#39;betaTesters\&#39; relationship dimension | (optional) defaults to undefined
 **period** | [**&#39;P7D&#39; | &#39;P30D&#39; | &#39;P90D&#39; | &#39;P365D&#39;**]**Array<&#39;P7D&#39; &#124; &#39;P30D&#39; &#124; &#39;P90D&#39; &#124; &#39;P365D&#39;>** | the duration of the reporting period | (optional) defaults to undefined


### Return type

**AppsBetaTesterUsagesV1MetricResponse**

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
**200** | Metrics data response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBetaTestersCreateToManyRelationship**
> void betaGroupsBetaTestersCreateToManyRelationship(betaGroupBetaTestersLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBetaTestersCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaGroupBetaTestersLinkagesRequest | List of related linkages
  betaGroupBetaTestersLinkagesRequest: {
    data: [
      {
        type: "betaTesters",
        id: "id_example",
      },
    ],
  },
};

apiInstance.betaGroupsBetaTestersCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupBetaTestersLinkagesRequest** | **BetaGroupBetaTestersLinkagesRequest**| List of related linkages |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBetaTestersDeleteToManyRelationship**
> void betaGroupsBetaTestersDeleteToManyRelationship(betaGroupBetaTestersLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBetaTestersDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaGroupBetaTestersLinkagesRequest | List of related linkages
  betaGroupBetaTestersLinkagesRequest: {
    data: [
      {
        type: "betaTesters",
        id: "id_example",
      },
    ],
  },
};

apiInstance.betaGroupsBetaTestersDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupBetaTestersLinkagesRequest** | **BetaGroupBetaTestersLinkagesRequest**| List of related linkages |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBetaTestersGetToManyRelated**
> BetaTestersWithoutIncludesResponse betaGroupsBetaTestersGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBetaTestersGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.betaGroupsBetaTestersGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BetaTestersWithoutIncludesResponse**

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
**200** | List of BetaTesters with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBetaTestersGetToManyRelationship**
> BetaGroupBetaTestersLinkagesResponse betaGroupsBetaTestersGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBetaTestersGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.betaGroupsBetaTestersGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BetaGroupBetaTestersLinkagesResponse**

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
**200** | List of related linkages |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBuildsCreateToManyRelationship**
> void betaGroupsBuildsCreateToManyRelationship(betaGroupBuildsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBuildsCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaGroupBuildsLinkagesRequest | List of related linkages
  betaGroupBuildsLinkagesRequest: {
    data: [
      {
        type: "builds",
        id: "id_example",
      },
    ],
  },
};

apiInstance.betaGroupsBuildsCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupBuildsLinkagesRequest** | **BetaGroupBuildsLinkagesRequest**| List of related linkages |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBuildsDeleteToManyRelationship**
> void betaGroupsBuildsDeleteToManyRelationship(betaGroupBuildsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBuildsDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaGroupBuildsLinkagesRequest | List of related linkages
  betaGroupBuildsLinkagesRequest: {
    data: [
      {
        type: "builds",
        id: "id_example",
      },
    ],
  },
};

apiInstance.betaGroupsBuildsDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupBuildsLinkagesRequest** | **BetaGroupBuildsLinkagesRequest**| List of related linkages |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBuildsGetToManyRelated**
> BuildsWithoutIncludesResponse betaGroupsBuildsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBuildsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.betaGroupsBuildsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BuildsWithoutIncludesResponse**

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
**200** | List of Builds with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsBuildsGetToManyRelationship**
> BetaGroupBuildsLinkagesResponse betaGroupsBuildsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsBuildsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.betaGroupsBuildsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BetaGroupBuildsLinkagesResponse**

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
**200** | List of related linkages |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsCreateInstance**
> BetaGroupResponse betaGroupsCreateInstance(betaGroupCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsCreateInstanceRequest = {
  // BetaGroupCreateRequest | BetaGroup representation
  betaGroupCreateRequest: {
    data: {
      type: "betaGroups",
      attributes: {
        name: "name_example",
        isInternalGroup: true,
        hasAccessToAllBuilds: true,
        publicLinkEnabled: true,
        publicLinkLimitEnabled: true,
        publicLinkLimit: 1,
        feedbackEnabled: true,
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        builds: {
          data: [
            {
              type: "builds",
              id: "id_example",
            },
          ],
        },
        betaTesters: {
          data: [
            {
              type: "betaTesters",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.betaGroupsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupCreateRequest** | **BetaGroupCreateRequest**| BetaGroup representation |


### Return type

**BetaGroupResponse**

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
**201** | Single BetaGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsDeleteInstance**
> void betaGroupsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.betaGroupsDeleteInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**void**

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
**409** | Request entity error(s) |  -  |
**204** | Success (no content) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsGetCollection**
> BetaGroupsResponse betaGroupsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsGetCollectionRequest = {
  // Array<string> | filter by attribute \'isInternalGroup\' (optional)
  filterIsInternalGroup: [
    "filter[isInternalGroup]_example",
  ],
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<string> | filter by attribute \'publicLink\' (optional)
  filterPublicLink: [
    "filter[publicLink]_example",
  ],
  // Array<string> | filter by attribute \'publicLinkEnabled\' (optional)
  filterPublicLinkEnabled: [
    "filter[publicLinkEnabled]_example",
  ],
  // Array<string> | filter by attribute \'publicLinkLimitEnabled\' (optional)
  filterPublicLinkLimitEnabled: [
    "filter[publicLinkLimitEnabled]_example",
  ],
  // Array<string> | filter by id(s) of related \'app\' (optional)
  filterApp: [
    "filter[app]_example",
  ],
  // Array<string> | filter by id(s) of related \'builds\' (optional)
  filterBuilds: [
    "filter[builds]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'createdDate' | '-createdDate' | 'name' | '-name' | 'publicLinkEnabled' | '-publicLinkEnabled' | 'publicLinkLimit' | '-publicLinkLimit'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "createdDate",
  ],
  // Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'> | the fields to include for returned resources of type betaGroups (optional)
  fieldsBetaGroups: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'betaTesters' | 'builds'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum number of related betaTesters returned (when they are included) (optional)
  limitBetaTesters: 1,
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
};

apiInstance.betaGroupsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterIsInternalGroup** | **Array&lt;string&gt;** | filter by attribute \&#39;isInternalGroup\&#39; | (optional) defaults to undefined
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **filterPublicLink** | **Array&lt;string&gt;** | filter by attribute \&#39;publicLink\&#39; | (optional) defaults to undefined
 **filterPublicLinkEnabled** | **Array&lt;string&gt;** | filter by attribute \&#39;publicLinkEnabled\&#39; | (optional) defaults to undefined
 **filterPublicLinkLimitEnabled** | **Array&lt;string&gt;** | filter by attribute \&#39;publicLinkLimitEnabled\&#39; | (optional) defaults to undefined
 **filterApp** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;app\&#39; | (optional) defaults to undefined
 **filterBuilds** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;builds\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;createdDate&#39; &#124; &#39;-createdDate&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;publicLinkEnabled&#39; &#124; &#39;-publicLinkEnabled&#39; &#124; &#39;publicLinkLimit&#39; &#124; &#39;-publicLinkLimit&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsBetaGroups** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;createdDate&#39; &#124; &#39;feedbackEnabled&#39; &#124; &#39;hasAccessToAllBuilds&#39; &#124; &#39;iosBuildsAvailableForAppleSiliconMac&#39; &#124; &#39;isInternalGroup&#39; &#124; &#39;name&#39; &#124; &#39;publicLink&#39; &#124; &#39;publicLinkEnabled&#39; &#124; &#39;publicLinkId&#39; &#124; &#39;publicLinkLimit&#39; &#124; &#39;publicLinkLimitEnabled&#39;>** | the fields to include for returned resources of type betaGroups | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limitBetaTesters** | [**number**] | maximum number of related betaTesters returned (when they are included) | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined


### Return type

**BetaGroupsResponse**

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
**200** | List of BetaGroups |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsGetInstance**
> BetaGroupResponse betaGroupsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'> | the fields to include for returned resources of type betaGroups (optional)
  fieldsBetaGroups: [
    "app",
  ],
  // Array<'app' | 'betaTesters' | 'builds'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum number of related betaTesters returned (when they are included) (optional)
  limitBetaTesters: 1,
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
};

apiInstance.betaGroupsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaGroups** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;createdDate&#39; &#124; &#39;feedbackEnabled&#39; &#124; &#39;hasAccessToAllBuilds&#39; &#124; &#39;iosBuildsAvailableForAppleSiliconMac&#39; &#124; &#39;isInternalGroup&#39; &#124; &#39;name&#39; &#124; &#39;publicLink&#39; &#124; &#39;publicLinkEnabled&#39; &#124; &#39;publicLinkId&#39; &#124; &#39;publicLinkLimit&#39; &#124; &#39;publicLinkLimitEnabled&#39;>** | the fields to include for returned resources of type betaGroups | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limitBetaTesters** | [**number**] | maximum number of related betaTesters returned (when they are included) | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined


### Return type

**BetaGroupResponse**

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
**200** | Single BetaGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **betaGroupsUpdateInstance**
> BetaGroupResponse betaGroupsUpdateInstance(betaGroupUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaGroupsApi(configuration);

let body:.BetaGroupsApiBetaGroupsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BetaGroupUpdateRequest | BetaGroup representation
  betaGroupUpdateRequest: {
    data: {
      type: "betaGroups",
      id: "id_example",
      attributes: {
        name: "name_example",
        publicLinkEnabled: true,
        publicLinkLimitEnabled: true,
        publicLinkLimit: 1,
        feedbackEnabled: true,
        iosBuildsAvailableForAppleSiliconMac: true,
      },
    },
  },
};

apiInstance.betaGroupsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaGroupUpdateRequest** | **BetaGroupUpdateRequest**| BetaGroup representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BetaGroupResponse**

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
**200** | Single BetaGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


