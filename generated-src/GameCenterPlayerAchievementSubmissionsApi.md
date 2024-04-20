# .GameCenterPlayerAchievementSubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterPlayerAchievementSubmissionsCreateInstance**](GameCenterPlayerAchievementSubmissionsApi.md#gameCenterPlayerAchievementSubmissionsCreateInstance) | **POST** /v1/gameCenterPlayerAchievementSubmissions | 


# **gameCenterPlayerAchievementSubmissionsCreateInstance**
> GameCenterPlayerAchievementSubmissionResponse gameCenterPlayerAchievementSubmissionsCreateInstance(gameCenterPlayerAchievementSubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterPlayerAchievementSubmissionsApi(configuration);

let body:.GameCenterPlayerAchievementSubmissionsApiGameCenterPlayerAchievementSubmissionsCreateInstanceRequest = {
  // GameCenterPlayerAchievementSubmissionCreateRequest | GameCenterPlayerAchievementSubmission representation
  gameCenterPlayerAchievementSubmissionCreateRequest: {
    data: {
      type: "gameCenterPlayerAchievementSubmissions",
      attributes: {
        bundleId: "bundleId_example",
        challengeIds: [
          "challengeIds_example",
        ],
        percentageAchieved: 1,
        scopedPlayerId: "scopedPlayerId_example",
        submittedDate: new Date('1970-01-01T00:00:00.00Z'),
        vendorIdentifier: "vendorIdentifier_example",
      },
    },
  },
};

apiInstance.gameCenterPlayerAchievementSubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterPlayerAchievementSubmissionCreateRequest** | **GameCenterPlayerAchievementSubmissionCreateRequest**| GameCenterPlayerAchievementSubmission representation |


### Return type

**GameCenterPlayerAchievementSubmissionResponse**

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
**201** | Single GameCenterPlayerAchievementSubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


