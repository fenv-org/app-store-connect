# .GameCenterDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterDetailsAchievementReleasesGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsAchievementReleasesGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/achievementReleases | 
[**gameCenterDetailsClassicMatchmakingRequestsGetMetrics**](GameCenterDetailsApi.md#gameCenterDetailsClassicMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/classicMatchmakingRequests | 
[**gameCenterDetailsCreateInstance**](GameCenterDetailsApi.md#gameCenterDetailsCreateInstance) | **POST** /v1/gameCenterDetails | 
[**gameCenterDetailsGameCenterAchievementsGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterAchievementsGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/gameCenterAchievements | 
[**gameCenterDetailsGameCenterAchievementsGetToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterAchievementsGetToManyRelationship) | **GET** /v1/gameCenterDetails/{id}/relationships/gameCenterAchievements | 
[**gameCenterDetailsGameCenterAchievementsReplaceToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterAchievementsReplaceToManyRelationship) | **PATCH** /v1/gameCenterDetails/{id}/relationships/gameCenterAchievements | 
[**gameCenterDetailsGameCenterAppVersionsGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterAppVersionsGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/gameCenterAppVersions | 
[**gameCenterDetailsGameCenterGroupGetToOneRelated**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterGroupGetToOneRelated) | **GET** /v1/gameCenterDetails/{id}/gameCenterGroup | 
[**gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/gameCenterLeaderboardSets | 
[**gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship) | **GET** /v1/gameCenterDetails/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship) | **PATCH** /v1/gameCenterDetails/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterDetailsGameCenterLeaderboardsGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardsGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/gameCenterLeaderboards | 
[**gameCenterDetailsGameCenterLeaderboardsGetToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardsGetToManyRelationship) | **GET** /v1/gameCenterDetails/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship**](GameCenterDetailsApi.md#gameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship) | **PATCH** /v1/gameCenterDetails/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterDetailsGetInstance**](GameCenterDetailsApi.md#gameCenterDetailsGetInstance) | **GET** /v1/gameCenterDetails/{id} | 
[**gameCenterDetailsLeaderboardReleasesGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsLeaderboardReleasesGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/leaderboardReleases | 
[**gameCenterDetailsLeaderboardSetReleasesGetToManyRelated**](GameCenterDetailsApi.md#gameCenterDetailsLeaderboardSetReleasesGetToManyRelated) | **GET** /v1/gameCenterDetails/{id}/leaderboardSetReleases | 
[**gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics**](GameCenterDetailsApi.md#gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics) | **GET** /v1/gameCenterDetails/{id}/metrics/ruleBasedMatchmakingRequests | 
[**gameCenterDetailsUpdateInstance**](GameCenterDetailsApi.md#gameCenterDetailsUpdateInstance) | **PATCH** /v1/gameCenterDetails/{id} | 


# **gameCenterDetailsAchievementReleasesGetToManyRelated**
> GameCenterAchievementReleasesResponse gameCenterDetailsAchievementReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsAchievementReleasesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'live\' (optional)
  filterLive: [
    "filter[live]_example",
  ],
  // Array<string> | filter by id(s) of related \'gameCenterAchievement\' (optional)
  filterGameCenterAchievement: [
    "filter[gameCenterAchievement]_example",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'> | the fields to include for returned resources of type gameCenterAchievementReleases (optional)
  fieldsGameCenterAchievementReleases: [
    "gameCenterAchievement",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterAchievement' | 'gameCenterDetail'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievement",
  ],
};

apiInstance.gameCenterDetailsAchievementReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterAchievement** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterAchievement\&#39; | (optional) defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementReleasesResponse**

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
**200** | List of GameCenterAchievementReleases |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsClassicMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsClassicMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsClassicMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "result",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterDetailsClassicMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingAppRequestsV1MetricResponse**

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

# **gameCenterDetailsCreateInstance**
> GameCenterDetailResponse gameCenterDetailsCreateInstance(gameCenterDetailCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsCreateInstanceRequest = {
  // GameCenterDetailCreateRequest | GameCenterDetail representation
  gameCenterDetailCreateRequest: {
    data: {
      type: "gameCenterDetails",
      attributes: {
        challengeEnabled: true,
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

apiInstance.gameCenterDetailsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterDetailCreateRequest** | **GameCenterDetailCreateRequest**| GameCenterDetail representation |


### Return type

**GameCenterDetailResponse**

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
**201** | Single GameCenterDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsGameCenterAchievementsGetToManyRelated**
> GameCenterAchievementsResponse gameCenterDetailsGameCenterAchievementsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterAchievementsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'archived\' (optional)
  filterArchived: [
    "filter[archived]_example",
  ],
  // Array<string> | filter by attribute \'referenceName\' (optional)
  filterReferenceName: [
    "filter[referenceName]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'> | the fields to include for returned resources of type gameCenterAchievementReleases (optional)
  fieldsGameCenterAchievementReleases: [
    "gameCenterAchievement",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterAchievementLocalizations (optional)
  fieldsGameCenterAchievementLocalizations: [
    "afterEarnedDescription",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterDetailsGameCenterAchievementsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterArchived** | **Array&lt;string&gt;** | filter by attribute \&#39;archived\&#39; | (optional) defaults to undefined
 **filterReferenceName** | **Array&lt;string&gt;** | filter by attribute \&#39;referenceName\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementsResponse**

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
**200** | List of GameCenterAchievements |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsGameCenterAchievementsGetToManyRelationship**
> GameCenterDetailGameCenterAchievementsLinkagesResponse gameCenterDetailsGameCenterAchievementsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterAchievementsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterDetailsGameCenterAchievementsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterDetailGameCenterAchievementsLinkagesResponse**

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

# **gameCenterDetailsGameCenterAchievementsReplaceToManyRelationship**
> void gameCenterDetailsGameCenterAchievementsReplaceToManyRelationship(gameCenterDetailGameCenterAchievementsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterAchievementsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterDetailGameCenterAchievementsLinkagesRequest | List of related linkages
  gameCenterDetailGameCenterAchievementsLinkagesRequest: {
    data: [
      {
        type: "gameCenterAchievements",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterDetailsGameCenterAchievementsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterDetailGameCenterAchievementsLinkagesRequest** | **GameCenterDetailGameCenterAchievementsLinkagesRequest**| List of related linkages |
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

# **gameCenterDetailsGameCenterAppVersionsGetToManyRelated**
> GameCenterAppVersionsResponse gameCenterDetailsGameCenterAppVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterAppVersionsGetToManyRelatedRequest = {
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

apiInstance.gameCenterDetailsGameCenterAppVersionsGetToManyRelated(body).then((data:any) => {
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

# **gameCenterDetailsGameCenterGroupGetToOneRelated**
> GameCenterGroupResponse gameCenterDetailsGameCenterGroupGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterGroupGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // number | maximum number of related gameCenterDetails returned (when they are included) (optional)
  limitGameCenterDetails: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related gameCenterAchievements returned (when they are included) (optional)
  limitGameCenterAchievements: 1,
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievements",
  ],
};

apiInstance.gameCenterDetailsGameCenterGroupGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limitGameCenterDetails** | [**number**] | maximum number of related gameCenterDetails returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterAchievements** | [**number**] | maximum number of related gameCenterAchievements returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterGroupResponse**

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
**200** | Single GameCenterGroup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated**
> GameCenterLeaderboardSetsResponse gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardSetsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'referenceName\' (optional)
  filterReferenceName: [
    "filter[referenceName]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations (optional)
  fieldsGameCenterLeaderboardSetLocalizations: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardSetReleases (optional)
  fieldsGameCenterLeaderboardSetReleases: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterReferenceName** | **Array&lt;string&gt;** | filter by attribute \&#39;referenceName\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetsResponse**

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
**200** | List of GameCenterLeaderboardSets |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship**
> GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterDetailsGameCenterLeaderboardSetsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse**

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

# **gameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship**
> void gameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship(gameCenterDetailGameCenterLeaderboardSetsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest | List of related linkages
  gameCenterDetailGameCenterLeaderboardSetsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboardSets",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterDetailsGameCenterLeaderboardSetsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterDetailGameCenterLeaderboardSetsLinkagesRequest** | **GameCenterDetailGameCenterLeaderboardSetsLinkagesRequest**| List of related linkages |
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

# **gameCenterDetailsGameCenterLeaderboardsGetToManyRelated**
> GameCenterLeaderboardsResponse gameCenterDetailsGameCenterLeaderboardsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'archived\' (optional)
  filterArchived: [
    "filter[archived]_example",
  ],
  // Array<string> | filter by attribute \'referenceName\' (optional)
  filterReferenceName: [
    "filter[referenceName]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardLocalizations (optional)
  fieldsGameCenterLeaderboardLocalizations: [
    "formatterOverride",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterDetailsGameCenterLeaderboardsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterArchived** | **Array&lt;string&gt;** | filter by attribute \&#39;archived\&#39; | (optional) defaults to undefined
 **filterReferenceName** | **Array&lt;string&gt;** | filter by attribute \&#39;referenceName\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardsResponse**

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
**200** | List of GameCenterLeaderboards |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsGameCenterLeaderboardsGetToManyRelationship**
> GameCenterDetailGameCenterLeaderboardsLinkagesResponse gameCenterDetailsGameCenterLeaderboardsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterDetailsGameCenterLeaderboardsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterDetailGameCenterLeaderboardsLinkagesResponse**

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

# **gameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship**
> void gameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship(gameCenterDetailGameCenterLeaderboardsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterDetailGameCenterLeaderboardsLinkagesRequest | List of related linkages
  gameCenterDetailGameCenterLeaderboardsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboards",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterDetailsGameCenterLeaderboardsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterDetailGameCenterLeaderboardsLinkagesRequest** | **GameCenterDetailGameCenterLeaderboardsLinkagesRequest**| List of related linkages |
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

# **gameCenterDetailsGetInstance**
> GameCenterDetailResponse gameCenterDetailsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'achievementReleases' | 'app' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | comma-separated list of relationships to include (optional)
  include: [
    "achievementReleases",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'> | the fields to include for returned resources of type gameCenterAchievementReleases (optional)
  fieldsGameCenterAchievementReleases: [
    "gameCenterAchievement",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardSetReleases (optional)
  fieldsGameCenterLeaderboardSetReleases: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'> | the fields to include for returned resources of type gameCenterAppVersions (optional)
  fieldsGameCenterAppVersions: [
    "appStoreVersion",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // number | maximum number of related achievementReleases returned (when they are included) (optional)
  limitAchievementReleases: 1,
  // number | maximum number of related gameCenterAchievements returned (when they are included) (optional)
  limitGameCenterAchievements: 1,
  // number | maximum number of related gameCenterAppVersions returned (when they are included) (optional)
  limitGameCenterAppVersions: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
  // number | maximum number of related leaderboardReleases returned (when they are included) (optional)
  limitLeaderboardReleases: 1,
  // number | maximum number of related leaderboardSetReleases returned (when they are included) (optional)
  limitLeaderboardSetReleases: 1,
};

apiInstance.gameCenterDetailsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **include** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **fieldsGameCenterAppVersions** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39; &#124; &#39;enabled&#39;>** | the fields to include for returned resources of type gameCenterAppVersions | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limitAchievementReleases** | [**number**] | maximum number of related achievementReleases returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterAchievements** | [**number**] | maximum number of related gameCenterAchievements returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterAppVersions** | [**number**] | maximum number of related gameCenterAppVersions returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitLeaderboardReleases** | [**number**] | maximum number of related leaderboardReleases returned (when they are included) | (optional) defaults to undefined
 **limitLeaderboardSetReleases** | [**number**] | maximum number of related leaderboardSetReleases returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterDetailResponse**

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
**200** | Single GameCenterDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsLeaderboardReleasesGetToManyRelated**
> GameCenterLeaderboardReleasesResponse gameCenterDetailsLeaderboardReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsLeaderboardReleasesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'live\' (optional)
  filterLive: [
    "filter[live]_example",
  ],
  // Array<string> | filter by id(s) of related \'gameCenterLeaderboard\' (optional)
  filterGameCenterLeaderboard: [
    "filter[gameCenterLeaderboard]_example",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterDetailsLeaderboardReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterLeaderboard** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterLeaderboard\&#39; | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardReleasesResponse**

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
**200** | List of GameCenterLeaderboardReleases |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsLeaderboardSetReleasesGetToManyRelated**
> GameCenterLeaderboardSetReleasesResponse gameCenterDetailsLeaderboardSetReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsLeaderboardSetReleasesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'live\' (optional)
  filterLive: [
    "filter[live]_example",
  ],
  // Array<string> | filter by id(s) of related \'gameCenterLeaderboardSet\' (optional)
  filterGameCenterLeaderboardSet: [
    "filter[gameCenterLeaderboardSet]_example",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardSetReleases (optional)
  fieldsGameCenterLeaderboardSetReleases: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterDetailsLeaderboardSetReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterLeaderboardSet** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterLeaderboardSet\&#39; | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetReleasesResponse**

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
**200** | List of GameCenterLeaderboardSetReleases |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics**
> GameCenterMatchmakingAppRequestsV1MetricResponse gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsRuleBasedMatchmakingRequestsGetMetricsRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // 'P1D' | 'PT1H' | 'PT15M' | the granularity of the per-group dataset
  granularity: "P7D",
  // number | maximum number of groups to return per page (optional)
  limit: 1,
  // Array<'result'> | the dimension by which to group the results (optional)
  groupBy: [
    "result",
  ],
  // 'MATCHED' | 'CANCELED' | 'EXPIRED' | filter by \'result\' attribute dimension (optional)
  filterResult: "MATCHED",
  // Array<'averageSecondsInQueue' | '-averageSecondsInQueue' | 'count' | '-count' | 'p50SecondsInQueue' | '-p50SecondsInQueue' | 'p95SecondsInQueue' | '-p95SecondsInQueue'> | comma-separated list of sort expressions; metrics will be sorted as specified (optional)
  sort: [
    "averageSecondsInQueue",
  ],
};

apiInstance.gameCenterDetailsRuleBasedMatchmakingRequestsGetMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **granularity** | [**&#39;P1D&#39; | &#39;PT1H&#39; | &#39;PT15M&#39;**]**Array<&#39;P1D&#39; &#124; &#39;PT1H&#39; &#124; &#39;PT15M&#39;>** | the granularity of the per-group dataset | defaults to undefined
 **limit** | [**number**] | maximum number of groups to return per page | (optional) defaults to undefined
 **groupBy** | **Array<&#39;result&#39;>** | the dimension by which to group the results | (optional) defaults to undefined
 **filterResult** | [**&#39;MATCHED&#39; | &#39;CANCELED&#39; | &#39;EXPIRED&#39;**]**Array<&#39;MATCHED&#39; &#124; &#39;CANCELED&#39; &#124; &#39;EXPIRED&#39;>** | filter by \&#39;result\&#39; attribute dimension | (optional) defaults to undefined
 **sort** | **Array<&#39;averageSecondsInQueue&#39; &#124; &#39;-averageSecondsInQueue&#39; &#124; &#39;count&#39; &#124; &#39;-count&#39; &#124; &#39;p50SecondsInQueue&#39; &#124; &#39;-p50SecondsInQueue&#39; &#124; &#39;p95SecondsInQueue&#39; &#124; &#39;-p95SecondsInQueue&#39;>** | comma-separated list of sort expressions; metrics will be sorted as specified | (optional) defaults to undefined


### Return type

**GameCenterMatchmakingAppRequestsV1MetricResponse**

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

# **gameCenterDetailsUpdateInstance**
> GameCenterDetailResponse gameCenterDetailsUpdateInstance(gameCenterDetailUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterDetailsApi(configuration);

let body:.GameCenterDetailsApiGameCenterDetailsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterDetailUpdateRequest | GameCenterDetail representation
  gameCenterDetailUpdateRequest: {
    data: {
      type: "gameCenterDetails",
      id: "id_example",
      attributes: {
        challengeEnabled: true,
      },
      relationships: {
        gameCenterGroup: {
          data: {
            type: "gameCenterGroups",
            id: "id_example",
          },
        },
        defaultLeaderboard: {
          data: {
            type: "gameCenterLeaderboards",
            id: "id_example",
          },
        },
        defaultGroupLeaderboard: {
          data: {
            type: "gameCenterLeaderboards",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterDetailsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterDetailUpdateRequest** | **GameCenterDetailUpdateRequest**| GameCenterDetail representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterDetailResponse**

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
**200** | Single GameCenterDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


