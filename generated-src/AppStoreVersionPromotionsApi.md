# .AppStoreVersionPromotionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionPromotionsCreateInstance**](AppStoreVersionPromotionsApi.md#appStoreVersionPromotionsCreateInstance) | **POST** /v1/appStoreVersionPromotions | 


# **appStoreVersionPromotionsCreateInstance**
> AppStoreVersionPromotionResponse appStoreVersionPromotionsCreateInstance(appStoreVersionPromotionCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionPromotionsApi(configuration);

let body:.AppStoreVersionPromotionsApiAppStoreVersionPromotionsCreateInstanceRequest = {
  // AppStoreVersionPromotionCreateRequest | AppStoreVersionPromotion representation
  appStoreVersionPromotionCreateRequest: {
    data: {
      type: "appStoreVersionPromotions",
      relationships: {
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
        appStoreVersionExperimentTreatment: {
          data: {
            type: "appStoreVersionExperimentTreatments",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreVersionPromotionsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionPromotionCreateRequest** | **AppStoreVersionPromotionCreateRequest**| AppStoreVersionPromotion representation |


### Return type

**AppStoreVersionPromotionResponse**

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
**201** | Single AppStoreVersionPromotion |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


