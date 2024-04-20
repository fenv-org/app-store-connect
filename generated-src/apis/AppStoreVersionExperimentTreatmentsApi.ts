// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppStoreVersionExperimentTreatmentCreateRequest } from '../models/AppStoreVersionExperimentTreatmentCreateRequest.ts';
import { AppStoreVersionExperimentTreatmentLocalizationsResponse } from '../models/AppStoreVersionExperimentTreatmentLocalizationsResponse.ts';
import { AppStoreVersionExperimentTreatmentResponse } from '../models/AppStoreVersionExperimentTreatmentResponse.ts';
import { AppStoreVersionExperimentTreatmentUpdateRequest } from '../models/AppStoreVersionExperimentTreatmentUpdateRequest.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppStoreVersionExperimentTreatmentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param filterLocale filter by attribute \&#39;locale\&#39;
     * @param fieldsAppScreenshotSets the fields to include for returned resources of type appScreenshotSets
     * @param fieldsAppStoreVersionExperimentTreatments the fields to include for returned resources of type appStoreVersionExperimentTreatments
     * @param fieldsAppStoreVersionExperimentTreatmentLocalizations the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
     * @param fieldsAppPreviewSets the fields to include for returned resources of type appPreviewSets
     * @param limit maximum resources per page
     * @param limitAppScreenshotSets maximum number of related appScreenshotSets returned (when they are included)
     * @param limitAppPreviewSets maximum number of related appPreviewSets returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(id: string, filterLocale?: Array<string>, fieldsAppScreenshotSets?: Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>, fieldsAppStoreVersionExperimentTreatments?: Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>, fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>, fieldsAppPreviewSets?: Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>, limit?: number, limitAppScreenshotSets?: number, limitAppPreviewSets?: number, include?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterLocale !== undefined) {
            requestContext.setQueryParam("filter[locale]", ObjectSerializer.serialize(filterLocale, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("fields[appScreenshotSets]", ObjectSerializer.serialize(fieldsAppScreenshotSets, "Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatments, "Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatmentLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatmentLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>", ""));
        }

        // Query Params
        if (fieldsAppPreviewSets !== undefined) {
            requestContext.setQueryParam("fields[appPreviewSets]", ObjectSerializer.serialize(fieldsAppPreviewSets, "Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("limit[appScreenshotSets]", ObjectSerializer.serialize(limitAppScreenshotSets, "number", ""));
        }

        // Query Params
        if (limitAppPreviewSets !== undefined) {
            requestContext.setQueryParam("limit[appPreviewSets]", ObjectSerializer.serialize(limitAppPreviewSets, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment'>", ""));
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
     * @param appStoreVersionExperimentTreatmentCreateRequest AppStoreVersionExperimentTreatment representation
     */
    public async appStoreVersionExperimentTreatmentsCreateInstance(appStoreVersionExperimentTreatmentCreateRequest: AppStoreVersionExperimentTreatmentCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appStoreVersionExperimentTreatmentCreateRequest' is not null or undefined
        if (appStoreVersionExperimentTreatmentCreateRequest === null || appStoreVersionExperimentTreatmentCreateRequest === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsCreateInstance", "appStoreVersionExperimentTreatmentCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionExperimentTreatments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appStoreVersionExperimentTreatmentCreateRequest, "AppStoreVersionExperimentTreatmentCreateRequest", ""),
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
    public async appStoreVersionExperimentTreatmentsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionExperimentTreatments/{id}'
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
     * @param fieldsAppStoreVersionExperimentTreatments the fields to include for returned resources of type appStoreVersionExperimentTreatments
     * @param include comma-separated list of relationships to include
     * @param fieldsAppStoreVersionExperimentTreatmentLocalizations the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
     * @param limitAppStoreVersionExperimentTreatmentLocalizations maximum number of related appStoreVersionExperimentTreatmentLocalizations returned (when they are included)
     */
    public async appStoreVersionExperimentTreatmentsGetInstance(id: string, fieldsAppStoreVersionExperimentTreatments?: Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>, include?: Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2'>, fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>, limitAppStoreVersionExperimentTreatmentLocalizations?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsGetInstance", "id");
        }






        // Path Params
        const localVarPath = '/v1/appStoreVersionExperimentTreatments/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatments !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatments]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatments, "Array<'appIcon' | 'appIconName' | 'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2' | 'name' | 'promotedDate'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appStoreVersionExperiment' | 'appStoreVersionExperimentTreatmentLocalizations' | 'appStoreVersionExperimentV2'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatmentLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatmentLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>", ""));
        }

        // Query Params
        if (limitAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appStoreVersionExperimentTreatmentLocalizations]", ObjectSerializer.serialize(limitAppStoreVersionExperimentTreatmentLocalizations, "number", ""));
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
     * @param appStoreVersionExperimentTreatmentUpdateRequest AppStoreVersionExperimentTreatment representation
     */
    public async appStoreVersionExperimentTreatmentsUpdateInstance(id: string, appStoreVersionExperimentTreatmentUpdateRequest: AppStoreVersionExperimentTreatmentUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsUpdateInstance", "id");
        }


        // verify required parameter 'appStoreVersionExperimentTreatmentUpdateRequest' is not null or undefined
        if (appStoreVersionExperimentTreatmentUpdateRequest === null || appStoreVersionExperimentTreatmentUpdateRequest === undefined) {
            throw new RequiredError("AppStoreVersionExperimentTreatmentsApi", "appStoreVersionExperimentTreatmentsUpdateInstance", "appStoreVersionExperimentTreatmentUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionExperimentTreatments/{id}'
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
            ObjectSerializer.serialize(appStoreVersionExperimentTreatmentUpdateRequest, "AppStoreVersionExperimentTreatmentUpdateRequest", ""),
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

export class AppStoreVersionExperimentTreatmentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentTreatmentLocalizationsResponse >> {
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
            const body: AppStoreVersionExperimentTreatmentLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentLocalizationsResponse", ""
            ) as AppStoreVersionExperimentTreatmentLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionExperimentTreatmentLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentLocalizationsResponse", ""
            ) as AppStoreVersionExperimentTreatmentLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionExperimentTreatmentsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionExperimentTreatmentsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentTreatmentResponse >> {
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
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
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
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionExperimentTreatmentsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionExperimentTreatmentsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appStoreVersionExperimentTreatmentsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionExperimentTreatmentsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentTreatmentResponse >> {
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
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionExperimentTreatmentsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionExperimentTreatmentsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionExperimentTreatmentResponse >> {
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
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
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
            const body: AppStoreVersionExperimentTreatmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionExperimentTreatmentResponse", ""
            ) as AppStoreVersionExperimentTreatmentResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
