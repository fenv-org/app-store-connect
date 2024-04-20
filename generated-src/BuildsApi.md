# .BuildsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildsAppEncryptionDeclarationGetToOneRelated**](BuildsApi.md#buildsAppEncryptionDeclarationGetToOneRelated) | **GET** /v1/builds/{id}/appEncryptionDeclaration | 
[**buildsAppEncryptionDeclarationGetToOneRelationship**](BuildsApi.md#buildsAppEncryptionDeclarationGetToOneRelationship) | **GET** /v1/builds/{id}/relationships/appEncryptionDeclaration | 
[**buildsAppEncryptionDeclarationUpdateToOneRelationship**](BuildsApi.md#buildsAppEncryptionDeclarationUpdateToOneRelationship) | **PATCH** /v1/builds/{id}/relationships/appEncryptionDeclaration | 
[**buildsAppGetToOneRelated**](BuildsApi.md#buildsAppGetToOneRelated) | **GET** /v1/builds/{id}/app | 
[**buildsAppStoreVersionGetToOneRelated**](BuildsApi.md#buildsAppStoreVersionGetToOneRelated) | **GET** /v1/builds/{id}/appStoreVersion | 
[**buildsBetaAppReviewSubmissionGetToOneRelated**](BuildsApi.md#buildsBetaAppReviewSubmissionGetToOneRelated) | **GET** /v1/builds/{id}/betaAppReviewSubmission | 
[**buildsBetaBuildLocalizationsGetToManyRelated**](BuildsApi.md#buildsBetaBuildLocalizationsGetToManyRelated) | **GET** /v1/builds/{id}/betaBuildLocalizations | 
[**buildsBetaBuildUsagesGetMetrics**](BuildsApi.md#buildsBetaBuildUsagesGetMetrics) | **GET** /v1/builds/{id}/metrics/betaBuildUsages | 
[**buildsBetaGroupsCreateToManyRelationship**](BuildsApi.md#buildsBetaGroupsCreateToManyRelationship) | **POST** /v1/builds/{id}/relationships/betaGroups | 
[**buildsBetaGroupsDeleteToManyRelationship**](BuildsApi.md#buildsBetaGroupsDeleteToManyRelationship) | **DELETE** /v1/builds/{id}/relationships/betaGroups | 
[**buildsBuildBetaDetailGetToOneRelated**](BuildsApi.md#buildsBuildBetaDetailGetToOneRelated) | **GET** /v1/builds/{id}/buildBetaDetail | 
[**buildsDiagnosticSignaturesGetToManyRelated**](BuildsApi.md#buildsDiagnosticSignaturesGetToManyRelated) | **GET** /v1/builds/{id}/diagnosticSignatures | 
[**buildsGetCollection**](BuildsApi.md#buildsGetCollection) | **GET** /v1/builds | 
[**buildsGetInstance**](BuildsApi.md#buildsGetInstance) | **GET** /v1/builds/{id} | 
[**buildsIconsGetToManyRelated**](BuildsApi.md#buildsIconsGetToManyRelated) | **GET** /v1/builds/{id}/icons | 
[**buildsIndividualTestersCreateToManyRelationship**](BuildsApi.md#buildsIndividualTestersCreateToManyRelationship) | **POST** /v1/builds/{id}/relationships/individualTesters | 
[**buildsIndividualTestersDeleteToManyRelationship**](BuildsApi.md#buildsIndividualTestersDeleteToManyRelationship) | **DELETE** /v1/builds/{id}/relationships/individualTesters | 
[**buildsIndividualTestersGetToManyRelated**](BuildsApi.md#buildsIndividualTestersGetToManyRelated) | **GET** /v1/builds/{id}/individualTesters | 
[**buildsIndividualTestersGetToManyRelationship**](BuildsApi.md#buildsIndividualTestersGetToManyRelationship) | **GET** /v1/builds/{id}/relationships/individualTesters | 
[**buildsPerfPowerMetricsGetToManyRelated**](BuildsApi.md#buildsPerfPowerMetricsGetToManyRelated) | **GET** /v1/builds/{id}/perfPowerMetrics | 
[**buildsPreReleaseVersionGetToOneRelated**](BuildsApi.md#buildsPreReleaseVersionGetToOneRelated) | **GET** /v1/builds/{id}/preReleaseVersion | 
[**buildsUpdateInstance**](BuildsApi.md#buildsUpdateInstance) | **PATCH** /v1/builds/{id} | 


# **buildsAppEncryptionDeclarationGetToOneRelated**
> AppEncryptionDeclarationWithoutIncludesResponse buildsAppEncryptionDeclarationGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsAppEncryptionDeclarationGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'> | the fields to include for returned resources of type appEncryptionDeclarations (optional)
  fieldsAppEncryptionDeclarations: [
    "app",
  ],
};

apiInstance.buildsAppEncryptionDeclarationGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppEncryptionDeclarations** | **Array<&#39;app&#39; &#124; &#39;appDescription&#39; &#124; &#39;appEncryptionDeclarationDocument&#39; &#124; &#39;appEncryptionDeclarationState&#39; &#124; &#39;availableOnFrenchStore&#39; &#124; &#39;builds&#39; &#124; &#39;codeValue&#39; &#124; &#39;containsProprietaryCryptography&#39; &#124; &#39;containsThirdPartyCryptography&#39; &#124; &#39;createdDate&#39; &#124; &#39;documentName&#39; &#124; &#39;documentType&#39; &#124; &#39;documentUrl&#39; &#124; &#39;exempt&#39; &#124; &#39;platform&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesEncryption&#39;>** | the fields to include for returned resources of type appEncryptionDeclarations | (optional) defaults to undefined


### Return type

**AppEncryptionDeclarationWithoutIncludesResponse**

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
**200** | Single AppEncryptionDeclaration with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsAppEncryptionDeclarationGetToOneRelationship**
> BuildAppEncryptionDeclarationLinkageResponse buildsAppEncryptionDeclarationGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsAppEncryptionDeclarationGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.buildsAppEncryptionDeclarationGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BuildAppEncryptionDeclarationLinkageResponse**

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

# **buildsAppEncryptionDeclarationUpdateToOneRelationship**
> void buildsAppEncryptionDeclarationUpdateToOneRelationship(buildAppEncryptionDeclarationLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsAppEncryptionDeclarationUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildAppEncryptionDeclarationLinkageRequest | Related linkage
  buildAppEncryptionDeclarationLinkageRequest: {
    data: {
      type: "appEncryptionDeclarations",
      id: "id_example",
    },
  },
};

apiInstance.buildsAppEncryptionDeclarationUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildAppEncryptionDeclarationLinkageRequest** | **BuildAppEncryptionDeclarationLinkageRequest**| Related linkage |
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

# **buildsAppGetToOneRelated**
> AppWithoutIncludesResponse buildsAppGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsAppGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
};

apiInstance.buildsAppGetToOneRelated(body).then((data:any) => {
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

# **buildsAppStoreVersionGetToOneRelated**
> AppStoreVersionResponse buildsAppStoreVersionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsAppStoreVersionGetToOneRelatedRequest = {
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

apiInstance.buildsAppStoreVersionGetToOneRelated(body).then((data:any) => {
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

# **buildsBetaAppReviewSubmissionGetToOneRelated**
> BetaAppReviewSubmissionWithoutIncludesResponse buildsBetaAppReviewSubmissionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBetaAppReviewSubmissionGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'betaReviewState' | 'build' | 'submittedDate'> | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
  fieldsBetaAppReviewSubmissions: [
    "betaReviewState",
  ],
};

apiInstance.buildsBetaAppReviewSubmissionGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaAppReviewSubmissions** | **Array<&#39;betaReviewState&#39; &#124; &#39;build&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type betaAppReviewSubmissions | (optional) defaults to undefined


### Return type

**BetaAppReviewSubmissionWithoutIncludesResponse**

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
**200** | Single BetaAppReviewSubmission with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsBetaBuildLocalizationsGetToManyRelated**
> BetaBuildLocalizationsWithoutIncludesResponse buildsBetaBuildLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBetaBuildLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'build' | 'locale' | 'whatsNew'> | the fields to include for returned resources of type betaBuildLocalizations (optional)
  fieldsBetaBuildLocalizations: [
    "build",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildsBetaBuildLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaBuildLocalizations** | **Array<&#39;build&#39; &#124; &#39;locale&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type betaBuildLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BetaBuildLocalizationsWithoutIncludesResponse**

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
**200** | List of BetaBuildLocalizations with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsBetaBuildUsagesGetMetrics**
> BetaBuildUsagesV1MetricResponse buildsBetaBuildUsagesGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBetaBuildUsagesGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
};

apiInstance.buildsBetaBuildUsagesGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined


### Return type

**BetaBuildUsagesV1MetricResponse**

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

# **buildsBetaGroupsCreateToManyRelationship**
> void buildsBetaGroupsCreateToManyRelationship(buildBetaGroupsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBetaGroupsCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildBetaGroupsLinkagesRequest | List of related linkages
  buildBetaGroupsLinkagesRequest: {
    data: [
      {
        type: "betaGroups",
        id: "id_example",
      },
    ],
  },
};

apiInstance.buildsBetaGroupsCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildBetaGroupsLinkagesRequest** | **BuildBetaGroupsLinkagesRequest**| List of related linkages |
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

# **buildsBetaGroupsDeleteToManyRelationship**
> void buildsBetaGroupsDeleteToManyRelationship(buildBetaGroupsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBetaGroupsDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildBetaGroupsLinkagesRequest | List of related linkages
  buildBetaGroupsLinkagesRequest: {
    data: [
      {
        type: "betaGroups",
        id: "id_example",
      },
    ],
  },
};

apiInstance.buildsBetaGroupsDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildBetaGroupsLinkagesRequest** | **BuildBetaGroupsLinkagesRequest**| List of related linkages |
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

# **buildsBuildBetaDetailGetToOneRelated**
> BuildBetaDetailResponse buildsBuildBetaDetailGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsBuildBetaDetailGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'> | the fields to include for returned resources of type buildBetaDetails (optional)
  fieldsBuildBetaDetails: [
    "autoNotifyEnabled",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // Array<'build'> | comma-separated list of relationships to include (optional)
  include: [
    "build",
  ],
};

apiInstance.buildsBuildBetaDetailGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuildBetaDetails** | **Array<&#39;autoNotifyEnabled&#39; &#124; &#39;build&#39; &#124; &#39;externalBuildState&#39; &#124; &#39;internalBuildState&#39;>** | the fields to include for returned resources of type buildBetaDetails | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **include** | **Array<&#39;build&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**BuildBetaDetailResponse**

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
**200** | Single BuildBetaDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsDiagnosticSignaturesGetToManyRelated**
> DiagnosticSignaturesResponse buildsDiagnosticSignaturesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsDiagnosticSignaturesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'DISK_WRITES' | 'HANGS'> | filter by attribute \'diagnosticType\' (optional)
  filterDiagnosticType: [
    "DISK_WRITES",
  ],
  // Array<'diagnosticType' | 'logs' | 'signature' | 'weight'> | the fields to include for returned resources of type diagnosticSignatures (optional)
  fieldsDiagnosticSignatures: [
    "diagnosticType",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildsDiagnosticSignaturesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterDiagnosticType** | **Array<&#39;DISK_WRITES&#39; &#124; &#39;HANGS&#39;>** | filter by attribute \&#39;diagnosticType\&#39; | (optional) defaults to undefined
 **fieldsDiagnosticSignatures** | **Array<&#39;diagnosticType&#39; &#124; &#39;logs&#39; &#124; &#39;signature&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type diagnosticSignatures | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**DiagnosticSignaturesResponse**

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
**200** | List of DiagnosticSignatures |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsGetCollection**
> BuildsResponse buildsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsGetCollectionRequest = {
  // Array<'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'> | filter by attribute \'betaAppReviewSubmission.betaReviewState\' (optional)
  filterBetaAppReviewSubmissionBetaReviewState: [
    "WAITING_FOR_REVIEW",
  ],
  // Array<'INTERNAL_ONLY' | 'APP_STORE_ELIGIBLE'> | filter by attribute \'buildAudienceType\' (optional)
  filterBuildAudienceType: [
    "INTERNAL_ONLY",
  ],
  // Array<string> | filter by attribute \'expired\' (optional)
  filterExpired: [
    "filter[expired]_example",
  ],
  // Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'> | filter by attribute \'preReleaseVersion.platform\' (optional)
  filterPreReleaseVersionPlatform: [
    "IOS",
  ],
  // Array<string> | filter by attribute \'preReleaseVersion.version\' (optional)
  filterPreReleaseVersionVersion: [
    "filter[preReleaseVersion.version]_example",
  ],
  // Array<'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID'> | filter by attribute \'processingState\' (optional)
  filterProcessingState: [
    "PROCESSING",
  ],
  // Array<string> | filter by attribute \'usesNonExemptEncryption\' (optional)
  filterUsesNonExemptEncryption: [
    "filter[usesNonExemptEncryption]_example",
  ],
  // Array<string> | filter by attribute \'version\' (optional)
  filterVersion: [
    "filter[version]_example",
  ],
  // Array<string> | filter by id(s) of related \'app\' (optional)
  filterApp: [
    "filter[app]_example",
  ],
  // Array<string> | filter by id(s) of related \'appStoreVersion\' (optional)
  filterAppStoreVersion: [
    "filter[appStoreVersion]_example",
  ],
  // Array<string> | filter by id(s) of related \'betaGroups\' (optional)
  filterBetaGroups: [
    "filter[betaGroups]_example",
  ],
  // Array<string> | filter by id(s) of related \'preReleaseVersion\' (optional)
  filterPreReleaseVersion: [
    "filter[preReleaseVersion]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'preReleaseVersion' | '-preReleaseVersion' | 'uploadedDate' | '-uploadedDate' | 'version' | '-version'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "preReleaseVersion",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildBetaDetail' | 'buildBundles' | 'icons' | 'individualTesters' | 'preReleaseVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'diagnosticType' | 'logs' | 'signature' | 'weight'> | the fields to include for returned resources of type diagnosticSignatures (optional)
  fieldsDiagnosticSignatures: [
    "diagnosticType",
  ],
  // Array<'iconAsset' | 'iconType' | 'name'> | the fields to include for returned resources of type buildIcons (optional)
  fieldsBuildIcons: [
    "iconAsset",
  ],
  // Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'> | the fields to include for returned resources of type buildBetaDetails (optional)
  fieldsBuildBetaDetails: [
    "autoNotifyEnabled",
  ],
  // Array<'betaReviewState' | 'build' | 'submittedDate'> | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
  fieldsBetaAppReviewSubmissions: [
    "betaReviewState",
  ],
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'build' | 'locale' | 'whatsNew'> | the fields to include for returned resources of type betaBuildLocalizations (optional)
  fieldsBetaBuildLocalizations: [
    "build",
  ],
  // Array<'app' | 'builds' | 'platform' | 'version'> | the fields to include for returned resources of type preReleaseVersions (optional)
  fieldsPreReleaseVersions: [
    "app",
  ],
  // Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'> | the fields to include for returned resources of type appEncryptionDeclarations (optional)
  fieldsAppEncryptionDeclarations: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'deviceType' | 'metricType' | 'platform'> | the fields to include for returned resources of type perfPowerMetrics (optional)
  fieldsPerfPowerMetrics: [
    "deviceType",
  ],
  // number | maximum number of related betaBuildLocalizations returned (when they are included) (optional)
  limitBetaBuildLocalizations: 1,
  // number | maximum number of related betaGroups returned (when they are included) (optional)
  limitBetaGroups: 1,
  // number | maximum number of related buildBundles returned (when they are included) (optional)
  limitBuildBundles: 1,
  // number | maximum number of related icons returned (when they are included) (optional)
  limitIcons: 1,
  // number | maximum number of related individualTesters returned (when they are included) (optional)
  limitIndividualTesters: 1,
};

apiInstance.buildsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterBetaAppReviewSubmissionBetaReviewState** | **Array<&#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;REJECTED&#39; &#124; &#39;APPROVED&#39;>** | filter by attribute \&#39;betaAppReviewSubmission.betaReviewState\&#39; | (optional) defaults to undefined
 **filterBuildAudienceType** | **Array<&#39;INTERNAL_ONLY&#39; &#124; &#39;APP_STORE_ELIGIBLE&#39;>** | filter by attribute \&#39;buildAudienceType\&#39; | (optional) defaults to undefined
 **filterExpired** | **Array&lt;string&gt;** | filter by attribute \&#39;expired\&#39; | (optional) defaults to undefined
 **filterPreReleaseVersionPlatform** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39; &#124; &#39;TV_OS&#39; &#124; &#39;VISION_OS&#39;>** | filter by attribute \&#39;preReleaseVersion.platform\&#39; | (optional) defaults to undefined
 **filterPreReleaseVersionVersion** | **Array&lt;string&gt;** | filter by attribute \&#39;preReleaseVersion.version\&#39; | (optional) defaults to undefined
 **filterProcessingState** | **Array<&#39;PROCESSING&#39; &#124; &#39;FAILED&#39; &#124; &#39;INVALID&#39; &#124; &#39;VALID&#39;>** | filter by attribute \&#39;processingState\&#39; | (optional) defaults to undefined
 **filterUsesNonExemptEncryption** | **Array&lt;string&gt;** | filter by attribute \&#39;usesNonExemptEncryption\&#39; | (optional) defaults to undefined
 **filterVersion** | **Array&lt;string&gt;** | filter by attribute \&#39;version\&#39; | (optional) defaults to undefined
 **filterApp** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;app\&#39; | (optional) defaults to undefined
 **filterAppStoreVersion** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;appStoreVersion\&#39; | (optional) defaults to undefined
 **filterBetaGroups** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;betaGroups\&#39; | (optional) defaults to undefined
 **filterPreReleaseVersion** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;preReleaseVersion\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;preReleaseVersion&#39; &#124; &#39;-preReleaseVersion&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;-uploadedDate&#39; &#124; &#39;version&#39; &#124; &#39;-version&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;preReleaseVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsDiagnosticSignatures** | **Array<&#39;diagnosticType&#39; &#124; &#39;logs&#39; &#124; &#39;signature&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type diagnosticSignatures | (optional) defaults to undefined
 **fieldsBuildIcons** | **Array<&#39;iconAsset&#39; &#124; &#39;iconType&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type buildIcons | (optional) defaults to undefined
 **fieldsBuildBetaDetails** | **Array<&#39;autoNotifyEnabled&#39; &#124; &#39;build&#39; &#124; &#39;externalBuildState&#39; &#124; &#39;internalBuildState&#39;>** | the fields to include for returned resources of type buildBetaDetails | (optional) defaults to undefined
 **fieldsBetaAppReviewSubmissions** | **Array<&#39;betaReviewState&#39; &#124; &#39;build&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type betaAppReviewSubmissions | (optional) defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsBetaBuildLocalizations** | **Array<&#39;build&#39; &#124; &#39;locale&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type betaBuildLocalizations | (optional) defaults to undefined
 **fieldsPreReleaseVersions** | **Array<&#39;app&#39; &#124; &#39;builds&#39; &#124; &#39;platform&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type preReleaseVersions | (optional) defaults to undefined
 **fieldsAppEncryptionDeclarations** | **Array<&#39;app&#39; &#124; &#39;appDescription&#39; &#124; &#39;appEncryptionDeclarationDocument&#39; &#124; &#39;appEncryptionDeclarationState&#39; &#124; &#39;availableOnFrenchStore&#39; &#124; &#39;builds&#39; &#124; &#39;codeValue&#39; &#124; &#39;containsProprietaryCryptography&#39; &#124; &#39;containsThirdPartyCryptography&#39; &#124; &#39;createdDate&#39; &#124; &#39;documentName&#39; &#124; &#39;documentType&#39; &#124; &#39;documentUrl&#39; &#124; &#39;exempt&#39; &#124; &#39;platform&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesEncryption&#39;>** | the fields to include for returned resources of type appEncryptionDeclarations | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsPerfPowerMetrics** | **Array<&#39;deviceType&#39; &#124; &#39;metricType&#39; &#124; &#39;platform&#39;>** | the fields to include for returned resources of type perfPowerMetrics | (optional) defaults to undefined
 **limitBetaBuildLocalizations** | [**number**] | maximum number of related betaBuildLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitBetaGroups** | [**number**] | maximum number of related betaGroups returned (when they are included) | (optional) defaults to undefined
 **limitBuildBundles** | [**number**] | maximum number of related buildBundles returned (when they are included) | (optional) defaults to undefined
 **limitIcons** | [**number**] | maximum number of related icons returned (when they are included) | (optional) defaults to undefined
 **limitIndividualTesters** | [**number**] | maximum number of related individualTesters returned (when they are included) | (optional) defaults to undefined


### Return type

**BuildsResponse**

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
**200** | List of Builds |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsGetInstance**
> BuildResponse buildsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildBetaDetail' | 'buildBundles' | 'icons' | 'individualTesters' | 'preReleaseVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'diagnosticType' | 'logs' | 'signature' | 'weight'> | the fields to include for returned resources of type diagnosticSignatures (optional)
  fieldsDiagnosticSignatures: [
    "diagnosticType",
  ],
  // Array<'iconAsset' | 'iconType' | 'name'> | the fields to include for returned resources of type buildIcons (optional)
  fieldsBuildIcons: [
    "iconAsset",
  ],
  // Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'> | the fields to include for returned resources of type buildBetaDetails (optional)
  fieldsBuildBetaDetails: [
    "autoNotifyEnabled",
  ],
  // Array<'betaReviewState' | 'build' | 'submittedDate'> | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
  fieldsBetaAppReviewSubmissions: [
    "betaReviewState",
  ],
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'build' | 'locale' | 'whatsNew'> | the fields to include for returned resources of type betaBuildLocalizations (optional)
  fieldsBetaBuildLocalizations: [
    "build",
  ],
  // Array<'app' | 'builds' | 'platform' | 'version'> | the fields to include for returned resources of type preReleaseVersions (optional)
  fieldsPreReleaseVersions: [
    "app",
  ],
  // Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'> | the fields to include for returned resources of type appEncryptionDeclarations (optional)
  fieldsAppEncryptionDeclarations: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'deviceType' | 'metricType' | 'platform'> | the fields to include for returned resources of type perfPowerMetrics (optional)
  fieldsPerfPowerMetrics: [
    "deviceType",
  ],
  // number | maximum number of related betaBuildLocalizations returned (when they are included) (optional)
  limitBetaBuildLocalizations: 1,
  // number | maximum number of related betaGroups returned (when they are included) (optional)
  limitBetaGroups: 1,
  // number | maximum number of related buildBundles returned (when they are included) (optional)
  limitBuildBundles: 1,
  // number | maximum number of related icons returned (when they are included) (optional)
  limitIcons: 1,
  // number | maximum number of related individualTesters returned (when they are included) (optional)
  limitIndividualTesters: 1,
};

apiInstance.buildsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;preReleaseVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsDiagnosticSignatures** | **Array<&#39;diagnosticType&#39; &#124; &#39;logs&#39; &#124; &#39;signature&#39; &#124; &#39;weight&#39;>** | the fields to include for returned resources of type diagnosticSignatures | (optional) defaults to undefined
 **fieldsBuildIcons** | **Array<&#39;iconAsset&#39; &#124; &#39;iconType&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type buildIcons | (optional) defaults to undefined
 **fieldsBuildBetaDetails** | **Array<&#39;autoNotifyEnabled&#39; &#124; &#39;build&#39; &#124; &#39;externalBuildState&#39; &#124; &#39;internalBuildState&#39;>** | the fields to include for returned resources of type buildBetaDetails | (optional) defaults to undefined
 **fieldsBetaAppReviewSubmissions** | **Array<&#39;betaReviewState&#39; &#124; &#39;build&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type betaAppReviewSubmissions | (optional) defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsBetaBuildLocalizations** | **Array<&#39;build&#39; &#124; &#39;locale&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type betaBuildLocalizations | (optional) defaults to undefined
 **fieldsPreReleaseVersions** | **Array<&#39;app&#39; &#124; &#39;builds&#39; &#124; &#39;platform&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type preReleaseVersions | (optional) defaults to undefined
 **fieldsAppEncryptionDeclarations** | **Array<&#39;app&#39; &#124; &#39;appDescription&#39; &#124; &#39;appEncryptionDeclarationDocument&#39; &#124; &#39;appEncryptionDeclarationState&#39; &#124; &#39;availableOnFrenchStore&#39; &#124; &#39;builds&#39; &#124; &#39;codeValue&#39; &#124; &#39;containsProprietaryCryptography&#39; &#124; &#39;containsThirdPartyCryptography&#39; &#124; &#39;createdDate&#39; &#124; &#39;documentName&#39; &#124; &#39;documentType&#39; &#124; &#39;documentUrl&#39; &#124; &#39;exempt&#39; &#124; &#39;platform&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesEncryption&#39;>** | the fields to include for returned resources of type appEncryptionDeclarations | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsPerfPowerMetrics** | **Array<&#39;deviceType&#39; &#124; &#39;metricType&#39; &#124; &#39;platform&#39;>** | the fields to include for returned resources of type perfPowerMetrics | (optional) defaults to undefined
 **limitBetaBuildLocalizations** | [**number**] | maximum number of related betaBuildLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitBetaGroups** | [**number**] | maximum number of related betaGroups returned (when they are included) | (optional) defaults to undefined
 **limitBuildBundles** | [**number**] | maximum number of related buildBundles returned (when they are included) | (optional) defaults to undefined
 **limitIcons** | [**number**] | maximum number of related icons returned (when they are included) | (optional) defaults to undefined
 **limitIndividualTesters** | [**number**] | maximum number of related individualTesters returned (when they are included) | (optional) defaults to undefined


### Return type

**BuildResponse**

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
**200** | Single Build |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsIconsGetToManyRelated**
> BuildIconsWithoutIncludesResponse buildsIconsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsIconsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'iconAsset' | 'iconType' | 'name'> | the fields to include for returned resources of type buildIcons (optional)
  fieldsBuildIcons: [
    "iconAsset",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildsIconsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuildIcons** | **Array<&#39;iconAsset&#39; &#124; &#39;iconType&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type buildIcons | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BuildIconsWithoutIncludesResponse**

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
**200** | List of BuildIcons with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsIndividualTestersCreateToManyRelationship**
> void buildsIndividualTestersCreateToManyRelationship(buildIndividualTestersLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsIndividualTestersCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildIndividualTestersLinkagesRequest | List of related linkages
  buildIndividualTestersLinkagesRequest: {
    data: [
      {
        type: "betaTesters",
        id: "id_example",
      },
    ],
  },
};

apiInstance.buildsIndividualTestersCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildIndividualTestersLinkagesRequest** | **BuildIndividualTestersLinkagesRequest**| List of related linkages |
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

# **buildsIndividualTestersDeleteToManyRelationship**
> void buildsIndividualTestersDeleteToManyRelationship(buildIndividualTestersLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsIndividualTestersDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildIndividualTestersLinkagesRequest | List of related linkages
  buildIndividualTestersLinkagesRequest: {
    data: [
      {
        type: "betaTesters",
        id: "id_example",
      },
    ],
  },
};

apiInstance.buildsIndividualTestersDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildIndividualTestersLinkagesRequest** | **BuildIndividualTestersLinkagesRequest**| List of related linkages |
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

# **buildsIndividualTestersGetToManyRelated**
> BetaTestersWithoutIncludesResponse buildsIndividualTestersGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsIndividualTestersGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildsIndividualTestersGetToManyRelated(body).then((data:any) => {
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

# **buildsIndividualTestersGetToManyRelationship**
> BuildIndividualTestersLinkagesResponse buildsIndividualTestersGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsIndividualTestersGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildsIndividualTestersGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BuildIndividualTestersLinkagesResponse**

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

# **buildsPerfPowerMetricsGetToManyRelated**
> XcodeMetrics buildsPerfPowerMetricsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsPerfPowerMetricsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'deviceType\' (optional)
  filterDeviceType: [
    "filter[deviceType]_example",
  ],
  // Array<'DISK' | 'HANG' | 'BATTERY' | 'LAUNCH' | 'MEMORY' | 'ANIMATION' | 'TERMINATION'> | filter by attribute \'metricType\' (optional)
  filterMetricType: [
    "DISK",
  ],
  // Array<'IOS'> | filter by attribute \'platform\' (optional)
  filterPlatform: [
    "IOS",
  ],
};

apiInstance.buildsPerfPowerMetricsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterDeviceType** | **Array&lt;string&gt;** | filter by attribute \&#39;deviceType\&#39; | (optional) defaults to undefined
 **filterMetricType** | **Array<&#39;DISK&#39; &#124; &#39;HANG&#39; &#124; &#39;BATTERY&#39; &#124; &#39;LAUNCH&#39; &#124; &#39;MEMORY&#39; &#124; &#39;ANIMATION&#39; &#124; &#39;TERMINATION&#39;>** | filter by attribute \&#39;metricType\&#39; | (optional) defaults to undefined
 **filterPlatform** | **Array<&#39;IOS&#39;>** | filter by attribute \&#39;platform\&#39; | (optional) defaults to undefined


### Return type

**XcodeMetrics**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.apple.xcode-metrics+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**200** | List of PerfPowerMetrics |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsPreReleaseVersionGetToOneRelated**
> PrereleaseVersionWithoutIncludesResponse buildsPreReleaseVersionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsPreReleaseVersionGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'builds' | 'platform' | 'version'> | the fields to include for returned resources of type preReleaseVersions (optional)
  fieldsPreReleaseVersions: [
    "app",
  ],
};

apiInstance.buildsPreReleaseVersionGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsPreReleaseVersions** | **Array<&#39;app&#39; &#124; &#39;builds&#39; &#124; &#39;platform&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type preReleaseVersions | (optional) defaults to undefined


### Return type

**PrereleaseVersionWithoutIncludesResponse**

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
**200** | Single PrereleaseVersion with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildsUpdateInstance**
> BuildResponse buildsUpdateInstance(buildUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildsApi(configuration);

let body:.BuildsApiBuildsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BuildUpdateRequest | Build representation
  buildUpdateRequest: {
    data: {
      type: "builds",
      id: "id_example",
      attributes: {
        expired: true,
        usesNonExemptEncryption: true,
      },
      relationships: {
        appEncryptionDeclaration: {
          data: {
            type: "appEncryptionDeclarations",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.buildsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildUpdateRequest** | **BuildUpdateRequest**| Build representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BuildResponse**

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
**200** | Single Build |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


