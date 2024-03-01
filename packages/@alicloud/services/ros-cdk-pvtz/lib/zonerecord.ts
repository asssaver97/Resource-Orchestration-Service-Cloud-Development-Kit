import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneRecord } from './pvtz.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZoneRecord as ZoneRecordProperty };

/**
 * Properties for defining a `ZoneRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export interface ZoneRecordProps {

    /**
     * Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty
     */
    readonly rr: string | ros.IResolvable;

    /**
     * Property status: Allowed values: [ENABLE, DISABLE]
     */
    readonly status: string | ros.IResolvable;

    /**
     * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property value: Record value
     */
    readonly value: string | ros.IResolvable;

    /**
     * Property zoneId: Zone Id
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property priority: MX record priority, value range [1,99]. Default to 10.
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * Property ttl: Survival time, default is 60
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PVTZ::ZoneRecord`, which is used to add a Domain Name Service (DNS) record to a private zone.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZoneRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
export class ZoneRecord extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ZoneRecordProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Record: Record data.
     */
    public readonly attrRecord: ros.IResolvable;

    /**
     * Attribute RecordId: Parsing record Id
     */
    public readonly attrRecordId: ros.IResolvable;

    /**
     * Attribute ZoneId: Zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneRecordProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosZoneRecord = new RosZoneRecord(this, id,  {
            status: props.status === undefined || props.status === null ? 'ENABLE' : props.status,
            rr: props.rr,
            type: props.type,
            zoneId: props.zoneId,
            priority: props.priority === undefined || props.priority === null ? 10 : props.priority,
            value: props.value,
            ttl: props.ttl === undefined || props.ttl === null ? 60 : props.ttl,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneRecord;
        this.attrRecord = rosZoneRecord.attrRecord;
        this.attrRecordId = rosZoneRecord.attrRecordId;
        this.attrZoneId = rosZoneRecord.attrZoneId;
    }
}
