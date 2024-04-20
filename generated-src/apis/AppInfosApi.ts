// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AgeRatingDeclarationResponse } from '../models/AgeRatingDeclarationResponse.ts';
import { AppCategoryResponse } from '../models/AppCategoryResponse.ts';
import { AppInfoLocalizationsResponse } from '../models/AppInfoLocalizationsResponse.ts';
import { AppInfoResponse } from '../models/AppInfoResponse.ts';
import { AppInfoUpdateRequest } from '../models/AppInfoUpdateRequest.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';

/**
 * no description
 */
export class AppInfosApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     */
    public async appInfosAgeRatingDeclarationGetToOneRelated(id: string, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosAgeRatingDeclarationGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/appInfos/{id}/ageRatingDeclaration'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
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
     * @param filterLocale filter by attribute \&#39;locale\&#39;
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param fieldsAppInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appInfosAppInfoLocalizationsGetToManyRelated(id: string, filterLocale?: Array<string>, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, fieldsAppInfoLocalizations?: Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>, limit?: number, include?: Array<'appInfo'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosAppInfoLocalizationsGetToManyRelated", "id");
        }







        // Path Params
        const localVarPath = '/v1/appInfos/{id}/appInfoLocalizations'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterLocale !== undefined) {
            requestContext.setQueryParam("filter[locale]", ObjectSerializer.serialize(filterLocale, "Array<string>", ""));
        }

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (fieldsAppInfoLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appInfoLocalizations]", ObjectSerializer.serialize(fieldsAppInfoLocalizations, "Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'appInfo'>", ""));
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
     * @param fieldsAppInfos the fields to include for returned resources of type appInfos
     * @param include comma-separated list of relationships to include
     * @param fieldsAgeRatingDeclarations the fields to include for returned resources of type ageRatingDeclarations
     * @param fieldsAppInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitAppInfoLocalizations maximum number of related appInfoLocalizations returned (when they are included)
     */
    public async appInfosGetInstance(id: string, fieldsAppInfos?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>, include?: Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo'>, fieldsAgeRatingDeclarations?: Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>, fieldsAppInfoLocalizations?: Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitAppInfoLocalizations?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosGetInstance", "id");
        }








        // Path Params
        const localVarPath = '/v1/appInfos/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppInfos !== undefined) {
            requestContext.setQueryParam("fields[appInfos]", ObjectSerializer.serialize(fieldsAppInfos, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'appStoreAgeRating' | 'appStoreState' | 'brazilAgeRating' | 'brazilAgeRatingV2' | 'kidsAgeBand' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo' | 'state'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'ageRatingDeclaration' | 'app' | 'appInfoLocalizations' | 'primaryCategory' | 'primarySubcategoryOne' | 'primarySubcategoryTwo' | 'secondaryCategory' | 'secondarySubcategoryOne' | 'secondarySubcategoryTwo'>", ""));
        }

        // Query Params
        if (fieldsAgeRatingDeclarations !== undefined) {
            requestContext.setQueryParam("fields[ageRatingDeclarations]", ObjectSerializer.serialize(fieldsAgeRatingDeclarations, "Array<'ageRatingOverride' | 'alcoholTobaccoOrDrugUseOrReferences' | 'contests' | 'gambling' | 'gamblingAndContests' | 'gamblingSimulated' | 'horrorOrFearThemes' | 'kidsAgeBand' | 'matureOrSuggestiveThemes' | 'medicalOrTreatmentInformation' | 'profanityOrCrudeHumor' | 'seventeenPlus' | 'sexualContentGraphicAndNudity' | 'sexualContentOrNudity' | 'unrestrictedWebAccess' | 'violenceCartoonOrFantasy' | 'violenceRealistic' | 'violenceRealisticProlongedGraphicOrSadistic'>", ""));
        }

        // Query Params
        if (fieldsAppInfoLocalizations !== undefined) {
            requestContext.setQueryParam("fields[appInfoLocalizations]", ObjectSerializer.serialize(fieldsAppInfoLocalizations, "Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>", ""));
        }

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitAppInfoLocalizations !== undefined) {
            requestContext.setQueryParam("limit[appInfoLocalizations]", ObjectSerializer.serialize(limitAppInfoLocalizations, "number", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosPrimaryCategoryGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosPrimaryCategoryGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/primaryCategory'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosPrimarySubcategoryOneGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosPrimarySubcategoryOneGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/primarySubcategoryOne'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosPrimarySubcategoryTwoGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosPrimarySubcategoryTwoGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/primarySubcategoryTwo'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosSecondaryCategoryGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosSecondaryCategoryGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/secondaryCategory'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosSecondarySubcategoryOneGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosSecondarySubcategoryOneGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/secondarySubcategoryOne'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param fieldsAppCategories the fields to include for returned resources of type appCategories
     * @param limitSubcategories maximum number of related subcategories returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appInfosSecondarySubcategoryTwoGetToOneRelated(id: string, fieldsAppCategories?: Array<'parent' | 'platforms' | 'subcategories'>, limitSubcategories?: number, include?: Array<'parent' | 'subcategories'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosSecondarySubcategoryTwoGetToOneRelated", "id");
        }





        // Path Params
        const localVarPath = '/v1/appInfos/{id}/secondarySubcategoryTwo'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsAppCategories !== undefined) {
            requestContext.setQueryParam("fields[appCategories]", ObjectSerializer.serialize(fieldsAppCategories, "Array<'parent' | 'platforms' | 'subcategories'>", ""));
        }

        // Query Params
        if (limitSubcategories !== undefined) {
            requestContext.setQueryParam("limit[subcategories]", ObjectSerializer.serialize(limitSubcategories, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'parent' | 'subcategories'>", ""));
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
     * @param appInfoUpdateRequest AppInfo representation
     */
    public async appInfosUpdateInstance(id: string, appInfoUpdateRequest: AppInfoUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosUpdateInstance", "id");
        }


        // verify required parameter 'appInfoUpdateRequest' is not null or undefined
        if (appInfoUpdateRequest === null || appInfoUpdateRequest === undefined) {
            throw new RequiredError("AppInfosApi", "appInfosUpdateInstance", "appInfoUpdateRequest");
        }


        // Path Params
        const localVarPath = '/v1/appInfos/{id}'
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
            ObjectSerializer.serialize(appInfoUpdateRequest, "AppInfoUpdateRequest", ""),
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

export class AppInfosApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosAgeRatingDeclarationGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosAgeRatingDeclarationGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AgeRatingDeclarationResponse >> {
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
            const body: AgeRatingDeclarationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgeRatingDeclarationResponse", ""
            ) as AgeRatingDeclarationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgeRatingDeclarationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgeRatingDeclarationResponse", ""
            ) as AgeRatingDeclarationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosAppInfoLocalizationsGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosAppInfoLocalizationsGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppInfoLocalizationsResponse >> {
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
            const body: AppInfoLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoLocalizationsResponse", ""
            ) as AppInfoLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppInfoLocalizationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoLocalizationsResponse", ""
            ) as AppInfoLocalizationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppInfoResponse >> {
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
            const body: AppInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoResponse", ""
            ) as AppInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoResponse", ""
            ) as AppInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosPrimaryCategoryGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosPrimaryCategoryGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosPrimarySubcategoryOneGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosPrimarySubcategoryOneGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosPrimarySubcategoryTwoGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosPrimarySubcategoryTwoGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosSecondaryCategoryGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosSecondaryCategoryGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosSecondarySubcategoryOneGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosSecondarySubcategoryOneGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosSecondarySubcategoryTwoGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosSecondarySubcategoryTwoGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppCategoryResponse >> {
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
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppCategoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppCategoryResponse", ""
            ) as AppCategoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to appInfosUpdateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async appInfosUpdateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppInfoResponse >> {
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
            const body: AppInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoResponse", ""
            ) as AppInfoResponse;
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
            const body: AppInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppInfoResponse", ""
            ) as AppInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
