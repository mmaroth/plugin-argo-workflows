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

import { HttpFile } from '../http/http';

export class IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef {
    /**
    * The name of the config map. Defaults to \"artifact-repositories\".
    */
    'configMap'?: string;
    /**
    * The config map key. Defaults to the value of the \"workflows.argoproj.io/default-artifact-repository\" annotation.
    */
    'key'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtifactRepositoryRef.attributeTypeMap;
    }

    public constructor() {
    }
}

