// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AppPreviewSetsResponse } from '../models/AppPreviewSetsResponse.ts';
import { AppScreenshotSetsResponse } from '../models/AppScreenshotSetsResponse.ts';
import { AppStoreVersionLocalizationCreateRequest } from '../models/AppStoreVersionLocalizationCreateRequest.ts';
import { AppStoreVersionLocalizationResponse } from '../models/AppStoreVersionLocalizationResponse.ts';
import { AppStoreVersionLocalizationUpdateRequest } from '../models/AppStoreVersionLocalizationUpdateRequest.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppStoreVersionLocalizationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param filterPreviewType filter by attribute \&#39;previewType\&#39;
     * @param filterAppCustomProductPageLocalization filter by id(s) of related \&#39;appCustomProductPageLocalization\&#39;
     * @param filterAppStoreVersionExperimentTreatmentLocalization filter by id(s) of related \&#39;appStoreVersionExperimentTreatmentLocalization\&#39;
     * @param fieldsAppCustomProductPageLocalizations the fields to include for returned resources of type appCustomProductPageLocalizations
     * @param fieldsAppStoreVersionExperimentTreatmentLocalizations the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
     * @param fieldsAppPreviews the fields to include for returned resources of type appPreviews
     * @param fieldsAppPreviewSets the fields to include for returned resources of type appPreviewSets
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param limit maximum resources per page
     * @param limitAppPreviews maximum number of related appPreviews returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(id: string, filterPreviewType?: Array<'IPHONE_67' | 'IPHONE_61' | 'IPHONE_65' | 'IPHONE_58' | 'IPHONE_55' | 'IPHONE_47' | 'IPHONE_40' | 'IPHONE_35' | 'IPAD_PRO_3GEN_129' | 'IPAD_PRO_3GEN_11' | 'IPAD_PRO_129' | 'IPAD_105' | 'IPAD_97' | 'DESKTOP' | 'APPLE_TV' | 'APPLE_VISION_PRO'>, filterAppCustomProductPageLocalization?: Array<string>, filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>, fieldsAppCustomProductPageLocalizations?: Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>, fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>, fieldsAppPreviews?: Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'>, fieldsAppPreviewSets?: Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, limit?: number, limitAppPreviews?: number, include?: Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated", "id");
        }













        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations/{id}/appPreviewSets'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPreviewType !== undefined) {
            requestContext.setQueryParam("filter[previewType]", ObjectSerializer.serialize(filterPreviewType, "Array<'IPHONE_67' | 'IPHONE_61' | 'IPHONE_65' | 'IPHONE_58' | 'IPHONE_55' | 'IPHONE_47' | 'IPHONE_40' | 'IPHONE_35' | 'IPAD_PRO_3GEN_129' | 'IPAD_PRO_3GEN_11' | 'IPAD_PRO_129' | 'IPAD_105' | 'IPAD_97' | 'DESKTOP' | 'APPLE_TV' | 'APPLE_VISION_PRO'>", ""));
        }

        // Query Params
        if (filterAppCustomProductPageLocalization !== undefined) {
            requestContext.setQueryParam("filter[appCustomProductPageLocalization]", ObjectSerializer.serialize(filterAppCustomProductPageLocalization, "Array<string>", ""));
        }

        // Query Params
        if (filterAppStoreVersionExperimentTreatmentLocalization !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersionExperimentTreatmentLocalization]", ObjectSerializer.serialize(filterAppStoreVersionExperimentTreatmentLocalization, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPageLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPageLocalizations]", ObjectSerializer.serialize(fieldsAppCustomProductPageLocalizations, "Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatmentLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatmentLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>", ""));
        }

        // Query Params
        if (fieldsAppPreviews !== undefined) {
            requestContext.setQueryParam("fields[appPreviews]", ObjectSerializer.serialize(fieldsAppPreviews, "Array<'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl'>", ""));
        }

        // Query Params
        if (fieldsAppPreviewSets !== undefined) {
            requestContext.setQueryParam("fields[appPreviewSets]", ObjectSerializer.serialize(fieldsAppPreviewSets, "Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppPreviews !== undefined) {
            requestContext.setQueryParam("limit[appPreviews]", ObjectSerializer.serialize(limitAppPreviews, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'>", ""));
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
     * @param filterScreenshotDisplayType filter by attribute \&#39;screenshotDisplayType\&#39;
     * @param filterAppCustomProductPageLocalization filter by id(s) of related \&#39;appCustomProductPageLocalization\&#39;
     * @param filterAppStoreVersionExperimentTreatmentLocalization filter by id(s) of related \&#39;appStoreVersionExperimentTreatmentLocalization\&#39;
     * @param fieldsAppScreenshotSets the fields to include for returned resources of type appScreenshotSets
     * @param fieldsAppCustomProductPageLocalizations the fields to include for returned resources of type appCustomProductPageLocalizations
     * @param fieldsAppStoreVersionExperimentTreatmentLocalizations the fields to include for returned resources of type appStoreVersionExperimentTreatmentLocalizations
     * @param fieldsAppScreenshots the fields to include for returned resources of type appScreenshots
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param limit maximum resources per page
     * @param limitAppScreenshots maximum number of related appScreenshots returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(id: string, filterScreenshotDisplayType?: Array<'APP_IPHONE_67' | 'APP_IPHONE_61' | 'APP_IPHONE_65' | 'APP_IPHONE_58' | 'APP_IPHONE_55' | 'APP_IPHONE_47' | 'APP_IPHONE_40' | 'APP_IPHONE_35' | 'APP_IPAD_PRO_3GEN_129' | 'APP_IPAD_PRO_3GEN_11' | 'APP_IPAD_PRO_129' | 'APP_IPAD_105' | 'APP_IPAD_97' | 'APP_DESKTOP' | 'APP_WATCH_ULTRA' | 'APP_WATCH_SERIES_7' | 'APP_WATCH_SERIES_4' | 'APP_WATCH_SERIES_3' | 'APP_APPLE_TV' | 'APP_APPLE_VISION_PRO' | 'IMESSAGE_APP_IPHONE_67' | 'IMESSAGE_APP_IPHONE_61' | 'IMESSAGE_APP_IPHONE_65' | 'IMESSAGE_APP_IPHONE_58' | 'IMESSAGE_APP_IPHONE_55' | 'IMESSAGE_APP_IPHONE_47' | 'IMESSAGE_APP_IPHONE_40' | 'IMESSAGE_APP_IPAD_PRO_3GEN_129' | 'IMESSAGE_APP_IPAD_PRO_3GEN_11' | 'IMESSAGE_APP_IPAD_PRO_129' | 'IMESSAGE_APP_IPAD_105' | 'IMESSAGE_APP_IPAD_97'>, filterAppCustomProductPageLocalization?: Array<string>, filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>, fieldsAppScreenshotSets?: Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>, fieldsAppCustomProductPageLocalizations?: Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>, fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>, fieldsAppScreenshots?: Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, limit?: number, limitAppScreenshots?: number, include?: Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated", "id");
        }













        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations/{id}/appScreenshotSets'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterScreenshotDisplayType !== undefined) {
            requestContext.setQueryParam("filter[screenshotDisplayType]", ObjectSerializer.serialize(filterScreenshotDisplayType, "Array<'APP_IPHONE_67' | 'APP_IPHONE_61' | 'APP_IPHONE_65' | 'APP_IPHONE_58' | 'APP_IPHONE_55' | 'APP_IPHONE_47' | 'APP_IPHONE_40' | 'APP_IPHONE_35' | 'APP_IPAD_PRO_3GEN_129' | 'APP_IPAD_PRO_3GEN_11' | 'APP_IPAD_PRO_129' | 'APP_IPAD_105' | 'APP_IPAD_97' | 'APP_DESKTOP' | 'APP_WATCH_ULTRA' | 'APP_WATCH_SERIES_7' | 'APP_WATCH_SERIES_4' | 'APP_WATCH_SERIES_3' | 'APP_APPLE_TV' | 'APP_APPLE_VISION_PRO' | 'IMESSAGE_APP_IPHONE_67' | 'IMESSAGE_APP_IPHONE_61' | 'IMESSAGE_APP_IPHONE_65' | 'IMESSAGE_APP_IPHONE_58' | 'IMESSAGE_APP_IPHONE_55' | 'IMESSAGE_APP_IPHONE_47' | 'IMESSAGE_APP_IPHONE_40' | 'IMESSAGE_APP_IPAD_PRO_3GEN_129' | 'IMESSAGE_APP_IPAD_PRO_3GEN_11' | 'IMESSAGE_APP_IPAD_PRO_129' | 'IMESSAGE_APP_IPAD_105' | 'IMESSAGE_APP_IPAD_97'>", ""));
        }

        // Query Params
        if (filterAppCustomProductPageLocalization !== undefined) {
            requestContext.setQueryParam("filter[appCustomProductPageLocalization]", ObjectSerializer.serialize(filterAppCustomProductPageLocalization, "Array<string>", ""));
        }

        // Query Params
        if (filterAppStoreVersionExperimentTreatmentLocalization !== undefined) {
            requestContext.setQueryParam("filter[appStoreVersionExperimentTreatmentLocalization]", ObjectSerializer.serialize(filterAppStoreVersionExperimentTreatmentLocalization, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("fields[appScreenshotSets]", ObjectSerializer.serialize(fieldsAppScreenshotSets, "Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>", ""));
        }

        // Query Params
        if (fieldsAppCustomProductPageLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appCustomProductPageLocalizations]", ObjectSerializer.serialize(fieldsAppCustomProductPageLocalizations, "Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionExperimentTreatmentLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionExperimentTreatmentLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionExperimentTreatmentLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale'>", ""));
        }

        // Query Params
        if (fieldsAppScreenshots !== undefined) {
            requestContext.setQueryParam("fields[appScreenshots]", ObjectSerializer.serialize(fieldsAppScreenshots, "Array<'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>", ""));
        }

        // Query Params
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (limitAppScreenshots !== undefined) {
            requestContext.setQueryParam("limit[appScreenshots]", ObjectSerializer.serialize(limitAppScreenshots, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization'>", ""));
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
     * @param appStoreVersionLocalizationCreateRequest AppStoreVersionLocalization representation
     */
    public async appStoreVersionLocalizationsCreateInstance(appStoreVersionLocalizationCreateRequest: AppStoreVersionLocalizationCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appStoreVersionLocalizationCreateRequest' is not null or undefined
        if (appStoreVersionLocalizationCreateRequest === null || appStoreVersionLocalizationCreateRequest === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsCreateInstance", "appStoreVersionLocalizationCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(appStoreVersionLocalizationCreateRequest, "AppStoreVersionLocalizationCreateRequest", ""),
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
    public async appStoreVersionLocalizationsDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations/{id}'
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
     * @param fieldsAppStoreVersionLocalizations the fields to include for returned resources of type appStoreVersionLocalizations
     * @param include comma-separated list of relationships to include
     * @param fieldsAppScreenshotSets the fields to include for returned resources of type appScreenshotSets
     * @param fieldsAppPreviewSets the fields to include for returned resources of type appPreviewSets
     * @param limitAppPreviewSets maximum number of related appPreviewSets returned (when they are included)
     * @param limitAppScreenshotSets maximum number of related appScreenshotSets returned (when they are included)
     */
    public async appStoreVersionLocalizationsGetInstance(id: string, fieldsAppStoreVersionLocalizations?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>, include?: Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion'>, fieldsAppScreenshotSets?: Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>, fieldsAppPreviewSets?: Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>, limitAppPreviewSets?: number, limitAppScreenshotSets?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppStoreVersionLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appStoreVersionLocalizations]", ObjectSerializer.serialize(fieldsAppStoreVersionLocalizations, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion'>", ""));
        }

        // Query Params
        if (fieldsAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("fields[appScreenshotSets]", ObjectSerializer.serialize(fieldsAppScreenshotSets, "Array<'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType'>", ""));
        }

        // Query Params
        if (fieldsAppPreviewSets !== undefined) {
            requestContext.setQueryParam("fields[appPreviewSets]", ObjectSerializer.serialize(fieldsAppPreviewSets, "Array<'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType'>", ""));
        }

        // Query Params
        if (limitAppPreviewSets !== undefined) {
            requestContext.setQueryParam("limit[appPreviewSets]", ObjectSerializer.serialize(limitAppPreviewSets, "number", ""));
        }

        // Query Params
        if (limitAppScreenshotSets !== undefined) {
            requestContext.setQueryParam("limit[appScreenshotSets]", ObjectSerializer.serialize(limitAppScreenshotSets, "number", ""));
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
     * @param appStoreVersionLocalizationUpdateRequest AppStoreVersionLocalization representation
     */
    public async appStoreVersionLocalizationsUpdateInstance(id: string, appStoreVersionLocalizationUpdateRequest: AppStoreVersionLocalizationUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsUpdateInstance", "id");
        }


        // verify required parameter 'appStoreVersionLocalizationUpdateRequest' is not null or undefined
        if (appStoreVersionLocalizationUpdateRequest === null || appStoreVersionLocalizationUpdateRequest === undefined) {
            throw new RequiredError("AppStoreVersionLocalizationsApi", "appStoreVersionLocalizationsUpdateInstance", "appStoreVersionLocalizationUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appStoreVersionLocalizations/{id}'
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
            ObjectSerializer.serialize(appStoreVersionLocalizationUpdateRequest, "AppStoreVersionLocalizationUpdateRequest", ""),
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

export class AppStoreVersionLocalizationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppPreviewSetsResponse >> {
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
            const body: AppPreviewSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPreviewSetsResponse", ""
            ) as AppPreviewSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppPreviewSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppPreviewSetsResponse", ""
            ) as AppPreviewSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppScreenshotSetsResponse >> {
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
            const body: AppScreenshotSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppScreenshotSetsResponse", ""
            ) as AppScreenshotSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppScreenshotSetsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppScreenshotSetsResponse", ""
            ) as AppScreenshotSetsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionLocalizationResponse >> {
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
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
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
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionLocalizationResponse >> {
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
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appStoreVersionLocalizationsUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appStoreVersionLocalizationsUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppStoreVersionLocalizationResponse >> {
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
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
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
            const body: AppStoreVersionLocalizationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppStoreVersionLocalizationResponse", ""
            ) as AppStoreVersionLocalizationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
