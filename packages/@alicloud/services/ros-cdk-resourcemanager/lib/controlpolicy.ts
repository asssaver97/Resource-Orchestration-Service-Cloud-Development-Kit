import * as ros from '@alicloud/ros-cdk-core';
import { RosControlPolicy } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosControlPolicy as ControlPolicyProperty };

/**
 * Properties for defining a `ControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export interface ControlPolicyProps {

    /**
     * Property controlPolicyName: PolicyName
     */
    readonly controlPolicyName: string | ros.IResolvable;

    /**
     * Property effectScope: EffectScope
     */
    readonly effectScope: string | ros.IResolvable;

    /**
     * Property policyDocument: PolicyDocument
     */
    readonly policyDocument: string | ros.IResolvable;

    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ControlPolicy`, which is used to create a custom control policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosControlPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export class ControlPolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ControlPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AttachmentCount: AttachmentCount
     */
    public readonly attrAttachmentCount: ros.IResolvable;

    /**
     * Attribute ControlPolicyName: PolicyName
     */
    public readonly attrControlPolicyName: ros.IResolvable;

    /**
     * Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EffectScope: EffectScope
     */
    public readonly attrEffectScope: ros.IResolvable;

    /**
     * Attribute PolicyDocument: PolicyDocument
     */
    public readonly attrPolicyDocument: ros.IResolvable;

    /**
     * Attribute PolicyId: PolicyId
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * Attribute PolicyType: PolicyType
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ControlPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosControlPolicy = new RosControlPolicy(this, id,  {
            description: props.description,
            policyDocument: props.policyDocument,
            controlPolicyName: props.controlPolicyName,
            effectScope: props.effectScope,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosControlPolicy;
        this.attrAttachmentCount = rosControlPolicy.attrAttachmentCount;
        this.attrControlPolicyName = rosControlPolicy.attrControlPolicyName;
        this.attrDescription = rosControlPolicy.attrDescription;
        this.attrEffectScope = rosControlPolicy.attrEffectScope;
        this.attrPolicyDocument = rosControlPolicy.attrPolicyDocument;
        this.attrPolicyId = rosControlPolicy.attrPolicyId;
        this.attrPolicyType = rosControlPolicy.attrPolicyType;
    }
}
