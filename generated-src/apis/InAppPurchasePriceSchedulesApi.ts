// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { InAppPurchasePriceScheduleCreateRequest } from '../models/InAppPurchasePriceScheduleCreateRequest.ts';
import { InAppPurchasePriceScheduleResponse } from '../models/InAppPurchasePriceScheduleResponse.ts';
import { InAppPurchasePricesResponse } from '../models/InAppPurchasePricesResponse.ts';
import { TerritoryResponse } from '../models/TerritoryResponse.ts';

/**
 * no description
 */
export class InAppPurchasePriceSchedulesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsInAppPurchasePricePoints the fields to include for returned resources of type inAppPurchasePricePoints
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsInAppPurchasePricePoints?: Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'inAppPurchasePricePoint' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InAppPurchasePriceSchedulesApi", "inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/inAppPurchasePriceSchedules/{id}/automaticPrices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePricePoints !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePricePoints]", ObjectSerializer.serialize(fieldsInAppPurchasePricePoints, "Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePrices !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePrices]", ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'inAppPurchasePricePoint' | 'territory'>", ""));
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

    /**
     * @param id the id of the requested resource
     * @param fieldsTerritories the fields to include for returned resources of type territories
     */
    public async inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(id: string, fieldsTerritories?: Array<'currency'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InAppPurchasePriceSchedulesApi", "inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/inAppPurchasePriceSchedules/{id}/baseTerritory'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
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

    /**
     * @param inAppPurchasePriceScheduleCreateRequest InAppPurchasePriceSchedule representation
     */
    public async inAppPurchasePriceSchedulesCreateInstance(inAppPurchasePriceScheduleCreateRequest: InAppPurchasePriceScheduleCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'inAppPurchasePriceScheduleCreateRequest' is not null or undefined
        if (inAppPurchasePriceScheduleCreateRequest === null || inAppPurchasePriceScheduleCreateRequest === undefined) {
            throw new RequiredError("InAppPurchasePriceSchedulesApi", "inAppPurchasePriceSchedulesCreateInstance", "inAppPurchasePriceScheduleCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/inAppPurchasePriceSchedules';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inAppPurchasePriceScheduleCreateRequest, "InAppPurchasePriceScheduleCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

    /**
     * @param id the id of the requested resource
     * @param fieldsInAppPurchasePriceSchedules the fields to include for returned resources of type inAppPurchasePriceSchedules
     * @param include comma-separated list of relationships to include
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitAutomaticPrices maximum number of related automaticPrices returned (when they are included)
     * @param limitManualPrices maximum number of related manualPrices returned (when they are included)
     */
    public async inAppPurchasePriceSchedulesGetInstance(id: string, fieldsInAppPurchasePriceSchedules?: Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>, include?: Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limitAutomaticPrices?: number, limitManualPrices?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InAppPurchasePriceSchedulesApi", "inAppPurchasePriceSchedulesGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/inAppPurchasePriceSchedules/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsInAppPurchasePriceSchedules !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePriceSchedules]", ObjectSerializer.serialize(fieldsInAppPurchasePriceSchedules, "Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePrices !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePrices]", ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limitAutomaticPrices !== undefined) {
            requestContext.setQueryParam("limit[automaticPrices]", ObjectSerializer.serialize(limitAutomaticPrices, "number", ""));
        }

        // Query Params
        if (limitManualPrices !== undefined) {
            requestContext.setQueryParam("limit[manualPrices]", ObjectSerializer.serialize(limitManualPrices, "number", ""));
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

    /**
     * @param id the id of the requested resource
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsInAppPurchasePricePoints the fields to include for returned resources of type inAppPurchasePricePoints
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async inAppPurchasePriceSchedulesManualPricesGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsInAppPurchasePricePoints?: Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'inAppPurchasePricePoint' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("InAppPurchasePriceSchedulesApi", "inAppPurchasePriceSchedulesManualPricesGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/inAppPurchasePriceSchedules/{id}/manualPrices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePricePoints !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePricePoints]", ObjectSerializer.serialize(fieldsInAppPurchasePricePoints, "Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsInAppPurchasePrices !== undefined) {
            requestContext.setQueryParam("fields[inAppPurchasePrices]", ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'inAppPurchasePricePoint' | 'territory'>", ""));
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

export class InAppPurchasePriceSchedulesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasePricesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InAppPurchasePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePricesResponse", ""
            ) as InAppPurchasePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePricesResponse", ""
            ) as InAppPurchasePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TerritoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TerritoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerritoryResponse", ""
            ) as TerritoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TerritoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TerritoryResponse", ""
            ) as TerritoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inAppPurchasePriceSchedulesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inAppPurchasePriceSchedulesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasePriceScheduleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InAppPurchasePriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePriceScheduleResponse", ""
            ) as InAppPurchasePriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Request entity error(s)", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasePriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePriceScheduleResponse", ""
            ) as InAppPurchasePriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inAppPurchasePriceSchedulesGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inAppPurchasePriceSchedulesGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasePriceScheduleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InAppPurchasePriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePriceScheduleResponse", ""
            ) as InAppPurchasePriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasePriceScheduleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePriceScheduleResponse", ""
            ) as InAppPurchasePriceScheduleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to inAppPurchasePriceSchedulesManualPricesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async inAppPurchasePriceSchedulesManualPricesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<InAppPurchasePricesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Parameter error(s)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Unauthorized error(s)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Forbidden error", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Not found error", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InAppPurchasePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePricesResponse", ""
            ) as InAppPurchasePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InAppPurchasePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InAppPurchasePricesResponse", ""
            ) as InAppPurchasePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
