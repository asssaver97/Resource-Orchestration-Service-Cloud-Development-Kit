import * as ros from '@alicloud/ros-cdk-core';
import { RosTrail } from './actiontrail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrail as TrailProperty };

/**
 * Properties for defining a `Trail`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export interface TrailProps {

    /**
     * Property name: The name of the trail to be created, which must be unique for an account.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
     */
    readonly eventRw?: string | ros.IResolvable;

    /**
     * Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
     */
    readonly ossBucketName?: string | ros.IResolvable;

    /**
     * Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
     */
    readonly ossKeyPrefix?: string | ros.IResolvable;

    /**
     * Property roleName: The RAM role in ActionTrail permitted by the user.
     */
    readonly roleName?: string | ros.IResolvable;

    /**
     * Property slsProjectArn: The unique ARN of the Log Service project.
     */
    readonly slsProjectArn?: string | ros.IResolvable;

    /**
     * Property slsWriteRoleArn: The unique ARN of the Log Service role.
     */
    readonly slsWriteRoleArn?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACTIONTRAIL::Trail`, which is used to create a trail to deliver events to a Log Service Logstore or an Object Storage Service (OSS) bucket.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrail`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
 */
export class Trail extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrailProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the trail to be created, which must be unique for an account.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrailProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrail = new RosTrail(this, id,  {
            slsProjectArn: props.slsProjectArn,
            roleName: props.roleName,
            eventRw: props.eventRw === undefined || props.eventRw === null ? 'Write' : props.eventRw,
            ossKeyPrefix: props.ossKeyPrefix,
            ossBucketName: props.ossBucketName,
            slsWriteRoleArn: props.slsWriteRoleArn,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrail;
        this.attrName = rosTrail.attrName;
    }
}
