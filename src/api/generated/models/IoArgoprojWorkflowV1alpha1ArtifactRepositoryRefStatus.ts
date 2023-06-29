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

import { IoArgoprojWorkflowV1alpha1ArtifactRepository } from '../models/IoArgoprojWorkflowV1alpha1ArtifactRepository';
import { HttpFile } from '../http/http';

export class IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus {
    'artifactRepository'?: IoArgoprojWorkflowV1alpha1ArtifactRepository;
    /**
    * The name of the config map. Defaults to \"artifact-repositories\".
    */
    'configMap'?: string;
    /**
    * If this ref represents the default artifact repository, rather than a config map.
    */
    '_default'?: boolean;
    /**
    * The config map key. Defaults to the value of the \"workflows.argoproj.io/default-artifact-repository\" annotation.
    */
    'key'?: string;
    /**
    * The namespace of the config map. Defaults to the workflow\'s namespace, or the controller\'s namespace (if found).
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "artifactRepository",
            "baseName": "artifactRepository",
            "type": "IoArgoprojWorkflowV1alpha1ArtifactRepository",
            "format": ""
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "string",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1ArtifactRepositoryRefStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

