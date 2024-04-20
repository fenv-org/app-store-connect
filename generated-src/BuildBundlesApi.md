# .BuildBundlesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildBundlesAppClipDomainCacheStatusGetToOneRelated**](BuildBundlesApi.md#buildBundlesAppClipDomainCacheStatusGetToOneRelated) | **GET** /v1/buildBundles/{id}/appClipDomainCacheStatus | 
[**buildBundlesAppClipDomainDebugStatusGetToOneRelated**](BuildBundlesApi.md#buildBundlesAppClipDomainDebugStatusGetToOneRelated) | **GET** /v1/buildBundles/{id}/appClipDomainDebugStatus | 
[**buildBundlesBetaAppClipInvocationsGetToManyRelated**](BuildBundlesApi.md#buildBundlesBetaAppClipInvocationsGetToManyRelated) | **GET** /v1/buildBundles/{id}/betaAppClipInvocations | 
[**buildBundlesBuildBundleFileSizesGetToManyRelated**](BuildBundlesApi.md#buildBundlesBuildBundleFileSizesGetToManyRelated) | **GET** /v1/buildBundles/{id}/buildBundleFileSizes | 


# **buildBundlesAppClipDomainCacheStatusGetToOneRelated**
> AppClipDomainStatusResponse buildBundlesAppClipDomainCacheStatusGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildBundlesApi(configuration);

let body:.BuildBundlesApiBuildBundlesAppClipDomainCacheStatusGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'domains' | 'lastUpdatedDate'> | the fields to include for returned resources of type appClipDomainStatuses (optional)
  fieldsAppClipDomainStatuses: [
    "domains",
  ],
};

apiInstance.buildBundlesAppClipDomainCacheStatusGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipDomainStatuses** | **Array<&#39;domains&#39; &#124; &#39;lastUpdatedDate&#39;>** | the fields to include for returned resources of type appClipDomainStatuses | (optional) defaults to undefined


### Return type

**AppClipDomainStatusResponse**

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
**200** | Single AppClipDomainStatus |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildBundlesAppClipDomainDebugStatusGetToOneRelated**
> AppClipDomainStatusResponse buildBundlesAppClipDomainDebugStatusGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildBundlesApi(configuration);

let body:.BuildBundlesApiBuildBundlesAppClipDomainDebugStatusGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'domains' | 'lastUpdatedDate'> | the fields to include for returned resources of type appClipDomainStatuses (optional)
  fieldsAppClipDomainStatuses: [
    "domains",
  ],
};

apiInstance.buildBundlesAppClipDomainDebugStatusGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipDomainStatuses** | **Array<&#39;domains&#39; &#124; &#39;lastUpdatedDate&#39;>** | the fields to include for returned resources of type appClipDomainStatuses | (optional) defaults to undefined


### Return type

**AppClipDomainStatusResponse**

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
**200** | Single AppClipDomainStatus |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildBundlesBetaAppClipInvocationsGetToManyRelated**
> BetaAppClipInvocationsResponse buildBundlesBetaAppClipInvocationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildBundlesApi(configuration);

let body:.BuildBundlesApiBuildBundlesBetaAppClipInvocationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'betaAppClipInvocationLocalizations' | 'buildBundle' | 'url'> | the fields to include for returned resources of type betaAppClipInvocations (optional)
  fieldsBetaAppClipInvocations: [
    "betaAppClipInvocationLocalizations",
  ],
  // Array<'betaAppClipInvocation' | 'locale' | 'title'> | the fields to include for returned resources of type betaAppClipInvocationLocalizations (optional)
  fieldsBetaAppClipInvocationLocalizations: [
    "betaAppClipInvocation",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related betaAppClipInvocationLocalizations returned (when they are included) (optional)
  limitBetaAppClipInvocationLocalizations: 1,
  // Array<'betaAppClipInvocationLocalizations'> | comma-separated list of relationships to include (optional)
  include: [
    "betaAppClipInvocationLocalizations",
  ],
};

apiInstance.buildBundlesBetaAppClipInvocationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBetaAppClipInvocations** | **Array<&#39;betaAppClipInvocationLocalizations&#39; &#124; &#39;buildBundle&#39; &#124; &#39;url&#39;>** | the fields to include for returned resources of type betaAppClipInvocations | (optional) defaults to undefined
 **fieldsBetaAppClipInvocationLocalizations** | **Array<&#39;betaAppClipInvocation&#39; &#124; &#39;locale&#39; &#124; &#39;title&#39;>** | the fields to include for returned resources of type betaAppClipInvocationLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitBetaAppClipInvocationLocalizations** | [**number**] | maximum number of related betaAppClipInvocationLocalizations returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;betaAppClipInvocationLocalizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**BetaAppClipInvocationsResponse**

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
**200** | List of BetaAppClipInvocations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **buildBundlesBuildBundleFileSizesGetToManyRelated**
> BuildBundleFileSizesResponse buildBundlesBuildBundleFileSizesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BuildBundlesApi(configuration);

let body:.BuildBundlesApiBuildBundlesBuildBundleFileSizesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'deviceModel' | 'downloadBytes' | 'installBytes' | 'osVersion'> | the fields to include for returned resources of type buildBundleFileSizes (optional)
  fieldsBuildBundleFileSizes: [
    "deviceModel",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.buildBundlesBuildBundleFileSizesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBuildBundleFileSizes** | **Array<&#39;deviceModel&#39; &#124; &#39;downloadBytes&#39; &#124; &#39;installBytes&#39; &#124; &#39;osVersion&#39;>** | the fields to include for returned resources of type buildBundleFileSizes | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**BuildBundleFileSizesResponse**

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
**200** | List of BuildBundleFileSizes |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


