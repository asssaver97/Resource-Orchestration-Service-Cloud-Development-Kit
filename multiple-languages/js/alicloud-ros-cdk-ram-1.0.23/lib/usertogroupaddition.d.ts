import * as ros from '@alicloud/ros-cdk-core';
import { RosUserToGroupAddition } from './ram.generated';
export { RosUserToGroupAddition as UserToGroupAdditionProperty };
/**
 * Properties for defining a `UserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
export interface UserToGroupAdditionProps {
    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property users: list name of a users to which you want to add the group.
     */
    readonly users: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::UserToGroupAddition`, which is used to add users to a RAM group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserToGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
export declare class UserToGroupAddition extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserToGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserToGroupAdditionProps, enableResourcePropertyConstraint?: boolean);
}
