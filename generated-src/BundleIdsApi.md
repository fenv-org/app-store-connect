# .BundleIdsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleIdsAppGetToOneRelated**](BundleIdsApi.md#bundleIdsAppGetToOneRelated) | **GET** /v1/bundleIds/{id}/app | 
[**bundleIdsBundleIdCapabilitiesGetToManyRelated**](BundleIdsApi.md#bundleIdsBundleIdCapabilitiesGetToManyRelated) | **GET** /v1/bundleIds/{id}/bundleIdCapabilities | 
[**bundleIdsCreateInstance**](BundleIdsApi.md#bundleIdsCreateInstance) | **POST** /v1/bundleIds | 
[**bundleIdsDeleteInstance**](BundleIdsApi.md#bundleIdsDeleteInstance) | **DELETE** /v1/bundleIds/{id} | 
[**bundleIdsGetCollection**](BundleIdsApi.md#bundleIdsGetCollection) | **GET** /v1/bundleIds | 
[**bundleIdsGetInstance**](BundleIdsApi.md#bundleIdsGetInstance) | **GET** /v1/bundleIds/{id} | 
[**bundleIdsProfilesGetToManyRelated**](BundleIdsApi.md#bundleIdsProfilesGetToManyRelated) | **GET** /v1/bundleIds/{id}/profiles | 
[**bundleIdsUpdateInstance**](BundleIdsApi.md#bundleIdsUpdateInstance) | **PATCH** /v1/bundleIds/{id} | 


# **bundleIdsAppGetToOneRelated**
> AppWithoutIncludesResponse bundleIdsAppGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsAppGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
};

apiInstance.bundleIdsAppGetToOneRelated(body).then((data:any) => {
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

# **bundleIdsBundleIdCapabilitiesGetToManyRelated**
> BundleIdCapabilitiesWithoutIncludesResponse bundleIdsBundleIdCapabilitiesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsBundleIdCapabilitiesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'bundleId' | 'capabilityType' | 'settings'> | the fields to include for returned resources of type bundleIdCapabilities (optional)
  fieldsBundleIdCapabilities: [
    "bundleId",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.bundleIdsBundleIdCapabilitiesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBundleIdCapabilities** | **Array<&#39;bundleId&#39; &#124; &#39;capabilityType&#39; &#124; &#39;settings&#39;>** | the fields to include for returned resources of type bundleIdCapabilities | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BundleIdCapabilitiesWithoutIncludesResponse**

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
**200** | List of BundleIdCapabilities with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdsCreateInstance**
> BundleIdResponse bundleIdsCreateInstance(bundleIdCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsCreateInstanceRequest = {
  // BundleIdCreateRequest | BundleId representation
  bundleIdCreateRequest: {
    data: {
      type: "bundleIds",
      attributes: {
        name: "name_example",
        platform: "IOS",
        identifier: "identifier_example",
        seedId: "seedId_example",
      },
    },
  },
};

apiInstance.bundleIdsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleIdCreateRequest** | **BundleIdCreateRequest**| BundleId representation |


### Return type

**BundleIdResponse**

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
**201** | Single BundleId |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdsDeleteInstance**
> void bundleIdsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.bundleIdsDeleteInstance(body).then((data:any) => {
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

# **bundleIdsGetCollection**
> BundleIdsResponse bundleIdsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsGetCollectionRequest = {
  // Array<string> | filter by attribute \'identifier\' (optional)
  filterIdentifier: [
    "filter[identifier]_example",
  ],
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<'IOS' | 'MAC_OS'> | filter by attribute \'platform\' (optional)
  filterPlatform: [
    "IOS",
  ],
  // Array<string> | filter by attribute \'seedId\' (optional)
  filterSeedId: [
    "filter[seedId]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'id' | '-id' | 'identifier' | '-identifier' | 'name' | '-name' | 'platform' | '-platform' | 'seedId' | '-seedId'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "id",
  ],
  // Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'> | the fields to include for returned resources of type bundleIds (optional)
  fieldsBundleIds: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'bundleIdCapabilities' | 'profiles'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'bundleId' | 'capabilityType' | 'settings'> | the fields to include for returned resources of type bundleIdCapabilities (optional)
  fieldsBundleIdCapabilities: [
    "bundleId",
  ],
  // Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'> | the fields to include for returned resources of type profiles (optional)
  fieldsProfiles: [
    "bundleId",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // number | maximum number of related bundleIdCapabilities returned (when they are included) (optional)
  limitBundleIdCapabilities: 1,
  // number | maximum number of related profiles returned (when they are included) (optional)
  limitProfiles: 1,
};

apiInstance.bundleIdsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterIdentifier** | **Array&lt;string&gt;** | filter by attribute \&#39;identifier\&#39; | (optional) defaults to undefined
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **filterPlatform** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39;>** | filter by attribute \&#39;platform\&#39; | (optional) defaults to undefined
 **filterSeedId** | **Array&lt;string&gt;** | filter by attribute \&#39;seedId\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;id&#39; &#124; &#39;-id&#39; &#124; &#39;identifier&#39; &#124; &#39;-identifier&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;platform&#39; &#124; &#39;-platform&#39; &#124; &#39;seedId&#39; &#124; &#39;-seedId&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsBundleIds** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;identifier&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profiles&#39; &#124; &#39;seedId&#39;>** | the fields to include for returned resources of type bundleIds | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;profiles&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsBundleIdCapabilities** | **Array<&#39;bundleId&#39; &#124; &#39;capabilityType&#39; &#124; &#39;settings&#39;>** | the fields to include for returned resources of type bundleIdCapabilities | (optional) defaults to undefined
 **fieldsProfiles** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;createdDate&#39; &#124; &#39;devices&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profileContent&#39; &#124; &#39;profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;uuid&#39;>** | the fields to include for returned resources of type profiles | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **limitBundleIdCapabilities** | [**number**] | maximum number of related bundleIdCapabilities returned (when they are included) | (optional) defaults to undefined
 **limitProfiles** | [**number**] | maximum number of related profiles returned (when they are included) | (optional) defaults to undefined


### Return type

**BundleIdsResponse**

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
**200** | List of BundleIds |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdsGetInstance**
> BundleIdResponse bundleIdsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'> | the fields to include for returned resources of type bundleIds (optional)
  fieldsBundleIds: [
    "app",
  ],
  // Array<'app' | 'bundleIdCapabilities' | 'profiles'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'bundleId' | 'capabilityType' | 'settings'> | the fields to include for returned resources of type bundleIdCapabilities (optional)
  fieldsBundleIdCapabilities: [
    "bundleId",
  ],
  // Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'> | the fields to include for returned resources of type profiles (optional)
  fieldsProfiles: [
    "bundleId",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // number | maximum number of related bundleIdCapabilities returned (when they are included) (optional)
  limitBundleIdCapabilities: 1,
  // number | maximum number of related profiles returned (when they are included) (optional)
  limitProfiles: 1,
};

apiInstance.bundleIdsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBundleIds** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;identifier&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profiles&#39; &#124; &#39;seedId&#39;>** | the fields to include for returned resources of type bundleIds | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;profiles&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsBundleIdCapabilities** | **Array<&#39;bundleId&#39; &#124; &#39;capabilityType&#39; &#124; &#39;settings&#39;>** | the fields to include for returned resources of type bundleIdCapabilities | (optional) defaults to undefined
 **fieldsProfiles** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;createdDate&#39; &#124; &#39;devices&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profileContent&#39; &#124; &#39;profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;uuid&#39;>** | the fields to include for returned resources of type profiles | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **limitBundleIdCapabilities** | [**number**] | maximum number of related bundleIdCapabilities returned (when they are included) | (optional) defaults to undefined
 **limitProfiles** | [**number**] | maximum number of related profiles returned (when they are included) | (optional) defaults to undefined


### Return type

**BundleIdResponse**

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
**200** | Single BundleId |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdsProfilesGetToManyRelated**
> ProfilesWithoutIncludesResponse bundleIdsProfilesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsProfilesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'> | the fields to include for returned resources of type profiles (optional)
  fieldsProfiles: [
    "bundleId",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.bundleIdsProfilesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsProfiles** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;createdDate&#39; &#124; &#39;devices&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profileContent&#39; &#124; &#39;profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;uuid&#39;>** | the fields to include for returned resources of type profiles | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**ProfilesWithoutIncludesResponse**

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
**200** | List of Profiles with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdsUpdateInstance**
> BundleIdResponse bundleIdsUpdateInstance(bundleIdUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdsApi(configuration);

let body:.BundleIdsApiBundleIdsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BundleIdUpdateRequest | BundleId representation
  bundleIdUpdateRequest: {
    data: {
      type: "bundleIds",
      id: "id_example",
      attributes: {
        name: "name_example",
      },
    },
  },
};

apiInstance.bundleIdsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleIdUpdateRequest** | **BundleIdUpdateRequest**| BundleId representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BundleIdResponse**

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
**200** | Single BundleId |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


