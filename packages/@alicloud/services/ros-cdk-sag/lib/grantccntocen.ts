import * as ros from '@alicloud/ros-cdk-core';
import { RosGrantCcnToCen } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGrantCcnToCen as GrantCcnToCenProperty };

/**
 * Properties for defining a `GrantCcnToCen`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
 */
export interface GrantCcnToCenProps {

    /**
     * Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string | ros.IResolvable;

    /**
     * Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string | ros.IResolvable;

    /**
     * Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::GrantCcnToCen`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrantCcnToCen`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
 */
export class GrantCcnToCen extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GrantCcnToCenProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CcnInstanceId: The ID of the CCN instance.
     */
    public readonly attrCcnInstanceId: ros.IResolvable;

    /**
     * Attribute CenInstanceId: The ID of the CEN instance.
     */
    public readonly attrCenInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrantCcnToCenProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGrantCcnToCen = new RosGrantCcnToCen(this, id,  {
            cenUid: props.cenUid,
            ccnInstanceId: props.ccnInstanceId,
            cenInstanceId: props.cenInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGrantCcnToCen;
        this.attrCcnInstanceId = rosGrantCcnToCen.attrCcnInstanceId;
        this.attrCenInstanceId = rosGrantCcnToCen.attrCenInstanceId;
    }
}
