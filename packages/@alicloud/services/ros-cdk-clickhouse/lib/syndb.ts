import * as ros from '@alicloud/ros-cdk-core';
import { RosSynDb } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSynDb as SynDbProperty };

/**
 * Properties for defining a `SynDb`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export interface SynDbProps {

    /**
     * Property ckPassword: The password of the database account
     */
    readonly ckPassword: string | ros.IResolvable;

    /**
     * Property ckUserName: The account of the clickhouse database.
     */
    readonly ckUserName: string | ros.IResolvable;

    /**
     * Property dbClusterId: Clickhouse cluster id.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property rdsId: The instance id of RDS.
     */
    readonly rdsId: string | ros.IResolvable;

    /**
     * Property rdsPassword: The password of the RDS database account.
     */
    readonly rdsPassword: string | ros.IResolvable;

    /**
     * Property rdsUserName: The account of the RDS database.
     */
    readonly rdsUserName: string | ros.IResolvable;

    /**
     * Property skipUnsupported: Skip unsupported table or not.
     */
    readonly skipUnsupported: boolean | ros.IResolvable;

    /**
     * Property synDbTables: The tables to syn.
     */
    readonly synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property clickhousePort: The port of clickhouse id.
     */
    readonly clickhousePort?: number | ros.IResolvable;

    /**
     * Property limitUpper: The maximum number of rows to sync per second.
     */
    readonly limitUpper?: number | ros.IResolvable;

    /**
     * Property rdsPort: The port of rds.
     */
    readonly rdsPort?: number | ros.IResolvable;

    /**
     * Property rdsVpcId: The vpc of rds.
     */
    readonly rdsVpcId?: string | ros.IResolvable;

    /**
     * Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    readonly rdsVpcUrl?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ClickHouse::SynDb`, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSynDb`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
 */
export class SynDb extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SynDbProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DbClusterId: The id of clickhouse.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Attribute RdsId: The id of RDS
     */
    public readonly attrRdsId: ros.IResolvable;

    /**
     * Attribute SynDbs: Sync Dbs
     */
    public readonly attrSynDbs: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynDbProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSynDb = new RosSynDb(this, id,  {
            rdsVpcUrl: props.rdsVpcUrl,
            limitUpper: props.limitUpper,
            skipUnsupported: props.skipUnsupported,
            rdsId: props.rdsId,
            rdsPassword: props.rdsPassword,
            rdsUserName: props.rdsUserName,
            ckPassword: props.ckPassword,
            ckUserName: props.ckUserName,
            clickhousePort: props.clickhousePort,
            synDbTables: props.synDbTables,
            dbClusterId: props.dbClusterId,
            rdsPort: props.rdsPort,
            rdsVpcId: props.rdsVpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSynDb;
        this.attrDbClusterId = rosSynDb.attrDbClusterId;
        this.attrRdsId = rosSynDb.attrRdsId;
        this.attrSynDbs = rosSynDb.attrSynDbs;
    }
}
