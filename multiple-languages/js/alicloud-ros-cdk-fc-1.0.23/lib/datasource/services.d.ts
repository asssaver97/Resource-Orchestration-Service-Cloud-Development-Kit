import * as ros from '@alicloud/ros-cdk-core';
import { RosServices } from './fc.generated';
export { RosServices as ServicesProperty };
/**
 * Properties for defining a `Services`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
 */
export interface ServicesProps {
    /**
     * Property prefix: Qualified returned service names must be prefixed with Prefix. For example, if the Prefix is "a", the returned service names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Services`, which is used to query services.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServices`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-services
 */
export declare class Services extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ServicesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ServiceNames: The list of service names.
     */
    readonly attrServiceNames: ros.IResolvable;
    /**
     * Attribute Services: The list of services.
     */
    readonly attrServices: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ServicesProps, enableResourcePropertyConstraint?: boolean);
}
