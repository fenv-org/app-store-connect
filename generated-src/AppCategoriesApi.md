# .AppCategoriesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appCategoriesGetCollection**](AppCategoriesApi.md#appCategoriesGetCollection) | **GET** /v1/appCategories | 
[**appCategoriesGetInstance**](AppCategoriesApi.md#appCategoriesGetInstance) | **GET** /v1/appCategories/{id} | 
[**appCategoriesParentGetToOneRelated**](AppCategoriesApi.md#appCategoriesParentGetToOneRelated) | **GET** /v1/appCategories/{id}/parent | 
[**appCategoriesSubcategoriesGetToManyRelated**](AppCategoriesApi.md#appCategoriesSubcategoriesGetToManyRelated) | **GET** /v1/appCategories/{id}/subcategories | 


# **appCategoriesGetCollection**
> AppCategoriesResponse appCategoriesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCategoriesApi(configuration);

let body:.AppCategoriesApiAppCategoriesGetCollectionRequest = {
  // Array<'IOS' | 'MAC_OS' | 'TV_OS' | 'VISION_OS'> | filter by attribute \'platforms\' (optional)
  filterPlatforms: [
    "IOS",
  ],
  // boolean | filter by existence or non-existence of related \'parent\' (optional)
  existsParent: true,
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
};

apiInstance.appCategoriesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterPlatforms** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39; &#124; &#39;TV_OS&#39; &#124; &#39;VISION_OS&#39;>** | filter by attribute \&#39;platforms\&#39; | (optional) defaults to undefined
 **existsParent** | [**boolean**] | filter by existence or non-existence of related \&#39;parent\&#39; | (optional) defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined


### Return type

**AppCategoriesResponse**

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
**200** | List of AppCategories |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCategoriesGetInstance**
> AppCategoryResponse appCategoriesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCategoriesApi(configuration);

let body:.AppCategoriesApiAppCategoriesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
};

apiInstance.appCategoriesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined


### Return type

**AppCategoryResponse**

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
**200** | Single AppCategory |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCategoriesParentGetToOneRelated**
> AppCategoryWithoutIncludesResponse appCategoriesParentGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCategoriesApi(configuration);

let body:.AppCategoriesApiAppCategoriesParentGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
};

apiInstance.appCategoriesParentGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined


### Return type

**AppCategoryWithoutIncludesResponse**

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
**200** | Single AppCategory with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appCategoriesSubcategoriesGetToManyRelated**
> AppCategoriesWithoutIncludesResponse appCategoriesSubcategoriesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppCategoriesApi(configuration);

let body:.AppCategoriesApiAppCategoriesSubcategoriesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.appCategoriesSubcategoriesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**AppCategoriesWithoutIncludesResponse**

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
**200** | List of AppCategories with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


