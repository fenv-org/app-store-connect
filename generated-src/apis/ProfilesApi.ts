// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BundleIdWithoutIncludesResponse } from '../models/BundleIdWithoutIncludesResponse.ts';
import { CertificatesWithoutIncludesResponse } from '../models/CertificatesWithoutIncludesResponse.ts';
import { DevicesWithoutIncludesResponse } from '../models/DevicesWithoutIncludesResponse.ts';
import { ErrorResponse } from '../models/ErrorResponse.ts';
import { ProfileCreateRequest } from '../models/ProfileCreateRequest.ts';
import { ProfileResponse } from '../models/ProfileResponse.ts';
import { ProfilesResponse } from '../models/ProfilesResponse.ts';

/**
 * no description
 */
export class ProfilesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id the id of the requested resource
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     */
    public async profilesBundleIdGetToOneRelated(id: string, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProfilesApi", "profilesBundleIdGetToOneRelated", "id");
        }



        // Path Params
        const localVarPath = '/v1/profiles/{id}/bundleId'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsBundleIds !== undefined) {
            requestContext.setQueryParam("fields[bundleIds]", ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>", ""));
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
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param limit maximum resources per page
     */
    public async profilesCertificatesGetToManyRelated(id: string, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProfilesApi", "profilesCertificatesGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/profiles/{id}/certificates'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsCertificates !== undefined) {
            requestContext.setQueryParam("fields[certificates]", ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>", ""));
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
     * @param profileCreateRequest Profile representation
     */
    public async profilesCreateInstance(profileCreateRequest: ProfileCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'profileCreateRequest' is not null or undefined
        if (profileCreateRequest === null || profileCreateRequest === undefined) {
            throw new RequiredError("ProfilesApi", "profilesCreateInstance", "profileCreateRequest");
        }


        // Path Params
        const localVarPath = '/v1/profiles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(profileCreateRequest, "ProfileCreateRequest", ""),
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
    public async profilesDeleteInstance(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProfilesApi", "profilesDeleteInstance", "id");
        }


        // Path Params
        const localVarPath = '/v1/profiles/{id}'
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
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param limit maximum resources per page
     */
    public async profilesDevicesGetToManyRelated(id: string, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProfilesApi", "profilesDevicesGetToManyRelated", "id");
        }




        // Path Params
        const localVarPath = '/v1/profiles/{id}/devices'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsDevices !== undefined) {
            requestContext.setQueryParam("fields[devices]", ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>", ""));
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
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterProfileState filter by attribute \&#39;profileState\&#39;
     * @param filterProfileType filter by attribute \&#39;profileType\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsProfiles the fields to include for returned resources of type profiles
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     * @param limitCertificates maximum number of related certificates returned (when they are included)
     * @param limitDevices maximum number of related devices returned (when they are included)
     */
    public async profilesGetCollection(filterName?: Array<string>, filterProfileState?: Array<'ACTIVE' | 'INVALID'>, filterProfileType?: Array<'IOS_APP_DEVELOPMENT' | 'IOS_APP_STORE' | 'IOS_APP_ADHOC' | 'IOS_APP_INHOUSE' | 'MAC_APP_DEVELOPMENT' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT' | 'TVOS_APP_DEVELOPMENT' | 'TVOS_APP_STORE' | 'TVOS_APP_ADHOC' | 'TVOS_APP_INHOUSE' | 'MAC_CATALYST_APP_DEVELOPMENT' | 'MAC_CATALYST_APP_STORE' | 'MAC_CATALYST_APP_DIRECT'>, filterId?: Array<string>, sort?: Array<'id' | '-id' | 'name' | '-name' | 'profileState' | '-profileState' | 'profileType' | '-profileType'>, fieldsProfiles?: Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>, limit?: number, include?: Array<'bundleId' | 'certificates' | 'devices'>, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, limitCertificates?: number, limitDevices?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/v1/profiles';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "Array<string>", ""));
        }

        // Query Params
        if (filterProfileState !== undefined) {
            requestContext.setQueryParam("filter[profileState]", ObjectSerializer.serialize(filterProfileState, "Array<'ACTIVE' | 'INVALID'>", ""));
        }

        // Query Params
        if (filterProfileType !== undefined) {
            requestContext.setQueryParam("filter[profileType]", ObjectSerializer.serialize(filterProfileType, "Array<'IOS_APP_DEVELOPMENT' | 'IOS_APP_STORE' | 'IOS_APP_ADHOC' | 'IOS_APP_INHOUSE' | 'MAC_APP_DEVELOPMENT' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT' | 'TVOS_APP_DEVELOPMENT' | 'TVOS_APP_STORE' | 'TVOS_APP_ADHOC' | 'TVOS_APP_INHOUSE' | 'MAC_CATALYST_APP_DEVELOPMENT' | 'MAC_CATALYST_APP_STORE' | 'MAC_CATALYST_APP_DIRECT'>", ""));
        }

        // Query Params
        if (filterId !== undefined) {
            requestContext.setQueryParam("filter[id]", ObjectSerializer.serialize(filterId, "Array<string>", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<'id' | '-id' | 'name' | '-name' | 'profileState' | '-profileState' | 'profileType' | '-profileType'>", ""));
        }

        // Query Params
        if (fieldsProfiles !== undefined) {
            requestContext.setQueryParam("fields[profiles]", ObjectSerializer.serialize(fieldsProfiles, "Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'bundleId' | 'certificates' | 'devices'>", ""));
        }

        // Query Params
        if (fieldsCertificates !== undefined) {
            requestContext.setQueryParam("fields[certificates]", ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>", ""));
        }

        // Query Params
        if (fieldsDevices !== undefined) {
            requestContext.setQueryParam("fields[devices]", ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>", ""));
        }

        // Query Params
        if (fieldsBundleIds !== undefined) {
            requestContext.setQueryParam("fields[bundleIds]", ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>", ""));
        }

        // Query Params
        if (limitCertificates !== undefined) {
            requestContext.setQueryParam("limit[certificates]", ObjectSerializer.serialize(limitCertificates, "number", ""));
        }

        // Query Params
        if (limitDevices !== undefined) {
            requestContext.setQueryParam("limit[devices]", ObjectSerializer.serialize(limitDevices, "number", ""));
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
     * @param fieldsProfiles the fields to include for returned resources of type profiles
     * @param include comma-separated list of relationships to include
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     * @param limitCertificates maximum number of related certificates returned (when they are included)
     * @param limitDevices maximum number of related devices returned (when they are included)
     */
    public async profilesGetInstance(id: string, fieldsProfiles?: Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>, include?: Array<'bundleId' | 'certificates' | 'devices'>, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, limitCertificates?: number, limitDevices?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProfilesApi", "profilesGetInstance", "id");
        }









        // Path Params
        const localVarPath = '/v1/profiles/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fieldsProfiles !== undefined) {
            requestContext.setQueryParam("fields[profiles]", ObjectSerializer.serialize(fieldsProfiles, "Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>", ""));
        }

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<'bundleId' | 'certificates' | 'devices'>", ""));
        }

        // Query Params
        if (fieldsCertificates !== undefined) {
            requestContext.setQueryParam("fields[certificates]", ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>", ""));
        }

        // Query Params
        if (fieldsDevices !== undefined) {
            requestContext.setQueryParam("fields[devices]", ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>", ""));
        }

        // Query Params
        if (fieldsBundleIds !== undefined) {
            requestContext.setQueryParam("fields[bundleIds]", ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>", ""));
        }

        // Query Params
        if (limitCertificates !== undefined) {
            requestContext.setQueryParam("limit[certificates]", ObjectSerializer.serialize(limitCertificates, "number", ""));
        }

        // Query Params
        if (limitDevices !== undefined) {
            requestContext.setQueryParam("limit[devices]", ObjectSerializer.serialize(limitDevices, "number", ""));
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

export class ProfilesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesBundleIdGetToOneRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesBundleIdGetToOneRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BundleIdWithoutIncludesResponse >> {
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
            const body: BundleIdWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BundleIdWithoutIncludesResponse", ""
            ) as BundleIdWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BundleIdWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BundleIdWithoutIncludesResponse", ""
            ) as BundleIdWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesCertificatesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesCertificatesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CertificatesWithoutIncludesResponse >> {
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
            const body: CertificatesWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CertificatesWithoutIncludesResponse", ""
            ) as CertificatesWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CertificatesWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CertificatesWithoutIncludesResponse", ""
            ) as CertificatesWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesCreateInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesCreateInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProfileResponse >> {
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
            const body: ProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfileResponse", ""
            ) as ProfileResponse;
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
            const body: ProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfileResponse", ""
            ) as ProfileResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesDeleteInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesDeleteInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to profilesDevicesGetToManyRelated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesDevicesGetToManyRelatedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DevicesWithoutIncludesResponse >> {
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
            const body: DevicesWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicesWithoutIncludesResponse", ""
            ) as DevicesWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicesWithoutIncludesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicesWithoutIncludesResponse", ""
            ) as DevicesWithoutIncludesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesGetCollection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesGetCollectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProfilesResponse >> {
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
            const body: ProfilesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfilesResponse", ""
            ) as ProfilesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProfilesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfilesResponse", ""
            ) as ProfilesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to profilesGetInstance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async profilesGetInstanceWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProfileResponse >> {
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
            const body: ProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfileResponse", ""
            ) as ProfileResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProfileResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProfileResponse", ""
            ) as ProfileResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
