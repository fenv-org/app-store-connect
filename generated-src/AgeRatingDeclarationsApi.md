# .AgeRatingDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ageRatingDeclarationsUpdateInstance**](AgeRatingDeclarationsApi.md#ageRatingDeclarationsUpdateInstance) | **PATCH** /v1/ageRatingDeclarations/{id} | 


# **ageRatingDeclarationsUpdateInstance**
> AgeRatingDeclarationResponse ageRatingDeclarationsUpdateInstance(ageRatingDeclarationUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AgeRatingDeclarationsApi(configuration);

let body:.AgeRatingDeclarationsApiAgeRatingDeclarationsUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // AgeRatingDeclarationUpdateRequest | AgeRatingDeclaration representation
  ageRatingDeclarationUpdateRequest: {
    data: {
      type: "ageRatingDeclarations",
      id: "id_example",
      attributes: {
        alcoholTobaccoOrDrugUseOrReferences: "NONE",
        contests: "NONE",
        gamblingAndContests: true,
        gambling: true,
        gamblingSimulated: "NONE",
        kidsAgeBand: "FIVE_AND_UNDER",
        medicalOrTreatmentInformation: "NONE",
        profanityOrCrudeHumor: "NONE",
        sexualContentGraphicAndNudity: "NONE",
        sexualContentOrNudity: "NONE",
        seventeenPlus: true,
        ageRatingOverride: "NONE",
        horrorOrFearThemes: "NONE",
        matureOrSuggestiveThemes: "NONE",
        unrestrictedWebAccess: true,
        violenceCartoonOrFantasy: "NONE",
        violenceRealisticProlongedGraphicOrSadistic: "NONE",
        violenceRealistic: "NONE",
      },
    },
  },
};

apiInstance.ageRatingDeclarationsUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ageRatingDeclarationUpdateRequest** | **AgeRatingDeclarationUpdateRequest**| AgeRatingDeclaration representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**AgeRatingDeclarationResponse**

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
**200** | Single AgeRatingDeclaration |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


