# .AppClipsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipsAppClipAdvancedExperiencesGetToManyRelated**](AppClipsApi.md#appClipsAppClipAdvancedExperiencesGetToManyRelated) | **GET** /v1/appClips/{id}/appClipAdvancedExperiences | 
[**appClipsAppClipDefaultExperiencesGetToManyRelated**](AppClipsApi.md#appClipsAppClipDefaultExperiencesGetToManyRelated) | **GET** /v1/appClips/{id}/appClipDefaultExperiences | 
[**appClipsGetInstance**](AppClipsApi.md#appClipsGetInstance) | **GET** /v1/appClips/{id} | 


# **appClipsAppClipAdvancedExperiencesGetToManyRelated**
> AppClipAdvancedExperiencesResponse appClipsAppClipAdvancedExperiencesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipsApi(configuration);

let body:.AppClipsApiAppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'OPEN' | 'VIEW' | 'PLAY'> | filter by attribute \'action\' (optional)
  filterAction: [
    "OPEN",
  ],
  // Array<'PENDING' | 'MATCHED' | 'NO_MATCH'> | filter by attribute \'placeStatus\' (optional)
  filterPlaceStatus: [
    "PENDING",
  ],
  // Array<'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS'> | filter by attribute \'status\' (optional)
  filterStatus: [
    "RECEIVED",
  ],
  // Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'> | the fields to include for returned resources of type appClipAdvancedExperiences (optional)
  fieldsAppClipAdvancedExperiences: [
    "action",
  ],
  // Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'> | the fields to include for returned resources of type appClips (optional)
  fieldsAppClips: [
    "app",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appClipAdvancedExperienceImages (optional)
  fieldsAppClipAdvancedExperienceImages: [
    "assetDeliveryState",
  ],
  // Array<'language' | 'subtitle' | 'title'> | the fields to include for returned resources of type appClipAdvancedExperienceLocalizations (optional)
  fieldsAppClipAdvancedExperienceLocalizations: [
    "language",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // Array<'appClip' | 'headerImage' | 'localizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appClip",
  ],
};

apiInstance.appClipsAppClipAdvancedExperiencesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterAction** | **Array<&#39;OPEN&#39; &#124; &#39;VIEW&#39; &#124; &#39;PLAY&#39;>** | filter by attribute \&#39;action\&#39; | (optional) defaults to undefined
 **filterPlaceStatus** | **Array<&#39;PENDING&#39; &#124; &#39;MATCHED&#39; &#124; &#39;NO_MATCH&#39;>** | filter by attribute \&#39;placeStatus\&#39; | (optional) defaults to undefined
 **filterStatus** | **Array<&#39;RECEIVED&#39; &#124; &#39;DEACTIVATED&#39; &#124; &#39;APP_TRANSFER_IN_PROGRESS&#39;>** | filter by attribute \&#39;status\&#39; | (optional) defaults to undefined
 **fieldsAppClipAdvancedExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;businessCategory&#39; &#124; &#39;defaultLanguage&#39; &#124; &#39;headerImage&#39; &#124; &#39;isPoweredBy&#39; &#124; &#39;link&#39; &#124; &#39;localizations&#39; &#124; &#39;place&#39; &#124; &#39;placeStatus&#39; &#124; &#39;removed&#39; &#124; &#39;status&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appClipAdvancedExperiences | (optional) defaults to undefined
 **fieldsAppClips** | **Array<&#39;app&#39; &#124; &#39;appClipAdvancedExperiences&#39; &#124; &#39;appClipDefaultExperiences&#39; &#124; &#39;bundleId&#39;>** | the fields to include for returned resources of type appClips | (optional) defaults to undefined
 **fieldsAppClipAdvancedExperienceImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;imageAsset&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appClipAdvancedExperienceImages | (optional) defaults to undefined
 **fieldsAppClipAdvancedExperienceLocalizations** | **Array<&#39;language&#39; &#124; &#39;subtitle&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type appClipAdvancedExperienceLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appClip&#39; &#124; &#39;headerImage&#39; &#124; &#39;localizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipAdvancedExperiencesResponse**

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
**200** | List of AppClipAdvancedExperiences |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipsAppClipDefaultExperiencesGetToManyRelated**
> AppClipDefaultExperiencesResponse appClipsAppClipDefaultExperiencesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipsApi(configuration);

let body:.AppClipsApiAppClipsAppClipDefaultExperiencesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // boolean | filter by existence or non-existence of related \'releaseWithAppStoreVersion\' (optional)
  existsReleaseWithAppStoreVersion: true,
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
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) (optional)
  limitAppClipDefaultExperienceLocalizations: 1,
  // Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appClip",
  ],
};

