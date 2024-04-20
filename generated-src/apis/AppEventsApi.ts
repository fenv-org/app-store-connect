// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppEventCreateRequest } from '../models/AppEventCreateRequest.ts';
import { AppEventLocalizationsResponse } from '../models/AppEventLocalizationsResponse.ts';
import { AppEventResponse } from '../models/AppEventResponse.ts';
import { AppEventUpdateRequest } from '../models/AppEventUpdateRequest.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppEventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param appEventCreateRequest AppEvent representation
     */
    public async appEventsCreateInstance(appEventCreateRequest: AppEventCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appEventCreateRequest' is not null or undefined
        if (appEventCreateRequest === null || appEventCreateRequest === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsCreateInstance", "appEventCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appEvents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appEventCreateRequest, "AppEventCreateRequest", ""),
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
     */
    public async appEventsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/appEvents/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param include comma-separated list of relationships to include
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     */
    public async appEventsGetInstance(id: string, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, include?: Array<'localizations'>, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, limitLocalizations?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/appEvents/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppEvents !== undefined) {
            requestContext.setQueryParam("fields[appEvents]", ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'localizations'>", ""));
        }

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (limitLocalizations !== undefined) {
            requestContext.setQueryParam("limit[localizations]", ObjectSerializer.serialize(limitLocalizations, "number", ""));
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
     * @param fieldsAppEventScreenshots the fields to include for returned resources of type appEventScreenshots
     * @param fieldsAppEventVideoClips the fields to include for returned resources of type appEventVideoClips
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param limit maximum resources per page
     * @param limitAppEventScreenshots maximum number of related appEventScreenshots returned (when they are included)
     * @param limitAppEventVideoClips maximum number of related appEventVideoClips returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appEventsLocalizationsGetToManyRelated(id: string, fieldsAppEventScreenshots?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>, fieldsAppEventVideoClips?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, limit?: number, limitAppEventScreenshots?: number, limitAppEventVideoClips?: number, include?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsLocalizationsGetToManyRelated", "id");
        }










        // Path Params
        const localVarPath = '/v1/appEvents/{id}/localizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppEventScreenshots !== undefined) {
            requestContext.setQueryParam("fields[appEventScreenshots]", ObjectSerializer.serialize(fieldsAppEventScreenshots, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppEventVideoClips !== undefined) {
            requestContext.setQueryParam("fields[appEventVideoClips]", ObjectSerializer.serialize(fieldsAppEventVideoClips, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>", ""));
        }

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (fieldsAppEvents !== undefined) {
            requestContext.setQueryParam("fields[appEvents]", ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppEventScreenshots !== undefined) {
            requestContext.setQueryParam("limit[appEventScreenshots]", ObjectSerializer.serialize(limitAppEventScreenshots, "number", ""));
        }

        // Query Params
        if (limitAppEventVideoClips !== undefined) {
            requestContext.setQueryParam("limit[appEventVideoClips]", ObjectSerializer.serialize(limitAppEventVideoClips, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>", ""));
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
     * @param appEventUpdateRequest AppEvent representation
     */
    public async appEventsUpdateInstance(id: string, appEventUpdateRequest: AppEventUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsUpdateInstance", "id");
        }


        // verify required parameter 'appEventUpdateRequest' is not null or undefined
        if (appEventUpdateRequest === null || appEventUpdateRequest === undefined) {
            throw new RequiredError("AppEventsApi", "appEventsUpdateInstance", "appEventUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appEvents/{id}'
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
            ObjectSerializer.serialize(appEventUpdateRequest, "AppEventUpdateRequest", ""),
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

export class AppEventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventResponse >> {
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
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
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
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Request entity error(s)", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventResponse >> {
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
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventsLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventsLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventLocalizationsResponse >> {
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
            const body: AppEventLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationsResponse", ""
            ) as AppEventLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationsResponse", ""
            ) as AppEventLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventResponse >> {
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
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
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
            const body: AppEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventResponse", ""
            ) as AppEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}