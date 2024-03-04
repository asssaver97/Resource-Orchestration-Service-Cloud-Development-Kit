import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardbx.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export interface AccountProps {
    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password of the account.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: Account description information.
     */
    readonly accountDescription?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PolarDBX::Account`, which is used to create an account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export declare class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountDescription: Account description information.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
