# .DevicesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesCreateInstance**](DevicesApi.md#devicesCreateInstance) | **POST** /v1/devices | 
[**devicesGetCollection**](DevicesApi.md#devicesGetCollection) | **GET** /v1/devices | 
[**devicesGetInstance**](DevicesApi.md#devicesGetInstance) | **GET** /v1/devices/{id} | 
[**devicesUpdateInstance**](DevicesApi.md#devicesUpdateInstance) | **PATCH** /v1/devices/{id} | 


# **devicesCreateInstance**
> DeviceResponse devicesCreateInstance(deviceCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DevicesApi(configuration);

let body:.DevicesApiDevicesCreateInstanceRequest = {
  // DeviceCreateRequest | Device representation
  deviceCreateRequest: {
    data: {
      type: "devices",
      attributes: {
        name: "name_example",
        platform: "IOS",
        udid: "udid_example",
      },
    },
  },
};

apiInstance.devicesCreateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceCreateRequest** | **DeviceCreateRequest**| Device representation |


### Return type

**DeviceResponse**

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
**201** | Single Device |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **devicesGetCollection**
> DevicesResponse devicesGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DevicesApi(configuration);

let body:.DevicesApiDevicesGetCollectionRequest = {
  // Array<string> | filter by attribute \'name\' (optional)
  filterName: [
    "filter[name]_example",
  ],
  // Array<'IOS' | 'MAC_OS'> | filter by attribute \'platform\' (optional)
  filterPlatform: [
    "IOS",
  ],
  // Array<'ENABLED' | 'DISABLED'> | filter by attribute \'status\' (optional)
  filterStatus: [
    "ENABLED",
  ],
  // Array<string> | filter by attribute \'udid\' (optional)
  filterUdid: [
    "filter[udid]_example",
  ],
  // Array<string> | filter by id(s) (optional)
  filterId: [
    "filter[id]_example",
  ],
  // Array<'id' | '-id' | 'name' | '-name' | 'platform' | '-platform' | 'status' | '-status' | 'udid' | '-udid'> | comma-separated list of sort expressions; resources will be sorted as specified (optional)
  sort: [
    "id",
  ],
  // Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'> | the fields to include for returned resources of type devices (optional)
  fieldsDevices: [
    "addedDate",
  ],
  // number | maximum resources per page (optional)
  limit: 1,
};

apiInstance.devicesGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterName** | **Array&lt;string&gt;** | filter by attribute \&#39;name\&#39; | (optional) defaults to undefined
 **filterPlatform** | **Array<&#39;IOS&#39; &#124; &#39;MAC_OS&#39;>** | filter by attribute \&#39;platform\&#39; | (optional) defaults to undefined
 **filterStatus** | **Array<&#39;ENABLED&#39; &#124; &#39;DISABLED&#39;>** | filter by attribute \&#39;status\&#39; | (optional) defaults to undefined
 **filterUdid** | **Array&lt;string&gt;** | filter by attribute \&#39;udid\&#39; | (optional) defaults to undefined
 **filterId** | **Array&lt;string&gt;** | filter by id(s) | (optional) defaults to undefined
 **sort** | **Array<&#39;id&#39; &#124; &#39;-id&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;platform&#39; &#124; &#39;-platform&#39; &#124; &#39;status&#39; &#124; &#39;-status&#39; &#124; &#39;udid&#39; &#124; &#39;-udid&#39;>** | comma-separated list of sort expressions; resources will be sorted as specified | (optional) defaults to undefined
 **fieldsDevices** | **Array<&#39;addedDate&#39; &#124; &#39;deviceClass&#39; &#124; &#39;model&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;status&#39; &#124; &#39;udid&#39;>** | the fields to include for returned resources of type devices | (optional) defaults to undefined
 **limit** | [**number**] | maximum resources per page | (optional) defaults to undefined


### Return type

**DevicesResponse**

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
**200** | List of Devices |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **devicesGetInstance**
> DeviceResponse devicesGetInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DevicesApi(configuration);

let body:.DevicesApiDevicesGetInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'> | the fields to include for returned resources of type devices (optional)
  fieldsDevices: [
    "addedDate",
  ],
};

apiInstance.devicesGetInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | the id of the requested resource | defaults to undefined
 **fieldsDevices** | **Array<&#39;addedDate&#39; &#124; &#39;deviceClass&#39; &#124; &#39;model&#39; &#124; &#39;name&#39; &#124; &#39;platform&#39; &#124; &#39;status&#39; &#124; &#39;udid&#39;>** | the fields to include for returned resources of type devices | (optional) defaults to undefined


### Return type

**DeviceResponse**

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
**200** | Single Device |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **devicesUpdateInstance**
> DeviceResponse devicesUpdateInstance(deviceUpdateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DevicesApi(configuration);

let body:.DevicesApiDevicesUpdateInstanceRequest = {
  // string | the id of the requested resource
  id: "id_example",
  // DeviceUpdateRequest | Device representation
  deviceUpdateRequest: {
    data: {
      type: "devices",
      id: "id_example",
      attributes: {
        name: "name_example",
        status: "ENABLED",
      },
    },
  },
};

apiInstance.devicesUpdateInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceUpdateRequest** | **DeviceUpdateRequest**| Device representation |
 **id** | [**string**] | the id of the requested resource | defaults to undefined


### Return type

**DeviceResponse**

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
**200** | Single Device |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


