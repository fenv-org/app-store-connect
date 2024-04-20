# .AppInfosApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appInfosAgeRatingDeclarationGetToOneRelated**](AppInfosApi.md#appInfosAgeRatingDeclarationGetToOneRelated) | **GET** /v1/appInfos/{id}/ageRatingDeclaration | 
[**appInfosAppInfoLocalizationsGetToManyRelated**](AppInfosApi.md#appInfosAppInfoLocalizationsGetToManyRelated) | **GET** /v1/appInfos/{id}/appInfoLocalizations | 
[**appInfosGetInstance**](AppInfosApi.md#appInfosGetInstance) | **GET** /v1/appInfos/{id} | 
[**appInfosPrimaryCategoryGetToOneRelated**](AppInfosApi.md#appInfosPrimaryCategoryGetToOneRelated) | **GET** /v1/appInfos/{id}/primaryCategory | 
[**appInfosPrimarySubcategoryOneGetToOneRelated**](AppInfosApi.md#appInfosPrimarySubcategoryOneGetToOneRelated) | **GET** /v1/appInfos/{id}/primarySubcategoryOne | 
[**appInfosPrimarySubcategoryTwoGetToOneRelated**](AppInfosApi.md#appInfosPrimarySubcategoryTwoGetToOneRelated) | **GET** /v1/appInfos/{id}/primarySubcategoryTwo | 
[**appInfosSecondaryCategoryGetToOneRelated**](AppInfosApi.md#appInfosSecondaryCategoryGetToOneRelated) | **GET** /v1/appInfos/{id}/secondaryCategory | 
[**appInfosSecondarySubcategoryOneGetToOneRelated**](AppInfosApi.md#appInfosSecondarySubcategoryOneGetToOneRelated) | **GET** /v1/appInfos/{id}/secondarySubcategoryOne | 
[**appInfosSecondarySubcategoryTwoGetToOneRelated**](AppInfosApi.md#appInfosSecondarySubcategoryTwoGetToOneRelated) | **GET** /v1/appInfos/{id}/secondarySubcategoryTwo | 
[**appInfosUpdateInstance**](AppInfosApi.md#appInfosUpdateInstance) | **PATCH** /v1/appInfos/{id} | 


# **appInfosAgeRatingDeclarationGetToOneRelated**
> AgeRatingDeclarationResponse appInfosAgeRatingDeclarationGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosAgeRatingDeclarationGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'> | the fields to include for returned resources of type ageRatingDeclarations (optional)
  fieldsAgeRatingDeclarations: [
    "ageRatingOverride",
  ],
};

apiInstance.appInfosAgeRatingDeclarationGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAgeRatingDeclarations** | **Array<&#39;ageRatingOverride&#39; &#124; &#39;alcoholTobaccoOrDrugUseOrReferences&#39; &#124; &#39;contests&#39; &#124; &#39;gambling&#39; &#124; &#39;gamblingAndContests&#39; &#124; &#39;gamblingSimulated&#39; &#124; &#39;horrorOrFearThemes&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;matureOrSuggestiveThemes&#39; &#124; &#39;medicalOrTreatmentInformation&#39; &#124; &#39;profanityOrCrudeHumor&#39; &#124; &#39;seventeenPlus&#39; &#124; &#39;sexualContentGraphicAndNudity&#39; &#124; &#39;sexualContentOrNudity&#39; &#124; &#39;unrestrictedWebAccess&#39; &#124; &#39;violenceCartoonOrFantasy&#39; &#124; &#39;violenceRealistic&#39; &#124; &#39;violenceRealisticProlongedGraphicOrSadistic&#39;>** | the fields to include for returned resources of type ageRatingDeclarations | (optional) defaults to undefined


### Return type

**AgeRatingDeclarationResponse**

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
**200** | Single AgeRatingDeclaration |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appInfosAppInfoLocalizationsGetToManyRelated**
> AppInfoLocalizationsResponse appInfosAppInfoLocalizationsGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosAppInfoLocalizationsGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<string> | filter by attribute \'locale\' (optional)
  filterLocale: [
    "filter[locale]_example",
  ],
  // Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'> | the fields to include for returned resources of type appInfos (optional)
  fieldsAppInfos: [
    "ageRatingDeclaration",
  ],
  // Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'> | the fields to include for returned resources of type appInfoLocalizations (optional)
  fieldsAppInfoLocalizations: [
    "appInfo",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'appInfo'> | comma-separated list of relationships to include (optional)
  include: [
    "appInfo",
  ],
};

apiInstance.appInfosAppInfoLocalizationsGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **filterLocale** | **Array&lt;string&gt;** | filter by attribute \&#39;locale\&#39; | (optional) defaults to undefined
 **fieldsAppInfos** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;app&#39; &#124; &#39;appInfoLocalizations&#39; &#124; &#39;appStoreAgeRating&#39; &#124; &#39;appStoreState&#39; &#124; &#39;brazilAgeRating&#39; &#124; &#39;brazilAgeRatingV2&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;primaryCategory&#39; &#124; &#39;primarySubcategoryOne&#39; &#124; &#39;primarySubcategoryTwo&#39; &#124; &#39;secondaryCategory&#39; &#124; &#39;secondarySubcategoryOne&#39; &#124; &#39;secondarySubcategoryTwo&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type appInfos | (optional) defaults to undefined
 **fieldsAppInfoLocalizations** | **Array<&#39;appInfo&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;privacyChoicesUrl&#39; &#124; &#39;privacyPolicyText&#39; &#124; &#39;privacyPolicyUrl&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appInfoLocalizations | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;appInfo&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


### Return type

**AppInfoLocalizationsResponse**

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
**200** | List of AppInfoLocalizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appInfosGetInstance**
> AppInfoResponse appInfosGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'> | the fields to include for returned resources of type appInfos (optional)
  fieldsAppInfos: [
    "ageRatingDeclaration",
  ],
  // Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo'> | comma-separated list of relationships to include (optional)
  include: [
    "ageRatingDeclaration",
  ],
  // Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'> | the fields to include for returned resources of type ageRatingDeclarations (optional)
  fieldsAgeRatingDeclarations: [
    "ageRatingOverride",
  ],
  // Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'> | the fields to include for returned resources of type appInfoLocalizations (optional)
  fieldsAppInfoLocalizations: [
    "appInfo",
  ],
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related appInfoLocalizations returned (when they are included) (optional)
  limitAppInfoLocalizations: 1,
};

apiInstance.appInfosGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppInfos** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;app&#39; &#124; &#39;appInfoLocalizations&#39; &#124; &#39;appStoreAgeRating&#39; &#124; &#39;appStoreState&#39; &#124; &#39;brazilAgeRating&#39; &#124; &#39;brazilAgeRatingV2&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;primaryCategory&#39; &#124; &#39;primarySubcategoryOne&#39; &#124; &#39;primarySubcategoryTwo&#39; &#124; &#39;secondaryCategory&#39; &#124; &#39;secondarySubcategoryOne&#39; &#124; &#39;secondarySubcategoryTwo&#39; &#124; &#39;state&#39;>** | the fields to include for returned resources of type appInfos | (optional) defaults to undefined
 **include** | **Array<&#39;ageRatingDeclaration&#39; &#124; &#39;app&#39; &#124; &#39;appInfoLocalizations&#39; &#124; &#39;primaryCategory&#39; &#124; &#39;primarySubcategoryOne&#39; &#124; &#39;primarySubcategoryTwo&#39; &#124; &#39;secondaryCategory&#39; &#124; &#39;secondarySubcategoryOne&#39; &#124; &#39;secondarySubcategoryTwo&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsAgeRatingDeclarations** | **Array<&#39;ageRatingOverride&#39; &#124; &#39;alcoholTobaccoOrDrugUseOrReferences&#39; &#124; &#39;contests&#39; &#124; &#39;gambling&#39; &#124; &#39;gamblingAndContests&#39; &#124; &#39;gamblingSimulated&#39; &#124; &#39;horrorOrFearThemes&#39; &#124; &#39;kidsAgeBand&#39; &#124; &#39;matureOrSuggestiveThemes&#39; &#124; &#39;medicalOrTreatmentInformation&#39; &#124; &#39;profanityOrCrudeHumor&#39; &#124; &#39;seventeenPlus&#39; &#124; &#39;sexualContentGraphicAndNudity&#39; &#124; &#39;sexualContentOrNudity&#39; &#124; &#39;unrestrictedWebAccess&#39; &#124; &#39;violenceCartoonOrFantasy&#39; &#124; &#39;violenceRealistic&#39; &#124; &#39;violenceRealisticProlongedGraphicOrSadistic&#39;>** | the fields to include for returned resources of type ageRatingDeclarations | (optional) defaults to undefined
 **fieldsAppInfoLocalizations** | **Array<&#39;appInfo&#39; &#124; &#39;locale&#39; &#124; &#39;name&#39; &#124; &#39;privacyChoicesUrl&#39; &#124; &#39;privacyPolicyText&#39; &#124; &#39;privacyPolicyUrl&#39; &#124; &#39;subtitle&#39;>** | the fields to include for returned resources of type appInfoLocalizations | (optional) defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitAppInfoLocalizations** | [**number**] | maximum number of related appInfoLocalizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppInfoResponse**

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
**200** | Single AppInfo |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appInfosPrimaryCategoryGetToOneRelated**
> AppCategoryResponse appInfosPrimaryCategoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosPrimaryCategoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosPrimaryCategoryGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosPrimarySubcategoryOneGetToOneRelated**
> AppCategoryResponse appInfosPrimarySubcategoryOneGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosPrimarySubcategoryOneGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosPrimarySubcategoryOneGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosPrimarySubcategoryTwoGetToOneRelated**
> AppCategoryResponse appInfosPrimarySubcategoryTwoGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosPrimarySubcategoryTwoGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosPrimarySubcategoryTwoGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosSecondaryCategoryGetToOneRelated**
> AppCategoryResponse appInfosSecondaryCategoryGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosSecondaryCategoryGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosSecondaryCategoryGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosSecondarySubcategoryOneGetToOneRelated**
> AppCategoryResponse appInfosSecondarySubcategoryOneGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosSecondarySubcategoryOneGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosSecondarySubcategoryOneGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosSecondarySubcategoryTwoGetToOneRelated**
> AppCategoryResponse appInfosSecondarySubcategoryTwoGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosSecondarySubcategoryTwoGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'parent' | 'platforms' | 'subcategories'> | the fields to include for returned resources of type appCategories (optional)
  fieldsAppCategories: [
    "parent",
  ],
  // number | maximum number of related subcategories returned (when they are included) (optional)
  limitSubcategories: 1,
  // Array<'parent' | 'subcategories'> | comma-separated list of relationships to include (optional)
  include: [
    "parent",
  ],
};

apiInstance.appInfosSecondarySubcategoryTwoGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppCategories** | **Array<&#39;parent&#39; &#124; &#39;platforms&#39; &#124; &#39;subcategories&#39;>** | the fields to include for returned resources of type appCategories | (optional) defaults to undefined
 **limitSubcategories** | [**number**] | maximum number of related subcategories returned (when they are included) | (optional) defaults to undefined
 **include** | **Array<&#39;parent&#39; &#124; &#39;subcategories&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined


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

# **appInfosUpdateInstance**
> AppInfoResponse appInfosUpdateInstance(appInfoUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppInfosApi(configuration);

let body:.AppInfosApiAppInfosUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppInfoUpdateRequest | AppInfo representation
  appInfoUpdateRequest: {
    data: {
      type: "appInfos",
      id: "id_example",
      relationships: {
        primaryCategory: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
        primarySubcategoryOne: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
        primarySubcategoryTwo: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
        secondaryCategory: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
        secondarySubcategoryOne: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
        secondarySubcategoryTwo: {
          data: {
            type: "appCategories",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.appInfosUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appInfoUpdateRequest** | **AppInfoUpdateRequest**| AppInfo representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppInfoResponse**

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
**200** | Single AppInfo |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


