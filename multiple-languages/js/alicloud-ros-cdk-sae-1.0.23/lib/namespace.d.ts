import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './sae.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
export interface NamespaceProps {
    /**
     * Property namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * Property namespaceName: Namespace name
     */
    readonly namespaceName: string | ros.IResolvable;
    /**
     * Property namespaceDescription: Namespace description
     */
    readonly namespaceDescription?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::Namespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
 */
export declare class Namespace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NamespaceId: Namespace ID
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
