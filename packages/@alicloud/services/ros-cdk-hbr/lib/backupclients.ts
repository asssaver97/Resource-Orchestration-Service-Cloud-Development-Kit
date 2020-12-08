import * as ros from '@alicloud/ros-cdk-core';
import { RosBackupClients } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackupClients as BackupClientsProperty };

/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`
 */
export interface BackupClientsProps {

    /**
     * @Property instanceIds: ID list of instances to install backup client
     */
    readonly instanceIds: string[];
}

/**
 * A ROS resource type:  `ALIYUN::HBR::BackupClients`
 */
export class BackupClients extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ClientIds: ID list of clients installed in instances
     */
    public readonly attrClientIds: any;

    /**
     * @Attribute InstanceIds: ID list of instances to install backup client
     */
    public readonly attrInstanceIds: any;

    /**
     * Create a new `ALIYUN::HBR::BackupClients`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackupClientsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBackupClients = new RosBackupClients(this, id,  {
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupClients;
        this.attrClientIds = rosBackupClients.attrClientIds;
        this.attrInstanceIds = rosBackupClients.attrInstanceIds;
    }
}
