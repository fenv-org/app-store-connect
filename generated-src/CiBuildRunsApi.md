# .CiBuildRunsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ciBuildRunsActionsGetToManyRelated**](CiBuildRunsApi.md#ciBuildRunsActionsGetToManyRelated) | **GET** /v1/ciBuildRuns/{id}/actions | 
[**ciBuildRunsBuildsGetToManyRelated**](CiBuildRunsApi.md#ciBuildRunsBuildsGetToManyRelated) | **GET** /v1/ciBuildRuns/{id}/builds | 
[**ciBuildRunsCreateInstance**](CiBuildRunsApi.md#ciBuildRunsCreateInstance) | **POST** /v1/ciBuildRuns | 
[**ciBuildRunsGetInstance**](CiBuildRunsApi.md#ciBuildRunsGetInstance) | **GET** /v1/ciBuildRuns/{id} | 


# **ciBuildRunsActionsGetToManyRelated**
> CiBuildActionsResponse ciBuildRunsActionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildRunsApi(configuration);

let body:.CiBuildRunsApiCiBuildRunsActionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'> | the fields to include for returned resources of type ciBuildActions (optional)
  fieldsCiBuildActions: [
    "actionType",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'buildRun'> | comma-separated list of relationships to include (optional)
  include: [
    "buildRun",
  ],
};

apiInstance.ciBuildRunsActionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **fieldsCiBuildActions** | **Array<&#39;actionType&#39; &#124; &#39;artifacts&#39; &#124; &#39;buildRun&#39; &#124; &#39;completionStatus&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isRequiredToPass&#39; &#124; &#39;issueCounts&#39; &#124; &#39;issues&#39; &#124; &#39;name&#39; &#124; &#39;startedDate&#39; &#124; &#39;testResults&#39;>** | the fields to include for returned resources of type ciBuildActions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;buildRun&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CiBuildActionsResponse**

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
**200** | List of CiBuildActions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildRunsBuildsGetToManyRelated**
> BuildsResponse ciBuildRunsBuildsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildRunsApi(configuration);

let body:.CiBuildRunsApiCiBuildRunsBuildsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
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
  // Array<'appClipDomainCacheStatus' | 'appClipDomainDebugStatus' | 'betaAppClipInvocations' | 'buildBundleFileSizes' | 'bundleId' | 'bundleType' | 'dSYMUrl' | 'deviceProtocols' | 'entitlements' | 'fileName' | 'hasOnDemandResources' | 'hasPrerenderedIcon' | 'hasSirikit' | 'includesSymbols' | 'isIosBuildMacAppStoreCompatible' | 'locales' | 'platformBuild' | 'requiredCapabilities' | 'sdkBuild' | 'supportedArchitectures' | 'usesLocationServices'> | the fields to include for returned resources of type buildBundles (optional)
  fieldsBuildBundles: [
    "appClipDomainCacheStatus",
  ],
  // Array<'iconAsset' | 'iconType' | 'name'> | the fields to include for returned resources of type buildIcons (optional)
  fieldsBuildIcons: [
    "iconAsset",
  ],
  // Array<'betaReviewState' | 'build' | 'submittedDate'> | the fields to include for returned resources of type betaAppReviewSubmissions (optional)
  fieldsBetaAppReviewSubmissions: [
    "betaReviewState",
  ],
  // Array<'autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState'> | the fields to include for returned resources of type buildBetaDetails (optional)
  fieldsBuildBetaDetails: [
    "autoNotifyEnabled",
  ],
  // Array<'apps' | 'betaGroups' | 'builds' | 'email' | 'firstName' | 'inviteType' | 'lastName'> | the fields to include for returned resources of type betaTesters (optional)
  fieldsBetaTesters: [
    "apps",
  ],
  // Array<'app' | 'builds' | 'platform' | 'version'> | the fields to include for returned resources of type preReleaseVersions (optional)
  fieldsPreReleaseVersions: [
    "app",
  ],
  // Array<'build' | 'locale' | 'whatsNew'> | the fields to include for returned resources of type betaBuildLocalizations (optional)
  fieldsBetaBuildLocalizations: [
    "build",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'app' | 'appDescription' | 'appEncryptionDeclarationDocument' | 'appEncryptionDeclarationState' | 'availableOnFrenchStore' | 'builds' | 'codeValue' | 'containsProprietaryCryptography' | 'containsThirdPartyCryptography' | 'createdDate' | 'documentName' | 'documentType' | 'documentUrl' | 'exempt' | 'platform' | 'uploadedDate' | 'usesEncryption'> | the fields to include for returned resources of type appEncryptionDeclarations (optional)
  fieldsAppEncryptionDeclarations: [
    "app",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // Array<'app' | 'betaTesters' | 'builds' | 'createdDate' | 'feedbackEnabled' | 'hasAccessToAllBuilds' | 'iosBuildsAvailableForAppleSiliconMac' | 'isInternalGroup' | 'name' | 'publicLink' | 'publicLinkEnabled' | 'publicLinkId' | 'publicLinkLimit' | 'publicLinkLimitEnabled'> | the fields to include for returned resources of type betaGroups (optional)
  fieldsBetaGroups: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related individualTesters returned (when they are included) (optional)
  limitIndividualTesters: 1,
  // number | maximum number of related betaGroups returned (when they are included) (optional)
  limitBetaGroups: 1,
  // number | maximum number of related betaBuildLocalizations returned (when they are included) (optional)
  limitBetaBuildLocalizations: 1,
  // number | maximum number of related icons returned (when they are included) (optional)
  limitIcons: 1,
  // number | maximum number of related buildBundles returned (when they are included) (optional)
  limitBuildBundles: 1,
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildBetaDetail' | 'buildBundles' | 'icons' | 'individualTesters' | 'preReleaseVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.ciBuildRunsBuildsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
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
 **fieldsBuildBundles** | **Array<&#39;appClipDomainCacheStatus&#39; &#124; &#39;appClipDomainDebugStatus&#39; &#124; &#39;betaAppClipInvocations&#39; &#124; &#39;buildBundleFileSizes&#39; &#124; &#39;bundleId&#39; &#124; &#39;bundleType&#39; &#124; &#39;dSYMUrl&#39; &#124; &#39;deviceProtocols&#39; &#124; &#39;entitlements&#39; &#124; &#39;fileName&#39; &#124; &#39;hasOnDemandResources&#39; &#124; &#39;hasPrerenderedIcon&#39; &#124; &#39;hasSirikit&#39; &#124; &#39;includesSymbols&#39; &#124; &#39;isIosBuildMacAppStoreCompatible&#39; &#124; &#39;locales&#39; &#124; &#39;platformBuild&#39; &#124; &#39;requiredCapabilities&#39; &#124; &#39;sdkBuild&#39; &#124; &#39;supportedArchitectures&#39; &#124; &#39;usesLocationServices&#39;>** | the fields to include for returned resources of type buildBundles | (optional) defaults to undefined
 **fieldsBuildIcons** | **Array<&#39;iconAsset&#39; &#124; &#39;iconType&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type buildIcons | (optional) defaults to undefined
 **fieldsBetaAppReviewSubmissions** | **Array<&#39;betaReviewState&#39; &#124; &#39;build&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type betaAppReviewSubmissions | (optional) defaults to undefined
 **fieldsBuildBetaDetails** | **Array<&#39;autoNotifyEnabled&#39; &#124; &#39;build&#39; &#124; &#39;externalBuildState&#39; &#124; &#39;internalBuildState&#39;>** | the fields to include for returned resources of type buildBetaDetails | (optional) defaults to undefined
 **fieldsBetaTesters** | **Array<&#39;apps&#39; &#124; &#39;betaGroups&#39; &#124; &#39;builds&#39; &#124; &#39;email&#39; &#124; &#39;firstName&#39; &#124; &#39;inviteType&#39; &#124; &#39;lastName&#39;>** | the fields to include for returned resources of type betaTesters | (optional) defaults to undefined
 **fieldsPreReleaseVersions** | **Array<&#39;app&#39; &#124; &#39;builds&#39; &#124; &#39;platform&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type preReleaseVersions | (optional) defaults to undefined
 **fieldsBetaBuildLocalizations** | **Array<&#39;build&#39; &#124; &#39;locale&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type betaBuildLocalizations | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppEncryptionDeclarations** | **Array<&#39;app&#39; &#124; &#39;appDescription&#39; &#124; &#39;appEncryptionDeclarationDocument&#39; &#124; &#39;appEncryptionDeclarationState&#39; &#124; &#39;availableOnFrenchStore&#39; &#124; &#39;builds&#39; &#124; &#39;codeValue&#39; &#124; &#39;containsProprietaryCryptography&#39; &#124; &#39;containsThirdPartyCryptography&#39; &#124; &#39;createdDate&#39; &#124; &#39;documentName&#39; &#124; &#39;documentType&#39; &#124; &#39;documentUrl&#39; &#124; &#39;exempt&#39; &#124; &#39;platform&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesEncryption&#39;>** | the fields to include for returned resources of type appEncryptionDeclarations | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **fieldsBetaGroups** | **Array<&#39;app&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;createdDate&#39; &#124; &#39;feedbackEnabled&#39; &#124; &#39;hasAccessToAllBuilds&#39; &#124; &#39;iosBuildsAvailableForAppleSiliconMac&#39; &#124; &#39;isInternalGroup&#39; &#124; &#39;name&#39; &#124; &#39;publicLink&#39; &#124; &#39;publicLinkEnabled&#39; &#124; &#39;publicLinkId&#39; &#124; &#39;publicLinkLimit&#39; &#124; &#39;publicLinkLimitEnabled&#39;>** | the fields to include for returned resources of type betaGroups | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitIndividualTesters** | [**number**] | maximum number of related individualTesters returned (when they are included) | (optional) defaults to undefined
 **limitBetaGroups** | [**number**] | maximum number of related betaGroups returned (when they are included) | (optional) defaults to undefined
 **limitBetaBuildLocalizations** | [**number**] | maximum number of related betaBuildLocalizations returned (when they are included) | (optional) defaults to undefined
 **limitIcons** | [**number**] | maximum number of related icons returned (when they are included) | (optional) defaults to undefined
 **limitBuildBundles** | [**number**] | maximum number of related buildBundles returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;preReleaseVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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
**404** | Not found error |  -  |
**200** | List of Builds |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildRunsCreateInstance**
> CiBuildRunResponse ciBuildRunsCreateInstance(ciBuildRunCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildRunsApi(configuration);

let body:.CiBuildRunsApiCiBuildRunsCreateInstanceRequest = {
  // CiBuildRunCreateRequest | CiBuildRun representation
  ciBuildRunCreateRequest: {
    data: {
      type: "ciBuildRuns",
      attributes: {
        clean: true,
      },
      relationships: {
        buildRun: {
          data: {
            type: "ciBuildRuns",
            id: "id_example",
          },
        },
        workflow: {
          data: {
            type: "ciWorkflows",
            id: "id_example",
          },
        },
        sourceBranchOrTag: {
          data: {
            type: "scmGitReferences",
            id: "id_example",
          },
        },
        pullRequest: {
          data: {
            type: "scmPullRequests",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.ciBuildRunsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ciBuildRunCreateRequest** | **CiBuildRunCreateRequest**| CiBuildRun representation |


### Return type

**CiBuildRunResponse**

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
**201** | Single CiBuildRun |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **ciBuildRunsGetInstance**
> CiBuildRunResponse ciBuildRunsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CiBuildRunsApi(configuration);

let body:.CiBuildRunsApiCiBuildRunsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'> | the fields to include for returned resources of type ciBuildRuns (optional)
  fieldsCiBuildRuns: [
    "actions",
  ],
  // Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'> | comma-separated list of relationships to include (optional)
  include: [
    "builds",
  ],
  // Array<'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults'> | the fields to include for returned resources of type ciBuildActions (optional)
  fieldsCiBuildActions: [
    "actionType",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // number | maximum number of related builds returned (when they are included) (optional)
  limitBuilds: 1,
};

apiInstance.ciBuildRunsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCiBuildRuns** | **Array<&#39;actions&#39; &#124; &#39;buildRun&#39; &#124; &#39;builds&#39; &#124; &#39;cancelReason&#39; &#124; &#39;clean&#39; &#124; &#39;completionStatus&#39; &#124; &#39;createdDate&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;destinationCommit&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isPullRequestBuild&#39; &#124; &#39;issueCounts&#39; &#124; &#39;number&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;sourceCommit&#39; &#124; &#39;startReason&#39; &#124; &#39;startedDate&#39; &#124; &#39;workflow&#39;>** | the fields to include for returned resources of type ciBuildRuns | (optional) defaults to undefined
 **include** | **Array<&#39;builds&#39; &#124; &#39;destinationBranch&#39; &#124; &#39;product&#39; &#124; &#39;pullRequest&#39; &#124; &#39;sourceBranchOrTag&#39; &#124; &#39;workflow&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCiBuildActions** | **Array<&#39;actionType&#39; &#124; &#39;artifacts&#39; &#124; &#39;buildRun&#39; &#124; &#39;completionStatus&#39; &#124; &#39;executionProgress&#39; &#124; &#39;finishedDate&#39; &#124; &#39;isRequiredToPass&#39; &#124; &#39;issueCounts&#39; &#124; &#39;issues&#39; &#124; &#39;name&#39; &#124; &#39;startedDate&#39; &#124; &#39;testResults&#39;>** | the fields to include for returned resources of type ciBuildActions | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **limitBuilds** | [**number**] | maximum number of related builds returned (when they are included) | (optional) defaults to undefined


### Return type

**CiBuildRunResponse**

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
**200** | Single CiBuildRun |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


