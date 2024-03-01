import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodes } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBNodes as DBNodesProperty };

/**
 * Properties for defining a `DBNodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export interface DBNodesProps {

    /**
     * Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number | ros.IResolvable;

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode
     */
    readonly dbNodeType?: string | ros.IResolvable;

    /**
     * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    readonly imciSwitch?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBNodes`, which is used to add nodes to a PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBNodes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export class DBNodes extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBNodesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable;

    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public readonly attrOrderIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBNodes = new RosDBNodes(this, id,  {
            resourceGroupId: props.resourceGroupId,
            amount: props.amount,
            dbClusterId: props.dbClusterId,
            imciSwitch: props.imciSwitch,
            dbNodeType: props.dbNodeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodes;
        this.attrDbNodeIds = rosDBNodes.attrDbNodeIds;
        this.attrOrderIds = rosDBNodes.attrOrderIds;
    }
}
