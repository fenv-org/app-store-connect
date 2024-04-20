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

import { Build } from '../models/Build.ts';
import { CiProduct } from '../models/CiProduct.ts';
import { CiWorkflow } from '../models/CiWorkflow.ts';
import { ResourceLinks } from '../models/ResourceLinks.ts';
import { ScmGitReference } from '../models/ScmGitReference.ts';
import { ScmGitReferenceRelationships } from '../models/ScmGitReferenceRelationships.ts';
import { ScmPullRequest } from '../models/ScmPullRequest.ts';
import { ScmPullRequestAttributes } from '../models/ScmPullRequestAttributes.ts';
import { HttpFile } from '../http/http.ts';

export class CiBuildRunsResponseIncludedInner {
    'type': CiBuildRunsResponseIncludedInnerTypeEnum;
    'id': string;
    'attributes'?: ScmPullRequestAttributes;
    'relationships'?: ScmGitReferenceRelationships;
    'links'?: ResourceLinks;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CiBuildRunsResponseIncludedInnerTypeEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ScmPullRequestAttributes",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "ScmGitReferenceRelationships",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CiBuildRunsResponseIncludedInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CiBuildRunsResponseIncludedInnerTypeEnum {
    Builds = 'builds',
    CiWorkflows = 'ciWorkflows',
    CiProducts = 'ciProducts',
    ScmGitReferences = 'scmGitReferences',
    ScmPullRequests = 'scmPullRequests'
}
