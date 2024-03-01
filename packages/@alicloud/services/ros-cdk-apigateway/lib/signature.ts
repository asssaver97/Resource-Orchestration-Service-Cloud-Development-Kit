import * as ros from '@alicloud/ros-cdk-core';
import { RosSignature } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSignature as SignatureProperty };

/**
 * Properties for defining a `Signature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export interface SignatureProps {

    /**
     * Property signatureKey: The key of the signature.
     */
    readonly signatureKey: string | ros.IResolvable;

    /**
     * Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
     */
    readonly signatureName: string | ros.IResolvable;

    /**
     * Property signatureSecret: The secret of the signature.
     */
    readonly signatureSecret: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Signature`, which is used to create a backend signature.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSignature`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
 */
export class Signature extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SignatureProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SignatureId: The id of the created signature
     */
    public readonly attrSignatureId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SignatureProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSignature = new RosSignature(this, id,  {
            signatureSecret: props.signatureSecret,
            signatureName: props.signatureName,
            signatureKey: props.signatureKey,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSignature;
        this.attrSignatureId = rosSignature.attrSignatureId;
    }
}
