# .AppClipDefaultExperiencesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated) | **GET** /v1/appClipDefaultExperiences/{id}/appClipAppStoreReviewDetail | 
[**appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated) | **GET** /v1/appClipDefaultExperiences/{id}/appClipDefaultExperienceLocalizations | 
[**appClipDefaultExperiencesCreateInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesCreateInstance) | **POST** /v1/appClipDefaultExperiences | 
[**appClipDefaultExperiencesDeleteInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesDeleteInstance) | **DELETE** /v1/appClipDefaultExperiences/{id} | 
[**appClipDefaultExperiencesGetInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesGetInstance) | **GET** /v1/appClipDefaultExperiences/{id} | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated) | **GET** /v1/appClipDefaultExperiences/{id}/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship) | **GET** /v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship) | **PATCH** /v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion | 
[**appClipDefaultExperiencesUpdateInstance**](AppClipDefaultExperiencesApi.md#appClipDefaultExperiencesUpdateInstance) | **PATCH** /v1/appClipDefaultExperiences/{id} | 


# **appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated**
> AppClipAppStoreReviewDetailResponse appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appClipDefaultExperience' | 'invocationUrls'> | the fields to include for returned resources of type appClipAppStoreReviewDetails (optional)
  fieldsAppClipAppStoreReviewDetails: [
    "appClipDefaultExperience",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appClipDefaultExperience'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperience",
  ],
};

