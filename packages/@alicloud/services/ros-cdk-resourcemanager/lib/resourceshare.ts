import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceShare } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceShare as ResourceShareProperty };

/**
 * Properties for defining a `ResourceShare`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
export interface ResourceShareProps {

    /**
     * Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly resourceShareName: string | ros.IResolvable;

    /**
     * Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
     * false (default): Only allow sharing within the resource directory.
     * true: Allow sharing to any account.
     */
    readonly allowExternalTargets?: boolean | ros.IResolvable;

    /**
     * Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    readonly permissionNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resources:
     */
    readonly resources?: Array<RosResourceShare.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceShare`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceShare`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
export class ResourceShare extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ResourceShareProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceShareProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceShare = new RosResourceShare(this, id,  {
            resourceShareName: props.resourceShareName,
            allowExternalTargets: props.allowExternalTargets === undefined || props.allowExternalTargets === null ? false : props.allowExternalTargets,
            targets: props.targets,
            resources: props.resources,
            permissionNames: props.permissionNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceShare;
        this.attrResourceShareId = rosResourceShare.attrResourceShareId;
    }
}
