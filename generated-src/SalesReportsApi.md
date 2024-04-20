# .SalesReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salesReportsGetCollection**](SalesReportsApi.md#salesReportsGetCollection) | **GET** /v1/salesReports | 


# **salesReportsGetCollection**
> HttpFile salesReportsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SalesReportsApi(configuration);

let body:.SalesReportsApiSalesReportsGetCollectionRequest = {
  // Array<'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'> | filter by attribute \'frequency\'
  filterFrequency: [
    "DAILY",
  ],
  // Array<'SUMMARY' | 'DETAILED' | 'SUMMARY_INSTALL_TYPE' | 'SUMMARY_TERRITORY' | 'SUMMARY_CHANNEL'> | filter by attribute \'reportSubType\'
  filterReportSubType: [
    "SUMMARY",
  ],
  // Array<'SALES' | 'PRE_ORDER' | 'NEWSSTAND' | 'SUBSCRIPTION' | 'SUBSCRIPTION_EVENT' | 'SUBSCRIBER' | 'SUBSCRIPTION_OFFER_CODE_REDEMPTION' | 'INSTALLS' | 'FIRST_ANNUAL'> | filter by attribute \'reportType\'
  filterReportType: [
    "SALES",
  ],
  // Array<string> | filter by attribute \'vendorNumber\'
  filterVendorNumber: [
    "filter[vendorNumber]_example",
  ],
  // Array<string> | filter by attribute \'reportDate\' (optional)
  filterReportDate: [
    "filter[reportDate]_example",
  ],
  // Array<string> | filter by attribute \'version\' (optional)
  filterVersion: [
    "filter[version]_example",
  ],
};

apiInstance.salesReportsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterFrequency** | **Array<&#39;DAILY&#39; &#124; &#39;WEEKLY&#39; &#124; &#39;MONTHLY&#39; &#124; &#39;YEARLY&#39;>** | filter by attribute \&#39;frequency\&#39; | defaults to undefined
 **filterReportSubType** | **Array<&#39;SUMMARY&#39; &#124; &#39;DETAILED&#39; &#124; &#39;SUMMARY_INSTALL_TYPE&#39; &#124; &#39;SUMMARY_TERRITORY&#39; &#124; &#39;SUMMARY_CHANNEL&#39;>** | filter by attribute \&#39;reportSubType\&#39; | defaults to undefined
 **filterReportType** | **Array<&#39;SALES&#39; &#124; &#39;PRE_ORDER&#39; &#124; &#39;NEWSSTAND&#39; &#124; &#39;SUBSCRIPTION&#39; &#124; &#39;SUBSCRIPTION_EVENT&#39; &#124; &#39;SUBSCRIBER&#39; &#124; &#39;SUBSCRIPTION_OFFER_CODE_REDEMPTION&#39; &#124; &#39;INSTALLS&#39; &#124; &#39;FIRST_ANNUAL&#39;>** | filter by attribute \&#39;reportType\&#39; | defaults to undefined
 **filterVendorNumber** | **Array&lt;string&gt;** | filter by attribute \&#39;vendorNumber\&#39; | defaults to undefined
 **filterReportDate** | **Array&lt;string&gt;** | filter by attribute \&#39;reportDate\&#39; | (optional) defaults to undefined
 **filterVersion** | **Array&lt;string&gt;** | filter by attribute \&#39;version\&#39; | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[itc-bearer-token](README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/a-gzip


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Parameter error(s) |  -  |
**401** | Unauthorized error(s) |  -  |
**403** | Forbidden error |  -  |
**200** | List of SalesReports |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


