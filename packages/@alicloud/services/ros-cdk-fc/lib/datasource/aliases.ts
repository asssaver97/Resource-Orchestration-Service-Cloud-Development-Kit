import * as ros from '@alicloud/ros-cdk-core';
import { RosAliases } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAliases as AliasesProperty };

/**
 * Properties for defining a `Aliases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
export interface AliasesProps {

    /**
     * Property serviceName: Service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property prefix: Qualified returned alias names must be prefixed with Prefix. For example, if the Prefix is "a", the returned alias names should be started with "a".
     */
    readonly prefix?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FC::Aliases`, which is used to query the aliases of a Function Compute service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAliases`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-aliases
 */
export class Aliases extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AliasesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AliasNames: The list of alias names.
     */
    public readonly attrAliasNames: ros.IResolvable;

    /**
     * Attribute Aliases: The list of aliases.
     */
    public readonly attrAliases: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AliasesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAliases = new RosAliases(this, id,  {
            serviceName: props.serviceName,
            prefix: props.prefix,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAliases;
        this.attrAliasNames = rosAliases.attrAliasNames;
        this.attrAliases = rosAliases.attrAliases;
    }
}
