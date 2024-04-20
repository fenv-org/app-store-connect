# .GameCenterMatchmakingTeamsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingTeamsCreateInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsCreateInstance) | **POST** /v1/gameCenterMatchmakingTeams | 
[**gameCenterMatchmakingTeamsDeleteInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsDeleteInstance) | **DELETE** /v1/gameCenterMatchmakingTeams/{id} | 
[**gameCenterMatchmakingTeamsUpdateInstance**](GameCenterMatchmakingTeamsApi.md#gameCenterMatchmakingTeamsUpdateInstance) | **PATCH** /v1/gameCenterMatchmakingTeams/{id} | 


# **gameCenterMatchmakingTeamsCreateInstance**
> GameCenterMatchmakingTeamResponse gameCenterMatchmakingTeamsCreateInstance(gameCenterMatchmakingTeamCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingTeamsApi(configuration);

let body:.GameCenterMatchmakingTeamsApiGameCenterMatchmakingTeamsCreateInstanceRequest = {
  // GameCenterMatchmakingTeamCreateRequest | GameCenterMatchmakingTeam representation
  gameCenterMatchmakingTeamCreateRequest: {
    data: {
      type: "gameCenterMatchmakingTeams",
      attributes: {
        referenceName: "referenceName_example",
        minPlayers: 1,
        maxPlayers: 1,
      },
      relationships: {
        ruleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.gameCenterMatchmakingTeamsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingTeamCreateRequest** | **GameCenterMatchmakingTeamCreateRequest**| GameCenterMatchmakingTeam representation |


### Return type

**GameCenterMatchmakingTeamResponse**

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
**201** | Single GameCenterMatchmakingTeam |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCenterMatchmakingTeamsDeleteInstance**
> void gameCenterMatchmakingTeamsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingTeamsApi(configuration);

let body:.GameCenterMatchmakingTeamsApiGameCenterMatchmakingTeamsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.gameCenterMatchmakingTeamsDeleteInstance(body).then((data:any) => {
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

# **gameCenterMatchmakingTeamsUpdateInstance**
> GameCenterMatchmakingTeamResponse gameCenterMatchmakingTeamsUpdateInstance(gameCenterMatchmakingTeamUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingTeamsApi(configuration);

let body:.GameCenterMatchmakingTeamsApiGameCenterMatchmakingTeamsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // GameCenterMatchmakingTeamUpdateRequest | GameCenterMatchmakingTeam representation
  gameCenterMatchmakingTeamUpdateRequest: {
    data: {
      type: "gameCenterMatchmakingTeams",
      id: "id_example",
      attributes: {
        minPlayers: 1,
        maxPlayers: 1,
      },
    },
  },
};

apiInstance.gameCenterMatchmakingTeamsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingTeamUpdateRequest** | **GameCenterMatchmakingTeamUpdateRequest**| GameCenterMatchmakingTeam representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**GameCenterMatchmakingTeamResponse**

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
**200** | Single GameCenterMatchmakingTeam |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


