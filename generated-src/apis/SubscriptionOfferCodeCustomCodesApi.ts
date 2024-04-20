// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ErrorResponse } from '../models/ErrorResponse.ts';
import { SubscriptionOfferCodeCustomCodeCreateRequest } from '../models/SubscriptionOfferCodeCustomCodeCreateRequest.ts';
import { SubscriptionOfferCodeCustomCodeResponse } from '../models/SubscriptionOfferCodeCustomCodeResponse.ts';
import { SubscriptionOfferCodeCustomCodeUpdateRequest } from '../models/SubscriptionOfferCodeCustomCodeUpdateRequest.ts';

/**
 * no description
 */
export class SubscriptionOfferCodeCustomCodesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param subscriptionOfferCodeCustomCodeCreateRequest SubscriptionOfferCodeCustomCode representation
     */
    public async subscriptionOfferCodeCustomCodesCreateInstance(subscriptionOfferCodeCustomCodeCreateRequest: SubscriptionOfferCodeCustomCodeCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subscriptionOfferCodeCustomCodeCreateRequest' is not null or undefined
        if (subscriptionOfferCodeCustomCodeCreateRequest === null || subscriptionOfferCodeCustomCodeCreateRequest === undefined) {
            throw new RequiredError("SubscriptionOfferCodeCustomCodesApi", "subscriptionOfferCodeCustomCodesCreateInstance", "subscriptionOfferCodeCustomCodeCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodeCustomCodes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(subscriptionOfferCodeCustomCodeCreateRequest, "SubscriptionOfferCodeCustomCodeCreateRequest", ""),
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
     * @param include comma-separated list of relationships to include
     */
    public async subscriptionOfferCodeCustomCodesGetInstance(id: string, fieldsSubscriptionOfferCodeCustomCodes?: Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>, include?: Array<'offerCode'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodeCustomCodesApi", "subscriptionOfferCodeCustomCodesGetInstance", "id");
        }




        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodeCustomCodes/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsSubscriptionOfferCodeCustomCodes !== undefined) {
            requestContext.setQueryParam("fields[subscriptionOfferCodeCustomCodes]", ObjectSerializer.serialize(fieldsSubscriptionOfferCodeCustomCodes, "Array<'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode'>", ""));
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
     * @param subscriptionOfferCodeCustomCodeUpdateRequest SubscriptionOfferCodeCustomCode representation
     */
    public async subscriptionOfferCodeCustomCodesUpdateInstance(id: string, subscriptionOfferCodeCustomCodeUpdateRequest: SubscriptionOfferCodeCustomCodeUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SubscriptionOfferCodeCustomCodesApi", "subscriptionOfferCodeCustomCodesUpdateInstance", "id");
        }


        // verify required parameter 'subscriptionOfferCodeCustomCodeUpdateRequest' is not null or undefined
        if (subscriptionOfferCodeCustomCodeUpdateRequest === null || subscriptionOfferCodeCustomCodeUpdateRequest === undefined) {
            throw new RequiredError("SubscriptionOfferCodeCustomCodesApi", "subscriptionOfferCodeCustomCodesUpdateInstance", "subscriptionOfferCodeCustomCodeUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/subscriptionOfferCodeCustomCodes/{id}'
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
            ObjectSerializer.serialize(subscriptionOfferCodeCustomCodeUpdateRequest, "SubscriptionOfferCodeCustomCodeUpdateRequest", ""),
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

export class SubscriptionOfferCodeCustomCodesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodeCustomCodesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodeCustomCodesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeCustomCodeResponse >> {
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
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
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
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodeCustomCodesGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodeCustomCodesGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeCustomCodeResponse >> {
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
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscriptionOfferCodeCustomCodesUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscriptionOfferCodeCustomCodesUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubscriptionOfferCodeCustomCodeResponse >> {
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
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
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
            const body: SubscriptionOfferCodeCustomCodeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubscriptionOfferCodeCustomCodeResponse", ""
            ) as SubscriptionOfferCodeCustomCodeResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
