"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBNodes = exports.DBNodesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "DBNodesProperty", { enumerable: true, get: function () { return polardb_generated_1.RosDBNodes; } });
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBNodes`
 */
class DBNodes extends ros.Resource {
    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBNodes = new polardb_generated_1.RosDBNodes(this, id, {
            amount: props.amount,
            dbClusterId: props.dbClusterId,
            imciSwitch: props.imciSwitch,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodes;
        this.attrDbNodeIds = rosDBNodes.attrDbNodeIds;
        this.attrOrderIds = rosDBNodes.attrOrderIds;
    }
}
exports.DBNodes = DBNodes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJub2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRibm9kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUFpRDtBQUUxQixnR0FGZCw4QkFBVSxPQUVtQjtBQXVCdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSw4QkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0NBQ0o7QUFwQ0QsMEJBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zREJOb2RlcyB9IGZyb20gJy4vcG9sYXJkYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEQk5vZGVzIGFzIERCTm9kZXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UE9MQVJEQjo6REJOb2Rlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEQk5vZGVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYW1vdW50OiBOdW1iZXIgb2Ygbm9kZXMgdG8gYmUgYWRkZWQgdG8gY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbW91bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiQ2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEFwc2FyYURCIGZvciBQT0xBUkRCIGNsdXN0ZXIgdG8gYmUgYWRkZWQgbm9kZXMgdG8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJDbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltY2lTd2l0Y2g6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGVuYWJsZSB0aGUgSW4tTWVtb3J5IENvbHVtbiBJbmRleCAoSU1DSSkgZmVhdHVyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWNpU3dpdGNoPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpQT0xBUkRCOjpEQk5vZGVzYFxuICovXG5leHBvcnQgY2xhc3MgREJOb2RlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJOb2RlSWRzOiBUaGUgSUQgbGlzdCBvZiBhZGRlZCBjbHVzdGVyIG5vZGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJOb2RlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZHM6IFRoZSBvcmRlciBJRCBsaXN0IG9mIGFkZGVkIGNsdXN0ZXIgbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlBPTEFSREI6OkRCTm9kZXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCTm9kZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEQk5vZGVzID0gbmV3IFJvc0RCTm9kZXModGhpcywgaWQsICB7XG4gICAgICAgICAgICBhbW91bnQ6IHByb3BzLmFtb3VudCxcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgICAgIGltY2lTd2l0Y2g6IHByb3BzLmltY2lTd2l0Y2gsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zREJOb2RlcztcbiAgICAgICAgdGhpcy5hdHRyRGJOb2RlSWRzID0gcm9zREJOb2Rlcy5hdHRyRGJOb2RlSWRzO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkcyA9IHJvc0RCTm9kZXMuYXR0ck9yZGVySWRzO1xuICAgIH1cbn1cbiJdfQ==