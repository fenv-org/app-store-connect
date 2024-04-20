# .GameCenterLeaderboardSetsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardSetsCreateInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsCreateInstance) | **POST** /v1/gameCenterLeaderboardSets | 
[**gameCenterLeaderboardSetsDeleteInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsDeleteInstance) | **DELETE** /v1/gameCenterLeaderboardSets/{id} | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship) | **POST** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship) | **DELETE** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship) | **PATCH** /v1/gameCenterLeaderboardSets/{id}/relationships/gameCenterLeaderboards | 
[**gameCenterLeaderboardSetsGetInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGetInstance) | **GET** /v1/gameCenterLeaderboardSets/{id} | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship) | **GET** /v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship) | **PATCH** /v1/gameCenterLeaderboardSets/{id}/relationships/groupLeaderboardSet | 
[**gameCenterLeaderboardSetsLocalizationsGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsLocalizationsGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/localizations | 
[**gameCenterLeaderboardSetsReleasesGetToManyRelated**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsReleasesGetToManyRelated) | **GET** /v1/gameCenterLeaderboardSets/{id}/releases | 
[**gameCenterLeaderboardSetsUpdateInstance**](GameCenterLeaderboardSetsApi.md#gameCenterLeaderboardSetsUpdateInstance) | **PATCH** /v1/gameCenterLeaderboardSets/{id} | 


# **gameCenterLeaderboardSetsCreateInstance**
> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsCreateInstance(gameCenterLeaderboardSetCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsCreateInstanceRequest = {
  // GameCenterLeaderboardSetCreateRequest | GameCenterLeaderboardSet representation
  gameCenterLeaderboardSetCreateRequest: {
    data: {
      type: "gameCenterLeaderboardSets",
      attributes: {
        referenceName: "referenceName_example",
        vendorIdentifier: "vendorIdentifier_example",
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
        gameCenterLeaderboards: {
          data: [
            {
              type: "gameCenterLeaderboards",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetCreateRequest** | **GameCenterLeaderboardSetCreateRequest**| GameCenterLeaderboardSet representation |


### Return type

**GameCenterLeaderboardSetResponse**

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
**201** | Single GameCenterLeaderboardSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetsDeleteInstance**
> void gameCenterLeaderboardSetsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardSetsDeleteInstance(body).then((data:any) => {
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

# **gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship**
> void gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
  gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboards",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsCreateToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | **GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**| List of related linkages |
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

# **gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship**
> void gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
  gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboards",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsDeleteToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | **GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**| List of related linkages |
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

# **gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated**
> GameCenterLeaderboardsResponse gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelatedRequest = {
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

apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelated(body).then((data:any) => {
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

# **gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship**
> GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsGetToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesResponse**

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

# **gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship**
> void gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | List of related linkages
  gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest: {
    data: [
      {
        type: "gameCenterLeaderboards",
        id: "id_example",
      },
    ],
  },
};

apiInstance.gameCenterLeaderboardSetsGameCenterLeaderboardsReplaceToManyRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest** | **GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest**| List of related linkages |
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

# **gameCenterLeaderboardSetsGetInstance**
> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'releases'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterDetail",
  ],
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations (optional)
  fieldsGameCenterLeaderboardSetLocalizations: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'gameCenterDetail' | 'gameCenterLeaderboardSet' | 'live'> | the fields to include for returned resources of type gameCenterLeaderboardSetReleases (optional)
  fieldsGameCenterLeaderboardSetReleases: [
    "gameCenterDetail",
  ],
  // Array<'archived' | 'defaultFormatter' | 'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboardSets' | 'groupLeaderboard' | 'localizations' | 'recurrenceDuration' | 'recurrenceRule' | 'recurrenceStartDate' | 'referenceName' | 'releases' | 'scoreRangeEnd' | 'scoreRangeStart' | 'scoreSortType' | 'submissionType' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboards (optional)
  fieldsGameCenterLeaderboards: [
    "archived",
  ],
  // number | maximum number of related gameCenterLeaderboards returned (when they are included) (optional)
  limitGameCenterLeaderboards: 1,
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
  // number | maximum number of related releases returned (when they are included) (optional)
  limitReleases: 1,
};

apiInstance.gameCenterLeaderboardSetsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetResponse**

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
**200** | Single GameCenterLeaderboardSet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated**
> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
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

apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetReleases** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterLeaderboardSet&#39; &#124; &#39;live&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetReleases | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterGroups** | **Array<&#39;gameCenterAchievements&#39; &#124; &#39;gameCenterDetails&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;referenceName&#39;>** | the fields to include for returned resources of type gameCenterGroups | (optional) defaults to undefined
 **fieldsGameCenterDetails** | **Array<&#39;achievementReleases&#39; &#124; &#39;app&#39; &#124; &#39;arcadeEnabled&#39; &#124; &#39;challengeEnabled&#39; &#124; &#39;defaultGroupLeaderboard&#39; &#124; &#39;defaultLeaderboard&#39; &#124; &#39;gameCenterAchievements&#39; &#124; &#39;gameCenterAppVersions&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;leaderboardReleases&#39; &#124; &#39;leaderboardSetReleases&#39;>** | the fields to include for returned resources of type gameCenterDetails | (optional) defaults to undefined
 **fieldsGameCenterLeaderboards** | **Array<&#39;archived&#39; &#124; &#39;defaultFormatter&#39; &#124; &#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboardSets&#39; &#124; &#39;groupLeaderboard&#39; &#124; &#39;localizations&#39; &#124; &#39;recurrenceDuration&#39; &#124; &#39;recurrenceRule&#39; &#124; &#39;recurrenceStartDate&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;scoreRangeEnd&#39; &#124; &#39;scoreRangeStart&#39; &#124; &#39;scoreSortType&#39; &#124; &#39;submissionType&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboards | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined
 **limitGameCenterLeaderboards** | [**number**] | maximum number of related gameCenterLeaderboards returned (when they are included) | (optional) defaults to undefined
 **limitReleases** | [**number**] | maximum number of related releases returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;releases&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetResponse**

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
**200** | Single GameCenterLeaderboardSet |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship**
> GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetGetToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse**

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

# **gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship**
> void gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationshipRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest | Related linkage
  gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest: {
    data: {
      type: "gameCenterLeaderboardSets",
      id: "id_example",
    },
  },
};

apiInstance.gameCenterLeaderboardSetsGroupLeaderboardSetUpdateToOneRelationship(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest** | **GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest**| Related linkage |
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

# **gameCenterLeaderboardSetsLocalizationsGetToManyRelated**
> GameCenterLeaderboardSetLocalizationsResponse gameCenterLeaderboardSetsLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage' | 'locale' | 'name'> | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations (optional)
  fieldsGameCenterLeaderboardSetLocalizations: [
    "gameCenterLeaderboardSet",
  ],
  // Array<'gameCenterDetail' | 'gameCenterGroup' | 'gameCenterLeaderboards' | 'groupLeaderboardSet' | 'localizations' | 'referenceName' | 'releases' | 'vendorIdentifier'> | the fields to include for returned resources of type gameCenterLeaderboardSets (optional)
  fieldsGameCenterLeaderboardSets: [
    "gameCenterDetail",
  ],
  // Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'gameCenterLeaderboardSetLocalization' | 'imageAsset' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type gameCenterLeaderboardSetImages (optional)
  fieldsGameCenterLeaderboardSetImages: [
    "assetDeliveryState",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'gameCenterLeaderboardSet' | 'gameCenterLeaderboardSetImage'> | comma-separated list of relationships to include (optional)
  include: [
    "gameCenterLeaderboardSet",
  ],
};

apiInstance.gameCenterLeaderboardSetsLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsGameCenterLeaderboardSetLocalizations** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetLocalizations | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSets** | **Array<&#39;gameCenterDetail&#39; &#124; &#39;gameCenterGroup&#39; &#124; &#39;gameCenterLeaderboards&#39; &#124; &#39;groupLeaderboardSet&#39; &#124; &#39;localizations&#39; &#124; &#39;referenceName&#39; &#124; &#39;releases&#39; &#124; &#39;vendorIdentifier&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSets | (optional) defaults to undefined
 **fieldsGameCenterLeaderboardSetImages** | **Array<&#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;gameCenterLeaderboardSetLocalization&#39; &#124; &#39;imageAsset&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type gameCenterLeaderboardSetImages | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;gameCenterLeaderboardSet&#39; &#124; &#39;gameCenterLeaderboardSetImage&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**GameCenterLeaderboardSetLocalizationsResponse**

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
**200** | List of GameCenterLeaderboardSetLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterLeaderboardSetsReleasesGetToManyRelated**
> GameCenterLeaderboardSetReleasesResponse gameCenterLeaderboardSetsReleasesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsReleasesGetToManyRelatedRequest = {
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

apiInstance.gameCenterLeaderboardSetsReleasesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLive** | **Array&lt;string&gt;** | filter by attribute \&#39;live\&#39; | (optional) defaults to undefined
 **filterGameCenterDetail** | **Array&lt;string&gt;** | filter by id(s) of related \&#39;gameCenterDetail\&#39; | (optional) defaults to undefined
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

# **gameCenterLeaderboardSetsUpdateInstance**
> GameCenterLeaderboardSetResponse gameCenterLeaderboardSetsUpdateInstance(gameCenterLeaderboardSetUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardSetsApi(configuration);

let body:.GameCenterLeaderboardSetsApiGameCenterLeaderboardSetsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterLeaderboardSetUpdateRequest | GameCenterLeaderboardSet representation
  gameCenterLeaderboardSetUpdateRequest: {
    data: {
      type: "gameCenterLeaderboardSets",
      id: "id_example",
      attributes: {
        referenceName: "referenceName_example",
      },
    },
  },
};

apiInstance.gameCenterLeaderboardSetsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardSetUpdateRequest** | **GameCenterLeaderboardSetUpdateRequest**| GameCenterLeaderboardSet representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterLeaderboardSetResponse**

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
**200** | Single GameCenterLeaderboardSet |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


