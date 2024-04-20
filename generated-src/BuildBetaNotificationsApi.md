# .BuildBetaNotificationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildBetaNotificationsCreateInstance**](BuildBetaNotificationsApi.md#buildBetaNotificationsCreateInstance) | **POST** /v1/buildBetaNotifications | 


# **buildBetaNotificationsCreateInstance**
> BuildBetaNotificationResponse buildBetaNotificationsCreateInstance(buildBetaNotificationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildBetaNotificationsApi(configuration);

let body:.BuildBetaNotificationsApiBuildBetaNotificationsCreateInstanceRequest = {
  // BuildBetaNotificationCreateRequest | BuildBetaNotification representation
  buildBetaNotificationCreateRequest: {
    data: {
      type: "buildBetaNotifications",
      relationships: {
        build: {
          data: {
            type: "builds",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.buildBetaNotificationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildBetaNotificationCreateRequest** | **BuildBetaNotificationCreateRequest**| BuildBetaNotification representation |


### Return type

**BuildBetaNotificationResponse**

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
**201** | Single BuildBetaNotification |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


