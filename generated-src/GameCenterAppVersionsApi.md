# .GameCenterAppVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAppVersionsAppStoreVersionGetToOneRelated**](GameCenterAppVersionsApi.md#gameCenterAppVersionsAppStoreVersionGetToOneRelated) | **GET** /v1/gameCenterAppVersions/{id}/appStoreVersion | 
[**gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship) | **POST** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship) | **DELETE** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsGetToManyRelated**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsGetToManyRelated) | **GET** /v1/gameCenterAppVersions/{id}/compatibilityVersions | 
[**gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship) | **GET** /v1/gameCenterAppVersions/{id}/relationships/compatibilityVersions | 
[**gameCenterAppVersionsCreateInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsCreateInstance) | **POST** /v1/gameCenterAppVersions | 
[**gameCenterAppVersionsGetInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsGetInstance) | **GET** /v1/gameCenterAppVersions/{id} | 
[**gameCenterAppVersionsUpdateInstance**](GameCenterAppVersionsApi.md#gameCenterAppVersionsUpdateInstance) | **PATCH** /v1/gameCenterAppVersions/{id} | 


# **gameCenterAppVersionsAppStoreVersionGetToOneRelated**
> AppStoreVersionResponse gameCenterAppVersionsAppStoreVersionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsAppStoreVersionGetToOneRelatedRequest = {
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

apiInstance.gameCenterAppVersionsAppStoreVersionGetToOneRelated(body).then((data:any) => {
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

# **gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship**
> void gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship(gameCenterAppVersionCompatibilityVersionsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsCompatibilityVersionsCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAppVersionCompatibilityVersionsLinkagesRequest | List of related linkages
  gameCenterAppVersionCompatibilityVersionsLinkagesRequest: {
    data: [
      {
        type: "gameCenterAppVersions",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterAppVersionsCompatibilityVersionsCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAppVersionCompatibilityVersionsLinkagesRequest** | **GameCenterAppVersionCompatibilityVersionsLinkagesRequest**| List of related linkages |
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

# **gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship**
> void gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship(gameCenterAppVersionCompatibilityVersionsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAppVersionCompatibilityVersionsLinkagesRequest | List of related linkages
  gameCenterAppVersionCompatibilityVersionsLinkagesRequest: {
    data: [
      {
        type: "gameCenterAppVersions",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterAppVersionsCompatibilityVersionsDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAppVersionCompatibilityVersionsLinkagesRequest** | **GameCenterAppVersionCompatibilityVersionsLinkagesRequest**| List of related linkages |
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

# **gameCenterAppVersionsCompatibilityVersionsGetToManyRelated**
> GameCenterAppVersionsResponse gameCenterAppVersionsCompatibilityVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsCompatibilityVersionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'enabled\' (optional)
  filterEnabled: [
    "filter[enabled]_example",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'> | the fields to include for returned resources of type gameCenterAppVersions (optional)
  fieldsGameCenterAppVersions: [
    "appStoreVersion",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related compatibilityVersions returned (when they are included) (optional)
  limitCompatibilityVersions: 1,
  // Array<'appStoreVersion' | 'compatibilityVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
};

apiInstance.gameCenterAppVersionsCompatibilityVersionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterEnabled** | **Array&lt;string&gt;** | filter by attribute \&#39;enabled\&#39; | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsGameCenterAppVersions** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39; &#124; &#39;enabled&#39;>** | the fields to include for returned resources of type gameCenterAppVersions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitCompatibilityVersions** | [**number**] | maximum number of related compatibilityVersions returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAppVersionsResponse**

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
**200** | List of GameCenterAppVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship**
> GameCenterAppVersionCompatibilityVersionsLinkagesResponse gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsCompatibilityVersionsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterAppVersionsCompatibilityVersionsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterAppVersionCompatibilityVersionsLinkagesResponse**

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

# **gameCenterAppVersionsCreateInstance**
> GameCenterAppVersionResponse gameCenterAppVersionsCreateInstance(gameCenterAppVersionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsCreateInstanceRequest = {
  // GameCenterAppVersionCreateRequest | GameCenterAppVersion representation
  gameCenterAppVersionCreateRequest: {
    data: {
      type: "gameCenterAppVersions",
      relationships: {
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterAppVersionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAppVersionCreateRequest** | **GameCenterAppVersionCreateRequest**| GameCenterAppVersion representation |


### Return type

**GameCenterAppVersionResponse**

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
**201** | Single GameCenterAppVersion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAppVersionsGetInstance**
> GameCenterAppVersionResponse gameCenterAppVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'> | the fields to include for returned resources of type gameCenterAppVersions (optional)
  fieldsGameCenterAppVersions: [
    "appStoreVersion",
  ],
  // Array<'appStoreVersion' | 'compatibilityVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // number | maximum number of related compatibilityVersions returned (when they are included) (optional)
  limitCompatibilityVersions: 1,
};

apiInstance.gameCenterAppVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAppVersions** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39; &#124; &#39;enabled&#39;>** | the fields to include for returned resources of type gameCenterAppVersions | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **limitCompatibilityVersions** | [**number**] | maximum number of related compatibilityVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterAppVersionResponse**

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
**200** | Single GameCenterAppVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAppVersionsUpdateInstance**
> GameCenterAppVersionResponse gameCenterAppVersionsUpdateInstance(gameCenterAppVersionUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAppVersionsApi(configuration);

let body:.GameCenterAppVersionsApiGameCenterAppVersionsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAppVersionUpdateRequest | GameCenterAppVersion representation
  gameCenterAppVersionUpdateRequest: {
    data: {
      type: "gameCenterAppVersions",
      id: "id_example",
      attributes: {
        enabled: true,
      },
    },
  },
};

apiInstance.gameCenterAppVersionsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAppVersionUpdateRequest** | **GameCenterAppVersionUpdateRequest**| GameCenterAppVersion representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterAppVersionResponse**

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
**200** | Single GameCenterAppVersion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


