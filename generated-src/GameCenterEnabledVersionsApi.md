# .GameCenterEnabledVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship) | **POST** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship) | **DELETE** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated) | **GET** /v1/gameCenterEnabledVersions/{id}/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship) | **GET** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 
[**gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship**](GameCenterEnabledVersionsApi.md#gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship) | **PATCH** /v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions | 


# **gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship**
> void gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterEnabledVersionsApi(configuration);

let body:.GameCenterEnabledVersionsApiGameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
  gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: {
    data: [
      {
        type: "gameCenterEnabledVersions",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | **GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**| List of related linkages |
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

# **gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship**
> void gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterEnabledVersionsApi(configuration);

let body:.GameCenterEnabledVersionsApiGameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
  gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: {
    data: [
      {
        type: "gameCenterEnabledVersions",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | **GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**| List of related linkages |
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

# **gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated**
> GameCenterEnabledVersionsResponse gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterEnabledVersionsApi(configuration);

let body:.GameCenterEnabledVersionsApiGameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'> | filter by attribute \'platform\' (optional)
  filterPlatform: [
    "IOS",
  ],
  // Array<string> | filter by attribute \'versionString\' (optional)
  filterVersionString: [
    "filter[versionString]_example",
  ],
  // Array<string> | filter by id(s) of related \'app\' (optional)
  filterApp: [
    "filter[app]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'versionString' | '-versionString'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "versionString",
  ],
  // Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'> | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
  fieldsGameCenterEnabledVersions: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related compatibleVersions returned (when they are included) (optional)
  limitCompatibleVersions: 1,
  // Array<'app' | 'compatibleVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterPlatform** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39; &#124; &#39;TV_OS&#39; &#124; &#39;VISION_OS&#39;>** | filter by attribute \&#39;platform\&#39; | (optional) defaults to undefined
 **filterVersionString** | **Array&lt;string&gt;** | filter by attribute \&#39;versionString\&#39; | (optional) defaults to undefined
 **filterApp** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;app\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;versionString&#39; &#124; &#39;-versionString&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsGameCenterEnabledVersions** | **Array<&#39;app&#39; &#124; &#39;compatibleVersions&#39; &#124; &#39;iconAsset&#39; &#124; &#39;platform&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type gameCenterEnabledVersions | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitCompatibleVersions** | [**number**] | maximum number of related compatibleVersions returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;compatibleVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterEnabledVersionsResponse**

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
**200** | List of GameCenterEnabledVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship**
> GameCenterEnabledVersionCompatibleVersionsLinkagesResponse gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterEnabledVersionsApi(configuration);

let body:.GameCenterEnabledVersionsApiGameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterEnabledVersionCompatibleVersionsLinkagesResponse**

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

# **gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship**
> void gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(gameCenterEnabledVersionCompatibleVersionsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterEnabledVersionsApi(configuration);

let body:.GameCenterEnabledVersionsApiGameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterEnabledVersionCompatibleVersionsLinkagesRequest | List of related linkages
  gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: {
    data: [
      {
        type: "gameCenterEnabledVersions",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterEnabledVersionCompatibleVersionsLinkagesRequest** | **GameCenterEnabledVersionCompatibleVersionsLinkagesRequest**| List of related linkages |
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


