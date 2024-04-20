# .AppStoreVersionExperimentsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated) | **GET** /v1/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsCreateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsCreateInstance) | **POST** /v1/appStoreVersionExperiments | 
[**appStoreVersionExperimentsDeleteInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsDeleteInstance) | **DELETE** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsGetInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsGetInstance) | **GET** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsUpdateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsUpdateInstance) | **PATCH** /v1/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated) | **GET** /v2/appStoreVersionExperiments/{id}/appStoreVersionExperimentTreatments | 
[**appStoreVersionExperimentsV2CreateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2CreateInstance) | **POST** /v2/appStoreVersionExperiments | 
[**appStoreVersionExperimentsV2DeleteInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2DeleteInstance) | **DELETE** /v2/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2GetInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2GetInstance) | **GET** /v2/appStoreVersionExperiments/{id} | 
[**appStoreVersionExperimentsV2UpdateInstance**](AppStoreVersionExperimentsApi.md#appStoreVersionExperimentsV2UpdateInstance) | **PATCH** /v2/appStoreVersionExperiments/{id} | 


# **appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated**
> AppStoreVersionExperimentTreatmentsResponse appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatmentLocalizations: 1,
  // Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersionExperiment",
  ],
};

apiInstance.appStoreVersionExperimentsAppStoreVersionExperimentTreatmentsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatmentLocalizations** | [**number**] | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentsResponse**

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
**200** | List of AppStoreVersionExperimentTreatments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsCreateInstance**
> AppStoreVersionExperimentResponse appStoreVersionExperimentsCreateInstance(appStoreVersionExperimentCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsCreateInstanceRequest = {
  // AppStoreVersionExperimentCreateRequest | AppStoreVersionExperiment representation
  appStoreVersionExperimentCreateRequest: {
    data: {
      type: "appStoreVersionExperiments",
      attributes: {
        name: "name_example",
        trafficProportion: 1,
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

apiInstance.appStoreVersionExperimentsCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentCreateRequest** | **AppStoreVersionExperimentCreateRequest**| AppStoreVersionExperiment representation |


### Return type

**AppStoreVersionExperimentResponse**

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
**201** | Single AppStoreVersionExperiment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsDeleteInstance**
> void appStoreVersionExperimentsDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionExperimentsDeleteInstance(body).then((data:any) => {
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

# **appStoreVersionExperimentsGetInstance**
> AppStoreVersionExperimentResponse appStoreVersionExperimentsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "appStoreVersion",
  ],
  // Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersion",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatments: 1,
};

apiInstance.appStoreVersionExperimentsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;endDate&#39; &#124; &#39;name&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatments** | [**number**] | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentResponse**

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
**200** | Single AppStoreVersionExperiment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsUpdateInstance**
> AppStoreVersionExperimentResponse appStoreVersionExperimentsUpdateInstance(appStoreVersionExperimentUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionExperimentUpdateRequest | AppStoreVersionExperiment representation
  appStoreVersionExperimentUpdateRequest: {
    data: {
      type: "appStoreVersionExperiments",
      id: "id_example",
      attributes: {
        name: "name_example",
        trafficProportion: 1,
        started: true,
      },
    },
  },
};

apiInstance.appStoreVersionExperimentsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentUpdateRequest** | **AppStoreVersionExperimentUpdateRequest**| AppStoreVersionExperiment representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionExperimentResponse**

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
**200** | Single AppStoreVersionExperiment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated**
> AppStoreVersionExperimentTreatmentsResponse appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'> | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations (optional)
  fieldsAppStoreVersionExperimentTreatmentLocalizations: [
    "appPreviewSets",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatmentLocalizations: 1,
  // Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2'> | comma-separated list of relationships to include (optional)
  include: [
    "appStoreVersionExperiment",
  ],
};

apiInstance.appStoreVersionExperimentsV2AppStoreVersionExperimentTreatmentsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersion&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatmentLocalizations** | **Array<&#39;appPreviewSets&#39; &#124; &#39;appScreenshotSets&#39; &#124; &#39;appStoreVersionExperimentTreatment&#39; &#124; &#39;locale&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatmentLocalizations** | [**number**] | maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentTreatmentsResponse**

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
**200** | List of AppStoreVersionExperimentTreatments |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsV2CreateInstance**
> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2CreateInstance(appStoreVersionExperimentV2CreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsV2CreateInstanceRequest = {
  // AppStoreVersionExperimentV2CreateRequest | AppStoreVersionExperiment representation
  appStoreVersionExperimentV2CreateRequest: {
    data: {
      type: "appStoreVersionExperiments",
      attributes: {
        name: "name_example",
        platform: "IOS",
        trafficProportion: 1,
      },
      relationships: {
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

apiInstance.appStoreVersionExperimentsV2CreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentV2CreateRequest** | **AppStoreVersionExperimentV2CreateRequest**| AppStoreVersionExperiment representation |


### Return type

**AppStoreVersionExperimentV2Response**

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
**201** | Single AppStoreVersionExperiment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsV2DeleteInstance**
> void appStoreVersionExperimentsV2DeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsV2DeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.appStoreVersionExperimentsV2DeleteInstance(body).then((data:any) => {
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

# **appStoreVersionExperimentsV2GetInstance**
> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2GetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsV2GetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'endDate' | 'latestControlVersion' | 'name' | 'platform' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'> | the fields to include for returned resources of type appStoreVersionExperiments (optional)
  fieldsAppStoreVersionExperiments: [
    "app",
  ],
  // Array<'app' | 'appStoreVersionExperimentTreatments' | 'controlVersions' | 'latestControlVersion'> | comma-separated list of relationships to include (optional)
  include: [
    "app",
  ],
  // Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'> | the fields to include for returned resources of type appStoreVersionExperimentTreatments (optional)
  fieldsAppStoreVersionExperimentTreatments: [
    "appIcon",
  ],
  // number | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) (optional)
  limitAppStoreVersionExperimentTreatments: 1,
  // number | maximum number of related controlVersions returned (when they are included) (optional)
  limitControlVersions: 1,
};

apiInstance.appStoreVersionExperimentsV2GetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppStoreVersionExperiments** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;endDate&#39; &#124; &#39;latestControlVersion&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;reviewRequired&#39; &#124; &#39;startDate&#39; &#124; &#39;started&#39; &#124; &#39;state&#39; &#124; &#39;trafficProportion&#39;>** | the fields to include for returned resources of type appStoreVersionExperiments | (optional) defaults to undefined
 **include** | **Array<&#39;app&#39; &#124; &#39;appStoreVersionExperimentTreatments&#39; &#124; &#39;controlVersions&#39; &#124; &#39;latestControlVersion&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAppStoreVersionExperimentTreatments** | **Array<&#39;appIcon&#39; &#124; &#39;appIconName&#39; &#124; &#39;appStoreVersionExperiment&#39; &#124; &#39;appStoreVersionExperimentTreatmentLocalizations&#39; &#124; &#39;appStoreVersionExperimentV2&#39; &#124; &#39;name&#39; &#124; &#39;promotedDate&#39;>** | the fields to include for returned resources of type appStoreVersionExperimentTreatments | (optional) defaults to undefined
 **limitAppStoreVersionExperimentTreatments** | [**number**] | maximum number of related appStoreVersionExperimentTreatments returned (when they are included) | (optional) defaults to undefined
 **limitControlVersions** | [**number**] | maximum number of related controlVersions returned (when they are included) | (optional) defaults to undefined


### Return type

**AppStoreVersionExperimentV2Response**

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
**200** | Single AppStoreVersionExperiment |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appStoreVersionExperimentsV2UpdateInstance**
> AppStoreVersionExperimentV2Response appStoreVersionExperimentsV2UpdateInstance(appStoreVersionExperimentV2UpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppStoreVersionExperimentsApi(configuration);

let body:.AppStoreVersionExperimentsApiAppStoreVersionExperimentsV2UpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppStoreVersionExperimentV2UpdateRequest | AppStoreVersionExperiment representation
  appStoreVersionExperimentV2UpdateRequest: {
    data: {
      type: "appStoreVersionExperiments",
      id: "id_example",
      attributes: {
        name: "name_example",
        trafficProportion: 1,
        started: true,
      },
    },
  },
};

apiInstance.appStoreVersionExperimentsV2UpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appStoreVersionExperimentV2UpdateRequest** | **AppStoreVersionExperimentV2UpdateRequest**| AppStoreVersionExperiment representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppStoreVersionExperimentV2Response**

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
**200** | Single AppStoreVersionExperiment |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


