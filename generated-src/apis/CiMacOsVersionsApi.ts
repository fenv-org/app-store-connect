// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CiMacOsVersionResponse } from '../models/CiMacOsVersionResponse.ts';
import { CiMacOsVersionsResponse } from '../models/CiMacOsVersionsResponse.ts';
import { CiXcodeVersionsResponse } from '../models/CiXcodeVersionsResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class CiMacOsVersionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
     * @param limitXcodeVersions maximum number of related xcodeVersions returned (when they are included)
     */
    public async ciMacOsVersionsGetCollection(fieldsCiMacOsVersions?: Array<'name' | 'version' | 'xcodeVersions'>, limit?: number, include?: Array<'xcodeVersions'>, fieldsCiXcodeVersions?: Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>, limitXcodeVersions?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v1/ciMacOsVersions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiMacOsVersions !== undefined) {
            requestContext.setQueryParam("fields[ciMacOsVersions]", ObjectSerializer.serialize(fieldsCiMacOsVersions, "Array<'name' | 'version' | 'xcodeVersions'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'xcodeVersions'>", ""));
        }

        // Query Params
        if (fieldsCiXcodeVersions !== undefined) {
            requestContext.setQueryParam("fields[ciXcodeVersions]", ObjectSerializer.serialize(fieldsCiXcodeVersions, "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>", ""));
        }

        // Query Params
        if (limitXcodeVersions !== undefined) {
            requestContext.setQueryParam("limit[xcodeVersions]", ObjectSerializer.serialize(limitXcodeVersions, "number", ""));
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
     * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
     * @param include comma-separated list of relationships to include
     * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
     * @param limitXcodeVersions maximum number of related xcodeVersions returned (when they are included)
     */
    public async ciMacOsVersionsGetInstance(id: string, fieldsCiMacOsVersions?: Array<'name' | 'version' | 'xcodeVersions'>, include?: Array<'xcodeVersions'>, fieldsCiXcodeVersions?: Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>, limitXcodeVersions?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiMacOsVersionsApi", "ciMacOsVersionsGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/ciMacOsVersions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiMacOsVersions !== undefined) {
            requestContext.setQueryParam("fields[ciMacOsVersions]", ObjectSerializer.serialize(fieldsCiMacOsVersions, "Array<'name' | 'version' | 'xcodeVersions'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'xcodeVersions'>", ""));
        }

        // Query Params
        if (fieldsCiXcodeVersions !== undefined) {
            requestContext.setQueryParam("fields[ciXcodeVersions]", ObjectSerializer.serialize(fieldsCiXcodeVersions, "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>", ""));
        }

        // Query Params
        if (limitXcodeVersions !== undefined) {
            requestContext.setQueryParam("limit[xcodeVersions]", ObjectSerializer.serialize(limitXcodeVersions, "number", ""));
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
     * @param fieldsCiXcodeVersions the fields to include for returned resources of type ciXcodeVersions
     * @param fieldsCiMacOsVersions the fields to include for returned resources of type ciMacOsVersions
     * @param limit maximum resources per page
     * @param limitMacOsVersions maximum number of related macOsVersions returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async ciMacOsVersionsXcodeVersionsGetToManyRelated(id: string, fieldsCiXcodeVersions?: Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>, fieldsCiMacOsVersions?: Array<'name' | 'version' | 'xcodeVersions'>, limit?: number, limitMacOsVersions?: number, include?: Array<'macOsVersions'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("CiMacOsVersionsApi", "ciMacOsVersionsXcodeVersionsGetToManyRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/ciMacOsVersions/{id}/xcodeVersions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCiXcodeVersions !== undefined) {
            requestContext.setQueryParam("fields[ciXcodeVersions]", ObjectSerializer.serialize(fieldsCiXcodeVersions, "Array<'macOsVersions' | 'name' | 'testDestinations' | 'version'>", ""));
        }

        // Query Params
        if (fieldsCiMacOsVersions !== undefined) {
            requestContext.setQueryParam("fields[ciMacOsVersions]", ObjectSerializer.serialize(fieldsCiMacOsVersions, "Array<'name' | 'version' | 'xcodeVersions'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitMacOsVersions !== undefined) {
            requestContext.setQueryParam("limit[macOsVersions]", ObjectSerializer.serialize(limitMacOsVersions, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'macOsVersions'>", ""));
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

export class CiMacOsVersionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciMacOsVersionsGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciMacOsVersionsGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiMacOsVersionsResponse >> {
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
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CiMacOsVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiMacOsVersionsResponse", ""
            ) as CiMacOsVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiMacOsVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiMacOsVersionsResponse", ""
            ) as CiMacOsVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciMacOsVersionsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciMacOsVersionsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiMacOsVersionResponse >> {
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
            const body: CiMacOsVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiMacOsVersionResponse", ""
            ) as CiMacOsVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiMacOsVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiMacOsVersionResponse", ""
            ) as CiMacOsVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ciMacOsVersionsXcodeVersionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ciMacOsVersionsXcodeVersionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CiXcodeVersionsResponse >> {
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
            const body: CiXcodeVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiXcodeVersionsResponse", ""
            ) as CiXcodeVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CiXcodeVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CiXcodeVersionsResponse", ""
            ) as CiXcodeVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
