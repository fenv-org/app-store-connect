// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { SubscriptionOfferCodeCreateRequest } from '../models/SubscriptionOfferCodeCreateRequest.ts';
import { SubscriptionOfferCodeCustomCodesResponse } from '../models/SubscriptionOfferCodeCustomCodesResponse.ts';
import { SubscriptionOfferCodeOneTimeUseCodesResponse } from '../models/SubscriptionOfferCodeOneTimeUseCodesResponse.ts';
import { SubscriptionOfferCodePricesResponse } from '../models/SubscriptionOfferCodePricesResponse.ts';
import { SubscriptionOfferCodeResponse } from '../models/SubscriptionOfferCodeResponse.ts';
import { SubscriptionOfferCodeUpdateRequest } from '../models/SubscriptionOfferCodeUpdateRequest.ts';

/**
 * no description
 */
export class SubscriptionOfferCodesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param subscriptionOfferCodeCreateRequest SubscriptionOfferCode representation
     */
    public async subscriptionOfferCodesCreateInstance(subscriptionOfferCodeCreateRequest: SubscriptionOfferCodeCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionOfferCodeCreateRequest' is not null or undefined
        if (subscriptionOfferCodeCreateRequest === null || subscriptionOfferCodeCreateRequest === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesCreateInstance", "subscriptionOfferCodeCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionOfferCodeCreateRequest, "SubscriptionOfferCodeCreateRequest", ""),
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
     * @param fieldsSubscriptionOfferCodeCustomCodes the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionOfferCodesCustomCodesGetToManyRelated(id: string, fieldsSubscriptionOfferCodeCustomCodes?: Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, limit?: number, include?: Array<'offerCode'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesCustomCodesGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes/{id}/customCodes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionOfferCodeCustomCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeCustomCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeCustomCodes, "Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodes, "Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'offerCode'>", ""));
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
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param include comma-separated list of relationships to include
     * @param fieldsSubscriptionOfferCodeCustomCodes the fields to include for returned resources of type subscriptionOfferCodeCustomCodes
     * @param fieldsSubscriptionOfferCodeOneTimeUseCodes the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
     * @param fieldsSubscriptionOfferCodePrices the fields to include for returned resources of type subscriptionOfferCodePrices
     * @param limitCustomCodes maximum number of related customCodes returned (when they are included)
     * @param limitOneTimeUseCodes maximum number of related oneTimeUseCodes returned (when they are included)
     * @param limitPrices maximum number of related prices returned (when they are included)
     */
    public async subscriptionOfferCodesGetInstance(id: string, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, include?: Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'>, fieldsSubscriptionOfferCodeCustomCodes?: Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>, fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>, fieldsSubscriptionOfferCodePrices?: Array<'subscriptionPricePoint' | 'territory'>, limitCustomCodes?: number, limitOneTimeUseCodes?: number, limitPrices?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesGetInstance", "id");
        }










        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionOfferCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodes, "Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodeCustomCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeCustomCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeCustomCodes, "Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodeOneTimeUseCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeOneTimeUseCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeOneTimeUseCodes, "Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodePrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodePrices]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodePrices, "Array<'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (limitCustomCodes !== undefined) {
            requestContext.setQueryParam("limit[customCodes]", ObjectSerializer.serialize(limitCustomCodes, "number", ""));
        }

        // Query Params
        if (limitOneTimeUseCodes !== undefined) {
            requestContext.setQueryParam("limit[oneTimeUseCodes]", ObjectSerializer.serialize(limitOneTimeUseCodes, "number", ""));
        }

        // Query Params
        if (limitPrices !== undefined) {
            requestContext.setQueryParam("limit[prices]", ObjectSerializer.serialize(limitPrices, "number", ""));
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
     * @param fieldsSubscriptionOfferCodes the fields to include for returned resources of type subscriptionOfferCodes
     * @param fieldsSubscriptionOfferCodeOneTimeUseCodes the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(id: string, fieldsSubscriptionOfferCodes?: Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>, fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>, limit?: number, include?: Array<'offerCode'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesOneTimeUseCodesGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes/{id}/oneTimeUseCodes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionOfferCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodes, "Array<'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodeOneTimeUseCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeOneTimeUseCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeOneTimeUseCodes, "Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'offerCode'>", ""));
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
     * @param fieldsSubscriptionPricePoints the fields to include for returned resources of type subscriptionPricePoints
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param fieldsSubscriptionOfferCodePrices the fields to include for returned resources of type subscriptionOfferCodePrices
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionOfferCodesPricesGetToManyRelated(id: string, filterTerritory?: Array<string>, fieldsSubscriptionPricePoints?: Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>, fieldsTerritories?: Array<'currency'>, fieldsSubscriptionOfferCodePrices?: Array<'subscriptionPricePoint' | 'territory'>, limit?: number, include?: Array<'subscriptionPricePoint' | 'territory'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesPricesGetToManyRelated", "id");
        }








        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes/{id}/prices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterTerritory !== undefined) {
            requestContext.setQueryParam("filter[territory]", ObjectSerializer.serialize(filterTerritory, "Array<string>", ""));
        }

        // Query Params
        if (fieldsSubscriptionPricePoints !== undefined) {
            requestContext.setQueryParam("fields[subscriptionPricePoints]", ObjectSerializer.serialize(fieldsSubscriptionPricePoints, "Array<'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory'>", ""));
        }

        // Query Params
        if (fieldsTerritories !== undefined) {
            requestContext.setQueryParam("fields[territories]", ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>", ""));
        }

        // Query Params
        if (fieldsSubscriptionOfferCodePrices !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodePrices]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodePrices, "Array<'subscriptionPricePoint' | 'territory'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'subscriptionPricePoint' | 'territory'>", ""));
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
     * @param subscriptionOfferCodeUpdateRequest SubscriptionOfferCode representation
     */
    public async subscriptionOfferCodesUpdateInstance(id: string, subscriptionOfferCodeUpdateRequest: SubscriptionOfferCodeUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesUpdateInstance", "id");
        }


        // verify required parameter 'subscriptionOfferCodeUpdateRequest' is not null or undefined
        if (subscriptionOfferCodeUpdateRequest === null || subscriptionOfferCodeUpdateRequest === undefined) {
            throw new RequiredError("SubscriptionOfferCodesApi", "subscriptionOfferCodesUpdateInstance", "subscriptionOfferCodeUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodes/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionOfferCodeUpdateRequest, "SubscriptionOfferCodeUpdateRequest", ""),
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

}

export class SubscriptionOfferCodesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeResponse >> {
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
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
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
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesCustomCodesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesCustomCodesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeCustomCodesResponse >> {
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
            const body: SubscriptionOfferCodeCustomCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodesResponse", ""
            ) as SubscriptionOfferCodeCustomCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodeCustomCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodesResponse", ""
            ) as SubscriptionOfferCodeCustomCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeResponse >> {
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
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesOneTimeUseCodesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeOneTimeUseCodesResponse >> {
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
            const body: SubscriptionOfferCodeOneTimeUseCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeOneTimeUseCodesResponse", ""
            ) as SubscriptionOfferCodeOneTimeUseCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodeOneTimeUseCodesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeOneTimeUseCodesResponse", ""
            ) as SubscriptionOfferCodeOneTimeUseCodesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesPricesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesPricesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodePricesResponse >> {
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
            const body: SubscriptionOfferCodePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodePricesResponse", ""
            ) as SubscriptionOfferCodePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodePricesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodePricesResponse", ""
            ) as SubscriptionOfferCodePricesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodesUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodesUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeResponse >> {
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
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
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
            const body: SubscriptionOfferCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeResponse", ""
            ) as SubscriptionOfferCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
