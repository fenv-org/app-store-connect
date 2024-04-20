# .GameCenterMatchmakingRuleSetTestsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterMatchmakingRuleSetTestsCreateInstance**](GameCenterMatchmakingRuleSetTestsApi.md#gameCenterMatchmakingRuleSetTestsCreateInstance) | **POST** /v1/gameCenterMatchmakingRuleSetTests | 


# **gameCenterMatchmakingRuleSetTestsCreateInstance**
> GameCenterMatchmakingRuleSetTestResponse gameCenterMatchmakingRuleSetTestsCreateInstance(gameCenterMatchmakingRuleSetTestCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterMatchmakingRuleSetTestsApi(configuration);

let body:.GameCenterMatchmakingRuleSetTestsApiGameCenterMatchmakingRuleSetTestsCreateInstanceRequest = {
  // GameCenterMatchmakingRuleSetTestCreateRequest | GameCenterMatchmakingRuleSetTest representation
  gameCenterMatchmakingRuleSetTestCreateRequest: {
    data: {
      type: "gameCenterMatchmakingRuleSetTests",
      relationships: {
        matchmakingRuleSet: {
          data: {
            type: "gameCenterMatchmakingRuleSets",
            id: "id_example",
          },
        },
        matchmakingRequests: {
          data: [
            {
              type: "gameCenterMatchmakingTestRequests",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      null,
    ],
  },
};

apiInstance.gameCenterMatchmakingRuleSetTestsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterMatchmakingRuleSetTestCreateRequest** | **GameCenterMatchmakingRuleSetTestCreateRequest**| GameCenterMatchmakingRuleSetTest representation |


### Return type

**GameCenterMatchmakingRuleSetTestResponse**

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
**201** | Single GameCenterMatchmakingRuleSetTest |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


