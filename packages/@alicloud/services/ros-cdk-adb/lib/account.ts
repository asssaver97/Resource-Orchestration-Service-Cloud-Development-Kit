import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './adb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export interface AccountProps {

    /**
     * Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPassword: The password of the account.
     * The password must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * Special characters include ! @ # $ % ^ & * ()  _ + - and =
     * The password must be 8 to 32 characters in length.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * Property accountType: Normal: standard account
     * Super: privileged account
     */
    readonly accountType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ADB::Account`, which is used to create a database account for an AnalyticDB for MySQL cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * Attribute AccountType: The type of the account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccount = new RosAccount(this, id,  {
            accountDescription: props.accountDescription,
            dbClusterId: props.dbClusterId,
            accountType: props.accountType,
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountType = rosAccount.attrAccountType;
        this.attrDbClusterId = rosAccount.attrDbClusterId;
    }
}
