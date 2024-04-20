# .BetaTesterInvitationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**betaTesterInvitationsCreateInstance**](BetaTesterInvitationsApi.md#betaTesterInvitationsCreateInstance) | **POST** /v1/betaTesterInvitations | 


# **betaTesterInvitationsCreateInstance**
> BetaTesterInvitationResponse betaTesterInvitationsCreateInstance(betaTesterInvitationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BetaTesterInvitationsApi(configuration);

let body:.BetaTesterInvitationsApiBetaTesterInvitationsCreateInstanceRequest = {
  // BetaTesterInvitationCreateRequest | BetaTesterInvitation representation
  betaTesterInvitationCreateRequest: {
    data: {
      type: "betaTesterInvitations",
      relationships: {
        betaTester: {
          data: {
            type: "betaTesters",
            id: "id_example",
          },
        },
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.betaTesterInvitationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **betaTesterInvitationCreateRequest** | **BetaTesterInvitationCreateRequest**| BetaTesterInvitation representation |


### Return type

**BetaTesterInvitationResponse**

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
**201** | Single BetaTesterInvitation |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


