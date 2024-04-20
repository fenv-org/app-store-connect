# .CiProductsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciProductsAdditionalRepositoriesGetToManyRelated**](CiProductsApi.md#ciProductsAdditionalRepositoriesGetToManyRelated) | **GET** /v1/ciProducts/{id}/additionalRepositories | 
[**ciProductsAppGetToOneRelated**](CiProductsApi.md#ciProductsAppGetToOneRelated) | **GET** /v1/ciProducts/{id}/app | 
[**ciProductsBuildRunsGetToManyRelated**](CiProductsApi.md#ciProductsBuildRunsGetToManyRelated) | **GET** /v1/ciProducts/{id}/buildRuns | 
[**ciProductsDeleteInstance**](CiProductsApi.md#ciProductsDeleteInstance) | **DELETE** /v1/ciProducts/{id} | 
[**ciProductsGetCollection**](CiProductsApi.md#ciProductsGetCollection) | **GET** /v1/ciProducts | 
[**ciProductsGetInstance**](CiProductsApi.md#ciProductsGetInstance) | **GET** /v1/ciProducts/{id} | 
[**ciProductsPrimaryRepositoriesGetToManyRelated**](CiProductsApi.md#ciProductsPrimaryRepositoriesGetToManyRelated) | **GET** /v1/ciProducts/{id}/primaryRepositories | 
[**ciProductsWorkflowsGetToManyRelated**](CiProductsApi.md#ciProductsWorkflowsGetToManyRelated) | **GET** /v1/ciProducts/{id}/workflows | 


# **ciProductsAdditionalRepositoriesGetToManyRelated**
> ScmRepositoriesResponse ciProductsAdditionalRepositoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsAdditionalRepositoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'repositories' | 'scmProviderType' | 'url'> | the fields to include for returned resources of type scmProviders (optional)
  fieldsScmProviders: [
    "repositories",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'defaultBranch' | 'scmProvider'> | comma-separated list of relationships to include (optional)
  include: [
    "defaultBranch",
  ],
};

apiInstance.ciProductsAdditionalRepositoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmRepositoriesResponse**

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
**200** | List of ScmRepositories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsAppGetToOneRelated**
> AppResponse ciProductsAppGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsAppGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type betaAppReviewDetails (optional)
  fieldsBetaAppReviewDetails: [
    "app",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'> | the fields to include for returned resources of type reviewSubmissions (optional)
  fieldsReviewSubmissions: [
    "app",
  ],
  // Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'> | the fields to include for returned resources of type betaGroups (optional)
  fieldsBetaGroups: [
    "app",
  ],
  // Array<'app' | 'enabled' | 'inAppPurchaseV2' | 'promotionImages' | 'state' | 'subscription' | 'visibleForAllUsers'> | the fields to include for returned resources of type promotedPurchases (optional)
  fieldsPromotedPurchases: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'> | the fields to include for returned resources of type appEvents (optional)
  fieldsAppEvents: [
    "app",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // Array<'agreementText' | 'app'> | the fields to include for returned resources of type betaLicenseAgreements (optional)
  fieldsBetaLicenseAgreements: [
    "agreementText",
  ],
  // Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'> | the fields to include for returned resources of type appClips (optional)
  fieldsAppClips: [
    "app",
  ],
  // Array<'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy'> | the fields to include for returned resources of type betaAppLocalizations (optional)
  fieldsBetaAppLocalizations: [
    "app",
  ],
  // Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'> | the fields to include for returned resources of type appInfos (optional)
  fieldsAppInfos: [
    "ageRatingDeclaration",
  ],
  // Array<'app' | 'builds' | 'platform' | 'version'> | the fields to include for returned resources of type preReleaseVersions (optional)
  fieldsPreReleaseVersions: [
    "app",
  ],
  // Array<'app' | 'appStoreReviewScreenshot' | 'apps' | 'content' | 'contentHosting' | 'familySharable' | 'iapPriceSchedule' | 'inAppPurchaseAvailability' | 'inAppPurchaseLocalizations' | 'inAppPurchaseType' | 'name' | 'pricePoints' | 'productId' | 'promotedPurchase' | 'referenceName' | 'reviewNote' | 'state'> | the fields to include for returned resources of type inAppPurchases (optional)
  fieldsInAppPurchases: [
    "app",
  ],
  // Array<'app' | 'referenceName' | 'subscriptionGroupLocalizations' | 'subscriptions'> | the fields to include for returned resources of type subscriptionGroups (optional)
  fieldsSubscriptionGroups: [
    "app",
  ],
  // Array<'app' | 'appReleaseDate' | 'preOrderAvailableDate'> | the fields to include for returned resources of type appPreOrders (optional)
  fieldsAppPreOrders: [
    "app",
  ],
  // Array<'app' | 'priceTier'> | the fields to include for returned resources of type appPrices (optional)
  fieldsAppPrices: [
    "app",
  ],
  // Array<'app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString'> | the fields to include for returned resources of type gameCenterEnabledVersions (optional)
  fieldsGameCenterEnabledVersions: [
    "app",
  ],
  // Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'duration' | 'optIn' | 'renewalType' | 'sandboxOptIn'> | the fields to include for returned resources of type subscriptionGracePeriods (optional)
  fieldsSubscriptionGracePeriods: [
    "duration",
  ],
  // Array<'agreementText' | 'app' | 'territories'> | the fields to include for returned resources of type endUserLicenseAgreements (optional)
  fieldsEndUserLicenseAgreements: [
    "agreementText",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'> | the fields to include for returned resources of type appEncryptionDeclarations (optional)
  fieldsAppEncryptionDeclarations: [
    "app",
  ],
  // Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'> | the fields to include for returned resources of type appCustomProductPages (optional)
  fieldsAppCustomProductPages: [
    "app",
  ],
  // Array<'currency'> | the fields to include for returned resources of type territories (optional)
  fieldsTerritories: [
    "currency",
  ],
  // number | maximum number of related appEncryptionDeclarations returned (when they are included) (optional)
  limitAppEncryptionDeclarations: 1,
  // number | maximum number of related betaGroups returned (when they are included) (optional)
  limitBetaGroups: 1,
  // number | maximum number of related appStoreVersions returned (when they are included) (optional)
  limitAppStoreVersions: 1,
  // number | maximum number of related preReleaseVersions returned (when they are included) (optional)
  limitPreReleaseVersions: 1,
  // number | maximum number of related betaAppLocalizations returned (when they are included) (optional)
  limitBetaAppLocalizations: 1,
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
  // number | maximum number of related appInfos returned (when they are included) (optional)
  limitAppInfos: 1,
  // number | maximum number of related appClips returned (when they are included) (optional)
  limitAppClips: 1,
  // number | maximum number of related prices returned (when they are included) (optional)
  limitPrices: 1,
  // number | maximum number of related availableTerritories returned (when they are included) (optional)
  limitAvailableTerritories: 1,
  // number | maximum number of related inAppPurchases returned (when they are included) (optional)
  limitInAppPurchases: 1,
  // number | maximum number of related subscriptionGroups returned (when they are included) (optional)
  limitSubscriptionGroups: 1,
  // number | maximum number of related gameCenterEnabledVersions returned (when they are included) (optional)
  limitGameCenterEnabledVersions: 1,
  // number | maximum number of related appCustomProductPages returned (when they are included) (optional)
  limitAppCustomProductPages: 1,
  // number | maximum number of related inAppPurchasesV2 returned (when they are included) (optional)
  limitInAppPurchasesV2: 1,
  // number | maximum number of related promotedPurchases returned (when they are included) (optional)
  limitPromotedPurchases: 1,
  // number | maximum number of related appEvents returned (when they are included) (optional)
  limitAppEvents: 1,
  // number | maximum number of related reviewSubmissions returned (when they are included) (optional)
  limitReviewSubmissions: 1,
  // number | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) (optional)
  limitAppStoreVersionExperimentsV2: 1,
  // Array<'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'builds' | 'ciProduct' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'preOrder' | 'preReleaseVersions' | 'prices' | 'promotedPurchases' | 'reviewSubmissions' | 'subscriptionGracePeriod' | 'subscriptionGroups'> | comma-separated list of relationships to include (optional)
  include: [
    "appClips",
  ],
};

apiInstance.ciProductsAppGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaAppReviewDetails** | **Array<&#39;app&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type betaAppReviewDetails | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **fieldsReviewSubmissions** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionForReview&#39; &#124; &#39;canceled&#39; &#124; &#39;items&#39; &#124; &#39;lastUpdatedByActor&#39; &#124; &#39;platform&#39; &#124; &#39;state&#39; &#124; &#39;submitted&#39; &#124; &#39;submittedByActor&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type reviewSubmissions | (optional) defaults to undefined
 **fieldsBetaGroups** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;createdDate&#39; &#124; &#39;feedbackEnabled&#39; &#124; &#39;hasAccessToAllBuilds&#39; &#124; &#39;iosBuildsAvailableForAppleSiliconMac&#39; &#124; &#39;isInternalGroup&#39; &#124; &#39;name&#39; &#124; &#39;publicLink&#39; &#124; &#39;publicLinkEnabled&#39; &#124; &#39;publicLinkId&#39; &#124; &#39;publicLinkLimit&#39; &#124; &#39;publicLinkLimitEnabled&#39;>** | the fields to include for returned resources of type betaGroups | (optional) defaults to undefined
 **fieldsPromotedPurchases** | **Array<&#39;app&#39; &#124; &#39;enabled&#39; &#124; &#39;inAppPurchaseV2&#39; &#124; &#39;promotionImages&#39; &#124; &#39;state&#39; &#124; &#39;subscription&#39; &#124; &#39;visibleForAllUsers&#39;>** | the fields to include for returned resources of type promotedPurchases | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsAppEvents** | **Array<&#39;app&#39; &#124; &#39;archivedTerritorySchedules&#39; &#124; &#39;badge&#39; &#124; &#39;deepLink&#39; &#124; &#39;eventState&#39; &#124; &#39;localizations&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;priority&#39; &#124; &#39;purchaseRequirement&#39; &#124; &#39;purpose&#39; &#124; &#39;referenceName&#39; &#124; &#39;territorySchedules&#39;>** | the fields to include for returned resources of type appEvents | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **fieldsBetaLicenseAgreements** | **Array<&#39;agreementText&#39; &#124; &#39;app&#39;>** | the fields to include for returned resources of type betaLicenseAgreements | (optional) defaults to undefined
 **fieldsAppClips** | **Array<&#39;app&#39; &#124; &#39;appClipAdvancedExperiences&#39; &#124; &#39;appClipDefaultExperiences&#39; &#124; &#39;bundleId&#39;>** | the fields to include for returned resources of type appClips | (optional) defaults to undefined
 **fieldsBetaAppLocalizations** | **Array<&#39;app&#39; &#124; &#39;description&#39; &#124; &#39;feedbackEmail&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;privacyPolicyUrl&#39; &#124; &#39;tvOsPrivacyPolicy&#39;>** | the fields to include for returned resources of type betaAppLocalizations | (optional) defaults to undefined
 **fieldsAppInfos** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;app&#39; &#124; &#39;appInfoLocalizations&#39; &#124; &#39;appStoreAgeRating&#39; &#124; &#39;appStoreState&#39; &#124; &#39;brazilAgeRating&#39; &#124; &#39;brazilAgeRatingV2&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;primaryCategory&#39; &#124; &#39;primarySubcategoryOne&#39; &#124; &#39;primarySubcategoryTwo&#39; &#124; &#39;secondaryCategory&#39; &#124; &#39;secondarySubcategoryOne&#39; &#124; &#39;secondarySubcategoryTwo&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type appInfos | (optional) defaults to undefined
 **fieldsPreReleaseVersions** | **Array<&#39;app&#39; &#124; &#39;builds&#39; &#124; &#39;platform&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type preReleaseVersions | (optional) defaults to undefined
 **fieldsInAppPurchases** | **Array<&#39;app&#39; &#124; &#39;appStoreReviewScreenshot&#39; &#124; &#39;apps&#39; &#124; &#39;content&#39; &#124; &#39;contentHosting&#39; &#124; &#39;familySharable&#39; &#124; &#39;iapPriceSchedule&#39; &#124; &#39;inAppPurchaseAvailability&#39; &#124; &#39;inAppPurchaseLocalizations&#39; &#124; &#39;inAppPurchaseType&#39; &#124; &#39;name&#39; &#124; &#39;pricePoints&#39; &#124; &#39;productId&#39; &#124; &#39;promotedPurchase&#39; &#124; &#39;referenceName&#39; &#124; &#39;reviewNote&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type inAppPurchases | (optional) defaults to undefined
 **fieldsSubscriptionGroups** | **Array<&#39;app&#39; &#124; &#39;referenceName&#39; &#124; &#39;subscriptionGroupLocalizations&#39; &#124; &#39;subscriptions&#39;>** | the fields to include for returned resources of type subscriptionGroups | (optional) defaults to undefined
 **fieldsAppPreOrders** | **Array<&#39;app&#39; &#124; &#39;appReleaseDate&#39; &#124; &#39;preOrderAvailableDate&#39;>** | the fields to include for returned resources of type appPreOrders | (optional) defaults to undefined
 **fieldsAppPrices** | **Array<&#39;app&#39; &#124; &#39;priceTier&#39;>** | the fields to include for returned resources of type appPrices | (optional) defaults to undefined
 **fieldsGameCenterEnabledVersions** | **Array<&#39;app&#39; &#124; &#39;compatibleVersions&#39; &#124; &#39;iconAsset&#39; &#124; &#39;platform&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type gameCenterEnabledVersions | (optional) defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsSubscriptionGracePeriods** | **Array<&#39;duration&#39; &#124; &#39;optIn&#39; &#124; &#39;renewalType&#39; &#124; &#39;sandboxOptIn&#39;>** | the fields to include for returned resources of type subscriptionGracePeriods | (optional) defaults to undefined
 **fieldsEndUserLicenseAgreements** | **Array<&#39;agreementText&#39; &#124; &#39;app&#39; &#124; &#39;territories&#39;>** | the fields to include for returned resources of type endUserLicenseAgreements | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppEncryptionDeclarations** | **Array<&#39;app&#39; &#124; &#39;appDescription&#39; &#124; &#39;appEncryptionDeclarationDocument&#39; &#124; &#39;appEncryptionDeclarationState&#39; &#124; &#39;availableOnFrenchStore&#39; &#124; &#39;builds&#39; &#124; &#39;codeValue&#39; &#124; &#39;containsProprietaryCryptography&#39; &#124; &#39;containsThirdPartyCryptography&#39; &#124; &#39;createdDate&#39; &#124; &#39;documentName&#39; &#124; &#39;documentType&#39; &#124; &#39;documentUrl&#39; &#124; &#39;exempt&#39; &#124; &#39;platform&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesEncryption&#39;>** | the fields to include for returned resources of type appEncryptionDeclarations | (optional) defaults to undefined
 **fieldsAppCustomProductPages** | **Array<&#39;app&#39; &#124; &#39;appCustomProductPageVersions&#39; &#124; &#39;appStoreVersionTemplate&#39; &#124; &#39;customProductPageTemplate&#39; &#124; &#39;name&#39; &#124; &#39;url&#39; &#124; &#39;visible&#39;>** | the fields to include for returned resources of type appCustomProductPages | (optional) defaults to undefined
 **fieldsTerritories** | **Array<&#39;currency&#39;>** | the fields to include for returned resources of type territories | (optional) defaults to undefined
 **limitAppEncryptionDeclarations** | [**number**] | maximum number of related appEncryptionDeclarations returned (when they are included) | (optional) defaults to undefined
 **limitBetaGroups** | [**number**] | maximum number of related betaGroups returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersions** | [**number**] | maximum number of related appStoreVersions returned (when they are included) | (optional) defaults to undefined
 **limitPreReleaseVersions** | [**number**] | maximum number of related preReleaseVersions returned (when they are included) | (optional) defaults to undefined
 **limitBetaAppLocalizations** | [**number**] | maximum number of related betaAppLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined
 **limitAppInfos** | [**number**] | maximum number of related appInfos returned (when they are included) | (optional) defaults to undefined
 **limitAppClips** | [**number**] | maximum number of related appClips returned (when they are included) | (optional) defaults to undefined
 **limitPrices** | [**number**] | maximum number of related prices returned (when they are included) | (optional) defaults to undefined
 **limitAvailableTerritories** | [**number**] | maximum number of related availableTerritories returned (when they are included) | (optional) defaults to undefined
 **limitInAppPurchases** | [**number**] | maximum number of related inAppPurchases returned (when they are included) | (optional) defaults to undefined
 **limitSubscriptionGroups** | [**number**] | maximum number of related subscriptionGroups returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterEnabledVersions** | [**number**] | maximum number of related gameCenterEnabledVersions returned (when they are included) | (optional) defaults to undefined
 **limitAppCustomProductPages** | [**number**] | maximum number of related appCustomProductPages returned (when they are included) | (optional) defaults to undefined
 **limitInAppPurchasesV2** | [**number**] | maximum number of related inAppPurchasesV2 returned (when they are included) | (optional) defaults to undefined
 **limitPromotedPurchases** | [**number**] | maximum number of related promotedPurchases returned (when they are included) | (optional) defaults to undefined
 **limitAppEvents** | [**number**] | maximum number of related appEvents returned (when they are included) | (optional) defaults to undefined
 **limitReviewSubmissions** | [**number**] | maximum number of related reviewSubmissions returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionExperimentsV2** | [**number**] | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;builds&#39; &#124; &#39;ciProduct&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;prices&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppResponse**

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
**200** | Single App |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsBuildRunsGetToManyRelated**
> CiBuildRunsResponse ciProductsBuildRunsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsBuildRunsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) of related \'builds\' (optional)
  filterBuilds: [
    "filter[builds]_example",
  ],
  // Array<'number' | '-number'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "number",
  ],
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'> | the fields to include for returned resources of type scmPullRequests (optional)
  fieldsScmPullRequests: [
    "destinationBranchName",
  ],
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
  // Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'> | comma-separated list of relationships to include (optional)
  include: [
    "builds",
  ],
};

apiInstance.ciProductsBuildRunsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterBuilds** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;builds\&#39; | (optional) defaults to undefined
 **sort** | **Array<&#39;number&#39; &#124; &#39;-number&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsScmPullRequests** | **Array<&#39;destinationBranchName&#39; &#124; &#39;destinationRepositoryName&#39; &#124; &#39;destinationRepositoryOwner&#39; &#124; &#39;isClosed&#39; &#124; &#39;isCrossRepository&#39; &#124; &#39;number&#39; &#124; &#39;repository&#39; &#124; &#39;sourceBranchName&#39; &#124; &#39;sourceRepositoryName&#39; &#124; &#39;sourceRepositoryOwner&#39; &#124; &#39;title&#39; &#124; &#39;webUrl&#39;>** | the fields to include for returned resources of type scmPullRequests | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;builds&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;workflow&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiBuildRunsResponse**

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
**200** | List of CiBuildRuns |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsDeleteInstance**
> void ciProductsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.ciProductsDeleteInstance(body).then((data:any) => {
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

# **ciProductsGetCollection**
> CiProductsResponse ciProductsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsGetCollectionRequest = {
  // Array<'APP' | 'FRAMEWORK'> | filter by attribute \'productType\' (optional)
  filterProductType: [
    "APP",
  ],
  // Array<string> | filter by id(s) of related \'app\' (optional)
  filterApp: [
    "filter[app]_example",
  ],
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'bundleId' | 'primaryRepositories'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum number of related primaryRepositories returned (when they are included) (optional)
  limitPrimaryRepositories: 1,
};

apiInstance.ciProductsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterProductType** | **Array<&#39;APP&#39; &#124; &#39;FRAMEWORK&#39;>** | filter by attribute \&#39;productType\&#39; | (optional) defaults to undefined
 **filterApp** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;app\&#39; | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;bundleId&#39; &#124; &#39;primaryRepositories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limitPrimaryRepositories** | [**number**] | maximum number of related primaryRepositories returned (when they are included) | (optional) defaults to undefined


### Return type

**CiProductsResponse**

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
**200** | List of CiProducts |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsGetInstance**
> CiProductResponse ciProductsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // Array<'app' | 'bundleId' | 'primaryRepositories'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum number of related primaryRepositories returned (when they are included) (optional)
  limitPrimaryRepositories: 1,
};

apiInstance.ciProductsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;bundleId&#39; &#124; &#39;primaryRepositories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limitPrimaryRepositories** | [**number**] | maximum number of related primaryRepositories returned (when they are included) | (optional) defaults to undefined


### Return type

**CiProductResponse**

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
**200** | Single CiProduct |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsPrimaryRepositoriesGetToManyRelated**
> ScmRepositoriesResponse ciProductsPrimaryRepositoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsPrimaryRepositoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'> | the fields to include for returned resources of type scmGitReferences (optional)
  fieldsScmGitReferences: [
    "canonicalName",
  ],
  // Array<'repositories' | 'scmProviderType' | 'url'> | the fields to include for returned resources of type scmProviders (optional)
  fieldsScmProviders: [
    "repositories",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'defaultBranch' | 'scmProvider'> | comma-separated list of relationships to include (optional)
  include: [
    "defaultBranch",
  ],
};

apiInstance.ciProductsPrimaryRepositoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsScmGitReferences** | **Array<&#39;canonicalName&#39; &#124; &#39;isDeleted&#39; &#124; &#39;kind&#39; &#124; &#39;name&#39; &#124; &#39;repository&#39;>** | the fields to include for returned resources of type scmGitReferences | (optional) defaults to undefined
 **fieldsScmProviders** | **Array<&#39;repositories&#39; &#124; &#39;scmProviderType&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type scmProviders | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;defaultBranch&#39; &#124; &#39;scmProvider&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ScmRepositoriesResponse**

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
**200** | List of ScmRepositories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciProductsWorkflowsGetToManyRelated**
> CiWorkflowsResponse ciProductsWorkflowsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiProductsApi(configuration);

let body:.CiProductsApiCiProductsWorkflowsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'> | the fields to include for returned resources of type ciXcodeVersions (optional)
  fieldsCiXcodeVersions: [
    "macOsVersions",
  ],
  // Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'manualBranchStartCondition' | 'manualPullRequestStartCondition' | 'manualTagStartCondition' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'> | the fields to include for returned resources of type ciWorkflows (optional)
  fieldsCiWorkflows: [
    "actions",
  ],
  // Array<'name' | 'version' | 'xcodeVersions'> | the fields to include for returned resources of type ciMacOsVersions (optional)
  fieldsCiMacOsVersions: [
    "name",
  ],
  // Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'> | the fields to include for returned resources of type ciProducts (optional)
  fieldsCiProducts: [
    "additionalRepositories",
  ],
  // Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'> | the fields to include for returned resources of type scmRepositories (optional)
  fieldsScmRepositories: [
    "defaultBranch",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "macOsVersion",
  ],
};

apiInstance.ciProductsWorkflowsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiXcodeVersions** | **Array<&#39;macOsVersions&#39; &#124; &#39;name&#39; &#124; &#39;testDestinations&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type ciXcodeVersions | (optional) defaults to undefined
 **fieldsCiWorkflows** | **Array<&#39;actions&#39; &#124; &#39;branchStartCondition&#39; &#124; &#39;buildRuns&#39; &#124; &#39;clean&#39; &#124; &#39;containerFilePath&#39; &#124; &#39;description&#39; &#124; &#39;isEnabled&#39; &#124; &#39;isLockedForEditing&#39; &#124; &#39;lastModifiedDate&#39; &#124; &#39;macOsVersion&#39; &#124; &#39;manualBranchStartCondition&#39; &#124; &#39;manualPullRequestStartCondition&#39; &#124; &#39;manualTagStartCondition&#39; &#124; &#39;name&#39; &#124; &#39;product&#39; &#124; &#39;pullRequestStartCondition&#39; &#124; &#39;repository&#39; &#124; &#39;scheduledStartCondition&#39; &#124; &#39;tagStartCondition&#39; &#124; &#39;xcodeVersion&#39;>** | the fields to include for returned resources of type ciWorkflows | (optional) defaults to undefined
 **fieldsCiMacOsVersions** | **Array<&#39;name&#39; &#124; &#39;version&#39; &#124; &#39;xcodeVersions&#39;>** | the fields to include for returned resources of type ciMacOsVersions | (optional) defaults to undefined
 **fieldsCiProducts** | **Array<&#39;additionalRepositories&#39; &#124; &#39;app&#39; &#124; &#39;buildRuns&#39; &#124; &#39;bundleId&#39; &#124; &#39;createdDate&#39; &#124; &#39;name&#39; &#124; &#39;primaryRepositories&#39; &#124; &#39;productType&#39; &#124; &#39;workflows&#39;>** | the fields to include for returned resources of type ciProducts | (optional) defaults to undefined
 **fieldsScmRepositories** | **Array<&#39;defaultBranch&#39; &#124; &#39;gitReferences&#39; &#124; &#39;httpCloneUrl&#39; &#124; &#39;lastAccessedDate&#39; &#124; &#39;ownerName&#39; &#124; &#39;pullRequests&#39; &#124; &#39;repositoryName&#39; &#124; &#39;scmProvider&#39; &#124; &#39;sshCloneUrl&#39;>** | the fields to include for returned resources of type scmRepositories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;macOsVersion&#39; &#124; &#39;product&#39; &#124; &#39;repository&#39; &#124; &#39;xcodeVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiWorkflowsResponse**

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
**200** | List of CiWorkflows |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


