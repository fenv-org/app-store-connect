# .AppInfoLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appInfoLocalizationsCreateInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsCreateInstance) | **POST** /v1/appInfoLocalizations | 
[**appInfoLocalizationsDeleteInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsDeleteInstance) | **DELETE** /v1/appInfoLocalizations/{id} | 
[**appInfoLocalizationsGetInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsGetInstance) | **GET** /v1/appInfoLocalizations/{id} | 
[**appInfoLocalizationsUpdateInstance**](AppInfoLocalizationsApi.md#appInfoLocalizationsUpdateInstance) | **PATCH** /v1/appInfoLocalizations/{id} | 


# **appInfoLocalizationsCreateInstance**
> AppInfoLocalizationResponse appInfoLocalizationsCreateInstance(appInfoLocalizationCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfoLocalizationsApi(configuration);

let body:.AppInfoLocalizationsApiAppInfoLocalizationsCreateInstanceRequest = {
  // AppInfoLocalizationCreateRequest | AppInfoLocalization representation
  appInfoLocalizationCreateRequest: {
    data: {
      type: "appInfoLocalizations",
      attributes: {
        locale: "locale_example",
        name: "name_example",
        subtitle: "subtitle_example",
        privacyPolicyUrl: "privacyPolicyUrl_example",
        privacyChoicesUrl: "privacyChoicesUrl_example",
        privacyPolicyText: "privacyPolicyText_example",
      },
      relationships: {
        appInfo: {
          data: {
            type: "appInfos",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appInfoLocalizationsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appInfoLocalizationCreateRequest** | **AppInfoLocalizationCreateRequest**| AppInfoLocalization representation |


### Return type

**AppInfoLocalizationResponse**

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
**201** | Single AppInfoLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appInfoLocalizationsDeleteInstance**
> void appInfoLocalizationsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfoLocalizationsApi(configuration);

let body:.AppInfoLocalizationsApiAppInfoLocalizationsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appInfoLocalizationsDeleteInstance(body).then((data:any) => {
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

# **appInfoLocalizationsGetInstance**
> AppInfoLocalizationResponse appInfoLocalizationsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfoLocalizationsApi(configuration);

let body:.AppInfoLocalizationsApiAppInfoLocalizationsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'> | the fields to include for returned resources of type appInfoLocalizations (optional)
  fieldsAppInfoLocalizations: [
    "appInfo",
  ],
  // Array<'appInfo'> | comma-separated list of relationships to include (optional)
  include: [
    "appInfo",
  ],
};

apiInstance.appInfoLocalizationsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppInfoLocalizations** | **Array<&#39;appInfo&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;privacyChoicesUrl&#39; &#124; &#39;privacyPolicyText&#39; &#124; &#39;privacyPolicyUrl&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appInfoLocalizations | (optional) defaults to undefined
 **include** | **Array<&#39;appInfo&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppInfoLocalizationResponse**

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
**200** | Single AppInfoLocalization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appInfoLocalizationsUpdateInstance**
> AppInfoLocalizationResponse appInfoLocalizationsUpdateInstance(appInfoLocalizationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfoLocalizationsApi(configuration);

let body:.AppInfoLocalizationsApiAppInfoLocalizationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppInfoLocalizationUpdateRequest | AppInfoLocalization representation
  appInfoLocalizationUpdateRequest: {
    data: {
      type: "appInfoLocalizations",
      id: "id_example",
      attributes: {
        name: "name_example",
        subtitle: "subtitle_example",
        privacyPolicyUrl: "privacyPolicyUrl_example",
        privacyChoicesUrl: "privacyChoicesUrl_example",
        privacyPolicyText: "privacyPolicyText_example",
      },
    },
  },
};

apiInstance.appInfoLocalizationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appInfoLocalizationUpdateRequest** | **AppInfoLocalizationUpdateRequest**| AppInfoLocalization representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppInfoLocalizationResponse**

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
**200** | Single AppInfoLocalization |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


