import * as ros from '@alicloud/ros-cdk-core';
import { RosUserVpcAuthorization } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserVpcAuthorization as UserVpcAuthorizationProperty };

/**
 * Properties for defining a `UserVpcAuthorization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export interface UserVpcAuthorizationProps {

    /**
     * Property authorizedUserId: The account ID of the user who authorizes the resource.
     */
    readonly authorizedUserId: string | ros.IResolvable;

    /**
     * Property authChannel: Authorization channel. Valid values:
     * AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
     * RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
     */
    readonly authChannel?: string | ros.IResolvable;

    /**
     * Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
     */
    readonly authCode?: string | ros.IResolvable;

    /**
     * Property authType: Authorization type.
     */
    readonly authType?: string | ros.IResolvable;

    /**
     * Property ignoreDeletionForbidden: Whether to ignore following deletion forbidden errors when deleting:- UserAuth.DeleteForbidden.ZoneVpcExists
     */
    readonly ignoreDeletionForbidden?: boolean | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::UserVpcAuthorization`, which is used to associate virtual private clouds (VPCs) across accounts.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserVpcAuthorization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-uservpcauthorization
 */
export class UserVpcAuthorization extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserVpcAuthorizationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AuthType: Authorization type.
     */
    public readonly attrAuthType: ros.IResolvable;

    /**
     * Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.
     */
    public readonly attrAuthorizedUserId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserVpcAuthorizationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserVpcAuthorization = new RosUserVpcAuthorization(this, id,  {
            authCode: props.authCode,
            authChannel: props.authChannel,
            authorizedUserId: props.authorizedUserId,
            authType: props.authType,
            ignoreDeletionForbidden: props.ignoreDeletionForbidden === undefined || props.ignoreDeletionForbidden === null ? false : props.ignoreDeletionForbidden,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserVpcAuthorization;
        this.attrAuthType = rosUserVpcAuthorization.attrAuthType;
        this.attrAuthorizedUserId = rosUserVpcAuthorization.attrAuthorizedUserId;
    }
}
