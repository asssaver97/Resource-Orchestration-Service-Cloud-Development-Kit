import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './resourcemanager.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export interface AccountProps {
    /**
     * Property displayName: Member name
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property deleteAccount: Whether delete the account. Default value is false.
     */
    readonly deleteAccount?: boolean | ros.IResolvable;
    /**
     * Property folderId: The ID of the parent folder
     */
    readonly folderId?: string | ros.IResolvable;
    /**
     * Property payerAccountId:
     */
    readonly payerAccountId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Account`, which is used to create a resource account as a member account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export declare class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: This ID of Resource Manager Account
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * Attribute DisplayName: Member name
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Attribute FolderId: The ID of the parent folder
     */
    readonly attrFolderId: ros.IResolvable;
    /**
     * Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    readonly attrJoinMethod: ros.IResolvable;
    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    readonly attrType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
