"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.ApplicationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "ApplicationProperty", { enumerable: true, get: function () { return sae_generated_1.RosApplication; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAE::Application`, which is used to create an application in Serverless App Engine (SAE).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-application
 */
class Application extends ros.Resource {
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
        const rosApplication = new sae_generated_1.RosApplication(this, id, {
            timezone: props.timezone,
            appDescription: props.appDescription,
            mountDesc: props.mountDesc,
            nasId: props.nasId,
            warStartOptions: props.warStartOptions,
            liveness: props.liveness,
            memory: props.memory,
            webContainer: props.webContainer,
            slsConfigs: props.slsConfigs,
            cpu: props.cpu,
            deploy: props.deploy,
            packageVersion: props.packageVersion,
            appName: props.appName,
            jdk: props.jdk,
            jarStartArgs: props.jarStartArgs,
            preStop: props.preStop,
            readiness: props.readiness,
            packageType: props.packageType,
            tags: props.tags,
            commandArgs: props.commandArgs,
            securityGroupId: props.securityGroupId,
            envs: props.envs,
            vSwitchId: props.vSwitchId,
            imageUrl: props.imageUrl,
            postStart: props.postStart,
            jarStartOptions: props.jarStartOptions,
            mountHost: props.mountHost,
            replicas: props.replicas,
            customHostAlias: props.customHostAlias,
            vpcId: props.vpcId,
            command: props.command,
            edasContainerVersion: props.edasContainerVersion,
            packageUrl: props.packageUrl,
            namespaceId: props.namespaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplication;
        this.attrAppId = rosApplication.attrAppId;
        this.attrChangeOrderId = rosApplication.attrChangeOrderId;
    }
}
exports.Application = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXNMOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBcEVELGtDQW9FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FwcGxpY2F0aW9uIH0gZnJvbSAnLi9zYWUuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQXBwbGljYXRpb24gYXMgQXBwbGljYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFwcGxpY2F0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXNhZS1hcHBsaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwTmFtZTogQXBwbGljYXRpb24gTmFtZS4gQWxsb3dlZCBudW1iZXJzLCBsZXR0ZXJzIGFuZCB1bmRlcmxpbmVkIGNvbWJpbmF0aW9ucyB0aGVyZW9mLiBXZSBtdXN0IGJlZ2luIHdpdGggdGhlIGxldHRlcnMsIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiAzNiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNwdTogRWFjaCBpbnN0YW5jZSBvZiB0aGUgQ1BVIHJlcXVpcmVkLCBpbiB1bml0cyBvZiBtaWxsaSBjb3JlLCBjYW4gbm90IGJlIHplcm8uIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGZpeGVkIHNwZWNpZmljYXRpb25zIGluc3RhbmNlIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3B1OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZW1vcnk6IEVhY2ggaW5zdGFuY2Ugb2YgdGhlIHJlcXVpcmVkIG1lbW9yeSwgaW4gdW5pdHMgb2YgTUIsIGNhbiBub3QgYmUgemVyby4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgZml4ZWQgc3BlY2lmaWNhdGlvbnMgaW5zdGFuY2UgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtZW1vcnk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWVzcGFjZUlkOiBFREFTIG5hbWVzcGFjZSBjb3JyZXNwb25kaW5nIHRvIElELiBDYW5hZGEgc3VwcG9ydHMgb25seSB0aGUgbmFtZSBvZiB0aGUgc2NyaWJlIGxvd2VyY2FzZSBuYW1lc3BhY2UgbXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyLlxuICAgICAqIE5hbWVzcGFjZSBjYW4gaW50ZXJmYWNlIHRvIG9idGFpbiBmcm9tIERlc2NyaWJlTmFtZXNwYWNlTGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFja2FnZVR5cGU6IEFwcGxpY2F0aW9uIHBhY2thZ2UgdHlwZS4gU3VwcG9ydCBGYXRKYXIsIFdhciwgSW1hZ2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcGxpY2FzOiBUaGUgaW5pdGlhbCBudW1iZXIgb2YgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcGxpY2FzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcHBEZXNjcmlwdGlvbjogQXBwbGljYXRpb24gZGVzY3JpcHRpb24uIE5vIG1vcmUgdGhhbiAxMDI0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb21tYW5kOiBNaXJyb3JpbmcgdGhlIHN0YXJ0IGNvbW1hbmQuIFRoZSBjb21tYW5kIG9iamVjdCBpbiBtZW1vcnkgZXhlY3V0YWJsZSBjb250YWluZXIgbXVzdCBiZS4gRm9yIGV4YW1wbGU6IHNsZWVwLiBUaGlzIGNvbW1hbmQgd2lsbCBjYXVzZSB0aGUgaW1hZ2UgdG8gc2V0IHRoZSBvcmlnaW5hbCBzdGFydHVwIGNvbW1hbmQgZmFpbHVyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tYW5kPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tbWFuZEFyZ3M6IE1pcnJvcmluZyB0aGUgc3RhcnQgY29tbWFuZCBwYXJhbWV0ZXJzLiBQYXJhbWV0ZXJzIHJlcXVpcmVkIGZvciB0aGUgc3RhcnQtY29tbWFuZC4gRm9yIGV4YW1wbGU6IFsgXCIxZFwiXVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbW1hbmRBcmdzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY3VzdG9tSG9zdEFsaWFzOiBDdXN0b20gbWFwcGluZyBob3N0IHZlc3NlbC4gRm9yIGV4YW1wbGU6IFt7IFwiaG9zdE5hbWVcIjogXCJzYW1wbGVob3N0XCIsIFwiaXBcIjogXCIxMjcuMC4wLjFcIn1dXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3VzdG9tSG9zdEFsaWFzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVwbG95OiBXaGV0aGVyIGRlcGxveWVkIGltbWVkaWF0ZWx5IHRha2UgZWZmZWN0LCB0aGUgZGVmYXVsdCBpcyBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXBsb3k/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZWRhc0NvbnRhaW5lclZlcnNpb246IEVEQVMgcGFuZG9yYSBydW50aW1lIGVudmlyb25tZW50IHVzZWQgYnkgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVkYXNDb250YWluZXJWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW52czogQ29udGFpbmVyIGVudmlyb25tZW50IHZhcmlhYmxlIHBhcmFtZXRlcnMuIEZvciBleGFtcGxlOiBbeyBcIm5hbWVcIjogXCJlbnZ0bXBcIiwgXCJ2YWx1ZVwiOiBcIjBcIn1dXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52cz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlVXJsOiBNaXJyb3JpbmcgYWRkcmVzcy4gSW1hZ2Ugb25seSB0eXBlIG9mIGFwcGxpY2F0aW9uIGNhbiBiZSBjb25maWd1cmVkIHRvIG1pcnJvciBhZGRyZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGltYWdlVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgamFyU3RhcnRBcmdzOiBKYXIgcGFja2FnZSBzdGFydHVwIGFwcGxpY2F0aW9uIHBhcmFtZXRlcnMuIEFwcGx5IHRoZSBkZWZhdWx0IHN0YXJ0dXAgY29tbWFuZDogJCBKQVZBX0hPTUUgXFwvIGJpbiBcXC8gamF2YSAkIEphclN0YXJ0T3B0aW9ucyAtamFyICQgQ0FUQUxJTkFfT1BUUyBcIiQgcGFja2FnZV9wYXRoXCJcbiAgICAgKiAkIEphclN0YXJ0QXJnc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGphclN0YXJ0QXJncz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGphclN0YXJ0T3B0aW9uczogSmFyIHN0YXJ0IHRoZSBhcHBsaWNhdGlvbiBwYWNrYWdlIG9wdGlvbi4gQXBwbHkgdGhlIGRlZmF1bHQgc3RhcnR1cCBjb21tYW5kOiAkIEpBVkFfSE9NRSBcXC8gYmluIFxcLyBqYXZhICQgSmFyU3RhcnRPcHRpb25zIC1qYXIgJCBDQVRBTElOQV9PUFRTIFwiJCBwYWNrYWdlX3BhdGhcIlxuICAgICAqICQgSmFyU3RhcnRBcmdzXG4gICAgICovXG4gICAgcmVhZG9ubHkgamFyU3RhcnRPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgamRrOiBEZXBsb3ltZW50IG9mIEpESyB2ZXJzaW9uIG9mIHRoZSBwYWNrYWdlIGRlcGVuZHMgb24uIE1pcnJvcmluZyBub3Qgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGpkaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxpdmVuZXNzOiBDb250YWluZXIgaGVhbHRoIGNoZWNrLCBoZWFsdGggY2hlY2sgZmFpbHMgY29udGFpbmVyIHdpbGwgYmUga2lsbGVkIGFuZCByZWNvdmVyeS4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgbW9kZSBjb21tYW5kIGlzc3VlZCBpbiB0aGUgY29udGFpbmVyLiBUaGUgY29sdW1uczogeyBcImV4ZWNcIjogeyBcImNvbW1hbmRcIjogWyBcInNsZWVwXCIsIFwiNXNcIl19LCBcImluaXRpYWxEZWxheVNlY29uZHNcIjogMTAsIFwidGltZW91dFNlY29uZHNcIjogMTF9XG4gICAgICovXG4gICAgcmVhZG9ubHkgbGl2ZW5lc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb3VudERlc2M6IE1vdW50IERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW91bnREZXNjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW91bnRIb3N0OiBuYXMgbW91bnQgcG9pbnQgaW4gdGhlIGFwcGxpY2F0aW9uIG9mIHZwYy5cbiAgICAgKi9cbiAgICByZWFkb25seSBtb3VudEhvc3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXNJZDogTW91bnQgdGhlIE5BUyBJRCwgeW91IG11c3QgYmUgaW4gdGhlIHNhbWUgcmVnaW9uIGFuZCBjbHVzdGVyLiBJdCBtdXN0IGJlIGF2YWlsYWJsZSB0byBjcmVhdGUgYSBtb3VudCBwb2ludCBsaW1pdCwgb3Igc3dpdGNoIG9uIGl0cyBtb3VudCBwb2ludCBhbHJlYWR5IGluIHRoZSBWUEMuIElmIHlvdSBkbyBub3QgZmlsbCwgYW5kIHRoZXJlIG1vdW50RGVzY3MgZmllbGQsIHRoZSBkZWZhdWx0IHdpbGwgYXV0b21hdGljYWxseSBwdXJjaGFzZSBhIE5BUyBhbmQgbW91bnQgaXQgb250byB0aGUgc3dpdGNoIHdpdGhpbiB0aGUgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hc0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFja2FnZVVybDogRGVwbG95bWVudCBwYWNrYWdlcyBhZGRyZXNzLiBPbmx5IEZhdEphciBXYXIgb3IgdGhlIHR5cGUgb2YgYXBwbGljYXRpb24gY2FuIGJlIGNvbmZpZ3VyZWQgdG8gZGVwbG95IHBhY2tldCBhZGRyZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VVcmw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYWNrYWdlVmVyc2lvbjogVGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBkZXBsb3llZCBwYWNrYWdlLCBXYXIgRmF0SmFyIHR5cGUgcmVxdWlyZWQuIFBsZWFzZSBjdXN0b21pemUgaXQgbWVhbmluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYWNrYWdlVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvc3RTdGFydDogRXhlY3V0aW5nIHRoZSBzY3JpcHQsIHN1Y2ggYXMgYWZ0ZXIgc3RhcnRpbmcgdGhlIGZvcm1hdDogeyBcImV4ZWNcIjogeyBcImNvbW1hbmRcIjogXCJjYXRcIiwgXCJcXC8gZXRjIFxcLyBncm91cFwifX1cbiAgICAgKi9cbiAgICByZWFkb25seSBwb3N0U3RhcnQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmVTdG9wOiBTY3JpcHQgaXMgZXhlY3V0ZWQgYmVmb3JlIHN0b3BwaW5nIHRoZSBmb3JtYXQgYXM6IHsgXCJleGVjXCI6IHsgXCJjb21tYW5kXCI6IFwiY2F0XCIsIFwiXFwvIGV0YyBcXC8gZ3JvdXBcIn19XG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlU3RvcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlYWRpbmVzczogQXBwbGljYXRpb24gbGF1bmNoIHN0YXR1cyBjaGVjaywgaGVhbHRoIGNoZWNrIGZhaWxzIHJlcGVhdGVkbHkgY29udGFpbmVyIHdpbGwgYmUga2lsbGVkIGFuZCByZXN0YXJ0ZWQuIERvIG5vdCBwYXNzIGhlYWx0aCBjaGVjayBvZiB0aGUgdmVzc2VsIHdpbGwgbm90IGhhdmUgdG8gZW50ZXIgU0xCIHRyYWZmaWMuIEZvciBleGFtcGxlOiB7IFwiZXhlY1wiOiB7IFwiY29tbWFuZFwiOiBbIFwic2xlZXBcIiwgXCI2c1wiXX0sIFwiaW5pdGlhbERlbGF5U2Vjb25kc1wiOiAxNSwgXCJ0aW1lb3V0U2Vjb25kc1wiOiAxMn1cbiAgICAgKi9cbiAgICByZWFkb25seSByZWFkaW5lc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNsc0NvbmZpZ3M6IExvZyBjb2xsZWN0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc0NvbmZpZ3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBhcHBsaWNhdGlvbi4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBhcHBsaWNhdGlvbi4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NBcHBsaWNhdGlvbi5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWV6b25lOiBBcHBsaWNhdGlvbiB0aW1lIHpvbmUuIERlZmF1bHQgQXNpYVxcL1NoYW5naGFpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWV6b25lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBjSWQ6IEVEQVMgbmFtZXNwYWNlIGNvcnJlc3BvbmRpbmcgVlBDLiBJbiBTZXJ2ZXJsZXNzIGluIGEgY29ycmVzcG9uZGluZyBvbmUgb2YgdGhlIFZQQyBuYW1lc3BhY2Ugb25seSwgYW5kIGNhbiBub3QgYmUgbW9kaWZpZWQuIFNlcnZlcmxlc3MgZmlyc3QgY3JlYXRlZCBpbiB0aGUgYXBwbGljYXRpb24gbmFtZSBzcGFjZSB3aWxsIGZvcm0gYSBiaW5kaW5nIHJlbGF0aW9uc2hpcC4gWW91IG1heSBjb3JyZXNwb25kIHRvIGEgcGx1cmFsaXR5IG9mIG5hbWVzcGFjZXMgVlBDLiBEbyBub3QgZmlsbCB3YXMgVnBjSWQgbmFtZXNwYWNlIGJpbmRpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IEFwcGxpY2F0aW9uIGV4YW1wbGVzIHdoZXJlIHRoZSBlbGFzdGljIGNhcmQgdmlydHVhbCBzd2l0Y2guIFRoZSBzd2l0Y2ggbXVzdCBiZSBsb2NhdGVkIGFib3ZlIHRoZSBWUEMuIFRoZSBzYW1lIHN3aXRjaCB3aXRoIEVEQVMgbmFtZXNwYWNlIGJpbmRpbmcgcmVsYXRpb25zaGlwLiBEbyBub3QgZmlsbCB3YXMgVlN3aXRjaElkIG5hbWVzcGFjZSBiaW5kaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdhclN0YXJ0T3B0aW9uczogV2FyIFN0YXJ0IHRoZSBhcHBsaWNhdGlvbiBwYWNrYWdlIG9wdGlvbi4gQXBwbHkgdGhlIGRlZmF1bHQgc3RhcnR1cCBjb21tYW5kOiBqYXZhICQgSkFWQV9PUFRTICQgQ0FUQUxJTkFfT1BUUyAtT3B0aW9ucyBvcmcuYXBhY2hlLmNhdGFsaW5hLnN0YXJ0dXAuQm9vdHN0cmFwIFwiJCBAXCIgc3RhcnRcbiAgICAgKi9cbiAgICByZWFkb25seSB3YXJTdGFydE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3ZWJDb250YWluZXI6IFRvbWNhdCBkZXBsb3ltZW50IG9mIHRoZSBwYWNrYWdlIGRlcGVuZHMgb24gdGhlIHZlcnNpb24uIE1pcnJvcmluZyBub3Qgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlYkNvbnRhaW5lcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6U0FFOjpBcHBsaWNhdGlvbmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGFwcGxpY2F0aW9uIGluIFNlcnZlcmxlc3MgQXBwIEVuZ2luZSAoU0FFKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0FwcGxpY2F0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tc2FlLWFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogQXBwbGljYXRpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXBwSWQ6IENyZWF0aW5nIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENoYW5nZU9yZGVySWQ6IFJldHVybiB0byByZWxlYXNlIGEgc2luZ2xlIElELCB1c2VkIHRvIHF1ZXJ5IHRhc2sgZXhlY3V0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5nZU9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBcHBsaWNhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQXBwbGljYXRpb24gPSBuZXcgUm9zQXBwbGljYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICB0aW1lem9uZTogcHJvcHMudGltZXpvbmUsXG4gICAgICAgICAgICBhcHBEZXNjcmlwdGlvbjogcHJvcHMuYXBwRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtb3VudERlc2M6IHByb3BzLm1vdW50RGVzYyxcbiAgICAgICAgICAgIG5hc0lkOiBwcm9wcy5uYXNJZCxcbiAgICAgICAgICAgIHdhclN0YXJ0T3B0aW9uczogcHJvcHMud2FyU3RhcnRPcHRpb25zLFxuICAgICAgICAgICAgbGl2ZW5lc3M6IHByb3BzLmxpdmVuZXNzLFxuICAgICAgICAgICAgbWVtb3J5OiBwcm9wcy5tZW1vcnksXG4gICAgICAgICAgICB3ZWJDb250YWluZXI6IHByb3BzLndlYkNvbnRhaW5lcixcbiAgICAgICAgICAgIHNsc0NvbmZpZ3M6IHByb3BzLnNsc0NvbmZpZ3MsXG4gICAgICAgICAgICBjcHU6IHByb3BzLmNwdSxcbiAgICAgICAgICAgIGRlcGxveTogcHJvcHMuZGVwbG95LFxuICAgICAgICAgICAgcGFja2FnZVZlcnNpb246IHByb3BzLnBhY2thZ2VWZXJzaW9uLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgICAgIGpkazogcHJvcHMuamRrLFxuICAgICAgICAgICAgamFyU3RhcnRBcmdzOiBwcm9wcy5qYXJTdGFydEFyZ3MsXG4gICAgICAgICAgICBwcmVTdG9wOiBwcm9wcy5wcmVTdG9wLFxuICAgICAgICAgICAgcmVhZGluZXNzOiBwcm9wcy5yZWFkaW5lc3MsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogcHJvcHMucGFja2FnZVR5cGUsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgY29tbWFuZEFyZ3M6IHByb3BzLmNvbW1hbmRBcmdzLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiBwcm9wcy5zZWN1cml0eUdyb3VwSWQsXG4gICAgICAgICAgICBlbnZzOiBwcm9wcy5lbnZzLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBpbWFnZVVybDogcHJvcHMuaW1hZ2VVcmwsXG4gICAgICAgICAgICBwb3N0U3RhcnQ6IHByb3BzLnBvc3RTdGFydCxcbiAgICAgICAgICAgIGphclN0YXJ0T3B0aW9uczogcHJvcHMuamFyU3RhcnRPcHRpb25zLFxuICAgICAgICAgICAgbW91bnRIb3N0OiBwcm9wcy5tb3VudEhvc3QsXG4gICAgICAgICAgICByZXBsaWNhczogcHJvcHMucmVwbGljYXMsXG4gICAgICAgICAgICBjdXN0b21Ib3N0QWxpYXM6IHByb3BzLmN1c3RvbUhvc3RBbGlhcyxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGNvbW1hbmQ6IHByb3BzLmNvbW1hbmQsXG4gICAgICAgICAgICBlZGFzQ29udGFpbmVyVmVyc2lvbjogcHJvcHMuZWRhc0NvbnRhaW5lclZlcnNpb24sXG4gICAgICAgICAgICBwYWNrYWdlVXJsOiBwcm9wcy5wYWNrYWdlVXJsLFxuICAgICAgICAgICAgbmFtZXNwYWNlSWQ6IHByb3BzLm5hbWVzcGFjZUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmF0dHJBcHBJZCA9IHJvc0FwcGxpY2F0aW9uLmF0dHJBcHBJZDtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbmdlT3JkZXJJZCA9IHJvc0FwcGxpY2F0aW9uLmF0dHJDaGFuZ2VPcmRlcklkO1xuICAgIH1cbn1cbiJdfQ==