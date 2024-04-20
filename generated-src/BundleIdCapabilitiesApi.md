# .BundleIdCapabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundleIdCapabilitiesCreateInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesCreateInstance) | **POST** /v1/bundleIdCapabilities | 
[**bundleIdCapabilitiesDeleteInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesDeleteInstance) | **DELETE** /v1/bundleIdCapabilities/{id} | 
[**bundleIdCapabilitiesUpdateInstance**](BundleIdCapabilitiesApi.md#bundleIdCapabilitiesUpdateInstance) | **PATCH** /v1/bundleIdCapabilities/{id} | 


# **bundleIdCapabilitiesCreateInstance**
> BundleIdCapabilityResponse bundleIdCapabilitiesCreateInstance(bundleIdCapabilityCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdCapabilitiesApi(configuration);

let body:.BundleIdCapabilitiesApiBundleIdCapabilitiesCreateInstanceRequest = {
  // BundleIdCapabilityCreateRequest | BundleIdCapability representation
  bundleIdCapabilityCreateRequest: {
    data: {
      type: "bundleIdCapabilities",
      attributes: {
        capabilityType: "ICLOUD",
        settings: [
          {
            key: "ICLOUD_VERSION",
            name: "name_example",
            description: "description_example",
            enabledByDefault: true,
            visible: true,
            allowedInstances: "ENTRY",
            minInstances: 1,
            options: [
              {
                key: "XCODE_5",
                name: "name_example",
                description: "description_example",
                enabledByDefault: true,
                enabled: true,
                supportsWildcard: true,
              },
            ],
          },
        ],
      },
      relationships: {
        bundleId: {
          data: {
            type: "bundleIds",
            id: "id_example",
          },
        },
      },
    },
  },
};

apiInstance.bundleIdCapabilitiesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleIdCapabilityCreateRequest** | **BundleIdCapabilityCreateRequest**| BundleIdCapability representation |


### Return type

**BundleIdCapabilityResponse**

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
**201** | Single BundleIdCapability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bundleIdCapabilitiesDeleteInstance**
> void bundleIdCapabilitiesDeleteInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdCapabilitiesApi(configuration);

let body:.BundleIdCapabilitiesApiBundleIdCapabilitiesDeleteInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
};

apiInstance.bundleIdCapabilitiesDeleteInstance(body).then((data:any) => {
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

# **bundleIdCapabilitiesUpdateInstance**
> BundleIdCapabilityResponse bundleIdCapabilitiesUpdateInstance(bundleIdCapabilityUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BundleIdCapabilitiesApi(configuration);

let body:.BundleIdCapabilitiesApiBundleIdCapabilitiesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // BundleIdCapabilityUpdateRequest | BundleIdCapability representation
  bundleIdCapabilityUpdateRequest: {
    data: {
      type: "bundleIdCapabilities",
      id: "id_example",
      attributes: {
        capabilityType: "ICLOUD",
        settings: [
          {
            key: "ICLOUD_VERSION",
            name: "name_example",
            description: "description_example",
            enabledByDefault: true,
            visible: true,
            allowedInstances: "ENTRY",
            minInstances: 1,
            options: [
              {
                key: "XCODE_5",
                name: "name_example",
                description: "description_example",
                enabledByDefault: true,
                enabled: true,
                supportsWildcard: true,
              },
            ],
          },
        ],
      },
    },
  },
};

apiInstance.bundleIdCapabilitiesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundleIdCapabilityUpdateRequest** | **BundleIdCapabilityUpdateRequest**| BundleIdCapability representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**BundleIdCapabilityResponse**

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
**200** | Single BundleIdCapability |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


