/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from '../models/AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion.ts';
import { AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion } from '../models/AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion.ts';
import { AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2 } from '../models/AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2.ts';
import { ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent } from '../models/ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent.ts';
import { ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission } from '../models/ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission.ts';
import { HttpFile } from '../http/http.ts';

export class ReviewSubmissionItemCreateRequestDataRelationships {
    'reviewSubmission': ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission;
    'appStoreVersion'?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    'appCustomProductPageVersion'?: AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion;
    'appStoreVersionExperiment'?: AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2;
    'appStoreVersionExperimentV2'?: AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2;
    'appEvent'?: ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reviewSubmission",
            "baseName": "reviewSubmission",
            "type": "ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission",
            "format": ""
        },
        {
            "name": "appStoreVersion",
            "baseName": "appStoreVersion",
            "type": "AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion",
            "format": ""
        },
        {
            "name": "appCustomProductPageVersion",
            "baseName": "appCustomProductPageVersion",
            "type": "AppCustomProductPageLocalizationInlineCreateRelationshipsAppCustomProductPageVersion",
            "format": ""
        },
        {
            "name": "appStoreVersionExperiment",
            "baseName": "appStoreVersionExperiment",
            "type": "AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2",
            "format": ""
        },
        {
            "name": "appStoreVersionExperimentV2",
            "baseName": "appStoreVersionExperimentV2",
            "type": "AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentV2",
            "format": ""
        },
        {
            "name": "appEvent",
            "baseName": "appEvent",
            "type": "ReviewSubmissionItemCreateRequestDataRelationshipsAppEvent",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionItemCreateRequestDataRelationships.attributeTypeMap;
    }

    public constructor() {
    }
}

