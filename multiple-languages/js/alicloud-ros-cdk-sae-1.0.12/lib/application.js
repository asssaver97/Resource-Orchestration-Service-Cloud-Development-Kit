"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.ApplicationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "ApplicationProperty", { enumerable: true, get: function () { return sae_generated_1.RosApplication; } });
/**
 * A ROS resource type:  `ALIYUN::SAE::Application`
 */
class Application extends ros.Resource {
    /**
     * Create a new `ALIYUN::SAE::Application`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXFMOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBbkVELGtDQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FwcGxpY2F0aW9uIH0gZnJvbSAnLi9zYWUuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQXBwbGljYXRpb24gYXMgQXBwbGljYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0FFOjpBcHBsaWNhdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFwcE5hbWU6IEFwcGxpY2F0aW9uIE5hbWUuIEFsbG93ZWQgbnVtYmVycywgbGV0dGVycyBhbmQgdW5kZXJsaW5lZCBjb21iaW5hdGlvbnMgdGhlcmVvZi4gV2UgbXVzdCBiZWdpbiB3aXRoIHRoZSBsZXR0ZXJzLCB0aGUgbWF4aW11bSBsZW5ndGggb2YgMzYgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjcHU6IEVhY2ggaW5zdGFuY2Ugb2YgdGhlIENQVSByZXF1aXJlZCwgaW4gdW5pdHMgb2YgbWlsbGkgY29yZSwgY2FuIG5vdCBiZSB6ZXJvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBmaXhlZCBzcGVjaWZpY2F0aW9ucyBpbnN0YW5jZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNwdTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWVtb3J5OiBFYWNoIGluc3RhbmNlIG9mIHRoZSByZXF1aXJlZCBtZW1vcnksIGluIHVuaXRzIG9mIE1CLCBjYW4gbm90IGJlIHplcm8uIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGZpeGVkIHNwZWNpZmljYXRpb25zIGluc3RhbmNlIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVtb3J5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lc3BhY2VJZDogRURBUyBuYW1lc3BhY2UgY29ycmVzcG9uZGluZyB0byBJRC4gQ2FuYWRhIHN1cHBvcnRzIG9ubHkgdGhlIG5hbWUgb2YgdGhlIHNjcmliZSBsb3dlcmNhc2UgbmFtZXNwYWNlIG11c3QgYmVnaW4gd2l0aCBhIGxldHRlci5cbiAgICAgKiBOYW1lc3BhY2UgY2FuIGludGVyZmFjZSB0byBvYnRhaW4gZnJvbSBEZXNjcmliZU5hbWVzcGFjZUxpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhY2thZ2VUeXBlOiBBcHBsaWNhdGlvbiBwYWNrYWdlIHR5cGUuIFN1cHBvcnQgRmF0SmFyLCBXYXIsIEltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXBsaWNhczogVGhlIGluaXRpYWwgbnVtYmVyIG9mIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBsaWNhczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwRGVzY3JpcHRpb246IEFwcGxpY2F0aW9uIGRlc2NyaXB0aW9uLiBObyBtb3JlIHRoYW4gMTAyNCBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcERlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tbWFuZDogTWlycm9yaW5nIHRoZSBzdGFydCBjb21tYW5kLiBUaGUgY29tbWFuZCBvYmplY3QgaW4gbWVtb3J5IGV4ZWN1dGFibGUgY29udGFpbmVyIG11c3QgYmUuIEZvciBleGFtcGxlOiBzbGVlcC4gVGhpcyBjb21tYW5kIHdpbGwgY2F1c2UgdGhlIGltYWdlIHRvIHNldCB0aGUgb3JpZ2luYWwgc3RhcnR1cCBjb21tYW5kIGZhaWx1cmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbWFuZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbW1hbmRBcmdzOiBNaXJyb3JpbmcgdGhlIHN0YXJ0IGNvbW1hbmQgcGFyYW1ldGVycy4gUGFyYW1ldGVycyByZXF1aXJlZCBmb3IgdGhlIHN0YXJ0LWNvbW1hbmQuIEZvciBleGFtcGxlOiBbIFwiMWRcIl1cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tYW5kQXJncz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGN1c3RvbUhvc3RBbGlhczogQ3VzdG9tIG1hcHBpbmcgaG9zdCB2ZXNzZWwuIEZvciBleGFtcGxlOiBbeyBcImhvc3ROYW1lXCI6IFwic2FtcGxlaG9zdFwiLCBcImlwXCI6IFwiMTI3LjAuMC4xXCJ9XVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGN1c3RvbUhvc3RBbGlhcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlcGxveTogV2hldGhlciBkZXBsb3llZCBpbW1lZGlhdGVseSB0YWtlIGVmZmVjdCwgdGhlIGRlZmF1bHQgaXMgZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVwbG95PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVkYXNDb250YWluZXJWZXJzaW9uOiBFREFTIHBhbmRvcmEgcnVudGltZSBlbnZpcm9ubWVudCB1c2VkIGJ5IHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBlZGFzQ29udGFpbmVyVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVudnM6IENvbnRhaW5lciBlbnZpcm9ubWVudCB2YXJpYWJsZSBwYXJhbWV0ZXJzLiBGb3IgZXhhbXBsZTogW3sgXCJuYW1lXCI6IFwiZW52dG1wXCIsIFwidmFsdWVcIjogXCIwXCJ9XVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVudnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZVVybDogTWlycm9yaW5nIGFkZHJlc3MuIEltYWdlIG9ubHkgdHlwZSBvZiBhcHBsaWNhdGlvbiBjYW4gYmUgY29uZmlndXJlZCB0byBtaXJyb3IgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGphclN0YXJ0QXJnczogSmFyIHBhY2thZ2Ugc3RhcnR1cCBhcHBsaWNhdGlvbiBwYXJhbWV0ZXJzLiBBcHBseSB0aGUgZGVmYXVsdCBzdGFydHVwIGNvbW1hbmQ6ICQgSkFWQV9IT01FIC8gYmluIC8gamF2YSAkIEphclN0YXJ0T3B0aW9ucyAtamFyICQgQ0FUQUxJTkFfT1BUUyBcIiQgcGFja2FnZV9wYXRoXCJcbiAgICAgKiAkIEphclN0YXJ0QXJnc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGphclN0YXJ0QXJncz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGphclN0YXJ0T3B0aW9uczogSmFyIHN0YXJ0IHRoZSBhcHBsaWNhdGlvbiBwYWNrYWdlIG9wdGlvbi4gQXBwbHkgdGhlIGRlZmF1bHQgc3RhcnR1cCBjb21tYW5kOiAkIEpBVkFfSE9NRSAvIGJpbiAvIGphdmEgJCBKYXJTdGFydE9wdGlvbnMgLWphciAkIENBVEFMSU5BX09QVFMgXCIkIHBhY2thZ2VfcGF0aFwiXG4gICAgICogJCBKYXJTdGFydEFyZ3NcbiAgICAgKi9cbiAgICByZWFkb25seSBqYXJTdGFydE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBqZGs6IERlcGxveW1lbnQgb2YgSkRLIHZlcnNpb24gb2YgdGhlIHBhY2thZ2UgZGVwZW5kcyBvbi4gTWlycm9yaW5nIG5vdCBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgamRrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGl2ZW5lc3M6IENvbnRhaW5lciBoZWFsdGggY2hlY2ssIGhlYWx0aCBjaGVjayBmYWlscyBjb250YWluZXIgd2lsbCBiZSBraWxsZWQgYW5kIHJlY292ZXJ5LiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBtb2RlIGNvbW1hbmQgaXNzdWVkIGluIHRoZSBjb250YWluZXIuIFRoZSBjb2x1bW5zOiB7IFwiZXhlY1wiOiB7IFwiY29tbWFuZFwiOiBbIFwic2xlZXBcIiwgXCI1c1wiXX0sIFwiaW5pdGlhbERlbGF5U2Vjb25kc1wiOiAxMCwgXCJ0aW1lb3V0U2Vjb25kc1wiOiAxMX1cbiAgICAgKi9cbiAgICByZWFkb25seSBsaXZlbmVzcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vdW50RGVzYzogTW91bnQgRGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBtb3VudERlc2M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtb3VudEhvc3Q6IG5hcyBtb3VudCBwb2ludCBpbiB0aGUgYXBwbGljYXRpb24gb2YgdnBjLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vdW50SG9zdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hc0lkOiBNb3VudCB0aGUgTkFTIElELCB5b3UgbXVzdCBiZSBpbiB0aGUgc2FtZSByZWdpb24gYW5kIGNsdXN0ZXIuIEl0IG11c3QgYmUgYXZhaWxhYmxlIHRvIGNyZWF0ZSBhIG1vdW50IHBvaW50IGxpbWl0LCBvciBzd2l0Y2ggb24gaXRzIG1vdW50IHBvaW50IGFscmVhZHkgaW4gdGhlIFZQQy4gSWYgeW91IGRvIG5vdCBmaWxsLCBhbmQgdGhlcmUgbW91bnREZXNjcyBmaWVsZCwgdGhlIGRlZmF1bHQgd2lsbCBhdXRvbWF0aWNhbGx5IHB1cmNoYXNlIGEgTkFTIGFuZCBtb3VudCBpdCBvbnRvIHRoZSBzd2l0Y2ggd2l0aGluIHRoZSBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFzSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYWNrYWdlVXJsOiBEZXBsb3ltZW50IHBhY2thZ2VzIGFkZHJlc3MuIE9ubHkgRmF0SmFyIFdhciBvciB0aGUgdHlwZSBvZiBhcHBsaWNhdGlvbiBjYW4gYmUgY29uZmlndXJlZCB0byBkZXBsb3kgcGFja2V0IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFja2FnZVVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhY2thZ2VWZXJzaW9uOiBUaGUgdmVyc2lvbiBudW1iZXIgb2YgdGhlIGRlcGxveWVkIHBhY2thZ2UsIFdhciBGYXRKYXIgdHlwZSByZXF1aXJlZC4gUGxlYXNlIGN1c3RvbWl6ZSBpdCBtZWFuaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2VWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9zdFN0YXJ0OiBFeGVjdXRpbmcgdGhlIHNjcmlwdCwgc3VjaCBhcyBhZnRlciBzdGFydGluZyB0aGUgZm9ybWF0OiB7IFwiZXhlY1wiOiB7IFwiY29tbWFuZFwiOiBcImNhdFwiLCBcIi8gZXRjIC8gZ3JvdXBcIn19XG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9zdFN0YXJ0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJlU3RvcDogU2NyaXB0IGlzIGV4ZWN1dGVkIGJlZm9yZSBzdG9wcGluZyB0aGUgZm9ybWF0IGFzOiB7IFwiZXhlY1wiOiB7IFwiY29tbWFuZFwiOiBcImNhdFwiLCBcIi8gZXRjIC8gZ3JvdXBcIn19XG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlU3RvcD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlYWRpbmVzczogQXBwbGljYXRpb24gbGF1bmNoIHN0YXR1cyBjaGVjaywgaGVhbHRoIGNoZWNrIGZhaWxzIHJlcGVhdGVkbHkgY29udGFpbmVyIHdpbGwgYmUga2lsbGVkIGFuZCByZXN0YXJ0ZWQuIERvIG5vdCBwYXNzIGhlYWx0aCBjaGVjayBvZiB0aGUgdmVzc2VsIHdpbGwgbm90IGhhdmUgdG8gZW50ZXIgU0xCIHRyYWZmaWMuIEZvciBleGFtcGxlOiB7IFwiZXhlY1wiOiB7IFwiY29tbWFuZFwiOiBbIFwic2xlZXBcIiwgXCI2c1wiXX0sIFwiaW5pdGlhbERlbGF5U2Vjb25kc1wiOiAxNSwgXCJ0aW1lb3V0U2Vjb25kc1wiOiAxMn1cbiAgICAgKi9cbiAgICByZWFkb25seSByZWFkaW5lc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZWN1cml0eUdyb3VwSWQ6IFNlY3VyaXR5IGdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNsc0NvbmZpZ3M6IExvZyBjb2xsZWN0aW9uIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc0NvbmZpZ3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBhcHBsaWNhdGlvbi4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBhcHBsaWNhdGlvbi4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NBcHBsaWNhdGlvbi5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWV6b25lOiBBcHBsaWNhdGlvbiB0aW1lIHpvbmUuIERlZmF1bHQgQXNpYS9TaGFuZ2hhaS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aW1lem9uZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBFREFTIG5hbWVzcGFjZSBjb3JyZXNwb25kaW5nIFZQQy4gSW4gU2VydmVybGVzcyBpbiBhIGNvcnJlc3BvbmRpbmcgb25lIG9mIHRoZSBWUEMgbmFtZXNwYWNlIG9ubHksIGFuZCBjYW4gbm90IGJlIG1vZGlmaWVkLiBTZXJ2ZXJsZXNzIGZpcnN0IGNyZWF0ZWQgaW4gdGhlIGFwcGxpY2F0aW9uIG5hbWUgc3BhY2Ugd2lsbCBmb3JtIGEgYmluZGluZyByZWxhdGlvbnNoaXAuIFlvdSBtYXkgY29ycmVzcG9uZCB0byBhIHBsdXJhbGl0eSBvZiBuYW1lc3BhY2VzIFZQQy4gRG8gbm90IGZpbGwgd2FzIFZwY0lkIG5hbWVzcGFjZSBiaW5kaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBBcHBsaWNhdGlvbiBleGFtcGxlcyB3aGVyZSB0aGUgZWxhc3RpYyBjYXJkIHZpcnR1YWwgc3dpdGNoLiBUaGUgc3dpdGNoIG11c3QgYmUgbG9jYXRlZCBhYm92ZSB0aGUgVlBDLiBUaGUgc2FtZSBzd2l0Y2ggd2l0aCBFREFTIG5hbWVzcGFjZSBiaW5kaW5nIHJlbGF0aW9uc2hpcC4gRG8gbm90IGZpbGwgd2FzIFZTd2l0Y2hJZCBuYW1lc3BhY2UgYmluZGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2U3dpdGNoSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3YXJTdGFydE9wdGlvbnM6IFdhciBTdGFydCB0aGUgYXBwbGljYXRpb24gcGFja2FnZSBvcHRpb24uIEFwcGx5IHRoZSBkZWZhdWx0IHN0YXJ0dXAgY29tbWFuZDogamF2YSAkIEpBVkFfT1BUUyAkIENBVEFMSU5BX09QVFMgLU9wdGlvbnMgb3JnLmFwYWNoZS5jYXRhbGluYS5zdGFydHVwLkJvb3RzdHJhcCBcIiQgQFwiIHN0YXJ0XG4gICAgICovXG4gICAgcmVhZG9ubHkgd2FyU3RhcnRPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgd2ViQ29udGFpbmVyOiBUb21jYXQgZGVwbG95bWVudCBvZiB0aGUgcGFja2FnZSBkZXBlbmRzIG9uIHRoZSB2ZXJzaW9uLiBNaXJyb3Jpbmcgbm90IHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJDb250YWluZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlNBRTo6QXBwbGljYXRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXBwSWQ6IENyZWF0aW5nIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENoYW5nZU9yZGVySWQ6IFJldHVybiB0byByZWxlYXNlIGEgc2luZ2xlIElELCB1c2VkIHRvIHF1ZXJ5IHRhc2sgZXhlY3V0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5nZU9yZGVySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUU6OkFwcGxpY2F0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBcHBsaWNhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FwcGxpY2F0aW9uID0gbmV3IFJvc0FwcGxpY2F0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdGltZXpvbmU6IHByb3BzLnRpbWV6b25lLFxuICAgICAgICAgICAgYXBwRGVzY3JpcHRpb246IHByb3BzLmFwcERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbW91bnREZXNjOiBwcm9wcy5tb3VudERlc2MsXG4gICAgICAgICAgICBuYXNJZDogcHJvcHMubmFzSWQsXG4gICAgICAgICAgICB3YXJTdGFydE9wdGlvbnM6IHByb3BzLndhclN0YXJ0T3B0aW9ucyxcbiAgICAgICAgICAgIGxpdmVuZXNzOiBwcm9wcy5saXZlbmVzcyxcbiAgICAgICAgICAgIG1lbW9yeTogcHJvcHMubWVtb3J5LFxuICAgICAgICAgICAgd2ViQ29udGFpbmVyOiBwcm9wcy53ZWJDb250YWluZXIsXG4gICAgICAgICAgICBzbHNDb25maWdzOiBwcm9wcy5zbHNDb25maWdzLFxuICAgICAgICAgICAgY3B1OiBwcm9wcy5jcHUsXG4gICAgICAgICAgICBkZXBsb3k6IHByb3BzLmRlcGxveSxcbiAgICAgICAgICAgIHBhY2thZ2VWZXJzaW9uOiBwcm9wcy5wYWNrYWdlVmVyc2lvbixcbiAgICAgICAgICAgIGFwcE5hbWU6IHByb3BzLmFwcE5hbWUsXG4gICAgICAgICAgICBqZGs6IHByb3BzLmpkayxcbiAgICAgICAgICAgIGphclN0YXJ0QXJnczogcHJvcHMuamFyU3RhcnRBcmdzLFxuICAgICAgICAgICAgcHJlU3RvcDogcHJvcHMucHJlU3RvcCxcbiAgICAgICAgICAgIHJlYWRpbmVzczogcHJvcHMucmVhZGluZXNzLFxuICAgICAgICAgICAgcGFja2FnZVR5cGU6IHByb3BzLnBhY2thZ2VUeXBlLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIGNvbW1hbmRBcmdzOiBwcm9wcy5jb21tYW5kQXJncyxcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZDogcHJvcHMuc2VjdXJpdHlHcm91cElkLFxuICAgICAgICAgICAgZW52czogcHJvcHMuZW52cyxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IHByb3BzLmltYWdlVXJsLFxuICAgICAgICAgICAgcG9zdFN0YXJ0OiBwcm9wcy5wb3N0U3RhcnQsXG4gICAgICAgICAgICBqYXJTdGFydE9wdGlvbnM6IHByb3BzLmphclN0YXJ0T3B0aW9ucyxcbiAgICAgICAgICAgIG1vdW50SG9zdDogcHJvcHMubW91bnRIb3N0LFxuICAgICAgICAgICAgcmVwbGljYXM6IHByb3BzLnJlcGxpY2FzLFxuICAgICAgICAgICAgY3VzdG9tSG9zdEFsaWFzOiBwcm9wcy5jdXN0b21Ib3N0QWxpYXMsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBjb21tYW5kOiBwcm9wcy5jb21tYW5kLFxuICAgICAgICAgICAgZWRhc0NvbnRhaW5lclZlcnNpb246IHByb3BzLmVkYXNDb250YWluZXJWZXJzaW9uLFxuICAgICAgICAgICAgcGFja2FnZVVybDogcHJvcHMucGFja2FnZVVybCxcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkOiBwcm9wcy5uYW1lc3BhY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyQXBwSWQgPSByb3NBcHBsaWNhdGlvbi5hdHRyQXBwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckNoYW5nZU9yZGVySWQgPSByb3NBcHBsaWNhdGlvbi5hdHRyQ2hhbmdlT3JkZXJJZDtcbiAgICB9XG59XG4iXX0=