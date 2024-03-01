import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './graphdatabase.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export interface AccountProps {
    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: Account password.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property accountDescription: Account description.
     */
    readonly accountDescription?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GraphDatabase::Account`, which is used to create an account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export declare class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountDescription: Account description.
     */
    readonly attrAccountDescription: ros.IResolvable;
    /**
     * Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * Attribute AccountType: Account Type.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
