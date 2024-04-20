# .AppClipAdvancedExperiencesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appClipAdvancedExperiencesCreateInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesCreateInstance) | **POST** /v1/appClipAdvancedExperiences | 
[**appClipAdvancedExperiencesGetInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesGetInstance) | **GET** /v1/appClipAdvancedExperiences/{id} | 
[**appClipAdvancedExperiencesUpdateInstance**](AppClipAdvancedExperiencesApi.md#appClipAdvancedExperiencesUpdateInstance) | **PATCH** /v1/appClipAdvancedExperiences/{id} | 


# **appClipAdvancedExperiencesCreateInstance**
> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesCreateInstance(appClipAdvancedExperienceCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperiencesApi(configuration);

let body:.AppClipAdvancedExperiencesApiAppClipAdvancedExperiencesCreateInstanceRequest = {
  // AppClipAdvancedExperienceCreateRequest | AppClipAdvancedExperience representation
  appClipAdvancedExperienceCreateRequest: {
    data: {
      type: "appClipAdvancedExperiences",
      attributes: {
        link: "link_example",
        action: "OPEN",
        isPoweredBy: true,
        place: {
          placeId: "placeId_example",
          names: [
            "names_example",
          ],
          mainAddress: {
            fullAddress: "fullAddress_example",
            structuredAddress: {
              streetAddress: [
                "streetAddress_example",
              ],
              floor: "floor_example",
              neighborhood: "neighborhood_example",
              locality: "locality_example",
              stateProvince: "stateProvince_example",
              postalCode: "postalCode_example",
              countryCode: "countryCode_example",
            },
          },
          displayPoint: {
            coordinates: {
              latitude: 3.14,
              longitude: 3.14,
            },
            source: "CALCULATED",
          },
          mapAction: "BUY_TICKETS",
          relationship: "OWNER",
          phoneNumber: {
            number: "number_example",
            type: "FAX",
            intent: "intent_example",
          },
          homePage: "homePage_example",
          categories: [
            "categories_example",
          ],
        },
        businessCategory: "AUTOMOTIVE",
        defaultLanguage: "AR",
      },
      relationships: {
        appClip: {
          data: {
            type: "appClips",
            id: "id_example",
          },
        },
        headerImage: {
          data: {
            type: "appClipAdvancedExperienceImages",
            id: "id_example",
          },
        },
        localizations: {
          data: [
            {
              type: "appClipAdvancedExperienceLocalizations",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "appClipAdvancedExperienceLocalizations",
        id: "id_example",
        attributes: {
          language: "AR",
          title: "title_example",
          subtitle: "subtitle_example",
        },
      },
    ],
  },
};

apiInstance.appClipAdvancedExperiencesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAdvancedExperienceCreateRequest** | **AppClipAdvancedExperienceCreateRequest**| AppClipAdvancedExperience representation |


### Return type

**AppClipAdvancedExperienceResponse**

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
**201** | Single AppClipAdvancedExperience |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAdvancedExperiencesGetInstance**
> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperiencesApi(configuration);

let body:.AppClipAdvancedExperiencesApiAppClipAdvancedExperiencesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'> | the fields to include for returned resources of type appClipAdvancedExperiences (optional)
  fieldsAppClipAdvancedExperiences: [
    "action",
  ],
  // Array<'appClip' | 'headerImage' | 'localizations'> | comma-separated list of relationships to include (optional)
  include: [
    "appClip",
  ],
  // number | maximum number of related localizations returned (when they are included) (optional)
  limitLocalizations: 1,
};

apiInstance.appClipAdvancedExperiencesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsAppClipAdvancedExperiences** | **Array<&#39;action&#39; &#124; &#39;appClip&#39; &#124; &#39;businessCategory&#39; &#124; &#39;defaultLanguage&#39; &#124; &#39;headerImage&#39; &#124; &#39;isPoweredBy&#39; &#124; &#39;link&#39; &#124; &#39;localizations&#39; &#124; &#39;place&#39; &#124; &#39;placeStatus&#39; &#124; &#39;removed&#39; &#124; &#39;status&#39; &#124; &#39;version&#39;>** | the fields to include for returned resources of type appClipAdvancedExperiences | (optional) defaults to undefined
 **include** | **Array<&#39;appClip&#39; &#124; &#39;headerImage&#39; &#124; &#39;localizations&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **limitLocalizations** | [**number**] | maximum number of related localizations returned (when they are included) | (optional) defaults to undefined


### Return type

**AppClipAdvancedExperienceResponse**

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
**200** | Single AppClipAdvancedExperience |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appClipAdvancedExperiencesUpdateInstance**
> AppClipAdvancedExperienceResponse appClipAdvancedExperiencesUpdateInstance(appClipAdvancedExperienceUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppClipAdvancedExperiencesApi(configuration);

let body:.AppClipAdvancedExperiencesApiAppClipAdvancedExperiencesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AppClipAdvancedExperienceUpdateRequest | AppClipAdvancedExperience representation
  appClipAdvancedExperienceUpdateRequest: {
    data: {
      type: "appClipAdvancedExperiences",
      id: "id_example",
      attributes: {
        action: "OPEN",
        isPoweredBy: true,
        place: {
          placeId: "placeId_example",
          names: [
            "names_example",
          ],
          mainAddress: {
            fullAddress: "fullAddress_example",
            structuredAddress: {
              streetAddress: [
                "streetAddress_example",
              ],
              floor: "floor_example",
              neighborhood: "neighborhood_example",
              locality: "locality_example",
              stateProvince: "stateProvince_example",
              postalCode: "postalCode_example",
              countryCode: "countryCode_example",
            },
          },
          displayPoint: {
            coordinates: {
              latitude: 3.14,
              longitude: 3.14,
            },
            source: "CALCULATED",
          },
          mapAction: "BUY_TICKETS",
          relationship: "OWNER",
          phoneNumber: {
            number: "number_example",
            type: "FAX",
            intent: "intent_example",
          },
          homePage: "homePage_example",
          categories: [
            "categories_example",
          ],
        },
        businessCategory: "AUTOMOTIVE",
        defaultLanguage: "AR",
        removed: true,
      },
      relationships: {
        appClip: {
          data: {
            type: "appClips",
            id: "id_example",
          },
        },
        headerImage: {
          data: {
            type: "appClipAdvancedExperienceImages",
            id: "id_example",
          },
        },
        localizations: {
          data: [
            {
              type: "appClipAdvancedExperienceLocalizations",
              id: "id_example",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "appClipAdvancedExperienceLocalizations",
        id: "id_example",
        attributes: {
          language: "AR",
          title: "title_example",
          subtitle: "subtitle_example",
        },
      },
    ],
  },
};

apiInstance.appClipAdvancedExperiencesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appClipAdvancedExperienceUpdateRequest** | **AppClipAdvancedExperienceUpdateRequest**| AppClipAdvancedExperience representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AppClipAdvancedExperienceResponse**

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
**200** | Single AppClipAdvancedExperience |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