apiInstance.appClipsAppClipDefaultExperiencesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **existsReleaseWithAppStoreVersion** | [**boolean**] | filter by existence or non-existence of related \&#39;releaseWithAppStoreVersion\&#39; | (optional) defaults to undefined
 **fieldsAppClips** | **Array<&#39;app&#39; &#124; &#39;appClipAdvancedExperiences&#39; &#124; &#39;appClipDefaultExperiences&#39; &#124; &#39;bundleId&#39;>** | the fields to include for returned resources of type appClips | (optional) defaults to undefined
 **fieldsAppClipAppStoreReviewDetails** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;invocationUrls&#39;>** | the fields to include for returned resources of type appClipAppStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **fieldsAppClipDefaultExperienceLocalizations** | **Array<&#39;appClipDefaultExperience&#39; &#124; &#39;appClipHeaderImage&#39; &#124; &#39;locale&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appClipDefaultExperienceLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppClipDefaultExperienceLocalizations** | [**number**] | maximum number of related appClipDefaultExperienceLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppClipDefaultExperiencesResponse**

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
**200** | List of AppClipDefaultExperiences |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipsGetInstance**
> AppClipResponse appClipsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipsApi(configuration);

let body:.AppClipsApiAppClipsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'> | the fields to include for returned resources of type appClips (optional)
  fieldsAppClips: [
    "app",
  ],
  // Array<'app' | 'appClipDefaultExperiences'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'> | the fields to include for returned resources of type appClipAdvancedExperiences (optional)
  fieldsAppClipAdvancedExperiences: [
    "action",
  ],
  // Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'> | the fields to include for returned resources of type appClipDefaultExperiences (optional)
  fieldsAppClipDefaultExperiences: [
    "action",
  ],
  // number | maximum number of related appClipDefaultExperiences returned (when they are included) (optional)
  limitAppClipDefaultExperiences: 1,
};

apiInstance.appClipsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClips** | **Array<&#39;app&#39; &#124; &#39;appClipAdvancedExperiences&#39; &#124; &#39;appClipDefaultExperiences&#39; &#124; &#39;bundleId&#39;>** | the fields to include for returned resources of type appClips | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appClipDefaultExperiences&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppClipAdvancedExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;businessCategory&#39; &#124; &#39;defaultLanguage&#39; &#124; &#39;headerImage&#39; &#124; &#39;isPoweredBy&#39; &#124; &#39;link&#39; &#124; &#39;localizations&#39; &#124; &#39;place&#39; &#124; &#39;placeStatus&#39; &#124; &#39;removed&#39; &#124; &#39;status&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appClipAdvancedExperiences | (optional) defaults to undefined
 **fieldsAppClipDefaultExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;appClipAppStoreReviewDetail&#39; &#124; &#39;appClipDefaultExperienceLocalizations&#39; &#124; &#39;appClipDefaultExperienceTemplate&#39; &#124; &#39;releaseWithAppStoreVersion&#39;>** | the fields to include for returned resources of type appClipDefaultExperiences | (optional) defaults to undefined
 **limitAppClipDefaultExperiences** | [**number**] | maximum number of related appClipDefaultExperiences returned (when they are included) | (optional) defaults to undefined


### Return type

**AppClipResponse**

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
**200** | Single AppClip |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


