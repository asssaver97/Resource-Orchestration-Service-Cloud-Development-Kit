"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = exports.TopicProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const kafka_generated_1 = require("./kafka.generated");
Object.defineProperty(exports, "TopicProperty", { enumerable: true, get: function () { return kafka_generated_1.RosTopic; } });
/**
 * A ROS resource type:  `ALIYUN::KAFKA::Topic`
 */
class Topic extends ros.Resource {
    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosTopic = new kafka_generated_1.RosTopic(this, id, {
            partitionNum: props.partitionNum,
            compactTopic: props.compactTopic,
            replicationFactor: props.replicationFactor,
            instanceId: props.instanceId,
            config: props.config,
            minInsyncReplicas: props.minInsyncReplicas,
            topic: props.topic,
            localTopic: props.localTopic,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrTopic = rosTopic.attrTopic;
    }
}
exports.Topic = Topic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3BpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQTZDO0FBRXhCLDhGQUZaLDBCQUFRLE9BRWlCO0FBNkVsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBa0JuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLDBCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ3ZCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBM0NELHNCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1RvcGljIH0gZnJvbSAnLi9rYWZrYS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NUb3BpYyBhcyBUb3BpY1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpLQUZLQTo6VG9waWNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9waWNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBLYWZrYSBpbnN0YW5jZSB3aGVyZSB0aGUgdG9waWMgaXMgbG9jYXRlZC5cbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhlIEdldEluc3RhbmNlTGlzdCBvcGVyYXRpb24gdG8gcXVlcnkgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlbWFyazogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0b3BpYy4gVGhlIHZhbHVlIG9mIHRoaXMgcGFyYW1ldGVyIG11c3QgbWVldCB0aGUgZm9sbG93aW5nXG4gICAgICogcmVxdWlyZW1lbnRzOlxuICAgICAqIFRoZSB2YWx1ZSBjYW4gb25seSBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogVGhlIHZhbHVlIG11c3QgYmUgMyB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRvcGljOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMuIFRoZSB2YWx1ZSBvZiB0aGlzIHBhcmFtZXRlciBtdXN0IG1lZXQgdGhlIGZvbGxvd2luZyByZXF1aXJlbWVudHM6XG4gICAgICogVGhlIG5hbWUgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMyB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cnVuY2F0ZWRcbiAgICAgKiBpZiBpdCBjb250YWlucyBtb3JlIGNoYXJhY3RlcnMuXG4gICAgICogVGhlIG5hbWUgY2Fubm90IGJlIG1vZGlmaWVkIGFmdGVyIGJlaW5nIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbXBhY3RUb3BpYzogVGhlIGxvZyBjbGVhbnVwIHBvbGljeSBmb3IgdGhlIHRvcGljLiBUaGlzIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgd2hlbiB0aGUgTG9jYWwgU3RvcmFnZSBtb2RlIGlzIHNwZWNpZmllZCBmb3IgdGhlIHRvcGljLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZmFsc2U6IHVzZXMgdGhlIGRlZmF1bHQgbG9nIGNsZWFudXAgcG9saWN5LlxuICAgICAqIHRydWU6IHVzZXMgdGhlIEFwYWNoZSBLYWZrYSBsb2cgY29tcGFjdGlvbiBwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tcGFjdFRvcGljPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbmZpZzogU3VwcGxlbWVudGFyeSBjb25maWd1cmF0aW9uLlxuICAgICAqIEN1cnJlbnRseSBzdXBwb3J0cyBLZXkgYXMgcmVwbGljYXRpb25zLiBJbmRpY2F0ZXMgdGhlIG51bWJlciBvZiBUb3BpYyBjb3BpZXMsIHRoZSB2YWx1ZSB0eXBlIGlzIEludGVnZXIsIGFuZCB0aGUgdmFsdWUgbGltaXQgaXMgMX4zLlxuICAgICAqIFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHNwZWNpZmllZCBpZiB0aGUgTG9jYWxUb3BpYyB2YWx1ZSBpcyB0cnVlLlxuICAgICAqIE5PVEUgSWYgcmVwbGljYXRpb25zIGlzIHNwZWNpZmllZCBpbiB0aGlzIHBhcmFtZXRlciwgdGhlIHNwZWNpZmllZCBSZXBsaWNhdGlvbkZhY3RvciBwYXJhbWV0ZXIgbm8gbG9uZ2VyIHRha2VzIGVmZmVjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25maWc/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2NhbFRvcGljOiBUaGUgc3RvcmFnZSBlbmdpbmUgb2YgdGhlIHRvcGljLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogZmFsc2U6IHRoZSBDbG91ZCBTdG9yYWdlIG1vZGUuXG4gICAgICogdHJ1ZTogdGhlIExvY2FsIFN0b3JhZ2UgbW9kZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFRvcGljPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1pbkluc3luY1JlcGxpY2FzOiBUaGUgbWluaW11bSBudW1iZXIgb2YgSVNSIHN5bmMgcmVwbGljYXMuXG4gICAgICogVGhpcyBwYXJhbWV0ZXIgY2FuIG9ubHkgYmUgc3BlY2lmaWVkIGlmIHRoZSBMb2NhbFRvcGljIHZhbHVlIGlzIHRydWUuXG4gICAgICogVGhlIHZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2YgVG9waWMgY29waWVzLlxuICAgICAqIFRoZSBudW1iZXIgb2Ygc3luY2hyb25vdXMgcmVwbGljYXMgaXMgbGltaXRlZCB0byAxfjMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWluSW5zeW5jUmVwbGljYXM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXJ0aXRpb25OdW06IFRoZSBudW1iZXIgb2YgcGFydGl0aW9ucyBpbiB0aGUgdG9waWMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAxIHRvIDQ4XG4gICAgICogV2UgcmVjb21tZW5kIHRoYXQgeW91IHNldCB0aGUgbnVtYmVyIG9mIHBhcnRpdGlvbnMgdG8gYSBtdWx0aXBsZSBvZiA2IHRvIHJlZHVjZSB0aGVcbiAgICAgKiByaXNrIG9mIGRhdGEgc2tldy5Ob3RlOkZvciBzcGVjaWFsIHJlcXVpcmVtZW50cyxzdWJtaXQgYSB0aWNrZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFydGl0aW9uTnVtPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVwbGljYXRpb25GYWN0b3I6IFRoZSBudW1iZXIgb2YgY29waWVzIG9mIHRoZSB0b3BpYy5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSBzcGVjaWZpZWQgaWYgdGhlIExvY2FsVG9waWMgdmFsdWUgaXMgdHJ1ZS5cbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNvcGllcyBpcyBsaW1pdGVkIHRvIDF+My5cbiAgICAgKiBOb3RlIFdoZW4gdGhlIG51bWJlciBvZiByZXBsaWNhcyBpcyAxLCB0aGVyZSBpcyBhIHJpc2sgb2YgZGF0YSBsb3NzLiBQbGVhc2Ugc2V0IGl0IGNhcmVmdWxseS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBsaWNhdGlvbkZhY3Rvcj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6S0FGS0E6OlRvcGljYFxuICovXG5leHBvcnQgY2xhc3MgVG9waWMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIEthZmthIGluc3RhbmNlIHdoZXJlIHRoZSB0b3BpYyBpcyBsb2NhdGVkLlxuWW91IGNhbiBjYWxsIHRoZSBHZXRJbnN0YW5jZUxpc3Qgb3BlcmF0aW9uIHRvIHF1ZXJ5IGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUb3BpYzogVG9waWMgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6S0FGS0E6OlRvcGljYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUb3BpY1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1RvcGljID0gbmV3IFJvc1RvcGljKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcGFydGl0aW9uTnVtOiBwcm9wcy5wYXJ0aXRpb25OdW0sXG4gICAgICAgICAgICBjb21wYWN0VG9waWM6IHByb3BzLmNvbXBhY3RUb3BpYyxcbiAgICAgICAgICAgIHJlcGxpY2F0aW9uRmFjdG9yOiBwcm9wcy5yZXBsaWNhdGlvbkZhY3RvcixcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBjb25maWc6IHByb3BzLmNvbmZpZyxcbiAgICAgICAgICAgIG1pbkluc3luY1JlcGxpY2FzOiBwcm9wcy5taW5JbnN5bmNSZXBsaWNhcyxcbiAgICAgICAgICAgIHRvcGljOiBwcm9wcy50b3BpYyxcbiAgICAgICAgICAgIGxvY2FsVG9waWM6IHByb3BzLmxvY2FsVG9waWMsXG4gICAgICAgICAgICByZW1hcms6IHByb3BzLnJlbWFyayxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NUb3BpYztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc1RvcGljLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJUb3BpYyA9IHJvc1RvcGljLmF0dHJUb3BpYztcbiAgICB9XG59XG4iXX0=