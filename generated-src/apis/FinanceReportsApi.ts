// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class FinanceReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param filterRegionCode filter by attribute \&#39;regionCode\&#39;
     * @param filterReportDate filter by attribute \&#39;reportDate\&#39;
     * @param filterReportType filter by attribute \&#39;reportType\&#39;
     * @param filterVendorNumber filter by attribute \&#39;vendorNumber\&#39;
     */
    public async financeReportsGetCollection(filterRegionCode: Array<string>, filterReportDate: Array<string>, filterReportType: Array<'FINANCIAL' | 'FINANCE_DETAIL'>, filterVendorNumber: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterRegionCode' is not null or undefined
        if (filterRegionCode === null || filterRegionCode === undefined) {
            throw new RequiredError("FinanceReportsApi", "financeReportsGetCollection", "filterRegionCode");
        }


        // verify required parameter 'filterReportDate' is not null or undefined
        if (filterReportDate === null || filterReportDate === undefined) {
            throw new RequiredError("FinanceReportsApi", "financeReportsGetCollection", "filterReportDate");
        }


        // verify required parameter 'filterReportType' is not null or undefined
        if (filterReportType === null || filterReportType === undefined) {
            throw new RequiredError("FinanceReportsApi", "financeReportsGetCollection", "filterReportType");
        }


        // verify required parameter 'filterVendorNumber' is not null or undefined
        if (filterVendorNumber === null || filterVendorNumber === undefined) {
            throw new RequiredError("FinanceReportsApi", "financeReportsGetCollection", "filterVendorNumber");
        }


        // Path Params
        const localVarPath = '/v1/financeReports';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterRegionCode !== undefined) {
            requestContext.setQueryParam("filter[regionCode]", ObjectSerializer.serialize(filterRegionCode, "Array<string>", ""));
        }

        // Query Params
        if (filterReportDate !== undefined) {
            requestContext.setQueryParam("filter[reportDate]", ObjectSerializer.serialize(filterReportDate, "Array<string>", ""));
        }

        // Query Params
        if (filterReportType !== undefined) {
            requestContext.setQueryParam("filter[reportType]", ObjectSerializer.serialize(filterReportType, "Array<'FINANCIAL' | 'FINANCE_DETAIL'>", ""));
        }

        // Query Params
        if (filterVendorNumber !== undefined) {
            requestContext.setQueryParam("filter[vendorNumber]", ObjectSerializer.serialize(filterVendorNumber, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["itc-bearer-token"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FinanceReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to financeReportsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async financeReportsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", "binary"
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
