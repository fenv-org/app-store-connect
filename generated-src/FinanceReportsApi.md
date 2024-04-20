# .FinanceReportsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeReportsGetCollection**](FinanceReportsApi.md#financeReportsGetCollection) | **GET** /v1/financeReports | 


# **financeReportsGetCollection**
> HttpFile financeReportsGetCollection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FinanceReportsApi(configuration);

let body:.FinanceReportsApiFinanceReportsGetCollectionRequest = {
  // Array<string> | filter by attribute \'regionCode\'
  filterRegionCode: [
    "filter[regionCode]_example",
  ],
  // Array<string> | filter by attribute \'reportDate\'
  filterReportDate: [
    "filter[reportDate]_example",
  ],
  // Array<'FINANCIAL' | 'FINANCE_DETAIL'> | filter by attribute \'reportType\'
  filterReportType: [
    "FINANCIAL",
  ],
  // Array<string> | filter by attribute \'vendorNumber\'
  filterVendorNumber: [
    "filter[vendorNumber]_example",
  ],
};

apiInstance.financeReportsGetCollection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRegionCode** | **Array&lt;string&gt;** | filter by attribute \&#39;regionCode\&#39; | defaults to undefined
 **filterReportDate** | **Array&lt;string&gt;** | filter by attribute \&#39;reportDate\&#39; | defaults to undefined
 **filterReportType** | **Array<&#39;FINANCIAL&#39; &#124; &#39;FINANCE_DETAIL&#39;>** | filter by attribute \&#39;reportType\&#39; | defaults to undefined
 **filterVendorNumber** | **Array&lt;string&gt;** | filter by attribute \&#39;vendorNumber\&#39; | defaults to undefined


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
**200** | List of FinanceReports |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


