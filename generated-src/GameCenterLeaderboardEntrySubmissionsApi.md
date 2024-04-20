# .GameCenterLeaderboardEntrySubmissionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameCenterLeaderboardEntrySubmissionsCreateInstance**](GameCenterLeaderboardEntrySubmissionsApi.md#gameCenterLeaderboardEntrySubmissionsCreateInstance) | **POST** /v1/gameCenterLeaderboardEntrySubmissions | 


# **gameCenterLeaderboardEntrySubmissionsCreateInstance**
> GameCenterLeaderboardEntrySubmissionResponse gameCenterLeaderboardEntrySubmissionsCreateInstance(gameCenterLeaderboardEntrySubmissionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameCenterLeaderboardEntrySubmissionsApi(configuration);

let body:.GameCenterLeaderboardEntrySubmissionsApiGameCenterLeaderboardEntrySubmissionsCreateInstanceRequest = {
  // GameCenterLeaderboardEntrySubmissionCreateRequest | GameCenterLeaderboardEntrySubmission representation
  gameCenterLeaderboardEntrySubmissionCreateRequest: {
    data: {
      type: "gameCenterLeaderboardEntrySubmissions",
      attributes: {
        bundleId: "bundleId_example",
        challengeIds: [
          "challengeIds_example",
        ],
        context: 2,
        scopedPlayerId: "scopedPlayerId_example",
        score: 2,
        submittedDate: new Date('1970-01-01T00:00:00.00Z'),
        vendorIdentifier: "vendorIdentifier_example",
      },
    },
  },
};

apiInstance.gameCenterLeaderboardEntrySubmissionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameCenterLeaderboardEntrySubmissionCreateRequest** | **GameCenterLeaderboardEntrySubmissionCreateRequest**| GameCenterLeaderboardEntrySubmission representation |


### Return type

**GameCenterLeaderboardEntrySubmissionResponse**

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
**201** | Single GameCenterLeaderboardEntrySubmission |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


