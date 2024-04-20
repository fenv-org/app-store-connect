# .AppStoreReviewDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated) | **GET** /v1/appStoreReviewDetails/{id}/appStoreReviewAttachments | 
[**appStoreReviewDetailsCreateInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsCreateInstance) | **POST** /v1/appStoreReviewDetails | 
[**appStoreReviewDetailsGetInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsGetInstance) | **GET** /v1/appStoreReviewDetails/{id} | 
[**appStoreReviewDetailsUpdateInstance**](AppStoreReviewDetailsApi.md#appStoreReviewDetailsUpdateInstance) | **PATCH** /v1/appStoreReviewDetails/{id} | 


# **appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated**
> AppStoreReviewAttachmentsResponse appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewDetailsApi(configuration);

let body:.AppStoreReviewDetailsApiAppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type appStoreReviewDetails (optional)
  fieldsAppStoreReviewDetails: [
    "appStoreReviewAttachments",
  ],
  // Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appStoreReviewAttachments (optional)
  fieldsAppStoreReviewAttachments: [
    "appStoreReviewDetail",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appStoreReviewDetail'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewDetail",
  ],
};

apiInstance.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreReviewDetails** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type appStoreReviewDetails | (optional) defaults to undefined
 **fieldsAppStoreReviewAttachments** | **Array<&#39;appStoreReviewDetail&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appStoreReviewAttachments | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewDetail&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreReviewAttachmentsResponse**

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
**200** | List of AppStoreReviewAttachments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreReviewDetailsCreateInstance**
> AppStoreReviewDetailResponse appStoreReviewDetailsCreateInstance(appStoreReviewDetailCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewDetailsApi(configuration);

let body:.AppStoreReviewDetailsApiAppStoreReviewDetailsCreateInstanceRequest = {
  // AppStoreReviewDetailCreateRequest | AppStoreReviewDetail representation
  appStoreReviewDetailCreateRequest: {
    data: {
      type: "appStoreReviewDetails",
      attributes: {
        contactFirstName: "contactFirstName_example",
        contactLastName: "contactLastName_example",
        contactPhone: "contactPhone_example",
        contactEmail: "contactEmail_example",
        demoAccountName: "demoAccountName_example",
        demoAccountPassword: "demoAccountPassword_example",
        demoAccountRequired: true,
        notes: "notes_example",
      },
      relationships: {
        appStoreVersion: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appStoreReviewDetailsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreReviewDetailCreateRequest** | **AppStoreReviewDetailCreateRequest**| AppStoreReviewDetail representation |


### Return type

**AppStoreReviewDetailResponse**

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
**201** | Single AppStoreReviewDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreReviewDetailsGetInstance**
> AppStoreReviewDetailResponse appStoreReviewDetailsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewDetailsApi(configuration);

let body:.AppStoreReviewDetailsApiAppStoreReviewDetailsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'> | the fields to include for returned resources of type appStoreReviewDetails (optional)
  fieldsAppStoreReviewDetails: [
    "appStoreReviewAttachments",
  ],
  // Array<'appStoreReviewAttachments' | 'appStoreVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreReviewAttachments",
  ],
  // Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'> | the fields to include for returned resources of type appStoreReviewAttachments (optional)
  fieldsAppStoreReviewAttachments: [
    "appStoreReviewDetail",
  ],
  // number | maximum number of related appStoreReviewAttachments returned (when they are included) (optional)
  limitAppStoreReviewAttachments: 1,
};

apiInstance.appStoreReviewDetailsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreReviewDetails** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;contactEmail&#39; &#124; &#39;contactFirstName&#39; &#124; &#39;contactLastName&#39; &#124; &#39;contactPhone&#39; &#124; &#39;demoAccountName&#39; &#124; &#39;demoAccountPassword&#39; &#124; &#39;demoAccountRequired&#39; &#124; &#39;notes&#39;>** | the fields to include for returned resources of type appStoreReviewDetails | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreReviewAttachments&#39; &#124; &#39;appStoreVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreReviewAttachments** | **Array<&#39;appStoreReviewDetail&#39; &#124; &#39;assetDeliveryState&#39; &#124; &#39;fileName&#39; &#124; &#39;fileSize&#39; &#124; &#39;sourceFileChecksum&#39; &#124; &#39;uploadOperations&#39; &#124; &#39;uploaded&#39;>** | the fields to include for returned resources of type appStoreReviewAttachments | (optional) defaults to undefined
 **limitAppStoreReviewAttachments** | [**number**] | maximum number of related appStoreReviewAttachments returned (when they are included) | (optional) defaults to undefined


### Return type

**AppStoreReviewDetailResponse**

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
**200** | Single AppStoreReviewDetail |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreReviewDetailsUpdateInstance**
> AppStoreReviewDetailResponse appStoreReviewDetailsUpdateInstance(appStoreReviewDetailUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreReviewDetailsApi(configuration);

let body:.AppStoreReviewDetailsApiAppStoreReviewDetailsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreReviewDetailUpdateRequest | AppStoreReviewDetail representation
  appStoreReviewDetailUpdateRequest: {
    data: {
      type: "appStoreReviewDetails",
      id: "id_example",
      attributes: {
        contactFirstName: "contactFirstName_example",
        contactLastName: "contactLastName_example",
        contactPhone: "contactPhone_example",
        contactEmail: "contactEmail_example",
        demoAccountName: "demoAccountName_example",
        demoAccountPassword: "demoAccountPassword_example",
        demoAccountRequired: true,
        notes: "notes_example",
      },
    },
  },
};

apiInstance.appStoreReviewDetailsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreReviewDetailUpdateRequest** | **AppStoreReviewDetailUpdateRequest**| AppStoreReviewDetail representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreReviewDetailResponse**

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
**200** | Single AppStoreReviewDetail |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


