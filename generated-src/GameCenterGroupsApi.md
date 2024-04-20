# .GameCenterGroupsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterGroupsCreateInstance**](GameCenterGroupsApi.md#gameCenterGroupsCreateInstance) | **POST** /v1/gameCenterGroups | 
[**gameCenterGroupsDeleteInstance**](GameCenterGroupsApi.md#gameCenterGroupsDeleteInstance) | **DELETE** /v1/gameCenterGroups/{id} | 
[**gameCenterGroupsGameCenterAchievementsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterAchievements | 
[**gameCenterGroupsGameCenterAchievementsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterAchievements | 
[**gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterAchievements | 
[**gameCenterGroupsGameCenterDetailsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterDetailsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterDetails | 
[**gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboardSets | 
[**gameCenterGroupsGameCenterLeaderboardsGetToManyRelated**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsGetToManyRelated) | **GET** /v1/gameCenterGroups/{id}/gameCenterLeaderboards | 
[**gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship) | **GET** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship**](GameCenterGroupsApi.md#gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship) | **PATCH** /v1/gameCenterGroups/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterGroupsGetCollection**](GameCenterGroupsApi.md#gameCenterGroupsGetCollection) | **GET** /v1/gameCenterGroups | 
[**gameCenterGroupsGetInstance**](GameCenterGroupsApi.md#gameCenterGroupsGetInstance) | **GET** /v1/gameCenterGroups/{id} | 
[**gameCenterGroupsUpdateInstance**](GameCenterGroupsApi.md#gameCenterGroupsUpdateInstance) | **PATCH** /v1/gameCenterGroups/{id} | 


# **gameCenterGroupsCreateInstance**
> GameCenterGroupResponse gameCenterGroupsCreateInstance(gameCenterGroupCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsCreateInstanceRequest = {
  // GameCenterGroupCreateRequest | GameCenterGroup representation
  gameCenterGroupCreateRequest: {
    data: {
      type: "gameCenterGroups",
      attributes: {
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.gameCenterGroupsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterGroupCreateRequest** | **GameCenterGroupCreateRequest**| GameCenterGroup representation |


### Return type

**GameCenterGroupResponse**

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
**201** | Single GameCenterGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterGroupsDeleteInstance**
> void gameCenterGroupsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterGroupsDeleteInstance(body).then((data:any) => {
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

# **gameCenterGroupsGameCenterAchievementsGetToManyRelated**
> GameCenterAchievementsResponse gameCenterGroupsGameCenterAchievementsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterAchievementsGetToManyRelatedRequest = {
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

apiInstance.gameCenterGroupsGameCenterAchievementsGetToManyRelated(body).then((data:any) => {
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

# **gameCenterGroupsGameCenterAchievementsGetToManyRelationship**
> GameCenterGroupGameCenterAchievementsLinkagesResponse gameCenterGroupsGameCenterAchievementsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterAchievementsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterGroupsGameCenterAchievementsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterGroupGameCenterAchievementsLinkagesResponse**

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

# **gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship**
> void gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(gameCenterGroupGameCenterAchievementsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterAchievementsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterGroupGameCenterAchievementsLinkagesRequest | List of related linkages
  gameCenterGroupGameCenterAchievementsLinkagesRequest: {
    data: [
      {
        type: "gameCenterAchievements",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterGroupsGameCenterAchievementsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterGroupGameCenterAchievementsLinkagesRequest** | **GameCenterGroupGameCenterAchievementsLinkagesRequest**| List of related linkages |
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

# **gameCenterGroupsGameCenterDetailsGetToManyRelated**
> GameCenterDetailsResponse gameCenterGroupsGameCenterDetailsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterDetailsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'gameCenterAppVersions.enabled\' (optional)
  filterGameCenterAppVersionsEnabled: [
    "filter[gameCenterAppVersions.enabled]_example",
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
  // Array<'achievementReleases' | 'app' | 'arcadeEnabled' | 'challengeEnabled' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | the fields to include for returned resources of type gameCenterDetails (optional)
  fieldsGameCenterDetails: [
    "achievementReleases",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'appStoreVersion' | 'compatibilityVersions' | 'enabled'> | the fields to include for returned resources of type gameCenterAppVersions (optional)
  fieldsGameCenterAppVersions: [
    "appStoreVersion",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // Array<'alternativeDistributionKey' | 'analyticsReportRequests' | 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEncryptionDeclarations' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersionExperimentsV2' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterDetail' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'marketplaceSearchDetail' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'> | the fields to include for returned resources of type apps (optional)
  fieldsApps: [
    "alternativeDistributionKey",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related gameCenterAppVersions returned (when they are included) (optional)
  limitGameCenterAppVersions: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related gameCenterAchievements returned (when they are included) (optional)
  limitGameCenterAchievements: 1,
  // number | maximum number of related achievementReleases returned (when they are included) (optional)
  limitAchievementReleases: 1,
  // number | maximum number of related leaderboardReleases returned (when they are included) (optional)
  limitLeaderboardReleases: 1,
  // number | maximum number of related leaderboardSetReleases returned (when they are included) (optional)
  limitLeaderboardSetReleases: 1,
  // Array<'achievementReleases' | 'app' | 'defaultGroupLeaderboard' | 'defaultLeaderboard' | 'gameCenterAchievements' | 'gameCenterAppVersions' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'leaderboardReleases' | 'leaderboardSetReleases'> | comma-separated list of relationships to include (optional)
  include: [
    "achievementReleases",
  ],
};

apiInstance.gameCenterGroupsGameCenterDetailsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterGameCenterAppVersionsEnabled** | **Array&lt;string&gt;** | filter by attribute \&#39;gameCenterAppVersions.enabled\&#39; | (optional) defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterAppVersions** | **Array<&#39;appStoreVersion&#39; &#124; &#39;compatibilityVersions&#39; &#124; &#39;enabled&#39;>** | the fields to include for returned resources of type gameCenterAppVersions | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **fieldsApps** | **Array<&#39;alternativeDistributionKey&#39; &#124; &#39;analyticsReportRequests&#39; &#124; &#39;appAvailability&#39; &#124; &#39;appClips&#39; &#124; &#39;appCustomProductPages&#39; &#124; &#39;appEncryptionDeclarations&#39; &#124; &#39;appEvents&#39; &#124; &#39;appInfos&#39; &#124; &#39;appPricePoints&#39; &#124; &#39;appPriceSchedule&#39; &#124; &#39;appStoreVersionExperimentsV2&#39; &#124; &#39;appStoreVersions&#39; &#124; &#39;availableInNewTerritories&#39; &#124; &#39;availableTerritories&#39; &#124; &#39;betaAppLocalizations&#39; &#124; &#39;betaAppReviewDetail&#39; &#124; &#39;betaGroups&#39; &#124; &#39;betaLicenseAgreement&#39; &#124; &#39;betaTesters&#39; &#124; &#39;builds&#39; &#124; &#39;bundleId&#39; &#124; &#39;ciProduct&#39; &#124; &#39;contentRightsDeclaration&#39; &#124; &#39;customerReviews&#39; &#124; &#39;endUserLicenseAgreement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterEnabledVersions&#39; &#124; &#39;inAppPurchases&#39; &#124; &#39;inAppPurchasesV2&#39; &#124; &#39;isOrEverWasMadeForKids&#39; &#124; &#39;marketplaceSearchDetail&#39; &#124; &#39;name&#39; &#124; &#39;perfPowerMetrics&#39; &#124; &#39;preOrder&#39; &#124; &#39;preReleaseVersions&#39; &#124; &#39;pricePoints&#39; &#124; &#39;prices&#39; &#124; &#39;primaryLocale&#39; &#124; &#39;promotedPurchases&#39; &#124; &#39;reviewSubmissions&#39; &#124; &#39;sku&#39; &#124; &#39;subscriptionGracePeriod&#39; &#124; &#39;subscriptionGroups&#39; &#124; &#39;subscriptionStatusUrl&#39; &#124; &#39;subscriptionStatusUrlForSandbox&#39; &#124; &#39;subscriptionStatusUrlVersion&#39; &#124; &#39;subscriptionStatusUrlVersionForSandbox&#39;>** | the fields to include for returned resources of type apps | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitGameCenterAppVersions** | [**number**] | maximum number of related gameCenterAppVersions returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterAchievements** | [**number**] | maximum number of related gameCenterAchievements returned (when they are included) | (optional) defaults to undefined
 **limitAchievementReleases** | [**number**] | maximum number of related achievementReleases returned (when they are included) | (optional) defaults to undefined
 **limitLeaderboardReleases** | [**number**] | maximum number of related leaderboardReleases returned (when they are included) | (optional) defaults to undefined
 **limitLeaderboardSetReleases** | [**number**] | maximum number of related leaderboardSetReleases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterDetailsResponse**

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
**200** | List of GameCenterDetails |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated**
> GameCenterLeaderboardSetsResponse gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardSetsGetToManyRelatedRequest = {
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

apiInstance.gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelated(body).then((data:any) => {
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

# **gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship**
> GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterGroupsGameCenterLeaderboardSetsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse**

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

# **gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship**
> void gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest | List of related linkages
  gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboardSets",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterGroupsGameCenterLeaderboardSetsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterGroupGameCenterLeaderboardSetsLinkagesRequest** | **GameCenterGroupGameCenterLeaderboardSetsLinkagesRequest**| List of related linkages |
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

# **gameCenterGroupsGameCenterLeaderboardsGetToManyRelated**
> GameCenterLeaderboardsResponse gameCenterGroupsGameCenterLeaderboardsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardsGetToManyRelatedRequest = {
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

apiInstance.gameCenterGroupsGameCenterLeaderboardsGetToManyRelated(body).then((data:any) => {
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

# **gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship**
> GameCenterGroupGameCenterLeaderboardsLinkagesResponse gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterGroupsGameCenterLeaderboardsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterGroupGameCenterLeaderboardsLinkagesResponse**

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

# **gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship**
> void gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(gameCenterGroupGameCenterLeaderboardsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterGroupGameCenterLeaderboardsLinkagesRequest | List of related linkages
  gameCenterGroupGameCenterLeaderboardsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboards",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterGroupsGameCenterLeaderboardsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterGroupGameCenterLeaderboardsLinkagesRequest** | **GameCenterGroupGameCenterLeaderboardsLinkagesRequest**| List of related linkages |
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

# **gameCenterGroupsGetCollection**
> GameCenterGroupsResponse gameCenterGroupsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGetCollectionRequest = {
  // Array<string> | filter by id(s) of related \'gameCenterDetails\' (optional)
  filterGameCenterDetails: [
    "filter[gameCenterDetails]_example",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievements",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
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
  // number | maximum number of related gameCenterAchievements returned (when they are included) (optional)
  limitGameCenterAchievements: 1,
  // number | maximum number of related gameCenterDetails returned (when they are included) (optional)
  limitGameCenterDetails: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
};

apiInstance.gameCenterGroupsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGameCenterDetails** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterDetails\&#39; | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limitGameCenterAchievements** | [**number**] | maximum number of related gameCenterAchievements returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterDetails** | [**number**] | maximum number of related gameCenterDetails returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterGroupsResponse**

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
**200** | List of GameCenterGroups |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterGroupsGetInstance**
> GameCenterGroupResponse gameCenterGroupsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards' | 'referenceName'> | the fields to include for returned resources of type gameCenterGroups (optional)
  fieldsGameCenterGroups: [
    "gameCenterAchievements",
  ],
  // Array<'gameCenterAchievements' | 'gameCenterDetails' | 'gameCenterLeaderboardSets' | 'gameCenterLeaderboards'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievements",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
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
  // number | maximum number of related gameCenterAchievements returned (when they are included) (optional)
  limitGameCenterAchievements: 1,
  // number | maximum number of related gameCenterDetails returned (when they are included) (optional)
  limitGameCenterDetails: 1,
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
};

apiInstance.gameCenterGroupsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limitGameCenterAchievements** | [**number**] | maximum number of related gameCenterAchievements returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterDetails** | [**number**] | maximum number of related gameCenterDetails returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined


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

# **gameCenterGroupsUpdateInstance**
> GameCenterGroupResponse gameCenterGroupsUpdateInstance(gameCenterGroupUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterGroupsApi(configuration);

let body:.GameCenterGroupsApiGameCenterGroupsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterGroupUpdateRequest | GameCenterGroup representation
  gameCenterGroupUpdateRequest: {
    data: {
      type: "gameCenterGroups",
      id: "id_example",
      attributes: {
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.gameCenterGroupsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterGroupUpdateRequest** | **GameCenterGroupUpdateRequest**| GameCenterGroup representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterGroupResponse**

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
**200** | Single GameCenterGroup |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


