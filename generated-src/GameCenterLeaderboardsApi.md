# .GameCenterLeaderboardsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardsCreateInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsCreateInstance) | **POST** /v1/gameCenterLeaderboards | 
[**gameCenterLeaderboardsDeleteInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboards/{id} | 
[**gameCenterLeaderboardsGetInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGetInstance) | **GET** /v1/gameCenterLeaderboards/{id} | 
[**gameCenterLeaderboardsGroupLeaderboardGetToOneRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardGetToOneRelated) | **GET** /v1/gameCenterLeaderboards/{id}/groupLeaderboard | 
[**gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship) | **GET** /v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard | 
[**gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboards/{id}/relationships/groupLeaderboard | 
[**gameCenterLeaderboardsLocalizationsGetToManyRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterLeaderboards/{id}/localizations | 
[**gameCenterLeaderboardsReleasesGetToManyRelated**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsReleasesGetToManyRelated) | **GET** /v1/gameCenterLeaderboards/{id}/releases | 
[**gameCenterLeaderboardsUpdateInstance**](GameCenterLeaderboardsApi.md#gameCenterLeaderboardsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboards/{id} | 


# **gameCenterLeaderboardsCreateInstance**
> GameCenterLeaderboardResponse gameCenterLeaderboardsCreateInstance(gameCenterLeaderboardCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsCreateInstanceRequest = {
  // GameCenterLeaderboardCreateRequest | GameCenterLeaderboard representation
  gameCenterLeaderboardCreateRequest: {
    data: {
      type: "gameCenterLeaderboards",
      attributes: {
        defaultFormatter: "INTEGER",
        referenceName: "referenceName_example",
        vendorIdentifier: "vendorIdentifier_example",
        submissionType: "BEST_SCORE",
        scoreSortType: "ASC",
        scoreRangeStart: 2,
        scoreRangeEnd: 2,
        recurrenceStartDate: new Date('1970-01-01T00:00:00.00Z'),
        recurrenceDuration: "recurrenceDuration_example",
        recurrenceRule: "recurrenceRule_example",
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
        gameCenterLeaderboardSets: {
          data: [
            {
              type: "gameCenterLeaderboardSets",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardCreateRequest** | **GameCenterLeaderboardCreateRequest**| GameCenterLeaderboard representation |


### Return type

**GameCenterLeaderboardResponse**

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
**201** | Single GameCenterLeaderboard |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardsDeleteInstance**
> void gameCenterLeaderboardsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardsDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardsGetInstance**
> GameCenterLeaderboardResponse gameCenterLeaderboardsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
  // Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardLocalizations (optional)
  fieldsGameCenterLeaderboardLocalizations: [
    "formatterOverride",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboard' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardReleases (optional)
  fieldsGameCenterLeaderboardReleases: [
    "gameCenterDetail",
  ],
  // number | maximum number of related gameCenterLeaderboardSets returned (when they are included) (optional)
  limitGameCenterLeaderboardSets: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
};

apiInstance.gameCenterLeaderboardsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardResponse**

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
**200** | Single GameCenterLeaderboard |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardsGroupLeaderboardGetToOneRelated**
> GameCenterLeaderboardResponse gameCenterLeaderboardsGroupLeaderboardGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsGroupLeaderboardGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
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

apiInstance.gameCenterLeaderboardsGroupLeaderboardGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardReleases | (optional) defaults to undefined
 **limitGameCenterLeaderboardSets** | [**number**] | maximum number of related gameCenterLeaderboardSets returned (when they are included) | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardResponse**

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
**200** | Single GameCenterLeaderboard |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship**
> GameCenterLeaderboardGroupLeaderboardLinkageResponse gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsGroupLeaderboardGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardsGroupLeaderboardGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardGroupLeaderboardLinkageResponse**

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

# **gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship**
> void gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(gameCenterLeaderboardGroupLeaderboardLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardGroupLeaderboardLinkageRequest | Related linkage
  gameCenterLeaderboardGroupLeaderboardLinkageRequest: {
    data: {
      type: "gameCenterLeaderboards",
      id: "id_example",
    },
  },
};

apiInstance.gameCenterLeaderboardsGroupLeaderboardUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardGroupLeaderboardLinkageRequest** | **GameCenterLeaderboardGroupLeaderboardLinkageRequest**| Related linkage |
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

# **gameCenterLeaderboardsLocalizationsGetToManyRelated**
> GameCenterLeaderboardLocalizationsResponse gameCenterLeaderboardsLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'formatterOverride' | 'formatterSuffix' | 'formatterSuffixSingular' | 'gameCenterLeaderboard' | 'gameCenterLeaderboardImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardLocalizations (optional)
  fieldsGameCenterLeaderboardLocalizations: [
    "formatterOverride",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardImages (optional)
  fieldsGameCenterLeaderboardImages: [
    "assetDeliveryState",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterLeaderboard' | 'gameCenterLeaderboardImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboard",
  ],
};

apiInstance.gameCenterLeaderboardsLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardLocalizations** | **Array<&#39;formatterOverride&#39; &#124; &#39;formatterSuffix&#39; &#124; &#39;formatterSuffixSingular&#39; &#124; &#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardImages | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboard&#39; &#124; &#39;gameCenterLeaderboardImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardLocalizationsResponse**

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
**200** | List of GameCenterLeaderboardLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardsReleasesGetToManyRelated**
> GameCenterLeaderboardReleasesResponse gameCenterLeaderboardsReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsReleasesGetToManyRelatedRequest = {
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

apiInstance.gameCenterLeaderboardsReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterDetail** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterDetail\&#39; | (optional) defaults to undefined
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

# **gameCenterLeaderboardsUpdateInstance**
> GameCenterLeaderboardResponse gameCenterLeaderboardsUpdateInstance(gameCenterLeaderboardUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardsApi(configuration);

let body:.GameCenterLeaderboardsApiGameCenterLeaderboardsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardUpdateRequest | GameCenterLeaderboard representation
  gameCenterLeaderboardUpdateRequest: {
    data: {
      type: "gameCenterLeaderboards",
      id: "id_example",
      attributes: {
        defaultFormatter: "INTEGER",
        referenceName: "referenceName_example",
        submissionType: "BEST_SCORE",
        scoreSortType: "ASC",
        scoreRangeStart: 2,
        scoreRangeEnd: 2,
        recurrenceStartDate: new Date('1970-01-01T00:00:00.00Z'),
        recurrenceDuration: "recurrenceDuration_example",
        recurrenceRule: "recurrenceRule_example",
        archived: true,
      },
    },
  },
};

apiInstance.gameCenterLeaderboardsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardUpdateRequest** | **GameCenterLeaderboardUpdateRequest**| GameCenterLeaderboard representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardResponse**

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
**200** | Single GameCenterLeaderboard |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


