import * as ros from '@alicloud/ros-cdk-core';
import { RosForwardEntry } from './vpc.generated';
export { RosForwardEntry as ForwardEntryProperty };
/**
 * Properties for defining a `ForwardEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
 */
export interface ForwardEntryProps {
    /**
     * Property externalIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly externalIp: string | ros.IResolvable;
    /**
     * Property externalPort: Source port, now support [1-65535]|Any|x\/y
     */
    readonly externalPort: string | ros.IResolvable;
    /**
     * Property forwardTableId: Create forward entry in specified forward table.
     */
    readonly forwardTableId: string | ros.IResolvable;
    /**
     * Property internalIp: Destination IP, must belong to VPC private IP
     */
    readonly internalIp: string | ros.IResolvable;
    /**
     * Property internalPort: Destination port, now support [1-65535]|Any|x\/y
     */
    readonly internalPort: string | ros.IResolvable;
    /**
     * Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly forwardEntryName?: string | ros.IResolvable;
    /**
     * Property portBreak: Specifies whether to remove limits on the port range.
     */
    readonly portBreak?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::ForwardEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosForwardEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
 */
export declare class ForwardEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ForwardEntryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ForwardEntryId: The id of created forward entry.
     */
    readonly attrForwardEntryId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ForwardEntryProps, enableResourcePropertyConstraint?: boolean);
}
