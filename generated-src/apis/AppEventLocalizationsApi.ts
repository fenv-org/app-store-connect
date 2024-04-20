// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppEventLocalizationCreateRequest } from '../models/AppEventLocalizationCreateRequest.ts';
import { AppEventLocalizationResponse } from '../models/AppEventLocalizationResponse.ts';
import { AppEventLocalizationUpdateRequest } from '../models/AppEventLocalizationUpdateRequest.ts';
import { AppEventScreenshotsResponse } from '../models/AppEventScreenshotsResponse.ts';
import { AppEventVideoClipsResponse } from '../models/AppEventVideoClipsResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppEventLocalizationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsAppEventScreenshots the fields to include for returned resources of type appEventScreenshots
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appEventLocalizationsAppEventScreenshotsGetToManyRelated(id: string, fieldsAppEventScreenshots?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, limit?: number, include?: Array<'appEventLocalization'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsAppEventScreenshotsGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/appEventLocalizations/{id}/appEventScreenshots'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppEventScreenshots !== undefined) {
            requestContext.setQueryParam("fields[appEventScreenshots]", ObjectSerializer.serialize(fieldsAppEventScreenshots, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appEventLocalization'>", ""));
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
     * @param fieldsAppEventVideoClips the fields to include for returned resources of type appEventVideoClips
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appEventLocalizationsAppEventVideoClipsGetToManyRelated(id: string, fieldsAppEventVideoClips?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, limit?: number, include?: Array<'appEventLocalization'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsAppEventVideoClipsGetToManyRelated", "id");
        }






        // Path Params
        const localVarPath = '/v1/appEventLocalizations/{id}/appEventVideoClips'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppEventVideoClips !== undefined) {
            requestContext.setQueryParam("fields[appEventVideoClips]", ObjectSerializer.serialize(fieldsAppEventVideoClips, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>", ""));
        }

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appEventLocalization'>", ""));
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
     * @param appEventLocalizationCreateRequest AppEventLocalization representation
     */
    public async appEventLocalizationsCreateInstance(appEventLocalizationCreateRequest: AppEventLocalizationCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appEventLocalizationCreateRequest' is not null or undefined
        if (appEventLocalizationCreateRequest === null || appEventLocalizationCreateRequest === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsCreateInstance", "appEventLocalizationCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appEventLocalizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appEventLocalizationCreateRequest, "AppEventLocalizationCreateRequest", ""),
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
    public async appEventLocalizationsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/appEventLocalizations/{id}'
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
     * @param fieldsAppEventLocalizations the fields to include for returned resources of type appEventLocalizations
     * @param include comma-separated list of relationships to include
     * @param fieldsAppEventScreenshots the fields to include for returned resources of type appEventScreenshots
     * @param fieldsAppEventVideoClips the fields to include for returned resources of type appEventVideoClips
     * @param limitAppEventScreenshots maximum number of related appEventScreenshots returned (when they are included)
     * @param limitAppEventVideoClips maximum number of related appEventVideoClips returned (when they are included)
     */
    public async appEventLocalizationsGetInstance(id: string, fieldsAppEventLocalizations?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>, include?: Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>, fieldsAppEventScreenshots?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>, fieldsAppEventVideoClips?: Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>, limitAppEventScreenshots?: number, limitAppEventVideoClips?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/appEventLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppEventLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appEventLocalizations]", ObjectSerializer.serialize(fieldsAppEventLocalizations, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips' | 'locale' | 'longDescription' | 'name' | 'shortDescription'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appEvent' | 'appEventScreenshots' | 'appEventVideoClips'>", ""));
        }

        // Query Params
        if (fieldsAppEventScreenshots !== undefined) {
            requestContext.setQueryParam("fields[appEventScreenshots]", ObjectSerializer.serialize(fieldsAppEventScreenshots, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'assetToken' | 'fileName' | 'fileSize' | 'imageAsset' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppEventVideoClips !== undefined) {
            requestContext.setQueryParam("fields[appEventVideoClips]", ObjectSerializer.serialize(fieldsAppEventVideoClips, "Array<'appEventAssetType' | 'appEventLocalization' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'previewFrameTimeCode' | 'previewImage' | 'uploadOperations' | 'uploaded' | 'videoUrl'>", ""));
        }

        // Query Params
        if (limitAppEventScreenshots !== undefined) {
            requestContext.setQueryParam("limit[appEventScreenshots]", ObjectSerializer.serialize(limitAppEventScreenshots, "number", ""));
        }

        // Query Params
        if (limitAppEventVideoClips !== undefined) {
            requestContext.setQueryParam("limit[appEventVideoClips]", ObjectSerializer.serialize(limitAppEventVideoClips, "number", ""));
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
     * @param appEventLocalizationUpdateRequest AppEventLocalization representation
     */
    public async appEventLocalizationsUpdateInstance(id: string, appEventLocalizationUpdateRequest: AppEventLocalizationUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsUpdateInstance", "id");
        }


        // verify required parameter 'appEventLocalizationUpdateRequest' is not null or undefined
        if (appEventLocalizationUpdateRequest === null || appEventLocalizationUpdateRequest === undefined) {
            throw new RequiredError("AppEventLocalizationsApi", "appEventLocalizationsUpdateInstance", "appEventLocalizationUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appEventLocalizations/{id}'
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
            ObjectSerializer.serialize(appEventLocalizationUpdateRequest, "AppEventLocalizationUpdateRequest", ""),
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

export class AppEventLocalizationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventLocalizationsAppEventScreenshotsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsAppEventScreenshotsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventScreenshotsResponse >> {
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
            const body: AppEventScreenshotsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventScreenshotsResponse", ""
            ) as AppEventScreenshotsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventScreenshotsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventScreenshotsResponse", ""
            ) as AppEventScreenshotsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventLocalizationsAppEventVideoClipsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsAppEventVideoClipsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventVideoClipsResponse >> {
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
            const body: AppEventVideoClipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventVideoClipsResponse", ""
            ) as AppEventVideoClipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventVideoClipsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventVideoClipsResponse", ""
            ) as AppEventVideoClipsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventLocalizationsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventLocalizationResponse >> {
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
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
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
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventLocalizationsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appEventLocalizationsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventLocalizationResponse >> {
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
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appEventLocalizationsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appEventLocalizationsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppEventLocalizationResponse >> {
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
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
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
            const body: AppEventLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppEventLocalizationResponse", ""
            ) as AppEventLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
