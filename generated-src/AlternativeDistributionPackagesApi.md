# .AlternativeDistributionPackagesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alternativeDistributionPackagesCreateInstance**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesCreateInstance) | **POST** /v1/alternativeDistributionPackages | 
[**alternativeDistributionPackagesGetInstance**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesGetInstance) | **GET** /v1/alternativeDistributionPackages/{id} | 
[**alternativeDistributionPackagesVersionsGetToManyRelated**](AlternativeDistributionPackagesApi.md#alternativeDistributionPackagesVersionsGetToManyRelated) | **GET** /v1/alternativeDistributionPackages/{id}/versions | 


# **alternativeDistributionPackagesCreateInstance**
> AlternativeDistributionPackageResponse alternativeDistributionPackagesCreateInstance(alternativeDistributionPackageCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackagesApi(configuration);

let body:.AlternativeDistributionPackagesApiAlternativeDistributionPackagesCreateInstanceRequest = {
  // AlternativeDistributionPackageCreateRequest | AlternativeDistributionPackage representation
  alternativeDistributionPackageCreateRequest: {
    data: {
      type: "alternativeDistributionPackages",
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

apiInstance.alternativeDistributionPackagesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alternativeDistributionPackageCreateRequest** | **AlternativeDistributionPackageCreateRequest**| AlternativeDistributionPackage representation |


### Return type

**AlternativeDistributionPackageResponse**

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
**201** | Single AlternativeDistributionPackage |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionPackagesGetInstance**
> AlternativeDistributionPackageResponse alternativeDistributionPackagesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackagesApi(configuration);

let body:.AlternativeDistributionPackagesApiAlternativeDistributionPackagesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'appStoreVersion' | 'versions'> | the fields to include for returned resources of type alternativeDistributionPackages (optional)
  fieldsAlternativeDistributionPackages: [
    "appStoreVersion",
  ],
  // Array<'versions'> | comma-separated list of relationships to include (optional)
  include: [
    "versions",
  ],
  // Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'> | the fields to include for returned resources of type alternativeDistributionPackageVersions (optional)
  fieldsAlternativeDistributionPackageVersions: [
    "alternativeDistributionPackage",
  ],
  // number | maximum number of related versions returned (when they are included) (optional)
  limitVersions: 1,
};

apiInstance.alternativeDistributionPackagesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAlternativeDistributionPackages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;versions&#39;>** | the fields to include for returned resources of type alternativeDistributionPackages | (optional) defaults to undefined
 **include** | **Array<&#39;versions&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageVersions** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39; &#124; &#39;variants&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVersions | (optional) defaults to undefined
 **limitVersions** | [**number**] | maximum number of related versions returned (when they are included) | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageResponse**

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
**200** | Single AlternativeDistributionPackage |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **alternativeDistributionPackagesVersionsGetToManyRelated**
> AlternativeDistributionPackageVersionsResponse alternativeDistributionPackagesVersionsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AlternativeDistributionPackagesApi(configuration);

let body:.AlternativeDistributionPackagesApiAlternativeDistributionPackagesVersionsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'COMPLETED' | 'REPLACED'> | filter by attribute \'state\' (optional)
  filterState: [
    "COMPLETED",
  ],
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageVariants (optional)
  fieldsAlternativeDistributionPackageVariants: [
    "alternativeDistributionKeyBlob",
  ],
  // Array<'appStoreVersion' | 'versions'> | the fields to include for returned resources of type alternativeDistributionPackages (optional)
  fieldsAlternativeDistributionPackages: [
    "appStoreVersion",
  ],
  // Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'> | the fields to include for returned resources of type alternativeDistributionPackageVersions (optional)
  fieldsAlternativeDistributionPackageVersions: [
    "alternativeDistributionPackage",
  ],
  // Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'> | the fields to include for returned resources of type alternativeDistributionPackageDeltas (optional)
  fieldsAlternativeDistributionPackageDeltas: [
    "alternativeDistributionKeyBlob",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // number | maximum number of related variants returned (when they are included) (optional)
  limitVariants: 1,
  // number | maximum number of related deltas returned (when they are included) (optional)
  limitDeltas: 1,
  // Array<'alternativeDistributionPackage' | 'deltas' | 'variants'> | comma-separated list of relationships to include (optional)
  include: [
    "alternativeDistributionPackage",
  ],
};

apiInstance.alternativeDistributionPackagesVersionsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterState** | **Array<&#39;COMPLETED&#39; &#124; &#39;REPLACED&#39;>** | filter by attribute \&#39;state\&#39; | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageVariants** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVariants | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackages** | **Array<&#39;appStoreVersion&#39; &#124; &#39;versions&#39;>** | the fields to include for returned resources of type alternativeDistributionPackages | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageVersions** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;state&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39; &#124; &#39;variants&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageVersions | (optional) defaults to undefined
 **fieldsAlternativeDistributionPackageDeltas** | **Array<&#39;alternativeDistributionKeyBlob&#39; &#124; &#39;fileChecksum&#39; &#124; &#39;url&#39; &#124; &#39;urlExpirationDate&#39;>** | the fields to include for returned resources of type alternativeDistributionPackageDeltas | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **limitVariants** | [**number**] | maximum number of related variants returned (when they are included) | (optional) defaults to undefined
 **limitDeltas** | [**number**] | maximum number of related deltas returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;alternativeDistributionPackage&#39; &#124; &#39;deltas&#39; &#124; &#39;variants&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AlternativeDistributionPackageVersionsResponse**

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
**200** | List of AlternativeDistributionPackageVersions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


