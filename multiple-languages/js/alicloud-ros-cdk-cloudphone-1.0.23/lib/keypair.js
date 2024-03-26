"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPair = exports.KeyPairProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudphone_generated_1 = require("./cloudphone.generated");
Object.defineProperty(exports, "KeyPairProperty", { enumerable: true, get: function () { return cloudphone_generated_1.RosKeyPair; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudPhone::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
 */
class KeyPair extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosKeyPair = new cloudphone_generated_1.RosKeyPair(this, id, {
            keyPairName: props.keyPairName,
            publicKeyBody: props.publicKeyBody,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPair;
        this.attrCreateTime = rosKeyPair.attrCreateTime;
        this.attrKeyPairFingerPrint = rosKeyPair.attrKeyPairFingerPrint;
        this.attrKeyPairName = rosKeyPair.attrKeyPairName;
    }
}
exports.KeyPair = KeyPair;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cGFpci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleXBhaXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlFQUFvRDtBQUU3QixnR0FGZCxpQ0FBVSxPQUVtQjtBQW1CdEM7Ozs7R0FJRztBQUNILE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBcUJyQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQ0FBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNyQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDdEQsQ0FBQztDQUNKO0FBMUNELDBCQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0tleVBhaXIgfSBmcm9tICcuL2Nsb3VkcGhvbmUuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zS2V5UGFpciBhcyBLZXlQYWlyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBLZXlQYWlyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNsb3VkcGhvbmUta2V5cGFpclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEtleVBhaXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlQYWlyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGtleSBwYWlyLiBUaGUgbmFtZSBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZS4gVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uIFRoZSBuYW1lIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgY29sb25zICg6KSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkga2V5UGFpck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHB1YmxpY0tleUJvZHk6IFRoZSBwdWJsaWMga2V5IGNvbnRlbnQgb2YgdGhlIGtleSBwYWlyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHB1YmxpY0tleUJvZHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q2xvdWRQaG9uZTo6S2V5UGFpcmAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NLZXlQYWlyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRwaG9uZS1rZXlwYWlyXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlQYWlyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBLZXlQYWlyUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLZXlQYWlyRmluZ2VyUHJpbnQ6IFRoZSBmaW5nZXJwcmludCBvZiB0aGUga2V5IHBhaXIuIFRoZSBtZXNzYWdlLWRpZ2VzdCBhbGdvcml0aG0gNSAoTUQ1KSBpcyB1c2VkIGJhc2VkIG9uIHRoZSBwdWJsaWMga2V5IGZpbmdlcnByaW50IGZvcm1hdCBkZWZpbmVkIGluIFJGQyA0NzE2LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyS2V5UGFpckZpbmdlclByaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgS2V5UGFpck5hbWU6IFRoZSBuYW1lIG9mIHRoZSBrZXkgcGFpci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cktleVBhaXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogS2V5UGFpclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zS2V5UGFpciA9IG5ldyBSb3NLZXlQYWlyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAga2V5UGFpck5hbWU6IHByb3BzLmtleVBhaXJOYW1lLFxuICAgICAgICAgICAgcHVibGljS2V5Qm9keTogcHJvcHMucHVibGljS2V5Qm9keSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NLZXlQYWlyO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zS2V5UGFpci5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyS2V5UGFpckZpbmdlclByaW50ID0gcm9zS2V5UGFpci5hdHRyS2V5UGFpckZpbmdlclByaW50O1xuICAgICAgICB0aGlzLmF0dHJLZXlQYWlyTmFtZSA9IHJvc0tleVBhaXIuYXR0cktleVBhaXJOYW1lO1xuICAgIH1cbn1cbiJdfQ==