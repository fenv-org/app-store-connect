# .AlternativeDistributionPackageVersionsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionPackageVersionsDeltasGetToManyRelated**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsDeltasGetToManyRelated) | **GET** /v1/alternativeDistributionPackageVersions/{id}/deltas | 
[**alternativeDistributionPackageVersionsGetInstance**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsGetInstance) | **GET** /v1/alternativeDistributionPackageVersions/{id} | 
[**alternativeDistributionPackageVersionsVariantsGetToManyRelated**](AlternativeDistributionPackageVersionsApi.md#alternativeDistributionPackageVersionsVariantsGetToManyRelated) | **GET** /v1/alternativeDistributionPackageVersions/{id}/variants | 


# **alternativeDistributionPackageVersionsDeltasGetToManyRelated**
> AlternativeDistributionPackageDeltasResponse alternativeDistributionPackageVersionsDeltasGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackageVersionsApi(configuration);

let body:.AlternativeDistributionPackageVersionsApiAlternativeDistributionPackageVersionsDeltasGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageDeltas (optional)
  fieldsAlternativeDistributionPackageDeltas: [
    "alternativeDistributionKeyBlob",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.alternativeDistributionPackageVersionsDeltasGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackageDeltas** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageDeltas | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageDeltasResponse**

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
**200** | List of AlternativeDistributionPackageDeltas |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionPackageVersionsGetInstance**
> AlternativeDistributionPackageVersionResponse alternativeDistributionPackageVersionsGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackageVersionsApi(configuration);

let body:.AlternativeDistributionPackageVersionsApiAlternativeDistributionPackageVersionsGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'> | the fields to include for returned resources of type alternativeDistributionPackageVersions (optional)
  fieldsAlternativeDistributionPackageVersions: [
    "alternativeDistributionPackage",
  ],
  // Array<'alternativeDistributionPackage' | 'deltas' | 'variants'> | comma-separated list of relationships to include (optional)
  include: [
    "alternativeDistributionPackage",
  ],
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageVariants (optional)
  fieldsAlternativeDistributionPackageVariants: [
    "alternativeDistributionKeyBlob",
  ],
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageDeltas (optional)
  fieldsAlternativeDistributionPackageDeltas: [
    "alternativeDistributionKeyBlob",
  ],
  // number | maximum number of related deltas returned (when they are included) (optional)
  limitDeltas: 1,
  // number | maximum number of related variants returned (when they are included) (optional)
  limitVariants: 1,
};

apiInstance.alternativeDistributionPackageVersionsGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackageVersions** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39; &#124; &#39;variants&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVersions | (optional) defaults to undefined
 **include** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;variants&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageVariants** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVariants | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageDeltas** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageDeltas | (optional) defaults to undefined
 **limitDeltas** | [**number**] | maximum number of related deltas returned (when they are included) | (optional) defaults to undefined
 **limitVariants** | [**number**] | maximum number of related variants returned (when they are included) | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageVersionResponse**

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
**200** | Single AlternativeDistributionPackageVersion |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionPackageVersionsVariantsGetToManyRelated**
> AlternativeDistributionPackageVariantsResponse alternativeDistributionPackageVersionsVariantsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackageVersionsApi(configuration);

let body:.AlternativeDistributionPackageVersionsApiAlternativeDistributionPackageVersionsVariantsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageVariants (optional)
  fieldsAlternativeDistributionPackageVariants: [
    "alternativeDistributionKeyBlob",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.alternativeDistributionPackageVersionsVariantsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackageVariants** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVariants | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageVariantsResponse**

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
**200** | List of AlternativeDistributionPackageVariants |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


