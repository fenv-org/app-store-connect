// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AlternativeDistributionPackageCreateRequest } from '../models/AlternativeDistributionPackageCreateRequest.ts';
import { AlternativeDistributionPackageResponse } from '../models/AlternativeDistributionPackageResponse.ts';
import { AlternativeDistributionPackageVersionsResponse } from '../models/AlternativeDistributionPackageVersionsResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AlternativeDistributionPackagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param alternativeDistributionPackageCreateRequest AlternativeDistributionPackage representation
     */
    public async alternativeDistributionPackagesCreateInstance(alternativeDistributionPackageCreateRequest: AlternativeDistributionPackageCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alternativeDistributionPackageCreateRequest' is not null or undefined
        if (alternativeDistributionPackageCreateRequest === null || alternativeDistributionPackageCreateRequest === undefined) {
            throw new RequiredError("AlternativeDistributionPackagesApi", "alternativeDistributionPackagesCreateInstance", "alternativeDistributionPackageCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(alternativeDistributionPackageCreateRequest, "AlternativeDistributionPackageCreateRequest", ""),
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
     * @param fieldsAlternativeDistributionPackages the fields to include for returned resources of type alternativeDistributionPackages
     * @param include comma-separated list of relationships to include
     * @param fieldsAlternativeDistributionPackageVersions the fields to include for returned resources of type alternativeDistributionPackageVersions
     * @param limitVersions maximum number of related versions returned (when they are included)
     */
    public async alternativeDistributionPackagesGetInstance(id: string, fieldsAlternativeDistributionPackages?: Array<'appStoreVersion' | 'versions'>, include?: Array<'versions'>, fieldsAlternativeDistributionPackageVersions?: Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>, limitVersions?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AlternativeDistributionPackagesApi", "alternativeDistributionPackagesGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackages/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAlternativeDistributionPackages !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackages]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackages, "Array<'appStoreVersion' | 'versions'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'versions'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageVersions !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVersions]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVersions, "Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>", ""));
        }

        // Query Params
        if (limitVersions !== undefined) {
            requestContext.setQueryParam("limit[versions]", ObjectSerializer.serialize(limitVersions, "number", ""));
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
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsAlternativeDistributionPackageVariants the fields to include for returned resources of type alternativeDistributionPackageVariants
     * @param fieldsAlternativeDistributionPackages the fields to include for returned resources of type alternativeDistributionPackages
     * @param fieldsAlternativeDistributionPackageVersions the fields to include for returned resources of type alternativeDistributionPackageVersions
     * @param fieldsAlternativeDistributionPackageDeltas the fields to include for returned resources of type alternativeDistributionPackageDeltas
     * @param limit maximum resources per page
     * @param limitVariants maximum number of related variants returned (when they are included)
     * @param limitDeltas maximum number of related deltas returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async alternativeDistributionPackagesVersionsGetToManyRelated(id: string, filterState?: Array<'COMPLETED' | 'REPLACED'>, fieldsAlternativeDistributionPackageVariants?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, fieldsAlternativeDistributionPackages?: Array<'appStoreVersion' | 'versions'>, fieldsAlternativeDistributionPackageVersions?: Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>, fieldsAlternativeDistributionPackageDeltas?: Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>, limit?: number, limitVariants?: number, limitDeltas?: number, include?: Array<'alternativeDistributionPackage' | 'deltas' | 'variants'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AlternativeDistributionPackagesApi", "alternativeDistributionPackagesVersionsGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/alternativeDistributionPackages/{id}/versions'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterState !== undefined) {
            requestContext.setQueryParam("filter[state]", ObjectSerializer.serialize(filterState, "Array<'COMPLETED' | 'REPLACED'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageVariants !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVariants]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVariants, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackages !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackages]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackages, "Array<'appStoreVersion' | 'versions'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageVersions !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageVersions]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageVersions, "Array<'alternativeDistributionPackage' | 'deltas' | 'fileChecksum' | 'state' | 'url' | 'urlExpirationDate' | 'variants' | 'version'>", ""));
        }

        // Query Params
        if (fieldsAlternativeDistributionPackageDeltas !== undefined) {
            requestContext.setQueryParam("fields[alternativeDistributionPackageDeltas]", ObjectSerializer.serialize(fieldsAlternativeDistributionPackageDeltas, "Array<'alternativeDistributionKeyBlob' | 'fileChecksum' | 'url' | 'urlExpirationDate'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitVariants !== undefined) {
            requestContext.setQueryParam("limit[variants]", ObjectSerializer.serialize(limitVariants, "number", ""));
        }

        // Query Params
        if (limitDeltas !== undefined) {
            requestContext.setQueryParam("limit[deltas]", ObjectSerializer.serialize(limitDeltas, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'alternativeDistributionPackage' | 'deltas' | 'variants'>", ""));
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

export class AlternativeDistributionPackagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackagesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackagesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageResponse >> {
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
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
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
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackagesGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackagesGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageResponse >> {
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
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageResponse", ""
            ) as AlternativeDistributionPackageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to alternativeDistributionPackagesVersionsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async alternativeDistributionPackagesVersionsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AlternativeDistributionPackageVersionsResponse >> {
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
            const body: AlternativeDistributionPackageVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVersionsResponse", ""
            ) as AlternativeDistributionPackageVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AlternativeDistributionPackageVersionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AlternativeDistributionPackageVersionsResponse", ""
            ) as AlternativeDistributionPackageVersionsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
