// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppClipAdvancedExperiencesResponse } from '../models/AppClipAdvancedExperiencesResponse.ts';
import { AppClipDefaultExperiencesResponse } from '../models/AppClipDefaultExperiencesResponse.ts';
import { AppClipResponse } from '../models/AppClipResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppClipsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param filterAction filter by attribute \&#39;action\&#39;
     * @param filterPlaceStatus filter by attribute \&#39;placeStatus\&#39;
     * @param filterStatus filter by attribute \&#39;status\&#39;
     * @param fieldsAppClipAdvancedExperiences the fields to include for returned resources of type appClipAdvancedExperiences
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsAppClipAdvancedExperienceImages the fields to include for returned resources of type appClipAdvancedExperienceImages
     * @param fieldsAppClipAdvancedExperienceLocalizations the fields to include for returned resources of type appClipAdvancedExperienceLocalizations
     * @param limit maximum resources per page
     * @param limitLocalizations maximum number of related localizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appClipsAppClipAdvancedExperiencesGetToManyRelated(id: string, filterAction?: Array<'OPEN' | 'VIEW' | 'PLAY'>, filterPlaceStatus?: Array<'PENDING' | 'MATCHED' | 'NO_MATCH'>, filterStatus?: Array<'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS'>, fieldsAppClipAdvancedExperiences?: Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsAppClipAdvancedExperienceImages?: Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsAppClipAdvancedExperienceLocalizations?: Array<'language' | 'subtitle' | 'title'>, limit?: number, limitLocalizations?: number, include?: Array<'appClip' | 'headerImage' | 'localizations'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppClipsApi", "appClipsAppClipAdvancedExperiencesGetToManyRelated", "id");
        }












        // Path Params
        const localVarPath = '/v1/appClips/{id}/appClipAdvancedExperiences'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterAction !== undefined) {
            requestContext.setQueryParam("filter[action]", ObjectSerializer.serialize(filterAction, "Array<'OPEN' | 'VIEW' | 'PLAY'>", ""));
        }

        // Query Params
        if (filterPlaceStatus !== undefined) {
            requestContext.setQueryParam("filter[placeStatus]", ObjectSerializer.serialize(filterPlaceStatus, "Array<'PENDING' | 'MATCHED' | 'NO_MATCH'>", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "Array<'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS'>", ""));
        }

        // Query Params
        if (fieldsAppClipAdvancedExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipAdvancedExperiences]", ObjectSerializer.serialize(fieldsAppClipAdvancedExperiences, "Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>", ""));
        }

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsAppClipAdvancedExperienceImages !== undefined) {
            requestContext.setQueryParam("fields[appClipAdvancedExperienceImages]", ObjectSerializer.serialize(fieldsAppClipAdvancedExperienceImages, "Array<'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppClipAdvancedExperienceLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appClipAdvancedExperienceLocalizations]", ObjectSerializer.serialize(fieldsAppClipAdvancedExperienceLocalizations, "Array<'language' | 'subtitle' | 'title'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitLocalizations !== undefined) {
            requestContext.setQueryParam("limit[localizations]", ObjectSerializer.serialize(limitLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClip' | 'headerImage' | 'localizations'>", ""));
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
     * @param existsReleaseWithAppStoreVersion filter by existence or non-existence of related \&#39;releaseWithAppStoreVersion\&#39;
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param fieldsAppClipAppStoreReviewDetails the fields to include for returned resources of type appClipAppStoreReviewDetails
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param fieldsAppClipDefaultExperienceLocalizations the fields to include for returned resources of type appClipDefaultExperienceLocalizations
     * @param limit maximum resources per page
     * @param limitAppClipDefaultExperienceLocalizations maximum number of related appClipDefaultExperienceLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appClipsAppClipDefaultExperiencesGetToManyRelated(id: string, existsReleaseWithAppStoreVersion?: boolean, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, fieldsAppClipAppStoreReviewDetails?: Array<'appClipDefaultExperience' | 'invocationUrls'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, fieldsAppClipDefaultExperienceLocalizations?: Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'>, limit?: number, limitAppClipDefaultExperienceLocalizations?: number, include?: Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppClipsApi", "appClipsAppClipDefaultExperiencesGetToManyRelated", "id");
        }











        // Path Params
        const localVarPath = '/v1/appClips/{id}/appClipDefaultExperiences'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (existsReleaseWithAppStoreVersion !== undefined) {
            requestContext.setQueryParam("exists[releaseWithAppStoreVersion]", ObjectSerializer.serialize(existsReleaseWithAppStoreVersion, "boolean", ""));
        }

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (fieldsAppClipAppStoreReviewDetails !== undefined) {
            requestContext.setQueryParam("fields[appClipAppStoreReviewDetails]", ObjectSerializer.serialize(fieldsAppClipAppStoreReviewDetails, "Array<'appClipDefaultExperience' | 'invocationUrls'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersions !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersions]", ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'alternativeDistributionPackage' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionExperimentsV2' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'appVersionState' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'reviewType' | 'routingAppCoverage' | 'versionString'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperienceLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperienceLocalizations]", ObjectSerializer.serialize(fieldsAppClipDefaultExperienceLocalizations, "Array<'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppClipDefaultExperienceLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appClipDefaultExperienceLocalizations]", ObjectSerializer.serialize(limitAppClipDefaultExperienceLocalizations, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion'>", ""));
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
     * @param fieldsAppClips the fields to include for returned resources of type appClips
     * @param include comma-separated list of relationships to include
     * @param fieldsAppClipAdvancedExperiences the fields to include for returned resources of type appClipAdvancedExperiences
     * @param fieldsAppClipDefaultExperiences the fields to include for returned resources of type appClipDefaultExperiences
     * @param limitAppClipDefaultExperiences maximum number of related appClipDefaultExperiences returned (when they are included)
     */
    public async appClipsGetInstance(id: string, fieldsAppClips?: Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>, include?: Array<'app' | 'appClipDefaultExperiences'>, fieldsAppClipAdvancedExperiences?: Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>, fieldsAppClipDefaultExperiences?: Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>, limitAppClipDefaultExperiences?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppClipsApi", "appClipsGetInstance", "id");
        }







        // Path Params
        const localVarPath = '/v1/appClips/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppClips !== undefined) {
            requestContext.setQueryParam("fields[appClips]", ObjectSerializer.serialize(fieldsAppClips, "Array<'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'app' | 'appClipDefaultExperiences'>", ""));
        }

        // Query Params
        if (fieldsAppClipAdvancedExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipAdvancedExperiences]", ObjectSerializer.serialize(fieldsAppClipAdvancedExperiences, "Array<'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version'>", ""));
        }

        // Query Params
        if (fieldsAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("fields[appClipDefaultExperiences]", ObjectSerializer.serialize(fieldsAppClipDefaultExperiences, "Array<'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion'>", ""));
        }

        // Query Params
        if (limitAppClipDefaultExperiences !== undefined) {
            requestContext.setQueryParam("limit[appClipDefaultExperiences]", ObjectSerializer.serialize(limitAppClipDefaultExperiences, "number", ""));
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

export class AppClipsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appClipsAppClipAdvancedExperiencesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appClipsAppClipAdvancedExperiencesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppClipAdvancedExperiencesResponse >> {
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
            const body: AppClipAdvancedExperiencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipAdvancedExperiencesResponse", ""
            ) as AppClipAdvancedExperiencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppClipAdvancedExperiencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipAdvancedExperiencesResponse", ""
            ) as AppClipAdvancedExperiencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appClipsAppClipDefaultExperiencesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appClipsAppClipDefaultExperiencesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppClipDefaultExperiencesResponse >> {
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
            const body: AppClipDefaultExperiencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipDefaultExperiencesResponse", ""
            ) as AppClipDefaultExperiencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppClipDefaultExperiencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipDefaultExperiencesResponse", ""
            ) as AppClipDefaultExperiencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appClipsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appClipsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppClipResponse >> {
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
            const body: AppClipResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipResponse", ""
            ) as AppClipResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppClipResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppClipResponse", ""
            ) as AppClipResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
