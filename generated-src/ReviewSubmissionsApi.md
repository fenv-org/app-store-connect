# .ReviewSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewSubmissionsCreateInstance**](ReviewSubmissionsApi.md#reviewSubmissionsCreateInstance) | **POST** /v1/reviewSubmissions | 
[**reviewSubmissionsGetCollection**](ReviewSubmissionsApi.md#reviewSubmissionsGetCollection) | **GET** /v1/reviewSubmissions | 
[**reviewSubmissionsGetInstance**](ReviewSubmissionsApi.md#reviewSubmissionsGetInstance) | **GET** /v1/reviewSubmissions/{id} | 
[**reviewSubmissionsItemsGetToManyRelated**](ReviewSubmissionsApi.md#reviewSubmissionsItemsGetToManyRelated) | **GET** /v1/reviewSubmissions/{id}/items | 
[**reviewSubmissionsUpdateInstance**](ReviewSubmissionsApi.md#reviewSubmissionsUpdateInstance) | **PATCH** /v1/reviewSubmissions/{id} | 


# **reviewSubmissionsCreateInstance**
> ReviewSubmissionResponse reviewSubmissionsCreateInstance(reviewSubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionsApi(configuration);

let body:.ReviewSubmissionsApiReviewSubmissionsCreateInstanceRequest = {
  // ReviewSubmissionCreateRequest | ReviewSubmission representation
  reviewSubmissionCreateRequest: {
    data: {
      type: "reviewSubmissions",
      attributes: {
        platform: "IOS",
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.reviewSubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewSubmissionCreateRequest** | **ReviewSubmissionCreateRequest**| ReviewSubmission representation |


### Return type

**ReviewSubmissionResponse**

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
**201** | Single ReviewSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reviewSubmissionsGetCollection**
> ReviewSubmissionsResponse reviewSubmissionsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionsApi(configuration);

let body:.ReviewSubmissionsApiReviewSubmissionsGetCollectionRequest = {
  // Array<string> | filter by id(s) of related \'app\'
  filterApp: [
    "filter[app]_example",
  ],
  // Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'> | filter by attribute \'platform\' (optional)
  filterPlatform: [
    "IOS",
  ],
  // Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'> | filter by attribute \'state\' (optional)
  filterState: [
    "READY_FOR_REVIEW",
  ],
  // Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'> | the fields to include for returned resources of type reviewSubmissions (optional)
  fieldsReviewSubmissions: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'> | the fields to include for returned resources of type reviewSubmissionItems (optional)
  fieldsReviewSubmissionItems: [
    "appCustomProductPageVersion",
  ],
  // number | maximum number of related items returned (when they are included) (optional)
  limitItems: 1,
};

apiInstance.reviewSubmissionsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterApp** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;app\&#39; | defaults to undefined
 **filterPlatform** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39; &#124; &#39;TV_OS&#39; &#124; &#39;VISION_OS&#39;>** | filter by attribute \&#39;platform\&#39; | (optional) defaults to undefined
 **filterState** | **Array<&#39;READY_FOR_REVIEW&#39; &#124; &#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;UNRESOLVED_ISSUES&#39; &#124; &#39;CANCELING&#39; &#124; &#39;COMPLETING&#39; &#124; &#39;COMPLETE&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **fieldsReviewSubmissions** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionForReview&#39; &#124; &#39;canceled&#39; &#124; &#39;items&#39; &#124; &#39;lastUpdatedByActor&#39; &#124; &#39;platform&#39; &#124; &#39;state&#39; &#124; &#39;submitted&#39; &#124; &#39;submittedByActor&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type reviewSubmissions | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionForReview&#39; &#124; &#39;items&#39; &#124; &#39;lastUpdatedByActor&#39; &#124; &#39;submittedByActor&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsReviewSubmissionItems** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appEvent&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;removed&#39; &#124; &#39;resolved&#39; &#124; &#39;reviewSubmission&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type reviewSubmissionItems | (optional) defaults to undefined
 **limitItems** | [**number**] | maximum number of related items returned (when they are included) | (optional) defaults to undefined


### Return type

**ReviewSubmissionsResponse**

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
**200** | List of ReviewSubmissions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reviewSubmissionsGetInstance**
> ReviewSubmissionResponse reviewSubmissionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionsApi(configuration);

let body:.ReviewSubmissionsApiReviewSubmissionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'lastUpdatedByActor' | 'platform' | 'state' | 'submitted' | 'submittedByActor' | 'submittedDate'> | the fields to include for returned resources of type reviewSubmissions (optional)
  fieldsReviewSubmissions: [
    "app",
  ],
  // Array<'app' | 'appStoreVersionForReview' | 'items' | 'lastUpdatedByActor' | 'submittedByActor'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'> | the fields to include for returned resources of type reviewSubmissionItems (optional)
  fieldsReviewSubmissionItems: [
    "appCustomProductPageVersion",
  ],
  // number | maximum number of related items returned (when they are included) (optional)
  limitItems: 1,
};

apiInstance.reviewSubmissionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsReviewSubmissions** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionForReview&#39; &#124; &#39;canceled&#39; &#124; &#39;items&#39; &#124; &#39;lastUpdatedByActor&#39; &#124; &#39;platform&#39; &#124; &#39;state&#39; &#124; &#39;submitted&#39; &#124; &#39;submittedByActor&#39; &#124; &#39;submittedDate&#39;>** | the fields to include for returned resources of type reviewSubmissions | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionForReview&#39; &#124; &#39;items&#39; &#124; &#39;lastUpdatedByActor&#39; &#124; &#39;submittedByActor&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsReviewSubmissionItems** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appEvent&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;removed&#39; &#124; &#39;resolved&#39; &#124; &#39;reviewSubmission&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type reviewSubmissionItems | (optional) defaults to undefined
 **limitItems** | [**number**] | maximum number of related items returned (when they are included) | (optional) defaults to undefined


### Return type

**ReviewSubmissionResponse**

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
**200** | Single ReviewSubmission |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reviewSubmissionsItemsGetToManyRelated**
> ReviewSubmissionItemsResponse reviewSubmissionsItemsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionsApi(configuration);

let body:.ReviewSubmissionsApiReviewSubmissionsItemsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'> | the fields to include for returned resources of type reviewSubmissionItems (optional)
  fieldsReviewSubmissionItems: [
    "appCustomProductPageVersion",
  ],
  // Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'> | the fields to include for returned resources of type appStoreVersions (optional)
  fieldsAppStoreVersions: [
    "ageRatingDeclaration",
  ],
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'> | the fields to include for returned resources of type appCustomProductPageVersions (optional)
  fieldsAppCustomProductPageVersions: [
    "appCustomProductPage",
  ],
  // Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'> | the fields to include for returned resources of type appEvents (optional)
  fieldsAppEvents: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentV2'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPageVersion",
  ],
};

apiInstance.reviewSubmissionsItemsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsReviewSubmissionItems** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appEvent&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;removed&#39; &#124; &#39;resolved&#39; &#124; &#39;reviewSubmission&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type reviewSubmissionItems | (optional) defaults to undefined
 **fieldsAppStoreVersions** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;alternativeDistributionPackage&#39; &#124; &#39;app&#39; &#124; &#39;appClipDefaultExperience&#39; &#124; &#39;appStoreReviewDetail&#39; &#124; &#39;appStoreState&#39; &#124; &#39;appStoreVersionExperiments&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersionLocalizations&#39; &#124; &#39;appStoreVersionPhasedRelease&#39; &#124; &#39;appStoreVersionSubmission&#39; &#124; &#39;appVersionState&#39; &#124; &#39;build&#39; &#124; &#39;copyright&#39; &#124; &#39;createdDate&#39; &#124; &#39;customerReviews&#39; &#124; &#39;downloadable&#39; &#124; &#39;earliestReleaseDate&#39; &#124; &#39;platform&#39; &#124; &#39;releaseType&#39; &#124; &#39;reviewType&#39; &#124; &#39;routingAppCoverage&#39; &#124; &#39;versionString&#39;>** | the fields to include for returned resources of type appStoreVersions | (optional) defaults to undefined
 **fieldsAppCustomProductPageVersions** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39; &#124; &#39;state&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appCustomProductPageVersions | (optional) defaults to undefined
 **fieldsAppEvents** | **Array<&#39;app&#39; &#124; &#39;archivedTerritorySchedules&#39; &#124; &#39;badge&#39; &#124; &#39;deepLink&#39; &#124; &#39;eventState&#39; &#124; &#39;localizations&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;priority&#39; &#124; &#39;purchaseRequirement&#39; &#124; &#39;purpose&#39; &#124; &#39;referenceName&#39; &#124; &#39;territorySchedules&#39;>** | the fields to include for returned resources of type appEvents | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appEvent&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**ReviewSubmissionItemsResponse**

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
**200** | List of ReviewSubmissionItems |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reviewSubmissionsUpdateInstance**
> ReviewSubmissionResponse reviewSubmissionsUpdateInstance(reviewSubmissionUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReviewSubmissionsApi(configuration);

let body:.ReviewSubmissionsApiReviewSubmissionsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // ReviewSubmissionUpdateRequest | ReviewSubmission representation
  reviewSubmissionUpdateRequest: {
    data: {
      type: "reviewSubmissions",
      id: "id_example",
      attributes: {
        submitted: true,
        canceled: true,
      },
    },
  },
};

apiInstance.reviewSubmissionsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewSubmissionUpdateRequest** | **ReviewSubmissionUpdateRequest**| ReviewSubmission representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**ReviewSubmissionResponse**

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
**200** | Single ReviewSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


