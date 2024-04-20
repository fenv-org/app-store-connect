// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AlternativeDistributionPackageDeltasResponse } from '../models/AlternativeDistributionPackageDeltasResponse.ts';
import { AlternativeDistributionPackageVariantsResponse } from '../models/AlternativeDistributionPackageVariantsResponse.ts';
import { AlternativeDistributionPackageVersionResponse } from '../models/AlternativeDistributionPackageVersionResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AlternativeDistributionPackageVersionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsAlternativeDistributionPackageDeltas the fields to include for returned resources of type alternativeDistributionPackageDeltas
     * @param limit maximum resources per page
     */
    public async alternativeDistributionPackageVersionsDeltasGetToManyRelated(id: string, fieldsAlternativeDistributionPackageDeltas?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AlternativeDistributionPackageVersionsApi", "alternativeDistributionPackageVersionsDeltasGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackageVersions/{id}/deltas'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionPackageDeltas !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageDeltas]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageDeltas, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * @param fieldsAlternativeDistributionPackageVersions the fields to include for returned resources of type alternativeDistributionPackageVersions
     * @param include comma-separated list of relationships to include
     * @param fieldsAlternativeDistributionPackageVariants the fields to include for returned resources of type alternativeDistributionPackageVariants
     * @param fieldsAlternativeDistributionPackageDeltas the fields to include for returned resources of type alternativeDistributionPackageDeltas
     * @param limitDeltas maximum number of related deltas returned (when they are included)
     * @param limitVariants maximum number of related variants returned (when they are included)
     */
    public async alternativeDistributionPackageVersionsGetInstance(id: string, fieldsAlternativeDistributionPackageVersions?: Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>, include?: Array<'alternativeDistributionPackage' | 'deltas' | 'variants'>, fieldsAlternativeDistributionPackageVariants?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, fieldsAlternativeDistributionPackageDeltas?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, limitDeltas?: number, limitVariants?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AlternativeDistributionPackageVersionsApi", "alternativeDistributionPackageVersionsGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackageVersions/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionPackageVersions !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVersions]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVersions, "Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'alternativeDistributionPackage' | 'deltas' | 'variants'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageVariants !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVariants]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVariants, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageDeltas !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageDeltas]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageDeltas, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (limitDeltas !== undefined) {
            requestContext.setQueryParam("limit[deltas]", ObjectSerializer.serialize(limitDeltas, "number", ""));
        }

        // Query Params
        if (limitVariants !== undefined) {
            requestContext.setQueryParam("limit[variants]", ObjectSerializer.serialize(limitVariants, "number", ""));
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
     * @param fieldsAlternativeDistributionPackageVariants the fields to include for returned resources of type alternativeDistributionPackageVariants
     * @param limit maximum resources per page
     */
    public async alternativeDistributionPackageVersionsVariantsGetToManyRelated(id: string, fieldsAlternativeDistributionPackageVariants?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AlternativeDistributionPackageVersionsApi", "alternativeDistributionPackageVersionsVariantsGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackageVersions/{id}/variants'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionPackageVariants !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVariants]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVariants, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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

export class AlternativeDistributionPackageVersionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackageVersionsDeltasGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackageVersionsDeltasGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageDeltasResponse >> {
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
            const body: AlternativeDistributionPackageDeltasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageDeltasResponse", ""
            ) as AlternativeDistributionPackageDeltasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageDeltasResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageDeltasResponse", ""
            ) as AlternativeDistributionPackageDeltasResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackageVersionsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackageVersionsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageVersionResponse >> {
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
            const body: AlternativeDistributionPackageVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVersionResponse", ""
            ) as AlternativeDistributionPackageVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageVersionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVersionResponse", ""
            ) as AlternativeDistributionPackageVersionResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackageVersionsVariantsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackageVersionsVariantsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageVariantsResponse >> {
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
            const body: AlternativeDistributionPackageVariantsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVariantsResponse", ""
            ) as AlternativeDistributionPackageVariantsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageVariantsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVariantsResponse", ""
            ) as AlternativeDistributionPackageVariantsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
