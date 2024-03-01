import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroup as GroupProperty };

/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
export interface GroupProps {

    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property ignoreExisting: Whether to ignore existing group
     * False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored.
     * If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosGroup.PolicyAttachmentsProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::Group`, which is used to create a Resource Access Management (RAM) user group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
export class Group extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupName: Id of ram group.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroup = new RosGroup(this, id,  {
            groupName: props.groupName,
            ignoreExisting: props.ignoreExisting === undefined || props.ignoreExisting === null ? false : props.ignoreExisting,
            policyAttachments: props.policyAttachments,
            policies: props.policies,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            comments: props.comments,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupName = rosGroup.attrGroupName;
    }
}
