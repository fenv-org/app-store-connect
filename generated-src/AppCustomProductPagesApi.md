# .AppCustomProductPagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated**](AppCustomProductPagesApi.md#appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated) | **GET** /v1/appCustomProductPages/{id}/appCustomProductPageVersions | 
[**appCustomProductPagesCreateInstance**](AppCustomProductPagesApi.md#appCustomProductPagesCreateInstance) | **POST** /v1/appCustomProductPages | 
[**appCustomProductPagesDeleteInstance**](AppCustomProductPagesApi.md#appCustomProductPagesDeleteInstance) | **DELETE** /v1/appCustomProductPages/{id} | 
[**appCustomProductPagesGetInstance**](AppCustomProductPagesApi.md#appCustomProductPagesGetInstance) | **GET** /v1/appCustomProductPages/{id} | 
[**appCustomProductPagesUpdateInstance**](AppCustomProductPagesApi.md#appCustomProductPagesUpdateInstance) | **PATCH** /v1/appCustomProductPages/{id} | 


# **appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated**
> AppCustomProductPageVersionsResponse appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPagesApi(configuration);

let body:.AppCustomProductPagesApiAppCustomProductPagesAppCustomProductPageVersionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REPLACED_WITH_NEW_VERSION' | 'REJECTED'> | filter by attribute \'state\' (optional)
  filterState: [
    "PREPARE_FOR_SUBMISSION",
  ],
  // Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'> | the fields to include for returned resources of type appCustomProductPageLocalizations (optional)
  fieldsAppCustomProductPageLocalizations: [
    "appCustomProductPageVersion",
  ],
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'> | the fields to include for returned resources of type appCustomProductPageVersions (optional)
  fieldsAppCustomProductPageVersions: [
    "appCustomProductPage",
  ],
  // Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'> | the fields to include for returned resources of type appCustomProductPages (optional)
  fieldsAppCustomProductPages: [
    "app",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appCustomProductPageLocalizations returned (when they are included) (optional)
  limitAppCustomProductPageLocalizations: 1,
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appCustomProductPage",
  ],
};

apiInstance.appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterState** | **Array<&#39;PREPARE_FOR_SUBMISSION&#39; &#124; &#39;READY_FOR_REVIEW&#39; &#124; &#39;WAITING_FOR_REVIEW&#39; &#124; &#39;IN_REVIEW&#39; &#124; &#39;ACCEPTED&#39; &#124; &#39;APPROVED&#39; &#124; &#39;REPLACED_WITH_NEW_VERSION&#39; &#124; &#39;REJECTED&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **fieldsAppCustomProductPageLocalizations** | **Array<&#39;appCustomProductPageVersion&#39; &#124; &#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;locale&#39; &#124; &#39;promotionalText&#39;>** | the fields to include for returned resources of type appCustomProductPageLocalizations | (optional) defaults to undefined
 **fieldsAppCustomProductPageVersions** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39; &#124; &#39;state&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appCustomProductPageVersions | (optional) defaults to undefined
 **fieldsAppCustomProductPages** | **Array<&#39;app&#39; &#124; &#39;appCustomProductPageVersions&#39; &#124; &#39;appStoreVersionTemplate&#39; &#124; &#39;customProductPageTemplate&#39; &#124; &#39;name&#39; &#124; &#39;url&#39; &#124; &#39;visible&#39;>** | the fields to include for returned resources of type appCustomProductPages | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppCustomProductPageLocalizations** | [**number**] | maximum number of related appCustomProductPageLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppCustomProductPageVersionsResponse**

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
**200** | List of AppCustomProductPageVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCustomProductPagesCreateInstance**
> AppCustomProductPageResponse appCustomProductPagesCreateInstance(appCustomProductPageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPagesApi(configuration);

let body:.AppCustomProductPagesApiAppCustomProductPagesCreateInstanceRequest = {
  // AppCustomProductPageCreateRequest | AppCustomProductPage representation
  appCustomProductPageCreateRequest: {
    data: {
      type: "appCustomProductPages",
      attributes: {
        name: "name_example",
      },
      relationships: {
        app: {
          data: {
            type: "apps",
            id: "id_example",
          },
        },
        appCustomProductPageVersions: {
          data: [
            {
              type: "appCustomProductPageVersions",
              id: "id_example",
            },
          ],
        },
        appStoreVersionTemplate: {
          data: {
            type: "appStoreVersions",
            id: "id_example",
          },
        },
        customProductPageTemplate: {
          data: {
            type: "appCustomProductPages",
            id: "id_example",
          },
        },
      },
    },
    included: [
      null,
    ],
  },
};

apiInstance.appCustomProductPagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appCustomProductPageCreateRequest** | **AppCustomProductPageCreateRequest**| AppCustomProductPage representation |


### Return type

**AppCustomProductPageResponse**

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
**201** | Single AppCustomProductPage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCustomProductPagesDeleteInstance**
> void appCustomProductPagesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPagesApi(configuration);

let body:.AppCustomProductPagesApiAppCustomProductPagesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appCustomProductPagesDeleteInstance(body).then((data:any) => {
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

# **appCustomProductPagesGetInstance**
> AppCustomProductPageResponse appCustomProductPagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPagesApi(configuration);

let body:.AppCustomProductPagesApiAppCustomProductPagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'> | the fields to include for returned resources of type appCustomProductPages (optional)
  fieldsAppCustomProductPages: [
    "app",
  ],
  // Array<'app' | 'appCustomProductPageVersions'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'> | the fields to include for returned resources of type appCustomProductPageVersions (optional)
  fieldsAppCustomProductPageVersions: [
    "appCustomProductPage",
  ],
  // number | maximum number of related appCustomProductPageVersions returned (when they are included) (optional)
  limitAppCustomProductPageVersions: 1,
};

apiInstance.appCustomProductPagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCustomProductPages** | **Array<&#39;app&#39; &#124; &#39;appCustomProductPageVersions&#39; &#124; &#39;appStoreVersionTemplate&#39; &#124; &#39;customProductPageTemplate&#39; &#124; &#39;name&#39; &#124; &#39;url&#39; &#124; &#39;visible&#39;>** | the fields to include for returned resources of type appCustomProductPages | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appCustomProductPageVersions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppCustomProductPageVersions** | **Array<&#39;appCustomProductPage&#39; &#124; &#39;appCustomProductPageLocalizations&#39; &#124; &#39;state&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appCustomProductPageVersions | (optional) defaults to undefined
 **limitAppCustomProductPageVersions** | [**number**] | maximum number of related appCustomProductPageVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**AppCustomProductPageResponse**

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
**200** | Single AppCustomProductPage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCustomProductPagesUpdateInstance**
> AppCustomProductPageResponse appCustomProductPagesUpdateInstance(appCustomProductPageUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCustomProductPagesApi(configuration);

let body:.AppCustomProductPagesApiAppCustomProductPagesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppCustomProductPageUpdateRequest | AppCustomProductPage representation
  appCustomProductPageUpdateRequest: {
    data: {
      type: "appCustomProductPages",
      id: "id_example",
      attributes: {
        name: "name_example",
        visible: true,
      },
    },
  },
};

apiInstance.appCustomProductPagesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appCustomProductPageUpdateRequest** | **AppCustomProductPageUpdateRequest**| AppCustomProductPage representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppCustomProductPageResponse**

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
**200** | Single AppCustomProductPage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


