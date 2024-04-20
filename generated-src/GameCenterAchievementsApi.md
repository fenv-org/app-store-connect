# .GameCenterAchievementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementsCreateInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsCreateInstance) | **POST** /v1/gameCenterAchievements | 
[**gameCenterAchievementsDeleteInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsDeleteInstance) | **DELETE** /v1/gameCenterAchievements/{id} | 
[**gameCenterAchievementsGetInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsGetInstance) | **GET** /v1/gameCenterAchievements/{id} | 
[**gameCenterAchievementsGroupAchievementGetToOneRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementGetToOneRelated) | **GET** /v1/gameCenterAchievements/{id}/groupAchievement | 
[**gameCenterAchievementsGroupAchievementGetToOneRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementGetToOneRelationship) | **GET** /v1/gameCenterAchievements/{id}/relationships/groupAchievement | 
[**gameCenterAchievementsGroupAchievementUpdateToOneRelationship**](GameCenterAchievementsApi.md#gameCenterAchievementsGroupAchievementUpdateToOneRelationship) | **PATCH** /v1/gameCenterAchievements/{id}/relationships/groupAchievement | 
[**gameCenterAchievementsLocalizationsGetToManyRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterAchievements/{id}/localizations | 
[**gameCenterAchievementsReleasesGetToManyRelated**](GameCenterAchievementsApi.md#gameCenterAchievementsReleasesGetToManyRelated) | **GET** /v1/gameCenterAchievements/{id}/releases | 
[**gameCenterAchievementsUpdateInstance**](GameCenterAchievementsApi.md#gameCenterAchievementsUpdateInstance) | **PATCH** /v1/gameCenterAchievements/{id} | 


# **gameCenterAchievementsCreateInstance**
> GameCenterAchievementResponse gameCenterAchievementsCreateInstance(gameCenterAchievementCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsCreateInstanceRequest = {
  // GameCenterAchievementCreateRequest | GameCenterAchievement representation
  gameCenterAchievementCreateRequest: {
    data: {
      type: "gameCenterAchievements",
      attributes: {
        referenceName: "referenceName_example",
        vendorIdentifier: "vendorIdentifier_example",
        points: 1,
        showBeforeEarned: true,
        repeatable: true,
      },
      relationships: {
        gameCenterDetail: {
          data: {
            type: "gameCenterDetails",
            id: "id_example",
          },
        },
        gameCenterGroup: {
          data: {
            type: "gameCenterGroups",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterAchievementsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementCreateRequest** | **GameCenterAchievementCreateRequest**| GameCenterAchievement representation |


### Return type

**GameCenterAchievementResponse**

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
**201** | Single GameCenterAchievement |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementsDeleteInstance**
> void gameCenterAchievementsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterAchievementsDeleteInstance(body).then((data:any) => {
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

# **gameCenterAchievementsGetInstance**
> GameCenterAchievementResponse gameCenterAchievementsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterDetail' | 'live'> | the fields to include for returned resources of type gameCenterAchievementReleases (optional)
  fieldsGameCenterAchievementReleases: [
    "gameCenterAchievement",
  ],
  // Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterAchievementLocalizations (optional)
  fieldsGameCenterAchievementLocalizations: [
    "afterEarnedDescription",
  ],
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
};

apiInstance.gameCenterAchievementsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterAchievementResponse**

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
**200** | Single GameCenterAchievement |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementsGroupAchievementGetToOneRelated**
> GameCenterAchievementResponse gameCenterAchievementsGroupAchievementGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsGroupAchievementGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
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
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
};

apiInstance.gameCenterAchievementsGroupAchievementGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementReleases** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterAchievementReleases | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementResponse**

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
**200** | Single GameCenterAchievement |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementsGroupAchievementGetToOneRelationship**
> GameCenterAchievementGroupAchievementLinkageResponse gameCenterAchievementsGroupAchievementGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsGroupAchievementGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterAchievementsGroupAchievementGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterAchievementGroupAchievementLinkageResponse**

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

# **gameCenterAchievementsGroupAchievementUpdateToOneRelationship**
> void gameCenterAchievementsGroupAchievementUpdateToOneRelationship(gameCenterAchievementGroupAchievementLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsGroupAchievementUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAchievementGroupAchievementLinkageRequest | Related linkage
  gameCenterAchievementGroupAchievementLinkageRequest: {
    data: {
      type: "gameCenterAchievements",
      id: "id_example",
    },
  },
};

apiInstance.gameCenterAchievementsGroupAchievementUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementGroupAchievementLinkageRequest** | **GameCenterAchievementGroupAchievementLinkageRequest**| Related linkage |
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

# **gameCenterAchievementsLocalizationsGetToManyRelated**
> GameCenterAchievementLocalizationsResponse gameCenterAchievementsLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterAchievementImages (optional)
  fieldsGameCenterAchievementImages: [
    "assetDeliveryState",
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
  // Array<'gameCenterAchievement' | 'gameCenterAchievementImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievement",
  ],
};

apiInstance.gameCenterAchievementsLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterAchievementLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterAchievementImages | (optional) defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementLocalizationsResponse**

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
**200** | List of GameCenterAchievementLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementsReleasesGetToManyRelated**
> GameCenterAchievementReleasesResponse gameCenterAchievementsReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsReleasesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'live\' (optional)
  filterLive: [
    "filter[live]_example",
  ],
  // Array<string> | filter by id(s) of related \'gameCenterDetail\' (optional)
  filterGameCenterDetail: [
    "filter[gameCenterDetail]_example",
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

apiInstance.gameCenterAchievementsReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterDetail** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterDetail\&#39; | (optional) defaults to undefined
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

# **gameCenterAchievementsUpdateInstance**
> GameCenterAchievementResponse gameCenterAchievementsUpdateInstance(gameCenterAchievementUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementsApi(configuration);

let body:.GameCenterAchievementsApiGameCenterAchievementsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAchievementUpdateRequest | GameCenterAchievement representation
  gameCenterAchievementUpdateRequest: {
    data: {
      type: "gameCenterAchievements",
      id: "id_example",
      attributes: {
        referenceName: "referenceName_example",
        points: 1,
        showBeforeEarned: true,
        repeatable: true,
        archived: true,
      },
    },
  },
};

apiInstance.gameCenterAchievementsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementUpdateRequest** | **GameCenterAchievementUpdateRequest**| GameCenterAchievement representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterAchievementResponse**

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
**200** | Single GameCenterAchievement |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


