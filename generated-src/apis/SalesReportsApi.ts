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
export class SalesReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param filterFrequency filter by attribute \&#39;frequency\&#39;
     * @param filterReportSubType filter by attribute \&#39;reportSubType\&#39;
     * @param filterReportType filter by attribute \&#39;reportType\&#39;
     * @param filterVendorNumber filter by attribute \&#39;vendorNumber\&#39;
     * @param filterReportDate filter by attribute \&#39;reportDate\&#39;
     * @param filterVersion filter by attribute \&#39;version\&#39;
     */
    public async salesReportsGetCollection(filterFrequency: Array<'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'>, filterReportSubType: Array<'SUMMARY' | 'DETAILED' | 'SUMMARY_INSTALL_TYPE' | 'SUMMARY_TERRITORY' | 'SUMMARY_CHANNEL'>, filterReportType: Array<'SALES' | 'PRE_ORDER' | 'NEWSSTAND' | 'SUBSCRIPTION' | 'SUBSCRIPTION_EVENT' | 'SUBSCRIBER' | 'SUBSCRIPTION_OFFER_CODE_REDEMPTION' | 'INSTALLS' | 'FIRST_ANNUAL'>, filterVendorNumber: Array<string>, filterReportDate?: Array<string>, filterVersion?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterFrequency' is not null or undefined
        if (filterFrequency === null || filterFrequency === undefined) {
            throw new RequiredError("SalesReportsApi", "salesReportsGetCollection", "filterFrequency");
        }


        // verify required parameter 'filterReportSubType' is not null or undefined
        if (filterReportSubType === null || filterReportSubType === undefined) {
            throw new RequiredError("SalesReportsApi", "salesReportsGetCollection", "filterReportSubType");
        }


        // verify required parameter 'filterReportType' is not null or undefined
        if (filterReportType === null || filterReportType === undefined) {
            throw new RequiredError("SalesReportsApi", "salesReportsGetCollection", "filterReportType");
        }


        // verify required parameter 'filterVendorNumber' is not null or undefined
        if (filterVendorNumber === null || filterVendorNumber === undefined) {
            throw new RequiredError("SalesReportsApi", "salesReportsGetCollection", "filterVendorNumber");
        }




        // Path Params
        const localVarPath = '/v1/salesReports';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterFrequency !== undefined) {
            requestContext.setQueryParam("filter[frequency]", ObjectSerializer.serialize(filterFrequency, "Array<'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'>", ""));
        }

        // Query Params
        if (filterReportDate !== undefined) {
            requestContext.setQueryParam("filter[reportDate]", ObjectSerializer.serialize(filterReportDate, "Array<string>", ""));
        }

        // Query Params
        if (filterReportSubType !== undefined) {
            requestContext.setQueryParam("filter[reportSubType]", ObjectSerializer.serialize(filterReportSubType, "Array<'SUMMARY' | 'DETAILED' | 'SUMMARY_INSTALL_TYPE' | 'SUMMARY_TERRITORY' | 'SUMMARY_CHANNEL'>", ""));
        }

        // Query Params
        if (filterReportType !== undefined) {
            requestContext.setQueryParam("filter[reportType]", ObjectSerializer.serialize(filterReportType, "Array<'SALES' | 'PRE_ORDER' | 'NEWSSTAND' | 'SUBSCRIPTION' | 'SUBSCRIPTION_EVENT' | 'SUBSCRIBER' | 'SUBSCRIPTION_OFFER_CODE_REDEMPTION' | 'INSTALLS' | 'FIRST_ANNUAL'>", ""));
        }

        // Query Params
        if (filterVendorNumber !== undefined) {
            requestContext.setQueryParam("filter[vendorNumber]", ObjectSerializer.serialize(filterVendorNumber, "Array<string>", ""));
        }

        // Query Params
        if (filterVersion !== undefined) {
            requestContext.setQueryParam("filter[version]", ObjectSerializer.serialize(filterVersion, "Array<string>", ""));
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

export class SalesReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to salesReportsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async salesReportsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
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
