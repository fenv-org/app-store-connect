# .AppStoreVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionsAgeRatingDeclarationGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAgeRatingDeclarationGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/ageRatingDeclaration | 
[**appStoreVersionsAlternativeDistributionPackageGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAlternativeDistributionPackageGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/alternativeDistributionPackage | 
[**appStoreVersionsAppClipDefaultExperienceGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAppClipDefaultExperienceGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/appClipDefaultExperience | 
[**appStoreVersionsAppClipDefaultExperienceGetToOneRelationship**](AppStoreVersionsApi.md#appStoreVersionsAppClipDefaultExperienceGetToOneRelationship) | **GET** /v1/appStoreVersions/{id}/relationships/appClipDefaultExperience | 
[**appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship**](AppStoreVersionsApi.md#appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship) | **PATCH** /v1/appStoreVersions/{id}/relationships/appClipDefaultExperience | 
[**appStoreVersionsAppStoreReviewDetailGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreReviewDetailGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/appStoreReviewDetail | 
[**appStoreVersionsAppStoreVersionExperimentsGetToManyRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreVersionExperimentsGetToManyRelated) | **GET** /v1/appStoreVersions/{id}/appStoreVersionExperiments | 
[**appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated) | **GET** /v1/appStoreVersions/{id}/appStoreVersionExperimentsV2 | 
[**appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated) | **GET** /v1/appStoreVersions/{id}/appStoreVersionLocalizations | 
[**appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/appStoreVersionPhasedRelease | 
[**appStoreVersionsAppStoreVersionSubmissionGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsAppStoreVersionSubmissionGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/appStoreVersionSubmission | 
[**appStoreVersionsBuildGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsBuildGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/build | 
[**appStoreVersionsBuildGetToOneRelationship**](AppStoreVersionsApi.md#appStoreVersionsBuildGetToOneRelationship) | **GET** /v1/appStoreVersions/{id}/relationships/build | 
[**appStoreVersionsBuildUpdateToOneRelationship**](AppStoreVersionsApi.md#appStoreVersionsBuildUpdateToOneRelationship) | **PATCH** /v1/appStoreVersions/{id}/relationships/build | 
[**appStoreVersionsCreateInstance**](AppStoreVersionsApi.md#appStoreVersionsCreateInstance) | **POST** /v1/appStoreVersions | 
[**appStoreVersionsCustomerReviewsGetToManyRelated**](AppStoreVersionsApi.md#appStoreVersionsCustomerReviewsGetToManyRelated) | **GET** /v1/appStoreVersions/{id}/customerReviews | 
[**appStoreVersionsDeleteInstance**](AppStoreVersionsApi.md#appStoreVersionsDeleteInstance) | **DELETE** /v1/appStoreVersions/{id} | 
[**appStoreVersionsGetInstance**](AppStoreVersionsApi.md#appStoreVersionsGetInstance) | **GET** /v1/appStoreVersions/{id} | 
[**appStoreVersionsRoutingAppCoverageGetToOneRelated**](AppStoreVersionsApi.md#appStoreVersionsRoutingAppCoverageGetToOneRelated) | **GET** /v1/appStoreVersions/{id}/routingAppCoverage | 
[**appStoreVersionsUpdateInstance**](AppStoreVersionsApi.md#appStoreVersionsUpdateInstance) | **PATCH** /v1/appStoreVersions/{id} | 


# **appStoreVersionsAgeRatingDeclarationGetToOneRelated**
> AgeRatingDeclarationWithoutIncludesResponse appStoreVersionsAgeRatingDeclarationGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAgeRatingDeclarationGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'> | the fields to include for returned resources of type ageRatingDeclarations (optional)
  fieldsAgeRatingDeclarations: [
    "ageRatingOverride",
  ],
};

apiInstance.appStoreVersionsAgeRatingDeclarationGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAgeRatingDeclarations** | **Array<&#39;ageRatingOverride&#39; &#124; &#39;alcoholTobaccoOrDrugUseOrReferences&#39; &#124; &#39;contests&#39; &#124; &#39;gambling&#39; &#124; &#39;gamblingAndContests&#39; &#124; &#39;gamblingSimulated&#39; &#124; &#39;horrorOrFearThemes&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;matureOrSuggestiveThemes&#39; &#124; &#39;medicalOrTreatmentInformation&#39; &#124; &#39;profanityOrCrudeHumor&#39; &#124; &#39;seventeenPlus&#39; &#124; &#39;sexualContentGraphicAndNudity&#39; &#124; &#39;sexualContentOrNudity&#39; &#124; &#39;unrestrictedWebAccess&#39; &#124; &#39;violenceCartoonOrFantasy&#39; &#124; &#39;violenceRealistic&#39; &#124; &#39;violenceRealisticProlongedGraphicOrSadistic&#39;>** | the fields to include for returned resources of type ageRatingDeclarations | (optional) defaults to undefined


### Return type

**AgeRatingDeclarationWithoutIncludesResponse**

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
**200** | Single AgeRatingDeclaration with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAlternativeDistributionPackageGetToOneRelated**
> AlternativeDistributionPackageResponse appStoreVersionsAlternativeDistributionPackageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAlternativeDistributionPackageGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'versions'> | the fields to include for returned resources of type alternativeDistributionPackages (optional)
  fieldsAlternativeDistributionPackages: [
    "appStoreVersion",
  ],
  // Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'> | the fields to include for returned resources of type alternativeDistributionPackageVersions (optional)
  fieldsAlternativeDistributionPackageVersions: [
    "alternativeDistributionPackage",
  ],
  // number | maximum number of related versions returned (when they are included) (optional)
  limitVersions: 1,
  // Array<'versions'> | comma-separated list of relationships to include (optional)
  include: [
    "versions",
  ],
};

apiInstance.appStoreVersionsAlternativeDistributionPackageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;versions&#39;>** | the fields to include for returned resources of type alternativeDistributionPackages | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageVersions** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39; &#124; &#39;variants&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVersions | (optional) defaults to undefined
 **limitVersions** | [**number**] | maximum number of related versions returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;versions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageResponse**

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
**200** | Single AlternativeDistributionPackage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppClipDefaultExperienceGetToOneRelated**
> AppClipDefaultExperienceResponse appStoreVersionsAppClipDefaultExperienceGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppClipDefaultExperienceGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'> | the fields to include for returned resources of type appClips (optional)
  fieldsAppClips: [
    "app",
  ],
  // Array<'appClipDefaultExperience' | 'invocationUrls'> | the fields to include for returned resources of type appClipAppStoreReviewDetails (optional)
  fieldsAppClipAppStoreReviewDetails: [
    "appClipDefaultExperience",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'> | the fields to include for returned resources of type appClipDefaultExperienceLocalizations (optional)
  fieldsAppClipDefaultExperienceLocalizations: [
    "appClipDefaultExperience",
  ],
  // number | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) (optional)
  limitAppClipDefaultExperienceLocalizations: 1,
  // Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appClip",
  ],
};

apiInstance.appStoreVersionsAppClipDefaultExperienceGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClips** | **Array<&#39;app&#39; &#124; &#39;appClipAdvancedExperiences&#39; &#124; &#39;appClipDefaultExperiences&#39; &#124; &#39;bundleId&#39;>** | the fields to include for returned resources of type appClips | (optional) defaults to undefined
 **fieldsAppClipAppStoreReviewDetails** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;invocationUrls&#39;>** | the fields to include for returned resources of type appClipAppStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **limitAppClipDefaultExperienceLocalizations** | [**number**] | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appStoreVersionsAppClipDefaultExperienceGetToOneRelationship**
> AppStoreVersionAppClipDefaultExperienceLinkageResponse appStoreVersionsAppClipDefaultExperienceGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppClipDefaultExperienceGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionsAppClipDefaultExperienceGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionAppClipDefaultExperienceLinkageResponse**

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

# **appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship**
> void appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship(appStoreVersionAppClipDefaultExperienceLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppClipDefaultExperienceUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionAppClipDefaultExperienceLinkageRequest | Related linkage
  appStoreVersionAppClipDefaultExperienceLinkageRequest: {
    data: {
      type: "appClipDefaultExperiences",
      id: "id_example",
    },
  },
};

apiInstance.appStoreVersionsAppClipDefaultExperienceUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionAppClipDefaultExperienceLinkageRequest** | **AppStoreVersionAppClipDefaultExperienceLinkageRequest**| Related linkage |
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

# **appStoreVersionsAppStoreReviewDetailGetToOneRelated**
> AppStoreReviewDetailResponse appStoreVersionsAppStoreReviewDetailGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreReviewDetailGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type appStoreReviewDetails (optional)
  fieldsAppStoreReviewDetails: [
    "appStoreReviewAttachments",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appStoreReviewAttachments (optional)
  fieldsAppStoreReviewAttachments: [
    "appStoreReviewDetail",
  ],
  // number | maximum number of related appStoreReviewAttachments returned (when they are included) (optional)
  limitAppStoreReviewAttachments: 1,
  // Array<'appStoreReviewAttachments' | 'appStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewAttachments",
  ],
};

apiInstance.appStoreVersionsAppStoreReviewDetailGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreReviewDetails** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type appStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppStoreReviewAttachments** | **Array<&#39;appStoreReviewDetail&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appStoreReviewAttachments | (optional) defaults to undefined
 **limitAppStoreReviewAttachments** | [**number**] | maximum number of related appStoreReviewAttachments returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreReviewDetailResponse**

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
**200** | Single AppStoreReviewDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppStoreVersionExperimentsGetToManyRelated**
> AppStoreVersionExperimentsResponse appStoreVersionsAppStoreVersionExperimentsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreVersionExperimentsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'> | filter by attribute \'state\' (optional)
  filterState: [
    "PREPARE_FOR_SUBMISSION",
  ],
  // Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "appStoreVersion",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatments: 1,
  // Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
};

apiInstance.appStoreVersionsAppStoreVersionExperimentsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterState** | **Array<&#39;PREPARE_FOR_SUBMISSION&#39; &#124; &#39;READY_FOR_REVIEW&#39; &#124; &#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;ACCEPTED&#39; &#124; &#39;APPROVED&#39; &#124; &#39;REJECTED&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;STOPPED&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;endDate&#39; &#124; &#39;name&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatments** | [**number**] | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentsResponse**

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
**200** | List of AppStoreVersionExperiments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated**
> AppStoreVersionExperimentsV2Response appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreVersionExperimentsV2GetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'STOPPED'> | filter by attribute \'state\' (optional)
  filterState: [
    "PREPARE_FOR_SUBMISSION",
  ],
  // Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related controlVersions returned (when they are included) (optional)
  limitControlVersions: 1,
  // number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatments: 1,
  // Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'latestControlVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
};

apiInstance.appStoreVersionsAppStoreVersionExperimentsV2GetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterState** | **Array<&#39;PREPARE_FOR_SUBMISSION&#39; &#124; &#39;READY_FOR_REVIEW&#39; &#124; &#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;ACCEPTED&#39; &#124; &#39;APPROVED&#39; &#124; &#39;REJECTED&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;STOPPED&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitControlVersions** | [**number**] | maximum number of related controlVersions returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatments** | [**number**] | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;latestControlVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentsV2Response**

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
**200** | List of AppStoreVersionExperiments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated**
> AppStoreVersionLocalizationsResponse appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreVersionLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'locale\' (optional)
  filterLocale: [
    "filter[locale]_example",
  ],
  // Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'> | the fields to include for returned resources of type appScreenshotSets (optional)
  fieldsAppScreenshotSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'> | the fields to include for returned resources of type appPreviewSets (optional)
  fieldsAppPreviewSets: [
    "appCustomProductPageLocalization",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'> | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
  fieldsAppStoreVersionLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appScreenshotSets returned (when they are included) (optional)
  limitAppScreenshotSets: 1,
  // number | maximum number of related appPreviewSets returned (when they are included) (optional)
  limitAppPreviewSets: 1,
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appPreviewSets",
  ],
};

apiInstance.appStoreVersionsAppStoreVersionLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLocale** | **Array&lt;string&gt;** | filter by attribute \&#39;locale\&#39; | (optional) defaults to undefined
 **fieldsAppScreenshotSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appScreenshots&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;screenshotDisplayType&#39;>** | the fields to include for returned resources of type appScreenshotSets | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppPreviewSets** | **Array<&#39;appCustomProductPageLocalization&#39; &#124; &#39;appPreviews&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalization&#39; &#124; &#39;appStoreVersionLocalization&#39; &#124; &#39;previewType&#39;>** | the fields to include for returned resources of type appPreviewSets | (optional) defaults to undefined
 **fieldsAppStoreVersionLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;description&#39; &#124; &#39;keywords&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;promotionalText&#39; &#124; &#39;supportUrl&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type appStoreVersionLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppScreenshotSets** | [**number**] | maximum number of related appScreenshotSets returned (when they are included) | (optional) defaults to undefined
 **limitAppPreviewSets** | [**number**] | maximum number of related appPreviewSets returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionLocalizationsResponse**

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
**200** | List of AppStoreVersionLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated**
> AppStoreVersionPhasedReleaseWithoutIncludesResponse appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'> | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)
  fieldsAppStoreVersionPhasedReleases: [
    "appStoreVersion",
  ],
};

apiInstance.appStoreVersionsAppStoreVersionPhasedReleaseGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionPhasedReleases** | **Array<&#39;appStoreVersion&#39; &#124; &#39;currentDayNumber&#39; &#124; &#39;phasedReleaseState&#39; &#124; &#39;startDate&#39; &#124; &#39;totalPauseDuration&#39;>** | the fields to include for returned resources of type appStoreVersionPhasedReleases | (optional) defaults to undefined


### Return type

**AppStoreVersionPhasedReleaseWithoutIncludesResponse**

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
**200** | Single AppStoreVersionPhasedRelease with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsAppStoreVersionSubmissionGetToOneRelated**
> AppStoreVersionSubmissionResponse appStoreVersionsAppStoreVersionSubmissionGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsAppStoreVersionSubmissionGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion'> | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
  fieldsAppStoreVersionSubmissions: [
    "appStoreVersion",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
};

apiInstance.appStoreVersionsAppStoreVersionSubmissionGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionSubmissions** | **Array<&#39;appStoreVersion&#39;>** | the fields to include for returned resources of type appStoreVersionSubmissions | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionSubmissionResponse**

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
**200** | Single AppStoreVersionSubmission |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsBuildGetToOneRelated**
> BuildWithoutIncludesResponse appStoreVersionsBuildGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsBuildGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
};

apiInstance.appStoreVersionsBuildGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined


### Return type

**BuildWithoutIncludesResponse**

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
**200** | Single Build with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsBuildGetToOneRelationship**
> AppStoreVersionBuildLinkageResponse appStoreVersionsBuildGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsBuildGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionsBuildGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionBuildLinkageResponse**

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

# **appStoreVersionsBuildUpdateToOneRelationship**
> void appStoreVersionsBuildUpdateToOneRelationship(appStoreVersionBuildLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsBuildUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionBuildLinkageRequest | Related linkage
  appStoreVersionBuildLinkageRequest: {
    data: {
      type: "builds",
      id: "id_example",
    },
  },
};

apiInstance.appStoreVersionsBuildUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionBuildLinkageRequest** | **AppStoreVersionBuildLinkageRequest**| Related linkage |
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

# **appStoreVersionsCreateInstance**
> AppStoreVersionResponse appStoreVersionsCreateInstance(appStoreVersionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsCreateInstanceRequest = {
  // AppStoreVersionCreateRequest | AppStoreVersion representation
  appStoreVersionCreateRequest: {
    data: {
      type: "appStoreVersions",
      attributes: {
        platform: "IOS",
        versionString: "versionString_example",
        copyright: "copyright_example",
        reviewType: "APP_STORE",
        releaseType: "MANUAL",
        earliestReleaseDate: new Date('1970-01-01T00:00:00.00Z'),
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        appStoreVersionLocalizations: {
          data: [
            {
              type: "appStoreVersionLocalizations",
              id: "id_example",
            },
          ],
        },
        build: {
          data: {
            type: "builds",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionCreateRequest** | **AppStoreVersionCreateRequest**| AppStoreVersion representation |


### Return type

**AppStoreVersionResponse**

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
**201** | Single AppStoreVersion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsCustomerReviewsGetToManyRelated**
> CustomerReviewsResponse appStoreVersionsCustomerReviewsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsCustomerReviewsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'rating\' (optional)
  filterRating: [
    "filter[rating]_example",
  ],
  // Array<'ABW' | 'AFG' | 'AGO' | 'AIA' | 'ALB' | 'AND' | 'ANT' | 'ARE' | 'ARG' | 'ARM' | 'ASM' | 'ATG' | 'AUS' | 'AUT' | 'AZE' | 'BDI' | 'BEL' | 'BEN' | 'BES' | 'BFA' | 'BGD' | 'BGR' | 'BHR' | 'BHS' | 'BIH' | 'BLR' | 'BLZ' | 'BMU' | 'BOL' | 'BRA' | 'BRB' | 'BRN' | 'BTN' | 'BWA' | 'CAF' | 'CAN' | 'CHE' | 'CHL' | 'CHN' | 'CIV' | 'CMR' | 'COD' | 'COG' | 'COK' | 'COL' | 'COM' | 'CPV' | 'CRI' | 'CUB' | 'CUW' | 'CXR' | 'CYM' | 'CYP' | 'CZE' | 'DEU' | 'DJI' | 'DMA' | 'DNK' | 'DOM' | 'DZA' | 'ECU' | 'EGY' | 'ERI' | 'ESP' | 'EST' | 'ETH' | 'FIN' | 'FJI' | 'FLK' | 'FRA' | 'FRO' | 'FSM' | 'GAB' | 'GBR' | 'GEO' | 'GGY' | 'GHA' | 'GIB' | 'GIN' | 'GLP' | 'GMB' | 'GNB' | 'GNQ' | 'GRC' | 'GRD' | 'GRL' | 'GTM' | 'GUF' | 'GUM' | 'GUY' | 'HKG' | 'HND' | 'HRV' | 'HTI' | 'HUN' | 'IDN' | 'IMN' | 'IND' | 'IRL' | 'IRQ' | 'ISL' | 'ISR' | 'ITA' | 'JAM' | 'JEY' | 'JOR' | 'JPN' | 'KAZ' | 'KEN' | 'KGZ' | 'KHM' | 'KIR' | 'KNA' | 'KOR' | 'KWT' | 'LAO' | 'LBN' | 'LBR' | 'LBY' | 'LCA' | 'LIE' | 'LKA' | 'LSO' | 'LTU' | 'LUX' | 'LVA' | 'MAC' | 'MAR' | 'MCO' | 'MDA' | 'MDG' | 'MDV' | 'MEX' | 'MHL' | 'MKD' | 'MLI' | 'MLT' | 'MMR' | 'MNE' | 'MNG' | 'MNP' | 'MOZ' | 'MRT' | 'MSR' | 'MTQ' | 'MUS' | 'MWI' | 'MYS' | 'MYT' | 'NAM' | 'NCL' | 'NER' | 'NFK' | 'NGA' | 'NIC' | 'NIU' | 'NLD' | 'NOR' | 'NPL' | 'NRU' | 'NZL' | 'OMN' | 'PAK' | 'PAN' | 'PER' | 'PHL' | 'PLW' | 'PNG' | 'POL' | 'PRI' | 'PRT' | 'PRY' | 'PSE' | 'PYF' | 'QAT' | 'REU' | 'ROU' | 'RUS' | 'RWA' | 'SAU' | 'SEN' | 'SGP' | 'SHN' | 'SLB' | 'SLE' | 'SLV' | 'SMR' | 'SOM' | 'SPM' | 'SRB' | 'SSD' | 'STP' | 'SUR' | 'SVK' | 'SVN' | 'SWE' | 'SWZ' | 'SXM' | 'SYC' | 'TCA' | 'TCD' | 'TGO' | 'THA' | 'TJK' | 'TKM' | 'TLS' | 'TON' | 'TTO' | 'TUN' | 'TUR' | 'TUV' | 'TWN' | 'TZA' | 'UGA' | 'UKR' | 'UMI' | 'URY' | 'USA' | 'UZB' | 'VAT' | 'VCT' | 'VEN' | 'VGB' | 'VIR' | 'VNM' | 'VUT' | 'WLF' | 'WSM' | 'YEM' | 'ZAF' | 'ZMB' | 'ZWE'> | filter by attribute \'territory\' (optional)
  filterTerritory: [
    "ABW",
  ],
  // boolean | filter by publishedResponse (optional)
  existsPublishedResponse: true,
  // Array<'createdDate' | '-createdDate' | 'rating' | '-rating'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "createdDate",
  ],
  // Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'> | the fields to include for returned resources of type customerReviews (optional)
  fieldsCustomerReviews: [
    "body",
  ],
  // Array<'lastModifiedDate' | 'responseBody' | 'review' | 'state'> | the fields to include for returned resources of type customerReviewResponses (optional)
  fieldsCustomerReviewResponses: [
    "lastModifiedDate",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'response'> | comma-separated list of relationships to include (optional)
  include: [
    "response",
  ],
};

apiInstance.appStoreVersionsCustomerReviewsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterRating** | **Array&lt;string&gt;** | filter by attribute \&#39;rating\&#39; | (optional) defaults to undefined
 **filterTerritory** | **Array<&#39;ABW&#39; &#124; &#39;AFG&#39; &#124; &#39;AGO&#39; &#124; &#39;AIA&#39; &#124; &#39;ALB&#39; &#124; &#39;AND&#39; &#124; &#39;ANT&#39; &#124; &#39;ARE&#39; &#124; &#39;ARG&#39; &#124; &#39;ARM&#39; &#124; &#39;ASM&#39; &#124; &#39;ATG&#39; &#124; &#39;AUS&#39; &#124; &#39;AUT&#39; &#124; &#39;AZE&#39; &#124; &#39;BDI&#39; &#124; &#39;BEL&#39; &#124; &#39;BEN&#39; &#124; &#39;BES&#39; &#124; &#39;BFA&#39; &#124; &#39;BGD&#39; &#124; &#39;BGR&#39; &#124; &#39;BHR&#39; &#124; &#39;BHS&#39; &#124; &#39;BIH&#39; &#124; &#39;BLR&#39; &#124; &#39;BLZ&#39; &#124; &#39;BMU&#39; &#124; &#39;BOL&#39; &#124; &#39;BRA&#39; &#124; &#39;BRB&#39; &#124; &#39;BRN&#39; &#124; &#39;BTN&#39; &#124; &#39;BWA&#39; &#124; &#39;CAF&#39; &#124; &#39;CAN&#39; &#124; &#39;CHE&#39; &#124; &#39;CHL&#39; &#124; &#39;CHN&#39; &#124; &#39;CIV&#39; &#124; &#39;CMR&#39; &#124; &#39;COD&#39; &#124; &#39;COG&#39; &#124; &#39;COK&#39; &#124; &#39;COL&#39; &#124; &#39;COM&#39; &#124; &#39;CPV&#39; &#124; &#39;CRI&#39; &#124; &#39;CUB&#39; &#124; &#39;CUW&#39; &#124; &#39;CXR&#39; &#124; &#39;CYM&#39; &#124; &#39;CYP&#39; &#124; &#39;CZE&#39; &#124; &#39;DEU&#39; &#124; &#39;DJI&#39; &#124; &#39;DMA&#39; &#124; &#39;DNK&#39; &#124; &#39;DOM&#39; &#124; &#39;DZA&#39; &#124; &#39;ECU&#39; &#124; &#39;EGY&#39; &#124; &#39;ERI&#39; &#124; &#39;ESP&#39; &#124; &#39;EST&#39; &#124; &#39;ETH&#39; &#124; &#39;FIN&#39; &#124; &#39;FJI&#39; &#124; &#39;FLK&#39; &#124; &#39;FRA&#39; &#124; &#39;FRO&#39; &#124; &#39;FSM&#39; &#124; &#39;GAB&#39; &#124; &#39;GBR&#39; &#124; &#39;GEO&#39; &#124; &#39;GGY&#39; &#124; &#39;GHA&#39; &#124; &#39;GIB&#39; &#124; &#39;GIN&#39; &#124; &#39;GLP&#39; &#124; &#39;GMB&#39; &#124; &#39;GNB&#39; &#124; &#39;GNQ&#39; &#124; &#39;GRC&#39; &#124; &#39;GRD&#39; &#124; &#39;GRL&#39; &#124; &#39;GTM&#39; &#124; &#39;GUF&#39; &#124; &#39;GUM&#39; &#124; &#39;GUY&#39; &#124; &#39;HKG&#39; &#124; &#39;HND&#39; &#124; &#39;HRV&#39; &#124; &#39;HTI&#39; &#124; &#39;HUN&#39; &#124; &#39;IDN&#39; &#124; &#39;IMN&#39; &#124; &#39;IND&#39; &#124; &#39;IRL&#39; &#124; &#39;IRQ&#39; &#124; &#39;ISL&#39; &#124; &#39;ISR&#39; &#124; &#39;ITA&#39; &#124; &#39;JAM&#39; &#124; &#39;JEY&#39; &#124; &#39;JOR&#39; &#124; &#39;JPN&#39; &#124; &#39;KAZ&#39; &#124; &#39;KEN&#39; &#124; &#39;KGZ&#39; &#124; &#39;KHM&#39; &#124; &#39;KIR&#39; &#124; &#39;KNA&#39; &#124; &#39;KOR&#39; &#124; &#39;KWT&#39; &#124; &#39;LAO&#39; &#124; &#39;LBN&#39; &#124; &#39;LBR&#39; &#124; &#39;LBY&#39; &#124; &#39;LCA&#39; &#124; &#39;LIE&#39; &#124; &#39;LKA&#39; &#124; &#39;LSO&#39; &#124; &#39;LTU&#39; &#124; &#39;LUX&#39; &#124; &#39;LVA&#39; &#124; &#39;MAC&#39; &#124; &#39;MAR&#39; &#124; &#39;MCO&#39; &#124; &#39;MDA&#39; &#124; &#39;MDG&#39; &#124; &#39;MDV&#39; &#124; &#39;MEX&#39; &#124; &#39;MHL&#39; &#124; &#39;MKD&#39; &#124; &#39;MLI&#39; &#124; &#39;MLT&#39; &#124; &#39;MMR&#39; &#124; &#39;MNE&#39; &#124; &#39;MNG&#39; &#124; &#39;MNP&#39; &#124; &#39;MOZ&#39; &#124; &#39;MRT&#39; &#124; &#39;MSR&#39; &#124; &#39;MTQ&#39; &#124; &#39;MUS&#39; &#124; &#39;MWI&#39; &#124; &#39;MYS&#39; &#124; &#39;MYT&#39; &#124; &#39;NAM&#39; &#124; &#39;NCL&#39; &#124; &#39;NER&#39; &#124; &#39;NFK&#39; &#124; &#39;NGA&#39; &#124; &#39;NIC&#39; &#124; &#39;NIU&#39; &#124; &#39;NLD&#39; &#124; &#39;NOR&#39; &#124; &#39;NPL&#39; &#124; &#39;NRU&#39; &#124; &#39;NZL&#39; &#124; &#39;OMN&#39; &#124; &#39;PAK&#39; &#124; &#39;PAN&#39; &#124; &#39;PER&#39; &#124; &#39;PHL&#39; &#124; &#39;PLW&#39; &#124; &#39;PNG&#39; &#124; &#39;POL&#39; &#124; &#39;PRI&#39; &#124; &#39;PRT&#39; &#124; &#39;PRY&#39; &#124; &#39;PSE&#39; &#124; &#39;PYF&#39; &#124; &#39;QAT&#39; &#124; &#39;REU&#39; &#124; &#39;ROU&#39; &#124; &#39;RUS&#39; &#124; &#39;RWA&#39; &#124; &#39;SAU&#39; &#124; &#39;SEN&#39; &#124; &#39;SGP&#39; &#124; &#39;SHN&#39; &#124; &#39;SLB&#39; &#124; &#39;SLE&#39; &#124; &#39;SLV&#39; &#124; &#39;SMR&#39; &#124; &#39;SOM&#39; &#124; &#39;SPM&#39; &#124; &#39;SRB&#39; &#124; &#39;SSD&#39; &#124; &#39;STP&#39; &#124; &#39;SUR&#39; &#124; &#39;SVK&#39; &#124; &#39;SVN&#39; &#124; &#39;SWE&#39; &#124; &#39;SWZ&#39; &#124; &#39;SXM&#39; &#124; &#39;SYC&#39; &#124; &#39;TCA&#39; &#124; &#39;TCD&#39; &#124; &#39;TGO&#39; &#124; &#39;THA&#39; &#124; &#39;TJK&#39; &#124; &#39;TKM&#39; &#124; &#39;TLS&#39; &#124; &#39;TON&#39; &#124; &#39;TTO&#39; &#124; &#39;TUN&#39; &#124; &#39;TUR&#39; &#124; &#39;TUV&#39; &#124; &#39;TWN&#39; &#124; &#39;TZA&#39; &#124; &#39;UGA&#39; &#124; &#39;UKR&#39; &#124; &#39;UMI&#39; &#124; &#39;URY&#39; &#124; &#39;USA&#39; &#124; &#39;UZB&#39; &#124; &#39;VAT&#39; &#124; &#39;VCT&#39; &#124; &#39;VEN&#39; &#124; &#39;VGB&#39; &#124; &#39;VIR&#39; &#124; &#39;VNM&#39; &#124; &#39;VUT&#39; &#124; &#39;WLF&#39; &#124; &#39;WSM&#39; &#124; &#39;YEM&#39; &#124; &#39;ZAF&#39; &#124; &#39;ZMB&#39; &#124; &#39;ZWE&#39;>** | filter by attribute \&#39;territory\&#39; | (optional) defaults to undefined
 **existsPublishedResponse** | [**boolean**] | filter by publishedResponse | (optional) defaults to undefined
 **sort** | **Array<&#39;createdDate&#39; &#124; &#39;-createdDate&#39; &#124; &#39;rating&#39; &#124; &#39;-rating&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsCustomerReviews** | **Array<&#39;body&#39; &#124; &#39;createdDate&#39; &#124; &#39;rating&#39; &#124; &#39;response&#39; &#124; &#39;reviewerNickname&#39; &#124; &#39;territory&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type customerReviews | (optional) defaults to undefined
 **fieldsCustomerReviewResponses** | **Array<&#39;lastModifiedDate&#39; &#124; &#39;responseBody&#39; &#124; &#39;review&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type customerReviewResponses | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;response&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**CustomerReviewsResponse**

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
**200** | List of CustomerReviews |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsDeleteInstance**
> void appStoreVersionsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionsDeleteInstance(body).then((data:any) => {
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

# **appStoreVersionsGetInstance**
> AppStoreVersionResponse appStoreVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'routingAppCoverage'> | comma-separated list of relationships to include (optional)
  include: [
    "ageRatingDeclaration",
  ],
  // Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appStoreVersion'> | the fields to include for returned resources of type appStoreVersionSubmissions (optional)
  fieldsAppStoreVersionSubmissions: [
    "appStoreVersion",
  ],
  // Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'> | the fields to include for returned resources of type ageRatingDeclarations (optional)
  fieldsAgeRatingDeclarations: [
    "ageRatingOverride",
  ],
  // Array<'appStoreVersion' | 'versions'> | the fields to include for returned resources of type alternativeDistributionPackages (optional)
  fieldsAlternativeDistributionPackages: [
    "appStoreVersion",
  ],
  // Array<'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title'> | the fields to include for returned resources of type customerReviews (optional)
  fieldsCustomerReviews: [
    "body",
  ],
  // Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type appStoreReviewDetails (optional)
  fieldsAppStoreReviewDetails: [
    "appStoreReviewAttachments",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type routingAppCoverages (optional)
  fieldsRoutingAppCoverages: [
    "appStoreVersion",
  ],
  // Array<'appStoreVersion' | 'currentDayNumber' | 'phasedReleaseState' | 'startDate' | 'totalPauseDuration'> | the fields to include for returned resources of type appStoreVersionPhasedReleases (optional)
  fieldsAppStoreVersionPhasedReleases: [
    "appStoreVersion",
  ],
  // Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'> | the fields to include for returned resources of type builds (optional)
  fieldsBuilds: [
    "app",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'> | the fields to include for returned resources of type appStoreVersionLocalizations (optional)
  fieldsAppStoreVersionLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum number of related appStoreVersionExperiments returned (when they are included) (optional)
  limitAppStoreVersionExperiments: 1,
  // number | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) (optional)
  limitAppStoreVersionExperimentsV2: 1,
  // number | maximum number of related appStoreVersionLocalizations returned (when they are included) (optional)
  limitAppStoreVersionLocalizations: 1,
};

apiInstance.appStoreVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **include** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;build&#39; &#124; &#39;routingAppCoverage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionSubmissions** | **Array<&#39;appStoreVersion&#39;>** | the fields to include for returned resources of type appStoreVersionSubmissions | (optional) defaults to undefined
 **fieldsAgeRatingDeclarations** | **Array<&#39;ageRatingOverride&#39; &#124; &#39;alcoholTobaccoOrDrugUseOrReferences&#39; &#124; &#39;contests&#39; &#124; &#39;gambling&#39; &#124; &#39;gamblingAndContests&#39; &#124; &#39;gamblingSimulated&#39; &#124; &#39;horrorOrFearThemes&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;matureOrSuggestiveThemes&#39; &#124; &#39;medicalOrTreatmentInformation&#39; &#124; &#39;profanityOrCrudeHumor&#39; &#124; &#39;seventeenPlus&#39; &#124; &#39;sexualContentGraphicAndNudity&#39; &#124; &#39;sexualContentOrNudity&#39; &#124; &#39;unrestrictedWebAccess&#39; &#124; &#39;violenceCartoonOrFantasy&#39; &#124; &#39;violenceRealistic&#39; &#124; &#39;violenceRealisticProlongedGraphicOrSadistic&#39;>** | the fields to include for returned resources of type ageRatingDeclarations | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;versions&#39;>** | the fields to include for returned resources of type alternativeDistributionPackages | (optional) defaults to undefined
 **fieldsCustomerReviews** | **Array<&#39;body&#39; &#124; &#39;createdDate&#39; &#124; &#39;rating&#39; &#124; &#39;response&#39; &#124; &#39;reviewerNickname&#39; &#124; &#39;territory&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type customerReviews | (optional) defaults to undefined
 **fieldsAppStoreReviewDetails** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type appStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **fieldsRoutingAppCoverages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type routingAppCoverages | (optional) defaults to undefined
 **fieldsAppStoreVersionPhasedReleases** | **Array<&#39;appStoreVersion&#39; &#124; &#39;currentDayNumber&#39; &#124; &#39;phasedReleaseState&#39; &#124; &#39;startDate&#39; &#124; &#39;totalPauseDuration&#39;>** | the fields to include for returned resources of type appStoreVersionPhasedReleases | (optional) defaults to undefined
 **fieldsBuilds** | **Array<&#39;app&#39; &#124; &#39;appEncryptionDeclaration&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;betaAppReviewSubmission&#39; &#124; &#39;betaBuildLocalizations&#39; &#124; &#39;betaGroups&#39; &#124; &#39;buildAudienceType&#39; &#124; &#39;buildBetaDetail&#39; &#124; &#39;buildBundles&#39; &#124; &#39;computedMinMacOsVersion&#39; &#124; &#39;diagnosticSignatures&#39; &#124; &#39;expirationDate&#39; &#124; &#39;expired&#39; &#124; &#39;iconAssetToken&#39; &#124; &#39;icons&#39; &#124; &#39;individualTesters&#39; &#124; &#39;lsMinimumSystemVersion&#39; &#124; &#39;minOsVersion&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preReleaseVersion&#39; &#124; &#39;processingState&#39; &#124; &#39;uploadedDate&#39; &#124; &#39;usesNonExemptEncryption&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type builds | (optional) defaults to undefined
 **fieldsAppStoreVersionLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;description&#39; &#124; &#39;keywords&#39; &#124; &#39;locale&#39; &#124; &#39;marketingUrl&#39; &#124; &#39;promotionalText&#39; &#124; &#39;supportUrl&#39; &#124; &#39;whatsNew&#39;>** | the fields to include for returned resources of type appStoreVersionLocalizations | (optional) defaults to undefined
 **limitAppStoreVersionExperiments** | [**number**] | maximum number of related appStoreVersionExperiments returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionExperimentsV2** | [**number**] | maximum number of related appStoreVersionExperimentsV2 returned (when they are included) | (optional) defaults to undefined
 **limitAppStoreVersionLocalizations** | [**number**] | maximum number of related appStoreVersionLocalizations returned (when they are included) | (optional) defaults to undefined


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

# **appStoreVersionsRoutingAppCoverageGetToOneRelated**
> RoutingAppCoverageWithoutIncludesResponse appStoreVersionsRoutingAppCoverageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsRoutingAppCoverageGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type routingAppCoverages (optional)
  fieldsRoutingAppCoverages: [
    "appStoreVersion",
  ],
};

apiInstance.appStoreVersionsRoutingAppCoverageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsRoutingAppCoverages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type routingAppCoverages | (optional) defaults to undefined


### Return type

**RoutingAppCoverageWithoutIncludesResponse**

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
**200** | Single RoutingAppCoverage with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionsUpdateInstance**
> AppStoreVersionResponse appStoreVersionsUpdateInstance(appStoreVersionUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionsApi(configuration);

let body:.AppStoreVersionsApiAppStoreVersionsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionUpdateRequest | AppStoreVersion representation
  appStoreVersionUpdateRequest: {
    data: {
      type: "appStoreVersions",
      id: "id_example",
      attributes: {
        versionString: "versionString_example",
        copyright: "copyright_example",
        reviewType: "APP_STORE",
        releaseType: "MANUAL",
        earliestReleaseDate: new Date('1970-01-01T00:00:00.00Z'),
        downloadable: true,
      },
      relationships: {
        build: {
          data: {
            type: "builds",
            id: "id_example",
          },
        },
        appClipDefaultExperience: {
          data: {
            type: "appClipDefaultExperiences",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionUpdateRequest** | **AppStoreVersionUpdateRequest**| AppStoreVersion representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionResponse**

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
**200** | Single AppStoreVersion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


