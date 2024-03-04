import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPair } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKeyPair as KeyPairProperty };

/**
 * Properties for defining a `KeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export interface KeyPairProps {

    /**
     * Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * Property publicKeyBody: The public key content of the key pair.
     */
    readonly publicKeyBody: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
export class KeyPair extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: KeyPairProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKeyPair = new RosKeyPair(this, id,  {
            keyPairName: props.keyPairName,
            publicKeyBody: props.publicKeyBody,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPair;
        this.attrCreateTime = rosKeyPair.attrCreateTime;
        this.attrKeyPairFingerPrint = rosKeyPair.attrKeyPairFingerPrint;
        this.attrKeyPairName = rosKeyPair.attrKeyPairName;
    }
}
