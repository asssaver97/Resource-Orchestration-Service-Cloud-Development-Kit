"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPairs = exports.KeyPairsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudphone_generated_1 = require("./cloudphone.generated");
Object.defineProperty(exports, "KeyPairsProperty", { enumerable: true, get: function () { return cloudphone_generated_1.RosKeyPairs; } });
/**
 * A ROS resource type:  `DATASOURCE::CloudPhone::KeyPairs`
 */
class KeyPairs extends ros.Resource {
    /**
     * Create a new `DATASOURCE::CloudPhone::KeyPairs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosKeyPairs = new cloudphone_generated_1.RosKeyPairs(this, id, {
            keyPairFingerPrint: props.keyPairFingerPrint,
            keyPairName: props.keyPairName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPairs;
        this.attrKeyPairNames = rosKeyPairs.attrKeyPairNames;
        this.attrKeyPairs = rosKeyPairs.attrKeyPairs;
    }
}
exports.KeyPairs = KeyPairs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cGFpcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXlwYWlycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaUVBQXFEO0FBRTdCLGlHQUZmLGtDQUFXLE9BRW9CO0FBa0J4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sV0FBVyxHQUFHLElBQUksa0NBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQ2pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQW5DRCw0QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NLZXlQYWlycyB9IGZyb20gJy4vY2xvdWRwaG9uZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NLZXlQYWlycyBhcyBLZXlQYWlyc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6Q2xvdWRQaG9uZTo6S2V5UGFpcnNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5UGFpcnNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlQYWlyRmluZ2VyUHJpbnQ6IFRoZSBQcml2YXRlIEtleSBvZiB0aGUgRmluZ2VycHJpbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkga2V5UGFpckZpbmdlclByaW50Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2V5UGFpck5hbWU6IFRoZSBLZXkgTmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlQYWlyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkNsb3VkUGhvbmU6OktleVBhaXJzYFxuICovXG5leHBvcnQgY2xhc3MgS2V5UGFpcnMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEtleVBhaXJOYW1lczogVGhlIGxpc3Qgb2Yga2V5IHBhaXIgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJLZXlQYWlyTmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLZXlQYWlyczogVGhlIGxpc3Qgb2Yga2V5IHBhaXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyS2V5UGFpcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6Q2xvdWRQaG9uZTo6S2V5UGFpcnNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEtleVBhaXJzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NLZXlQYWlycyA9IG5ldyBSb3NLZXlQYWlycyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGtleVBhaXJGaW5nZXJQcmludDogcHJvcHMua2V5UGFpckZpbmdlclByaW50LFxuICAgICAgICAgICAga2V5UGFpck5hbWU6IHByb3BzLmtleVBhaXJOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0tleVBhaXJzO1xuICAgICAgICB0aGlzLmF0dHJLZXlQYWlyTmFtZXMgPSByb3NLZXlQYWlycy5hdHRyS2V5UGFpck5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJLZXlQYWlycyA9IHJvc0tleVBhaXJzLmF0dHJLZXlQYWlycztcbiAgICB9XG59XG4iXX0=