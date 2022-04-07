import * as ros from '@alicloud/ros-cdk-core';
import { RosInstancePublicConnection } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstancePublicConnection as InstancePublicConnectionProperty };

/**
 * Properties for defining a `ALIYUN::GPDB::InstancePublicConnection`
 */
export interface InstancePublicConnectionProps {

    /**
     * Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
     */
    readonly connectionStringPrefix: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property port: The port number of the instance.
     */
    readonly port: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GPDB::InstancePublicConnection`
 */
export class InstancePublicConnection extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionString: The connection string of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GPDB::InstancePublicConnection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancePublicConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstancePublicConnection = new RosInstancePublicConnection(this, id,  {
            dbInstanceId: props.dbInstanceId,
            port: props.port,
            connectionStringPrefix: props.connectionStringPrefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstancePublicConnection;
        this.attrConnectionString = rosInstancePublicConnection.attrConnectionString;
        this.attrDbInstanceId = rosInstancePublicConnection.attrDbInstanceId;
    }
}