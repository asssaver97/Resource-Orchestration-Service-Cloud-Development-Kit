"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = exports.RuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const iot_generated_1 = require("./iot.generated");
Object.defineProperty(exports, "RuleProperty", { enumerable: true, get: function () { return iot_generated_1.RosRule; } });
/**
 * A ROS resource type:  `ALIYUN::IOT::Rule`
 */
class Rule extends ros.Resource {
    /**
     * Create a new `ALIYUN::IOT::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRule = new iot_generated_1.RosRule(this, id, {
            topicType: props.topicType,
            iotInstanceId: props.iotInstanceId,
            resourceGroupId: props.resourceGroupId,
            shortTopic: props.shortTopic,
            select: props.select,
            dataType: props.dataType,
            ruleDesc: props.ruleDesc,
            where: props.where,
            productKey: props.productKey,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrDataType = rosRule.attrDataType;
        this.attrIotInstanceId = rosRule.attrIotInstanceId;
        this.attrName = rosRule.attrName;
        this.attrProductKey = rosRule.attrProductKey;
        this.attrResourceGroupId = rosRule.attrResourceGroupId;
        this.attrRuleDesc = rosRule.attrRuleDesc;
        this.attrRuleId = rosRule.attrRuleId;
        this.attrSelect = rosRule.attrSelect;
        this.attrShortTopic = rosRule.attrShortTopic;
        this.attrTopicType = rosRule.attrTopicType;
        this.attrWhere = rosRule.attrWhere;
    }
}
exports.Rule = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUEwQztBQUV0Qiw2RkFGWCx1QkFBTyxPQUVnQjtBQTBEaEM7O0dBRUc7QUFDSCxNQUFhLElBQUssU0FBUSxHQUFHLENBQUMsUUFBUTtJQThEbEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFnQixFQUFFLG1DQUEyQyxJQUFJO1FBQzNHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUFqR0Qsb0JBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUnVsZSB9IGZyb20gJy4vaW90LmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1J1bGUgYXMgUnVsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpJT1Q6OlJ1bGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcnVsZS4gVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDMwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBFbmdsaXNoIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIENoaW5lc2UgbGFuZ3VhZ2UgaXMgYWxzbyBzdXBwb3J0ZWQuIEVhY2ggQ2hpbmVzZSBzeW1ib2wgb2NjdXBpZXMgMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkYXRhVHlwZTogVGhlIGZvcm1hdCBvZiB0aGUgZGF0YSB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIHJ1bGUuIFlvdSBtdXN0IHNwZWNpZnkgdGhlIGZvcm1hdCBvZiBkZXZpY2UgZGF0YSB0byBiZSBwcm9jZXNzZWQgZm9yIHRoaXMgcGFyYW1ldGVyLiBWYWxpZCB2YWx1ZXM6ICBKU09OOiBKU09OIGRhdGEgQklOQVJZOiBiaW5hcnkgZGF0YVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRhdGFUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlvdEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCByZXF1aXJlZCBmb3IgcHVibGljIGluc3RhbmNlcy4gSG93ZXZlciwgdGhlIHBhcmFtZXRlciBpcyByZXF1aXJlZCBmb3IgdGhlIGluc3RhbmNlcyB0aGF0IHlvdSBoYXZlIHB1cmNoYXNlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpb3RJbnN0YW5jZUlkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2R1Y3RLZXk6IFRoZSBQcm9kdWN0S2V5IG9mIHRoZSBwcm9kdWN0IHRvIHdoaWNoIHRoZSBydWxlIGFwcGxpZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvZHVjdEtleT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIHJ1bGUgaXMgYXNzaWduZWQuIFlvdSBjYW4gdmlldyB0aGUgcmVzb3VyY2UgZ3JvdXAgaW5mb3JtYXRpb24gaW4gdGhlIFJlc291cmNlIE1hbmFnZW1lbnQgY29uc29sZS4gIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgdGhlIHJ1bGUgaXMgYXNzaWduZWQgdG8gdGhlIGRlZmF1bHQgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVEZXNjOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJ1bGUuIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMTAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBFYWNoIENoaW5lc2Ugc3ltYm9sIG9jY3VwaWVzIDEgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlRGVzYz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWxlY3Q6IFRoZSBTUUwgU0VMRUNUIHN0YXRlbWVudCB0aGF0IHlvdSB3YW50IHRvIGV4ZWN1dGUuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVTUUwgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VsZWN0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNob3J0VG9waWM6IFRoZSB0b3BpYyB0byB3aGljaCB0aGlzIHJ1bGUgaXMgYXBwbGllZC4gU3ludGF4OiAke2RldmljZU5hbWV9L3RvcGljU2hvcnROYW1lLiAke2RldmljZU5hbWV9c3BlY2lmaWVzIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UsIGFuZCB0b3BpY1Nob3J0TmFtZXNwZWNpZmllcyB0aGUgY3VzdG9tIG5hbWUgb2YgdGhlIHRvcGljLiAgQmFzaWMgY29tbXVuaWNhdGlvbiB0b3BpY3Mgb3IgVGhpbmcgU3BlY2lmaWNhdGlvbiBMYW5ndWFnZSAoVFNMKS1iYXNlZCBjb21tdW5pY2F0aW9uIHRvcGljcy4gU3ludGF4OiAke2RldmljZU5hbWV9L3RvcGljU2hvcnROYW1lLiBZb3UgY2FuIHJlcGxhY2UgJHtkZXZpY2VOYW1lfSB3aXRoIHRoZSArIHdpbGRjYXJkLiBUaGUgd2lsZGNhcmQgaW5kaWNhdGVzIHRoYXQgdGhlIHRvcGljIGFwcGxpZXMgdG8gYWxsIGRldmljZXMgdW5kZXIgdGhlIHByb2R1Y3QuIFZhbGlkIHZhbHVlcyBvZiB0b3BpY1Nob3J0TmFtZTogL3RoaW5nL2V2ZW50L3Byb3BlcnR5L3Bvc3Q6IHN1Ym1pdHMgdGhlIHByb3BlcnR5IGRhdGEgb2YgYSBkZXZpY2UuIC90aGluZy9ldmVudC8ke3RzbC5ldmVudC5pZGVudGlmaWVyfS9wb3N0OiBzdWJtaXRzIHRoZSBldmVudCBkYXRhIG9mIGEgZGV2aWNlLiR7dHNsLmV2ZW50LmlkZW50aWZpZXJ9IHNwZWNpZmllcyB0aGUgaWRlbnRpZmllciBvZiBhbiBldmVudCBpbiB0aGUgVFNMLiAvdGhpbmcvbGlmZWN5Y2xlOiBzdWJtaXRzIGRldmljZSBsaWZlY3ljbGUgY2hhbmdlcy4gL3RoaW5nL2Rvd25saW5rL3JlcGx5L21lc3NhZ2U6IHNlbmRzIGEgcmVzcG9uc2UgdG8gYSByZXF1ZXN0IGZyb20gSW9UIFBsYXRmb3JtLiAvdGhpbmcvbGlzdC9mb3VuZDogc3VibWl0cyB0aGUgZGF0YSB3aGVuIGEgZ2F0ZXdheSBkZXRlY3RzIGEgbmV3IHN1Yi1kZXZpY2UuIC90aGluZy90b3BvL2xpZmVjeWNsZTogc3VibWl0cyBkZXZpY2UgdG9wb2xvZ3kgY2hhbmdlcy4gL3RoaW5nL2V2ZW50L3Byb3BlcnR5L2hpc3RvcnkvcG9zdDogc3VibWl0cyBoaXN0b3JpY2FsIHByb3BlcnR5IGRhdGEgb2YgYSBkZXZpY2UuIC90aGluZy9ldmVudC8ke3RzbC5ldmVudC5pZGVudGlmaWVyfS9wb3N0OiBzdWJtaXRzIHRoZSBoaXN0b3JpY2FsIGV2ZW50IGRhdGEgb2YgYSBkZXZpY2UuJHt0c2wuZXZlbnQuaWRlbnRpZmllcn1zcGVjaWZpZXMgdGhlIGlkZW50aWZpZXIgb2YgYW4gZXZlbnQgaW4gdGhlIFRTTC4gL290YS91cGdyYWRlOiBzdWJtaXRzIE9UQSB1cGRhdGUgc3RhdHVzLiAvb3RhL3ZlcnNpb24vcG9zdDogc3VibWl0cyBPVEEgbW9kdWxlIHZlcnNpb25zLiAvdGhpbmcvZGV2aWNlaW5mby91cGRhdGU6IHN1Ym1pdHMgZGV2aWNlIHRhZyBjaGFuZ2VzLiAvZWRnZS9kcml2ZXIvJHtkcml2ZXJfaWR9L3BvaW50X3Bvc3Q6IHN1Ym1pdHMgcGFzcy10aHJvdWdoIGRhdGEgZnJvbSBMaW5rIElvVCBFZGdlLiR7ZHJpdmVyX2lkfSBzcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBkcml2ZXIgdGhhdCBhIGRldmljZSB1c2VzIHRvIGFjY2VzcyBMaW5rIElvVCBFZGdlLiAgJHtwYWNrYWdlSWR9LyR7am9iSWR9L290YS9qb2Ivc3RhdHVzOiBzdWJtaXRzIHRoZSBzdGF0dXMgb2YgT1RBIHVwZGF0ZSBiYXRjaGVzLiBUaGlzIHRvcGljIGlzIGEgYmFzaWMgY29tbXVuaWNhdGlvbiB0b3BpYy4gJHtwYWNrYWdlSWR9c3BlY2lmaWVzIHRoZSBJRCBvZiB0aGUgZmlybXdhcmUuICR7am9iSWR9c3BlY2lmaWVzIHRoZSBJRCBvZiB0aGUgdXBkYXRlIGJhdGNoLiAgQ3VzdG9tIHRvcGljcy4gRXhhbXBsZToke2RldmljZU5hbWV9L3VzZXIvZ2V0LiAgWW91IGNhbiBjYWxsIHRoZVF1ZXJ5UHJvZHVjdFRvcGljb3BlcmF0aW9uIHRvIHZpZXcgYWxsIGN1c3RvbSB0b3BpY3Mgb2YgdGhlIHByb2R1Y3QuICBXaGVuIHlvdSBzcGVjaWZ5IGEgY3VzdG9tIHRvcGljLCB5b3UgY2FuIHVzZSB0aGUgKyBhbmQgIyB3aWxkY2FyZHMuICBZb3UgY2FuIHJlcGxhY2UgJHtkZXZpY2VOYW1lfSB3aXRoIHRoZSsgd2lsZGNhcmQuIFRoZSB3aWxkY2FyZCBpbmRpY2F0ZXMgdGhhdCB0aGUgdG9waWMgYXBwbGllcyB0byBhbGwgZGV2aWNlcyB1bmRlciB0aGUgcHJvZHVjdC4gWW91IGNhbiByZXBsYWNlIHRoZSBmaWVsZHMgdGhhdCBmb2xsb3cgJHtkZXZpY2VOYW1lfSB3aXRoIC91c2VyLyMuIFRoZSAjIHdpbGRjYXJkIGluZGljYXRlcyB0aGF0IHRoZSB0b3BpYyBhcHBsaWVzIHdoYXRldmVyIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGZvciB0aGUgZmllbGRzIHRoYXQgZm9sbG93L3VzZXIuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gdXNlIHdpbGRjYXJkcywgc2VlIFdpbGRjYXJkcyBpbiB0b3BpY3MuICBUb3BpYyB0aGF0IGlzIHVzZWQgdG8gc3VibWl0IGRldmljZSBzdGF0dXMgY2hhbmdlczogJHtkZXZpY2VOYW1lfS4gIFlvdSBjYW4gdXNlIHRoZSt3aWxkY2FyZC4gSW4gdGhpcyBjYXNlLCB0aGUgc3RhdHVzIGNoYW5nZXMgb2YgYWxsIGRldmljZXMgdW5kZXIgdGhlIHByb2R1Y3QgYXJlIHN1Ym1pdHRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzaG9ydFRvcGljPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRvcGljVHlwZTogMDogVGhlIHRvcGljIGlzIGEgYmFzaWMgY29tbXVuaWNhdGlvbiB0b3BpYyBvciBUU0wtYmFzZWQgY29tbXVuaWNhdGlvbiB0b3BpYy4gMTogVGhlIHRvcGljIGlzIGEgY3VzdG9tIHRvcGljLiAyOiBUaGUgdG9waWMgaXMgdXNlZCB0byBzdWJtaXQgZGV2aWNlIHN0YXR1cyBjaGFuZ2VzLiBTeW50YXg6IC9hcy9tcXR0L3N0YXR1cy8ke3Byb2R1Y3RLZXl9LyR7ZGV2aWNlTmFtZX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWNUeXBlPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdoZXJlOiBUaGUgY29uZGl0aW9uIHRoYXQgaXMgdXNlZCB0byB0cmlnZ2VyIHRoZSBydWxlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlU1FMIGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdoZXJlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpJT1Q6OlJ1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YVR5cGU6IFRoZSBmb3JtYXQgb2YgdGhlIGRhdGEgdG8gYmUgcHJvY2Vzc2VkIGJ5IHRoZSBydWxlLiBZb3UgbXVzdCBzcGVjaWZ5IHRoZSBmb3JtYXQgb2YgZGV2aWNlIGRhdGEgdG8gYmUgcHJvY2Vzc2VkIGZvciB0aGlzIHBhcmFtZXRlci4gVmFsaWQgdmFsdWVzOiAgSlNPTjogSlNPTiBkYXRhIEJJTkFSWTogYmluYXJ5IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElvdEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuIFRoaXMgcGFyYW1ldGVyIGlzIG5vdCByZXF1aXJlZCBmb3IgcHVibGljIGluc3RhbmNlcy4gSG93ZXZlciwgdGhlIHBhcmFtZXRlciBpcyByZXF1aXJlZCBmb3IgdGhlIGluc3RhbmNlcyB0aGF0IHlvdSBoYXZlIHB1cmNoYXNlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklvdEluc3RhbmNlSWQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJ1bGUuIFRoZSBuYW1lIG11c3QgYmUgMSB0byAzMCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gRW5nbGlzaCBsZXR0ZXJzLCBkaWdpdHMsIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBDaGluZXNlIGxhbmd1YWdlIGlzIGFsc28gc3VwcG9ydGVkLiBFYWNoIENoaW5lc2Ugc3ltYm9sIG9jY3VwaWVzIDIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJvZHVjdEtleTogVGhlIFByb2R1Y3RLZXkgb2YgdGhlIHByb2R1Y3QgdG8gd2hpY2ggdGhlIHJ1bGUgYXBwbGllcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb2R1Y3RLZXk6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIHRvIHdoaWNoIHRoZSBydWxlIGlzIGFzc2lnbmVkLiBZb3UgY2FuIHZpZXcgdGhlIHJlc291cmNlIGdyb3VwIGluZm9ybWF0aW9uIGluIHRoZSBSZXNvdXJjZSBNYW5hZ2VtZW50IGNvbnNvbGUuICBJZiB5b3UgZG8gbm90IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIsIHRoZSBydWxlIGlzIGFzc2lnbmVkIHRvIHRoZSBkZWZhdWx0IHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJ1bGVEZXNjOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJ1bGUuIFRoZSBkZXNjcmlwdGlvbiBjYW4gYmUgdXAgdG8gMTAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBFYWNoIENoaW5lc2Ugc3ltYm9sIG9jY3VwaWVzIDEgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bGVEZXNjOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJ1bGVJZDogVGhlIElEIG9mIHRoZSBydWxlLiBUaGUgcnVsZSBJRCBpcyBnZW5lcmF0ZWQgYnkgdGhlIHJ1bGVzIGVuZ2luZSBpZiB0aGUgY2FsbCB3YXMgc3VjY2Vzc2Z1bC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bGVJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZWxlY3Q6IFRoZSBTUUwgU0VMRUNUIHN0YXRlbWVudCB0aGF0IHlvdSB3YW50IHRvIGV4ZWN1dGUuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVTUUwgZXhwcmVzc2lvbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWxlY3Q6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2hvcnRUb3BpYzogVGhlIHRvcGljIHRvIHdoaWNoIHRoaXMgcnVsZSBpcyBhcHBsaWVkLiBTeW50YXg6ICR7ZGV2aWNlTmFtZX0vdG9waWNTaG9ydE5hbWUuICR7ZGV2aWNlTmFtZX1zcGVjaWZpZXMgdGhlIG5hbWUgb2YgdGhlIGRldmljZSwgYW5kIHRvcGljU2hvcnROYW1lc3BlY2lmaWVzIHRoZSBjdXN0b20gbmFtZSBvZiB0aGUgdG9waWMuICBCYXNpYyBjb21tdW5pY2F0aW9uIHRvcGljcyBvciBUaGluZyBTcGVjaWZpY2F0aW9uIExhbmd1YWdlIChUU0wpLWJhc2VkIGNvbW11bmljYXRpb24gdG9waWNzLiBTeW50YXg6ICR7ZGV2aWNlTmFtZX0vdG9waWNTaG9ydE5hbWUuIFlvdSBjYW4gcmVwbGFjZSAke2RldmljZU5hbWV9IHdpdGggdGhlICsgd2lsZGNhcmQuIFRoZSB3aWxkY2FyZCBpbmRpY2F0ZXMgdGhhdCB0aGUgdG9waWMgYXBwbGllcyB0byBhbGwgZGV2aWNlcyB1bmRlciB0aGUgcHJvZHVjdC4gVmFsaWQgdmFsdWVzIG9mIHRvcGljU2hvcnROYW1lOiAvdGhpbmcvZXZlbnQvcHJvcGVydHkvcG9zdDogc3VibWl0cyB0aGUgcHJvcGVydHkgZGF0YSBvZiBhIGRldmljZS4gL3RoaW5nL2V2ZW50LyR7dHNsLmV2ZW50LmlkZW50aWZpZXJ9L3Bvc3Q6IHN1Ym1pdHMgdGhlIGV2ZW50IGRhdGEgb2YgYSBkZXZpY2UuJHt0c2wuZXZlbnQuaWRlbnRpZmllcn0gc3BlY2lmaWVzIHRoZSBpZGVudGlmaWVyIG9mIGFuIGV2ZW50IGluIHRoZSBUU0wuIC90aGluZy9saWZlY3ljbGU6IHN1Ym1pdHMgZGV2aWNlIGxpZmVjeWNsZSBjaGFuZ2VzLiAvdGhpbmcvZG93bmxpbmsvcmVwbHkvbWVzc2FnZTogc2VuZHMgYSByZXNwb25zZSB0byBhIHJlcXVlc3QgZnJvbSBJb1QgUGxhdGZvcm0uIC90aGluZy9saXN0L2ZvdW5kOiBzdWJtaXRzIHRoZSBkYXRhIHdoZW4gYSBnYXRld2F5IGRldGVjdHMgYSBuZXcgc3ViLWRldmljZS4gL3RoaW5nL3RvcG8vbGlmZWN5Y2xlOiBzdWJtaXRzIGRldmljZSB0b3BvbG9neSBjaGFuZ2VzLiAvdGhpbmcvZXZlbnQvcHJvcGVydHkvaGlzdG9yeS9wb3N0OiBzdWJtaXRzIGhpc3RvcmljYWwgcHJvcGVydHkgZGF0YSBvZiBhIGRldmljZS4gL3RoaW5nL2V2ZW50LyR7dHNsLmV2ZW50LmlkZW50aWZpZXJ9L3Bvc3Q6IHN1Ym1pdHMgdGhlIGhpc3RvcmljYWwgZXZlbnQgZGF0YSBvZiBhIGRldmljZS4ke3RzbC5ldmVudC5pZGVudGlmaWVyfXNwZWNpZmllcyB0aGUgaWRlbnRpZmllciBvZiBhbiBldmVudCBpbiB0aGUgVFNMLiAvb3RhL3VwZ3JhZGU6IHN1Ym1pdHMgT1RBIHVwZGF0ZSBzdGF0dXMuIC9vdGEvdmVyc2lvbi9wb3N0OiBzdWJtaXRzIE9UQSBtb2R1bGUgdmVyc2lvbnMuIC90aGluZy9kZXZpY2VpbmZvL3VwZGF0ZTogc3VibWl0cyBkZXZpY2UgdGFnIGNoYW5nZXMuIC9lZGdlL2RyaXZlci8ke2RyaXZlcl9pZH0vcG9pbnRfcG9zdDogc3VibWl0cyBwYXNzLXRocm91Z2ggZGF0YSBmcm9tIExpbmsgSW9UIEVkZ2UuJHtkcml2ZXJfaWR9IHNwZWNpZmllcyB0aGUgSUQgb2YgdGhlIGRyaXZlciB0aGF0IGEgZGV2aWNlIHVzZXMgdG8gYWNjZXNzIExpbmsgSW9UIEVkZ2UuICAke3BhY2thZ2VJZH0vJHtqb2JJZH0vb3RhL2pvYi9zdGF0dXM6IHN1Ym1pdHMgdGhlIHN0YXR1cyBvZiBPVEEgdXBkYXRlIGJhdGNoZXMuIFRoaXMgdG9waWMgaXMgYSBiYXNpYyBjb21tdW5pY2F0aW9uIHRvcGljLiAke3BhY2thZ2VJZH1zcGVjaWZpZXMgdGhlIElEIG9mIHRoZSBmaXJtd2FyZS4gJHtqb2JJZH1zcGVjaWZpZXMgdGhlIElEIG9mIHRoZSB1cGRhdGUgYmF0Y2guICBDdXN0b20gdG9waWNzLiBFeGFtcGxlOiR7ZGV2aWNlTmFtZX0vdXNlci9nZXQuICBZb3UgY2FuIGNhbGwgdGhlUXVlcnlQcm9kdWN0VG9waWNvcGVyYXRpb24gdG8gdmlldyBhbGwgY3VzdG9tIHRvcGljcyBvZiB0aGUgcHJvZHVjdC4gIFdoZW4geW91IHNwZWNpZnkgYSBjdXN0b20gdG9waWMsIHlvdSBjYW4gdXNlIHRoZSArIGFuZCAjIHdpbGRjYXJkcy4gIFlvdSBjYW4gcmVwbGFjZSAke2RldmljZU5hbWV9IHdpdGggdGhlKyB3aWxkY2FyZC4gVGhlIHdpbGRjYXJkIGluZGljYXRlcyB0aGF0IHRoZSB0b3BpYyBhcHBsaWVzIHRvIGFsbCBkZXZpY2VzIHVuZGVyIHRoZSBwcm9kdWN0LiBZb3UgY2FuIHJlcGxhY2UgdGhlIGZpZWxkcyB0aGF0IGZvbGxvdyAke2RldmljZU5hbWV9IHdpdGggL3VzZXIvIy4gVGhlICMgd2lsZGNhcmQgaW5kaWNhdGVzIHRoYXQgdGhlIHRvcGljIGFwcGxpZXMgd2hhdGV2ZXIgdmFsdWVzIGFyZSBzcGVjaWZpZWQgZm9yIHRoZSBmaWVsZHMgdGhhdCBmb2xsb3cvdXNlci4gIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byB1c2Ugd2lsZGNhcmRzLCBzZWUgV2lsZGNhcmRzIGluIHRvcGljcy4gIFRvcGljIHRoYXQgaXMgdXNlZCB0byBzdWJtaXQgZGV2aWNlIHN0YXR1cyBjaGFuZ2VzOiAke2RldmljZU5hbWV9LiAgWW91IGNhbiB1c2UgdGhlK3dpbGRjYXJkLiBJbiB0aGlzIGNhc2UsIHRoZSBzdGF0dXMgY2hhbmdlcyBvZiBhbGwgZGV2aWNlcyB1bmRlciB0aGUgcHJvZHVjdCBhcmUgc3VibWl0dGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2hvcnRUb3BpYzogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUb3BpY1R5cGU6IDA6IFRoZSB0b3BpYyBpcyBhIGJhc2ljIGNvbW11bmljYXRpb24gdG9waWMgb3IgVFNMLWJhc2VkIGNvbW11bmljYXRpb24gdG9waWMuIDE6IFRoZSB0b3BpYyBpcyBhIGN1c3RvbSB0b3BpYy4gMjogVGhlIHRvcGljIGlzIHVzZWQgdG8gc3VibWl0IGRldmljZSBzdGF0dXMgY2hhbmdlcy4gU3ludGF4OiAvYXMvbXF0dC9zdGF0dXMvJHtwcm9kdWN0S2V5fS8ke2RldmljZU5hbWV9LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVG9waWNUeXBlOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFdoZXJlOiBUaGUgY29uZGl0aW9uIHRoYXQgaXMgdXNlZCB0byB0cmlnZ2VyIHRoZSBydWxlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlU1FMIGV4cHJlc3Npb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyV2hlcmU6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpJT1Q6OlJ1bGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJ1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSdWxlID0gbmV3IFJvc1J1bGUodGhpcywgaWQsICB7XG4gICAgICAgICAgICB0b3BpY1R5cGU6IHByb3BzLnRvcGljVHlwZSxcbiAgICAgICAgICAgIGlvdEluc3RhbmNlSWQ6IHByb3BzLmlvdEluc3RhbmNlSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHNob3J0VG9waWM6IHByb3BzLnNob3J0VG9waWMsXG4gICAgICAgICAgICBzZWxlY3Q6IHByb3BzLnNlbGVjdCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBwcm9wcy5kYXRhVHlwZSxcbiAgICAgICAgICAgIHJ1bGVEZXNjOiBwcm9wcy5ydWxlRGVzYyxcbiAgICAgICAgICAgIHdoZXJlOiBwcm9wcy53aGVyZSxcbiAgICAgICAgICAgIHByb2R1Y3RLZXk6IHByb3BzLnByb2R1Y3RLZXksXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1J1bGU7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFUeXBlID0gcm9zUnVsZS5hdHRyRGF0YVR5cGU7XG4gICAgICAgIHRoaXMuYXR0cklvdEluc3RhbmNlSWQgPSByb3NSdWxlLmF0dHJJb3RJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zUnVsZS5hdHRyTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyUHJvZHVjdEtleSA9IHJvc1J1bGUuYXR0clByb2R1Y3RLZXk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1J1bGUuYXR0clJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyUnVsZURlc2MgPSByb3NSdWxlLmF0dHJSdWxlRGVzYztcbiAgICAgICAgdGhpcy5hdHRyUnVsZUlkID0gcm9zUnVsZS5hdHRyUnVsZUlkO1xuICAgICAgICB0aGlzLmF0dHJTZWxlY3QgPSByb3NSdWxlLmF0dHJTZWxlY3Q7XG4gICAgICAgIHRoaXMuYXR0clNob3J0VG9waWMgPSByb3NSdWxlLmF0dHJTaG9ydFRvcGljO1xuICAgICAgICB0aGlzLmF0dHJUb3BpY1R5cGUgPSByb3NSdWxlLmF0dHJUb3BpY1R5cGU7XG4gICAgICAgIHRoaXMuYXR0cldoZXJlID0gcm9zUnVsZS5hdHRyV2hlcmU7XG4gICAgfVxufVxuIl19