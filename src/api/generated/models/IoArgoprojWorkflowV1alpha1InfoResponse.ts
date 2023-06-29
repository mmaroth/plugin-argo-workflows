/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * OpenAPI spec version: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoArgoprojWorkflowV1alpha1Column } from '../models/IoArgoprojWorkflowV1alpha1Column';
import { IoArgoprojWorkflowV1alpha1Link } from '../models/IoArgoprojWorkflowV1alpha1Link';
import { HttpFile } from '../http/http';

export class IoArgoprojWorkflowV1alpha1InfoResponse {
    'columns'?: Array<IoArgoprojWorkflowV1alpha1Column>;
    'links'?: Array<IoArgoprojWorkflowV1alpha1Link>;
    'managedNamespace'?: string;
    'modals'?: { [key: string]: boolean; };
    'navColor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<IoArgoprojWorkflowV1alpha1Column>",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<IoArgoprojWorkflowV1alpha1Link>",
            "format": ""
        },
        {
            "name": "managedNamespace",
            "baseName": "managedNamespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "modals",
            "baseName": "modals",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "navColor",
            "baseName": "navColor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1InfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