apiInstance.appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipAppStoreReviewDetails** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;invocationUrls&#39;>** | the fields to include for returned resources of type appClipAppStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperience&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipAppStoreReviewDetailResponse**

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
**200** | Single AppClipAppStoreReviewDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated**
> AppClipDefaultExperienceLocalizationsResponse appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'locale\' (optional)
  filterLocale: [
    "filter[locale]_example",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'> | the fields to include for returned resources of type appClipDefaultExperienceLocalizations (optional)
  fieldsAppClipDefaultExperienceLocalizations: [
    "appClipDefaultExperience",
  ],
  // Array<'appClipDefaultExperienceLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipHeaderImages (optional)
  fieldsAppClipHeaderImages: [
    "appClipDefaultExperienceLocalization",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage'> | comma-separated list of relationships to include (optional)
  include: [
    "appClipDefaultExperience",
  ],
};

apiInstance.appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLocale** | **Array&lt;string&gt;** | filter by attribute \&#39;locale\&#39; | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **fieldsAppClipHeaderImages** | **Array<&#39;appClipDefaultExperienceLocalization&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipHeaderImages | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipDefaultExperienceLocalizationsResponse**

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
**200** | List of AppClipDefaultExperienceLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesCreateInstance**
> AppClipDefaultExperienceResponse appClipDefaultExperiencesCreateInstance(appClipDefaultExperienceCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesCreateInstanceRequest = {
  // AppClipDefaultExperienceCreateRequest | AppClipDefaultExperience representation
  appClipDefaultExperienceCreateRequest: {
    data: {
      type: "appClipDefaultExperiences",
      attributes: {
        action: "OPEN",
      },
      relationships: {
        appClip: {
          data: {
            type: "appClips",
            id: "id_example",
          },
        },
        releaseWithAppStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
        appClipDefaultExperienceTemplate: {
          data: {
            type: "appClipDefaultExperiences",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appClipDefaultExperiencesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipDefaultExperienceCreateRequest** | **AppClipDefaultExperienceCreateRequest**| AppClipDefaultExperience representation |


### Return type

**AppClipDefaultExperienceResponse**

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
**201** | Single AppClipDefaultExperience |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesDeleteInstance**
> void appClipDefaultExperiencesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appClipDefaultExperiencesDeleteInstance(body).then((data:any) => {
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

# **appClipDefaultExperiencesGetInstance**
> AppClipDefaultExperienceResponse appClipDefaultExperiencesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appClip",
  ],
  // Array<'appClipDefaultExperience' | 'invocationUrls'> | the fields to include for returned resources of type appClipAppStoreReviewDetails (optional)
  fieldsAppClipAppStoreReviewDetails: [
    "appClipDefaultExperience",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'> | the fields to include for returned resources of type appClipDefaultExperienceLocalizations (optional)
  fieldsAppClipDefaultExperienceLocalizations: [
    "appClipDefaultExperience",
  ],
  // number | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) (optional)
  limitAppClipDefaultExperienceLocalizations: 1,
};

apiInstance.appClipDefaultExperiencesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **include** | **Array<&#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppClipAppStoreReviewDetails** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;invocationUrls&#39;>** | the fields to include for returned resources of type appClipAppStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **limitAppClipDefaultExperienceLocalizations** | [**number**] | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppClipDefaultExperienceResponse**

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
**200** | Single AppClipDefaultExperience |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated**
> AppStoreVersionResponse appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'> | the fields to include for returned resources of type ageRatingDeclarations (optional)
  fieldsAgeRatingDeclarations: [
    "ageRatingOverride",
  ],
  // Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type appStoreReviewDetails (optional)
  fieldsAppStoreReviewDetails: [
    "appStoreReviewAttachments",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'> | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
  fieldsAppStoreVersionLocalizations: [
    "appPreviewSets",
  ],
  // Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appStoreVersion'> | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
  fieldsAppStoreVersionSubmissions: [
    "appStoreVersion",
  ],
  // Array<'appStoreVersion' | 'versions'> | the fields to include for returned resources of type alternativeDistributionPackages (optional)
  fieldsAlternativeDistributionPackages: [
    "appStoreVersion",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type routingAppCoverages (optional)
  fieldsRoutingAppCoverages: [
    "appStoreVersion",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'> | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)
  fieldsAppStoreVersionPhasedReleases: [
    "appStoreVersion",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum number of related appStoreVersionLocalizations returned (when they are included) (optional)
  limitAppStoreVersionLocalizations: 1,
  // number | maximum number of related appStoreVersionExperiments returned (when they are included) (optional)
  limitAppStoreVersionExperiments: 1,
  // number | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) (optional)
  limitAppStoreVersionExperimentsV2: 1,
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'> | comma-separated list of relationships to include (optional)
  include: [
    "ageRatingDeclaration",
  ],
};

apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAgeRatingDeclarations** | **Array<&#39;ageRatingOverride&#39; &#124; &#39;alcoholTobaccoOrDrugUseOrReferences&#39; &#124; &#39;contests&#39; &#124; &#39;gambling&#39; &#124; &#39;gamblingAndContests&#39; &#124; &#39;gamblingSimulated&#39; &#124; &#39;horrorOrFearThemes&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;matureOrSuggestiveThemes&#39; &#124; &#39;medicalOrTreatmentInformation&#39; &#124; &#39;profanityOrCrudeHumor&#39; &#124; &#39;seventeenPlus&#39; &#124; &#39;sexualContentGraphicAndNudity&#39; &#124; &#39;sexualContentOrNudity&#39; &#124; &#39;unrestrictedWebAccess&#39; &#124; &#39;violenceCartoonOrFantasy&#39; &#124; &#39;violenceRealistic&#39; &#124; &#39;violenceRealisticProlongedGraphicOrSadistic&#39;>** | the fields to include for returned resources of type ageRatingDeclarations | (optional) defaults to undefined
 **fieldsAppStoreReviewDetails** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type appStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreVersionLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;description&#39; &#124; &#39;keywords&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;promotionalText&#39; &#124; &#39;supportUrl&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type appStoreVersionLocalizations | (optional) defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionSubmissions** | **Array<&#39;appStoreVersion&#39;>** | the fields to include for returned resources of type appStoreVersionSubmissions | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;versions&#39;>** | the fields to include for returned resources of type alternativeDistributionPackages | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsRoutingAppCoverages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type routingAppCoverages | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **fieldsAppStoreVersionPhasedReleases** | **Array<&#39;appStoreVersion&#39; &#124; &#39;currentDayNumber&#39; &#124; &#39;phasedReleaseState&#39; &#124; &#39;startDate&#39; &#124; &#39;totalPauseDuration&#39;>** | the fields to include for returned resources of type appStoreVersionPhasedReleases | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limitAppStoreVersionLocalizations** | [**number**] | maximum number of related appStoreVersionLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionExperiments** | [**number**] | maximum number of related appStoreVersionExperiments returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionExperimentsV2** | [**number**] | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;build&#39; &#124; &#39;routingAppCoverage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionResponse**

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
**200** | Single AppStoreVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship**
> AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse**

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
**200** | Related linkage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship**
> void appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest | Related linkage
  appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest: {
    data: {
      type: "appStoreVersions",
      id: "id_example",
    },
  },
};

apiInstance.appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest** | **AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest**| Related linkage |
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

# **appClipDefaultExperiencesUpdateInstance**
> AppClipDefaultExperienceResponse appClipDefaultExperiencesUpdateInstance(appClipDefaultExperienceUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipDefaultExperiencesApi(configuration);

let body:.AppClipDefaultExperiencesApiAppClipDefaultExperiencesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipDefaultExperienceUpdateRequest | AppClipDefaultExperience representation
  appClipDefaultExperienceUpdateRequest: {
    data: {
      type: "appClipDefaultExperiences",
      id: "id_example",
      attributes: {
        action: "OPEN",
      },
      relationships: {
        releaseWithAppStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appClipDefaultExperiencesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipDefaultExperienceUpdateRequest** | **AppClipDefaultExperienceUpdateRequest**| AppClipDefaultExperience representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipDefaultExperienceResponse**

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
**200** | Single AppClipDefaultExperience |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


