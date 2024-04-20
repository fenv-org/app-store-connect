# .GameCenterAchievementLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterAchievementLocalizationsCreateInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsCreateInstance) | **POST** /v1/gameCenterAchievementLocalizations | 
[**gameCenterAchievementLocalizationsDeleteInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsDeleteInstance) | **DELETE** /v1/gameCenterAchievementLocalizations/{id} | 
[**gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated) | **GET** /v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievement | 
[**gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated) | **GET** /v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievementImage | 
[**gameCenterAchievementLocalizationsGetInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsGetInstance) | **GET** /v1/gameCenterAchievementLocalizations/{id} | 
[**gameCenterAchievementLocalizationsUpdateInstance**](GameCenterAchievementLocalizationsApi.md#gameCenterAchievementLocalizationsUpdateInstance) | **PATCH** /v1/gameCenterAchievementLocalizations/{id} | 


# **gameCenterAchievementLocalizationsCreateInstance**
> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsCreateInstance(gameCenterAchievementLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsCreateInstanceRequest = {
  // GameCenterAchievementLocalizationCreateRequest | GameCenterAchievementLocalization representation
  gameCenterAchievementLocalizationCreateRequest: {
    data: {
      type: "gameCenterAchievementLocalizations",
      attributes: {
        locale: "locale_example",
        name: "name_example",
        beforeEarnedDescription: "beforeEarnedDescription_example",
        afterEarnedDescription: "afterEarnedDescription_example",
      },
      relationships: {
        gameCenterAchievement: {
          data: {
            type: "gameCenterAchievements",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterAchievementLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementLocalizationCreateRequest** | **GameCenterAchievementLocalizationCreateRequest**| GameCenterAchievementLocalization representation |


### Return type

**GameCenterAchievementLocalizationResponse**

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
**201** | Single GameCenterAchievementLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementLocalizationsDeleteInstance**
> void gameCenterAchievementLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterAchievementLocalizationsDeleteInstance(body).then((data:any) => {
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

# **gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated**
> GameCenterAchievementResponse gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelatedRequest = {
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

apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementGetToOneRelated(body).then((data:any) => {
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

# **gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated**
> GameCenterAchievementImageResponse gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelatedRequest = {
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
  // Array<'gameCenterAchievementLocalization'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievementLocalization",
  ],
};

apiInstance.gameCenterAchievementLocalizationsGameCenterAchievementImageGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterAchievementLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterAchievementImages | (optional) defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievementLocalization&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterAchievementImageResponse**

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
**200** | Single GameCenterAchievementImage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementLocalizationsGetInstance**
> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'afterEarnedDescription' | 'beforeEarnedDescription' | 'gameCenterAchievement' | 'gameCenterAchievementImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterAchievementLocalizations (optional)
  fieldsGameCenterAchievementLocalizations: [
    "afterEarnedDescription",
  ],
  // Array<'gameCenterAchievement' | 'gameCenterAchievementImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterAchievement",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterAchievementLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterAchievementImages (optional)
  fieldsGameCenterAchievementImages: [
    "assetDeliveryState",
  ],
  // Array<'archived' | 'gameCenterDetail' | 'gameCenterGroup' | 'groupAchievement' | 'localizations' | 'points' | 'referenceName' | 'releases' | 'repeatable' | 'showBeforeEarned' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterAchievements (optional)
  fieldsGameCenterAchievements: [
    "archived",
  ],
};

apiInstance.gameCenterAchievementLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterAchievementLocalizations** | **Array<&#39;afterEarnedDescription&#39; &#124; &#39;beforeEarnedDescription&#39; &#124; &#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterAchievementLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterAchievement&#39; &#124; &#39;gameCenterAchievementImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterAchievementImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterAchievementLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterAchievementImages | (optional) defaults to undefined
 **fieldsGameCenterAchievements** | **Array<&#39;archived&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;groupAchievement&#39; &#124; &#39;localizations&#39; &#124; &#39;points&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;repeatable&#39; &#124; &#39;showBeforeEarned&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterAchievements | (optional) defaults to undefined


### Return type

**GameCenterAchievementLocalizationResponse**

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
**200** | Single GameCenterAchievementLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterAchievementLocalizationsUpdateInstance**
> GameCenterAchievementLocalizationResponse gameCenterAchievementLocalizationsUpdateInstance(gameCenterAchievementLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterAchievementLocalizationsApi(configuration);

let body:.GameCenterAchievementLocalizationsApiGameCenterAchievementLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterAchievementLocalizationUpdateRequest | GameCenterAchievementLocalization representation
  gameCenterAchievementLocalizationUpdateRequest: {
    data: {
      type: "gameCenterAchievementLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        beforeEarnedDescription: "beforeEarnedDescription_example",
        afterEarnedDescription: "afterEarnedDescription_example",
      },
    },
  },
};

apiInstance.gameCenterAchievementLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterAchievementLocalizationUpdateRequest** | **GameCenterAchievementLocalizationUpdateRequest**| GameCenterAchievementLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterAchievementLocalizationResponse**

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
**200** | Single GameCenterAchievementLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


