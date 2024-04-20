# .ProfilesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profilesBundleIdGetToOneRelated**](ProfilesApi.md#profilesBundleIdGetToOneRelated) | **GET** /v1/profiles/{id}/bundleId | 
[**profilesCertificatesGetToManyRelated**](ProfilesApi.md#profilesCertificatesGetToManyRelated) | **GET** /v1/profiles/{id}/certificates | 
[**profilesCreateInstance**](ProfilesApi.md#profilesCreateInstance) | **POST** /v1/profiles | 
[**profilesDeleteInstance**](ProfilesApi.md#profilesDeleteInstance) | **DELETE** /v1/profiles/{id} | 
[**profilesDevicesGetToManyRelated**](ProfilesApi.md#profilesDevicesGetToManyRelated) | **GET** /v1/profiles/{id}/devices | 
[**profilesGetCollection**](ProfilesApi.md#profilesGetCollection) | **GET** /v1/profiles | 
[**profilesGetInstance**](ProfilesApi.md#profilesGetInstance) | **GET** /v1/profiles/{id} | 


# **profilesBundleIdGetToOneRelated**
> BundleIdWithoutIncludesResponse profilesBundleIdGetToOneRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesBundleIdGetToOneRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'> | the fields to include for returned resources of type bundleIds (optional)
  fieldsBundleIds: [
    "app",
  ],
};

apiInstance.profilesBundleIdGetToOneRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsBundleIds** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;identifier&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profiles&#39; &#124; &#39;seedId&#39;>** | the fields to include for returned resources of type bundleIds | (optional) defaults to undefined


### Return type

**BundleIdWithoutIncludesResponse**

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
**200** | Single BundleId with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesCertificatesGetToManyRelated**
> CertificatesWithoutIncludesResponse profilesCertificatesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesCertificatesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'> | the fields to include for returned resources of type certificates (optional)
  fieldsCertificates: [
    "certificateContent",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.profilesCertificatesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsCertificates** | **Array<&#39;certificateContent&#39; &#124; &#39;certificateType&#39; &#124; &#39;csrContent&#39; &#124; &#39;displayName&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;serialNumber&#39;>** | the fields to include for returned resources of type certificates | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**CertificatesWithoutIncludesResponse**

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
**200** | List of Certificates with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesCreateInstance**
> ProfileResponse profilesCreateInstance(profileCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesCreateInstanceRequest = {
  // ProfileCreateRequest | Profile representation
  profileCreateRequest: {
    data: {
      type: "profiles",
      attributes: {
        name: "name_example",
        profileType: "IOS_APP_DEVELOPMENT",
      },
      relationships: {
        bundleId: {
          data: {
            type: "bundleIds",
            id: "id_example",
          },
        },
        devices: {
          data: [
            {
              type: "devices",
              id: "id_example",
            },
          ],
        },
        certificates: {
          data: [
            {
              type: "certificates",
              id: "id_example",
            },
          ],
        },
      },
    },
  },
};

apiInstance.profilesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileCreateRequest** | **ProfileCreateRequest**| Profile representation |


### Return type

**ProfileResponse**

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
**201** | Single Profile |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesDeleteInstance**
> void profilesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.profilesDeleteInstance(body).then((data:any) => {
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

# **profilesDevicesGetToManyRelated**
> DevicesWithoutIncludesResponse profilesDevicesGetToManyRelated()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesDevicesGetToManyRelatedRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'> | the fields to include for returned resources of type devices (optional)
  fieldsDevices: [
    "addedDate",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.profilesDevicesGetToManyRelated(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsDevices** | **Array<&#39;addedDate&#39; &#124; &#39;deviceClass&#39; &#124; &#39;model&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;status&#39; &#124; &#39;udid&#39;>** | the fields to include for returned resources of type devices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**DevicesWithoutIncludesResponse**

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
**200** | List of Devices with get |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesGetCollection**
> ProfilesResponse profilesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesGetCollectionRequest = {
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<'ACTIVE' | 'INVALID'> | filter by attribute \'profileState\' (optional)
  filterProfileState: [
    "ACTIVE",
  ],
  // Array<'IOS_APP_DEVELOPMENT' | 'IOS_APP_STORE' | 'IOS_APP_ADHOC' | 'IOS_APP_INHOUSE' | 'MAC_APP_DEVELOPMENT' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT' | 'TVOS_APP_DEVELOPMENT' | 'TVOS_APP_STORE' | 'TVOS_APP_ADHOC' | 'TVOS_APP_INHOUSE' | 'MAC_CATALYST_APP_DEVELOPMENT' | 'MAC_CATALYST_APP_STORE' | 'MAC_CATALYST_APP_DIRECT'> | filter by attribute \'profileType\' (optional)
  filterProfileType: [
    "IOS_APP_DEVELOPMENT",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'id' | '-id' | 'name' | '-name' | 'profileState' | '-profileState' | 'profileType' | '-profileType'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "id",
  ],
  // Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'> | the fields to include for returned resources of type profiles (optional)
  fieldsProfiles: [
    "bundleId",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
  // Array<'bundleId' | 'certificates' | 'devices'> | comma-separated list of relationships to include (optional)
  include: [
    "bundleId",
  ],
  // Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'> | the fields to include for returned resources of type certificates (optional)
  fieldsCertificates: [
    "certificateContent",
  ],
  // Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'> | the fields to include for returned resources of type devices (optional)
  fieldsDevices: [
    "addedDate",
  ],
  // Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'> | the fields to include for returned resources of type bundleIds (optional)
  fieldsBundleIds: [
    "app",
  ],
  // number | maximum number of related certificates returned (when they are included) (optional)
  limitCertificates: 1,
  // number | maximum number of related devices returned (when they are included) (optional)
  limitDevices: 1,
};

apiInstance.profilesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **filterProfileState** | **Array<&#39;ACTIVE&#39; &#124; &#39;INVALID&#39;>** | filter by attribute \&#39;profileState\&#39; | (optional) defaults to undefined
 **filterProfileType** | **Array<&#39;IOS_APP_DEVELOPMENT&#39; &#124; &#39;IOS_APP_STORE&#39; &#124; &#39;IOS_APP_ADHOC&#39; &#124; &#39;IOS_APP_INHOUSE&#39; &#124; &#39;MAC_APP_DEVELOPMENT&#39; &#124; &#39;MAC_APP_STORE&#39; &#124; &#39;MAC_APP_DIRECT&#39; &#124; &#39;TVOS_APP_DEVELOPMENT&#39; &#124; &#39;TVOS_APP_STORE&#39; &#124; &#39;TVOS_APP_ADHOC&#39; &#124; &#39;TVOS_APP_INHOUSE&#39; &#124; &#39;MAC_CATALYST_APP_DEVELOPMENT&#39; &#124; &#39;MAC_CATALYST_APP_STORE&#39; &#124; &#39;MAC_CATALYST_APP_DIRECT&#39;>** | filter by attribute \&#39;profileType\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;id&#39; &#124; &#39;-id&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;profileState&#39; &#124; &#39;-profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;-profileType&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsProfiles** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;createdDate&#39; &#124; &#39;devices&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profileContent&#39; &#124; &#39;profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;uuid&#39;>** | the fields to include for returned resources of type profiles | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined
 **include** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;devices&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCertificates** | **Array<&#39;certificateContent&#39; &#124; &#39;certificateType&#39; &#124; &#39;csrContent&#39; &#124; &#39;displayName&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;serialNumber&#39;>** | the fields to include for returned resources of type certificates | (optional) defaults to undefined
 **fieldsDevices** | **Array<&#39;addedDate&#39; &#124; &#39;deviceClass&#39; &#124; &#39;model&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;status&#39; &#124; &#39;udid&#39;>** | the fields to include for returned resources of type devices | (optional) defaults to undefined
 **fieldsBundleIds** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;identifier&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profiles&#39; &#124; &#39;seedId&#39;>** | the fields to include for returned resources of type bundleIds | (optional) defaults to undefined
 **limitCertificates** | [**number**] | maximum number of related certificates returned (when they are included) | (optional) defaults to undefined
 **limitDevices** | [**number**] | maximum number of related devices returned (when they are included) | (optional) defaults to undefined


### Return type

**ProfilesResponse**

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
**200** | List of Profiles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesGetInstance**
> ProfileResponse profilesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'> | the fields to include for returned resources of type profiles (optional)
  fieldsProfiles: [
    "bundleId",
  ],
  // Array<'bundleId' | 'certificates' | 'devices'> | comma-separated list of relationships to include (optional)
  include: [
    "bundleId",
  ],
  // Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'> | the fields to include for returned resources of type certificates (optional)
  fieldsCertificates: [
    "certificateContent",
  ],
  // Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'> | the fields to include for returned resources of type devices (optional)
  fieldsDevices: [
    "addedDate",
  ],
  // Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'> | the fields to include for returned resources of type bundleIds (optional)
  fieldsBundleIds: [
    "app",
  ],
  // number | maximum number of related certificates returned (when they are included) (optional)
  limitCertificates: 1,
  // number | maximum number of related devices returned (when they are included) (optional)
  limitDevices: 1,
};

apiInstance.profilesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsProfiles** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;createdDate&#39; &#124; &#39;devices&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profileContent&#39; &#124; &#39;profileState&#39; &#124; &#39;profileType&#39; &#124; &#39;uuid&#39;>** | the fields to include for returned resources of type profiles | (optional) defaults to undefined
 **include** | **Array<&#39;bundleId&#39; &#124; &#39;certificates&#39; &#124; &#39;devices&#39;>** | comma-separated list of relationships to include | (optional) defaults to undefined
 **fieldsCertificates** | **Array<&#39;certificateContent&#39; &#124; &#39;certificateType&#39; &#124; &#39;csrContent&#39; &#124; &#39;displayName&#39; &#124; &#39;expirationDate&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;serialNumber&#39;>** | the fields to include for returned resources of type certificates | (optional) defaults to undefined
 **fieldsDevices** | **Array<&#39;addedDate&#39; &#124; &#39;deviceClass&#39; &#124; &#39;model&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;status&#39; &#124; &#39;udid&#39;>** | the fields to include for returned resources of type devices | (optional) defaults to undefined
 **fieldsBundleIds** | **Array<&#39;app&#39; &#124; &#39;bundleIdCapabilities&#39; &#124; &#39;identifier&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;profiles&#39; &#124; &#39;seedId&#39;>** | the fields to include for returned resources of type bundleIds | (optional) defaults to undefined
 **limitCertificates** | [**number**] | maximum number of related certificates returned (when they are included) | (optional) defaults to undefined
 **limitDevices** | [**number**] | maximum number of related devices returned (when they are included) | (optional) defaults to undefined


### Return type

**ProfileResponse**

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
**200** | Single Profile |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


