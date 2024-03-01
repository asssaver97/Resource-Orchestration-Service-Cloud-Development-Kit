import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerAttachment } from './alb.generated';
export { RosBackendServerAttachment as BackendServerAttachmentProperty };
/**
 * Properties for defining a `BackendServerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
 */
export interface BackendServerAttachmentProps {
    /**
     * Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * Property servers: The backend servers that you want to add to the server group. You can specify up to
     * 40 servers in each call.
     */
    readonly servers: Array<RosBackendServerAttachment.ServersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::BackendServerAttachment`, which is used to add backend servers to a server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
 */
export declare class BackendServerAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BackendServerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
