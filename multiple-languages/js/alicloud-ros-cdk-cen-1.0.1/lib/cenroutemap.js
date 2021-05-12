"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenRouteMap = exports.CenRouteMapProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenRouteMapProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenRouteMap; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteMap`
 */
class CenRouteMap extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::CenRouteMap`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCenRouteMap = new cen_generated_1.RosCenRouteMap(this, id, {
            description: props.description,
            sourceInstanceIdsReverseMatch: props.sourceInstanceIdsReverseMatch,
            transmitDirection: props.transmitDirection,
            matchCommunitySet: props.matchCommunitySet,
            cenRegionId: props.cenRegionId,
            sourceRouteTableIds: props.sourceRouteTableIds,
            destinationInstanceIds: props.destinationInstanceIds,
            destinationInstanceIdsReverseMatch: props.destinationInstanceIdsReverseMatch,
            sourceInstanceIds: props.sourceInstanceIds,
            destinationRouteTableIds: props.destinationRouteTableIds,
            destinationCidrBlocks: props.destinationCidrBlocks,
            operateCommunitySet: props.operateCommunitySet,
            destinationChildInstanceTypes: props.destinationChildInstanceTypes,
            priority: props.priority,
            sourceChildInstanceTypes: props.sourceChildInstanceTypes,
            asPathMatchMode: props.asPathMatchMode,
            cidrMatchMode: props.cidrMatchMode,
            mapResult: props.mapResult,
            routeTypes: props.routeTypes,
            preference: props.preference,
            communityOperateMode: props.communityOperateMode,
            cenId: props.cenId,
            nextPriority: props.nextPriority,
            prependAsPath: props.prependAsPath,
            communityMatchMode: props.communityMatchMode,
            matchAsns: props.matchAsns,
            sourceRegionIds: props.sourceRegionIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteMap;
        this.attrAsPathMatchMode = rosCenRouteMap.attrAsPathMatchMode;
        this.attrCenId = rosCenRouteMap.attrCenId;
        this.attrCenRegionId = rosCenRouteMap.attrCenRegionId;
        this.attrCidrMatchMode = rosCenRouteMap.attrCidrMatchMode;
        this.attrCommunityMatchMode = rosCenRouteMap.attrCommunityMatchMode;
        this.attrCommunityOperateMode = rosCenRouteMap.attrCommunityOperateMode;
        this.attrDescription = rosCenRouteMap.attrDescription;
        this.attrDestinationChildInstanceTypes = rosCenRouteMap.attrDestinationChildInstanceTypes;
        this.attrDestinationCidrBlocks = rosCenRouteMap.attrDestinationCidrBlocks;
        this.attrDestinationInstanceIds = rosCenRouteMap.attrDestinationInstanceIds;
        this.attrDestinationInstanceIdsReverseMatch = rosCenRouteMap.attrDestinationInstanceIdsReverseMatch;
        this.attrDestinationRouteTableIds = rosCenRouteMap.attrDestinationRouteTableIds;
        this.attrMapResult = rosCenRouteMap.attrMapResult;
        this.attrMatchAsns = rosCenRouteMap.attrMatchAsns;
        this.attrMatchCommunitySet = rosCenRouteMap.attrMatchCommunitySet;
        this.attrNextPriority = rosCenRouteMap.attrNextPriority;
        this.attrOperateCommunitySet = rosCenRouteMap.attrOperateCommunitySet;
        this.attrPreference = rosCenRouteMap.attrPreference;
        this.attrPrependAsPath = rosCenRouteMap.attrPrependAsPath;
        this.attrPriority = rosCenRouteMap.attrPriority;
        this.attrRouteMapId = rosCenRouteMap.attrRouteMapId;
        this.attrRouteTypes = rosCenRouteMap.attrRouteTypes;
        this.attrSourceChildInstanceTypes = rosCenRouteMap.attrSourceChildInstanceTypes;
        this.attrSourceInstanceIds = rosCenRouteMap.attrSourceInstanceIds;
        this.attrSourceInstanceIdsReverseMatch = rosCenRouteMap.attrSourceInstanceIdsReverseMatch;
        this.attrSourceRegionIds = rosCenRouteMap.attrSourceRegionIds;
        this.attrSourceRouteTableIds = rosCenRouteMap.attrSourceRouteTableIds;
        this.attrTransmitDirection = rosCenRouteMap.attrTransmitDirection;
    }
}
exports.CenRouteMap = CenRouteMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Vucm91dGVtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZW5yb3V0ZW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQStJOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQW1KekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLDZCQUE2QixFQUFFLEtBQUssQ0FBQyw2QkFBNkI7WUFDbEUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGtDQUFrQztZQUM1RSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0I7WUFDeEQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyw2QkFBNkI7WUFDbEUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0I7WUFDeEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtTQUN6QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsY0FBYyxDQUFDLHNCQUFzQixDQUFDO1FBQ3BFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxjQUFjLENBQUMsd0JBQXdCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxjQUFjLENBQUMsaUNBQWlDLENBQUM7UUFDMUYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQztRQUMxRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsY0FBYyxDQUFDLDBCQUEwQixDQUFDO1FBQzVFLElBQUksQ0FBQyxzQ0FBc0MsR0FBRyxjQUFjLENBQUMsc0NBQXNDLENBQUM7UUFDcEcsSUFBSSxDQUFDLDRCQUE0QixHQUFHLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQztRQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBQ2xELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMscUJBQXFCLENBQUM7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsY0FBYyxDQUFDLHVCQUF1QixDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBQ3BELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxjQUFjLENBQUMsNEJBQTRCLENBQUM7UUFDaEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsRSxJQUFJLENBQUMsaUNBQWlDLEdBQUcsY0FBYyxDQUFDLGlDQUFpQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUM7UUFDOUQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQztRQUN0RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQXhORCxrQ0F3TkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDZW5Sb3V0ZU1hcCB9IGZyb20gJy4vY2VuLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0NlblJvdXRlTWFwIGFzIENlblJvdXRlTWFwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNFTjo6Q2VuUm91dGVNYXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VuUm91dGVNYXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNlblJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB0byB3aGljaCB0aGUgQ0VOIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hcFJlc3VsdDogVGhlIGFjdGlvbiB0aGF0IGlzIHBlcmZvcm1lZCB0byBhIHJvdXRlIGlmIHRoZSByb3V0ZSBtZWV0cyBhbGwgdGhlIG1hdGNoIGNvbmRpdGlvbnMuICBQZXJtaXQ6IFRoZSByb3V0ZSBpcyBwZXJtaXR0ZWQuIERlbnk6IFRoZSByb3V0ZSBpcyBkZW5pZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFwUmVzdWx0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSByb3V0ZSBtYXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zbWl0RGlyZWN0aW9uOiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSByb3V0ZSBtYXAgaXMgYXBwbGllZC4gVmFsaWQgdmFsdWVzOiAgUmVnaW9uSW46IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggcm91dGVzIGFyZSBpbXBvcnRlZCB0byB0aGUgcmVnaW9uYWwgZ2F0ZXdheSBvZiB0aGUgQ0VOLiAgRm9yIGV4YW1wbGUsIHJvdXRlcyBhcmUgaW1wb3J0ZWQgdG8gdGhlIHJlZ2lvbmFsIGdhdGV3YXkgZnJvbSBhbiBpbnN0YW5jZSBpbiB0aGUgY3VycmVudCByZWdpb24gb3IgYW5vdGhlciByZWdpb24uICBSZWdpb25PdXQ6IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggcm91dGVzIGFyZSBleHBvcnRlZCBmcm9tIHRoZSByZWdpb25hbCBnYXRld2F5IG9mIHRoZSBDRU4uICBGb3IgZXhhbXBsZSwgcm91dGVzIGFyZSBleHBvcnRlZCBmcm9tIHRoZSByZWdpb25hbCBnYXRld2F5IG9mIHRoZSBjdXJyZW50IHJlZ2lvbiB0byBhbiBpbnN0YW5jZSBpbiB0aGUgc2FtZSByZWdpb24sIG9yIHRvIHRoZSByZWdpb25hbCBnYXRld2F5IGluIGFub3RoZXIgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zbWl0RGlyZWN0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhc1BhdGhNYXRjaE1vZGU6IEEgbWF0Y2ggc3RhdGVtZW50LiBJdCBpbmRpY2F0ZXMgdGhlIG1vZGUgaW4gd2hpY2ggdGhlIGFzLXBhdGggYXR0cmlidXRlIGlzIG1hdGNoZWQuIFZhbGlkIHZhbHVlczogIEluY2x1ZGU6IEZ1enp5IG1hdGNoLiBBIHJvdXRlIG1hdGNoZXMgdGhlIGNvbmRpdGlvbiBpZiB0aGUgQVMgcGF0aCBpbiB0aGUgcm91dGUgb3ZlcmxhcHMgdGhlIEFTIHBhdGggaW4gdGhlIG1hdGNoIGNvbmRpdGlvbi4gQ29tcGxldGU6IEV4YWN0IG1hdGNoLiBBIHJvdXRlIG1hdGNoZXMgdGhlIGNvbmRpdGlvbiBvbmx5IHdoZW4gdGhlIEFTIHBhdGggb2YgdGhlIHJvdXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBBUyBwYXRoIGluIHRoZSBtYXRjaCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXNQYXRoTWF0Y2hNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2lkck1hdGNoTW9kZTogQSBtYXRjaCBzdGF0ZW1lbnQuIEl0IGluZGljYXRlcyB0aGUgbW9kZSBpbiB3aGljaCB0aGUgcHJlZml4IGF0dHJpYnV0ZSBpcyBtYXRjaGVkLiBWYWxpZCB2YWx1ZXM6ICBJbmNsdWRlOiBGdXp6eSBtYXRjaC4gSWYgdGhlIHByZWZpeCBvZiBhIHJvdXRlIGlzIGNvbnRhaW5lZCBpbiB0aGUgcHJlZml4IGluIHRoZSBtYXRjaCBjb25kaXRpb24sIHRoZSByb3V0ZSBtYXRjaGVzIHRoZSBjb25kaXRpb24uICBGb3IgZXhhbXBsZSwgaWYgdGhlIHByZWZpeCBpbiB0aGUgbWF0Y2ggY29uZGl0aW9uIGlzIHNldCB0byAxLjEuMC4wLzE2IGFuZCB0aGUgbWF0Y2ggbWV0aG9kIGlzIHNldCB0byBGdXp6eSBNYXRjaCwgdGhlIHJvdXRlIHdpdGggdGhlIHByZWZpeCBvZiAxLjEuMS4wLzI0IG1hdGNoZXMgdGhlIGNvbmRpdGlvbi4gIENvbXBsZXRlOiBFeGFjdCBtYXRjaC4gQSByb3V0ZSBtYXRjaGVzIHRoZSBjb25kaXRpb24gb25seSB3aGVuIHRoZSBwcmVmaXggb2YgdGhlIHJvdXRlIGlzIHRoZSBzYW1lIGFzIHRoZSBwcmVmaXggaW4gdGhlIG1hdGNoIGNvbmRpdGlvbi4gIEZvciBleGFtcGxlLCBpZiB0aGUgcHJlZml4IGluIHRoZSBtYXRjaCBjb25kaXRpb24gaXMgc2V0IHRvIDEuMS4wLjAvMTYgYW5kIHRoZSBtYXRjaCBtZXRob2QgaXMgc2V0IHRvIEV4YWN0IE1hdGNoLCBvbmx5IHRoZSByb3V0ZSB3aXRoIHRoZSBwcmVmaXggb2YgMS4xLjEuMC8xNiBtYXRjaGVzIHRoZSBjb25kaXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2lkck1hdGNoTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbW11bml0eU1hdGNoTW9kZTogQSBtYXRjaCBzdGF0ZW1lbnQuIEl0IGluZGljYXRlcyB0aGUgbW9kZSBpbiB3aGljaCB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZSBpcyBtYXRjaGVkLiBWYWxpZCB2YWx1ZXM6ICBJbmNsdWRlOiBGdXp6eSBtYXRjaC4gQSByb3V0ZSBtYXRjaGVzIHRoZSBjb25kaXRpb24gaWYgdGhlIGNvbW11bml0eSBvZiB0aGUgcm91dGUgb3ZlcmxhcHMgdGhlIGNvbW11bml0eSBpbiB0aGUgbWF0Y2ggY29uZGl0aW9uLiBDb21wbGV0ZTogRXhhY3QgbWF0Y2guIEEgcm91dGUgbWF0Y2hlcyB0aGUgY29uZGl0aW9uIG9ubHkgd2hlbiB0aGUgY29tbXVuaXR5IG9mIHRoZSByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgY29tbXVuaXR5IGluIHRoZSBtYXRjaCBjb25kaXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29tbXVuaXR5TWF0Y2hNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tbXVuaXR5T3BlcmF0ZU1vZGU6IEFuIGFjdGlvbiBzdGF0ZW1lbnQuIEl0IGluZGljYXRlcyB0aGUgbW9kZSBpbiB3aGljaCB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZSBpcyBvcGVyYXRlZC4gVmFsaWQgdmFsdWVzOiAgQWRkaXRpdmU6IFNldHMgYSB2YWx1ZSBmb3IgdGhlIGNvbW11bml0eSBhdHRyaWJ1dGUuIFJlcGxhY2U6IFJlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21tdW5pdHlPcGVyYXRlTW9kZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJvdXRlIG1hcC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc3RpbmF0aW9uQ2hpbGRJbnN0YW5jZVR5cGVzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlcy4gIFZQQzogVlBDIFZCUjogVkJSIENDTjogTWFpbmxhbmQgQ2hpbmEgQ0NOIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiB0aGUgVHJhbnNtaXREaXJlY3Rpb24gcGFyYW1ldGVyIGlzIHNldCB0byBSZWdpb25PdXQsIGFuZCB0aGUgZGVzdGluYXRpb24gaW5zdGFuY2UgYW5kIHRoZSByb3V0ZSBtYXAgYmVsb25nIHRvIHRoZSBzYW1lIHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkNoaWxkSW5zdGFuY2VUeXBlcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvbkNpZHJCbG9ja3M6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBwcmVmaXggbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkNpZHJCbG9ja3M/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25JbnN0YW5jZUlkczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBkZXN0aW5hdGlvbiBpbnN0YW5jZXMuICBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IHdoZW4gdGhlIFRyYW5zbWl0RGlyZWN0aW9uIHBhcmFtZXRlciBpcyBzZXQgdG8gUmVnaW9uT3V0LCBhbmQgdGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlIGFuZCB0aGUgcm91dGUgbWFwIGJlbG9uZ3MgdG8gdGhlIHNhbWUgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uSW5zdGFuY2VJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25JbnN0YW5jZUlkc1JldmVyc2VNYXRjaDogSW5kaWNhdGVzIHdoZXRoZXIgdG8gZW5hYmxlIHRoZSByZXZlcnNlIG1hdGNoIG1ldGhvZCBvZiB0aGUgRGVzdGluYXRpb25JbnN0YW5jZUlkcyBtYXRjaCBjb25kaXRpb24uIFZhbGlkIHZhbHVlczogIGZhbHNlIChkZWZhdWx0KTogSWYgdGhlIElEIG9mIGEgcm91dGUncyBkZXN0aW5hdGlvbiBpbnN0YW5jZSBpcyBpbmNsdWRlZCBpbiBEZXN0aW5hdGlvbkluc3RhbmNlSWRzLCB0aGUgcm91dGUgaXMgcGVybWl0dGVkLiB0cnVlOiBJZiB0aGUgSUQgb2YgYSByb3V0ZSdzIGRlc3RpbmF0aW9uIGluc3RhbmNlIGlzIG5vdCBpbmNsdWRlZCBpbiBEZXN0aW5hdGlvbkluc3RhbmNlSWRzLCB0aGUgcm91dGUgaXMgcGVybWl0dGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25Sb3V0ZVRhYmxlSWRzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRhYmxlcy4gIFRoaXMgcGFyYW1ldGVyIGlzIHZhbGlkIG9ubHkgd2hlbiB0aGUgVHJhbnNtaXREaXJlY3Rpb24gcGFyYW1ldGVyIGlzIHNldCB0byBSZWdpb25PdXQsIGFuZCB0aGUgZGVzdGluYXRpb24gcm91dGUgdGFibGUgYW5kIHRoZSByb3V0ZSBtYXAgYmVsb25ncyB0byB0aGUgc2FtZSByZWdpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25Sb3V0ZVRhYmxlSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1hdGNoQXNuczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIEFzIHBhdGggbGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXRjaEFzbnM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWF0Y2hDb21tdW5pdHlTZXQ6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBjb21tdW5pdHkgc2V0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoQ29tbXVuaXR5U2V0PzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5leHRQcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSBuZXh0IHJvdXRlIG1hcCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCByb3V0ZSBtYXAuIFZhbHVlIHJhbmdlOiAxIHRvIDEwMC4gIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzZXQsIHRoZSBjdXJyZW50IHJvdXRlIG1hcCBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIGFueSByb3V0ZSBtYXAgdGhhdCBpcyBvcmRlcmVkIG5leHQgdG8gdGhlIGN1cnJlbnQgcm91dGUgbWFwLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMSwgdGhlIGN1cnJlbnQgcm91dGUgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmV4dCByb3V0ZSBtYXAuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBhIHZhbHVlIG90aGVyIHRoYW4gMSwgdGhlIHByaW9yaXR5IG9mIHRoZSBhc3NvY2lhdGVkIHJvdXRlIG1hcCBtdXN0IGJlIGxvd2VyIHRoYW4gdGhlIHByaW9yaXR5IG9mIHRoZSBjdXJyZW50IHJvdXRlIG1hcCwgdGhhdCBpcywgdGhlIHZhbHVlIG9mIE5leHRQcmlvcml0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgc2V0IGZvciBQcmlvcml0eS4gT25seSB3aGVuIE1hcFJlc3VsdCBpcyBzZXQgdG8gUGVybWl0LCB0aGUgcm91dGVzIHdoaWNoIG1hdGNoIGFsbCB0aGUgbWF0Y2hpbmcgY29uZGl0aW9ucyB3aWxsIGJlIGV2YWx1YXRlZCBieSB0aGUgYXNzb2NpYXRlZCByb3V0ZSBtYXAgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggYSBzcGVjaWZpYyBwcmVmZXJlbmNlIHZhbHVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5leHRQcmlvcml0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wZXJhdGVDb21tdW5pdHlTZXQ6IEFuIGFjdGlvbiBzdGF0ZW1lbnQgdGhhdCBvcGVyYXRlcyB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcGVyYXRlQ29tbXVuaXR5U2V0PzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByZWZlcmVuY2U6IEFuIGFjdGlvbiBzdGF0ZW1lbnQgdGhhdCBtb2RpZmllcyB0aGUgcHJlZmVyZW5jZSBvZiB0aGUgcm91dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlZmVyZW5jZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByZXBlbmRBc1BhdGg6IEluZGljYXRlcyBBUyBQYXRoIHByZXBlbmRpbmcgd2hlbiBhIHJlZ2lvbmFsIGdhdGV3YXkgcmVjZWl2ZXMgb3IgcHVibGlzaGVzIGEgcm91dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJlcGVuZEFzUGF0aD86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZVR5cGVzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiByb3V0ZSB0eXBlcy4gIFN5c3RlbTogU3lzdGVtIHJvdXRlcyBnZW5lcmF0ZWQgYnkgdGhlIHN5c3RlbS4gQ3VzdG9tOiBDdXN0b20gcm91dGVzIGFkZGVkIGJ5IHVzZXJzLiBCR1A6IFJvdXRlcyBhZHZlcnRpc2VkIHRvIEJHUC5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVR5cGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBzb3VyY2UgaW5zdGFuY2VzLiAgVlBDOiBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKFZQQykgVkJSOiBWaXJ0dWFsIEJvcmRlciBSb3V0ZXIgKFZCUikgQ0NOOiBNYWlubGFuZCBDaGluYSBDbG91ZCBDb25uZWN0IE5ldHdvcmsgKENDTilcbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VDaGlsZEluc3RhbmNlVHlwZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlSW5zdGFuY2VJZHM6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBsaXN0IG9mIElEcyBvZiB0aGUgc291cmNlIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VJbnN0YW5jZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VJbnN0YW5jZUlkc1JldmVyc2VNYXRjaDogSW5kaWNhdGVzIHdoZXRoZXIgdG8gZW5hYmxlIHRoZSByZXZlcnNlIG1hdGNoIG1ldGhvZCBvZiB0aGUgU291cmNlSW5zdGFuY2VJZHMgbWF0Y2ggY29uZGl0aW9uLiBWYWxpZCB2YWx1ZXM6ICBmYWxzZSAoZGVmYXVsdCk6IElmIHRoZSBJRCBvZiBhIHJvdXRlJ3Mgc291cmNlIGluc3RhbmNlIGlzIGluY2x1ZGVkIGluIFNvdXJjZUluc3RhbmNlSWRzLCB0aGUgcm91dGUgaXMgcGVybWl0dGVkLiB0cnVlOiBJZiB0aGUgSUQgb2YgYSByb3V0ZSdzIHNvdXJjZSBpbnN0YW5jZSBpcyBub3QgaW5jbHVkZWQgaW4gU291cmNlSW5zdGFuY2VJZHMsIHRoZSByb3V0ZSBpcyBwZXJtaXR0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc291cmNlUmVnaW9uSWRzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIHNvdXJjZSByZWdpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZVJlZ2lvbklkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzb3VyY2VSb3V0ZVRhYmxlSWRzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIHNvdXJjZSByb3V0ZSB0YWJsZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlUm91dGVUYWJsZUlkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNFTjo6Q2VuUm91dGVNYXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBDZW5Sb3V0ZU1hcCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXNQYXRoTWF0Y2hNb2RlOiBBIG1hdGNoIHN0YXRlbWVudC4gSXQgaW5kaWNhdGVzIHRoZSBtb2RlIGluIHdoaWNoIHRoZSBhcy1wYXRoIGF0dHJpYnV0ZSBpcyBtYXRjaGVkLiBWYWxpZCB2YWx1ZXM6ICBJbmNsdWRlOiBGdXp6eSBtYXRjaC4gQSByb3V0ZSBtYXRjaGVzIHRoZSBjb25kaXRpb24gaWYgdGhlIEFTIHBhdGggaW4gdGhlIHJvdXRlIG92ZXJsYXBzIHRoZSBBUyBwYXRoIGluIHRoZSBtYXRjaCBjb25kaXRpb24uIENvbXBsZXRlOiBFeGFjdCBtYXRjaC4gQSByb3V0ZSBtYXRjaGVzIHRoZSBjb25kaXRpb24gb25seSB3aGVuIHRoZSBBUyBwYXRoIG9mIHRoZSByb3V0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgQVMgcGF0aCBpbiB0aGUgbWF0Y2ggY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXNQYXRoTWF0Y2hNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDZW5SZWdpb25JZDogVGhlIElEIG9mIHRoZSByZWdpb24gdG8gd2hpY2ggdGhlIENFTiBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2VuUmVnaW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDaWRyTWF0Y2hNb2RlOiBBIG1hdGNoIHN0YXRlbWVudC4gSXQgaW5kaWNhdGVzIHRoZSBtb2RlIGluIHdoaWNoIHRoZSBwcmVmaXggYXR0cmlidXRlIGlzIG1hdGNoZWQuIFZhbGlkIHZhbHVlczogIEluY2x1ZGU6IEZ1enp5IG1hdGNoLiBJZiB0aGUgcHJlZml4IG9mIGEgcm91dGUgaXMgY29udGFpbmVkIGluIHRoZSBwcmVmaXggaW4gdGhlIG1hdGNoIGNvbmRpdGlvbiwgdGhlIHJvdXRlIG1hdGNoZXMgdGhlIGNvbmRpdGlvbi4gIEZvciBleGFtcGxlLCBpZiB0aGUgcHJlZml4IGluIHRoZSBtYXRjaCBjb25kaXRpb24gaXMgc2V0IHRvIDEuMS4wLjAvMTYgYW5kIHRoZSBtYXRjaCBtZXRob2QgaXMgc2V0IHRvIEZ1enp5IE1hdGNoLCB0aGUgcm91dGUgd2l0aCB0aGUgcHJlZml4IG9mIDEuMS4xLjAvMjQgbWF0Y2hlcyB0aGUgY29uZGl0aW9uLiAgQ29tcGxldGU6IEV4YWN0IG1hdGNoLiBBIHJvdXRlIG1hdGNoZXMgdGhlIGNvbmRpdGlvbiBvbmx5IHdoZW4gdGhlIHByZWZpeCBvZiB0aGUgcm91dGUgaXMgdGhlIHNhbWUgYXMgdGhlIHByZWZpeCBpbiB0aGUgbWF0Y2ggY29uZGl0aW9uLiAgRm9yIGV4YW1wbGUsIGlmIHRoZSBwcmVmaXggaW4gdGhlIG1hdGNoIGNvbmRpdGlvbiBpcyBzZXQgdG8gMS4xLjAuMC8xNiBhbmQgdGhlIG1hdGNoIG1ldGhvZCBpcyBzZXQgdG8gRXhhY3QgTWF0Y2gsIG9ubHkgdGhlIHJvdXRlIHdpdGggdGhlIHByZWZpeCBvZiAxLjEuMS4wLzE2IG1hdGNoZXMgdGhlIGNvbmRpdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNpZHJNYXRjaE1vZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb21tdW5pdHlNYXRjaE1vZGU6IEEgbWF0Y2ggc3RhdGVtZW50LiBJdCBpbmRpY2F0ZXMgdGhlIG1vZGUgaW4gd2hpY2ggdGhlIGNvbW11bml0eSBhdHRyaWJ1dGUgaXMgbWF0Y2hlZC4gVmFsaWQgdmFsdWVzOiAgSW5jbHVkZTogRnV6enkgbWF0Y2guIEEgcm91dGUgbWF0Y2hlcyB0aGUgY29uZGl0aW9uIGlmIHRoZSBjb21tdW5pdHkgb2YgdGhlIHJvdXRlIG92ZXJsYXBzIHRoZSBjb21tdW5pdHkgaW4gdGhlIG1hdGNoIGNvbmRpdGlvbi4gQ29tcGxldGU6IEV4YWN0IG1hdGNoLiBBIHJvdXRlIG1hdGNoZXMgdGhlIGNvbmRpdGlvbiBvbmx5IHdoZW4gdGhlIGNvbW11bml0eSBvZiB0aGUgcm91dGUgaXMgdGhlIHNhbWUgYXMgdGhlIGNvbW11bml0eSBpbiB0aGUgbWF0Y2ggY29uZGl0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29tbXVuaXR5TWF0Y2hNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29tbXVuaXR5T3BlcmF0ZU1vZGU6IEFuIGFjdGlvbiBzdGF0ZW1lbnQuIEl0IGluZGljYXRlcyB0aGUgbW9kZSBpbiB3aGljaCB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZSBpcyBvcGVyYXRlZC4gVmFsaWQgdmFsdWVzOiAgQWRkaXRpdmU6IFNldHMgYSB2YWx1ZSBmb3IgdGhlIGNvbW11bml0eSBhdHRyaWJ1dGUuIFJlcGxhY2U6IFJlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgY29tbXVuaXR5IGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW11bml0eU9wZXJhdGVNb2RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcm91dGUgbWFwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXN0aW5hdGlvbkNoaWxkSW5zdGFuY2VUeXBlczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBkZXN0aW5hdGlvbiBpbnN0YW5jZXMuICBWUEM6IFZQQyBWQlI6IFZCUiBDQ046IE1haW5sYW5kIENoaW5hIENDTiBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IHdoZW4gdGhlIFRyYW5zbWl0RGlyZWN0aW9uIHBhcmFtZXRlciBpcyBzZXQgdG8gUmVnaW9uT3V0LCBhbmQgdGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlIGFuZCB0aGUgcm91dGUgbWFwIGJlbG9uZyB0byB0aGUgc2FtZSByZWdpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXN0aW5hdGlvbkNoaWxkSW5zdGFuY2VUeXBlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc3RpbmF0aW9uQ2lkckJsb2NrczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIHByZWZpeCBsaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzdGluYXRpb25DaWRyQmxvY2tzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVzdGluYXRpb25JbnN0YW5jZUlkczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBkZXN0aW5hdGlvbiBpbnN0YW5jZXMuICBUaGlzIHBhcmFtZXRlciBpcyB2YWxpZCBvbmx5IHdoZW4gdGhlIFRyYW5zbWl0RGlyZWN0aW9uIHBhcmFtZXRlciBpcyBzZXQgdG8gUmVnaW9uT3V0LCBhbmQgdGhlIGRlc3RpbmF0aW9uIGluc3RhbmNlIGFuZCB0aGUgcm91dGUgbWFwIGJlbG9uZ3MgdG8gdGhlIHNhbWUgcmVnaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzdGluYXRpb25JbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc3RpbmF0aW9uSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g6IEluZGljYXRlcyB3aGV0aGVyIHRvIGVuYWJsZSB0aGUgcmV2ZXJzZSBtYXRjaCBtZXRob2Qgb2YgdGhlIERlc3RpbmF0aW9uSW5zdGFuY2VJZHMgbWF0Y2ggY29uZGl0aW9uLiBWYWxpZCB2YWx1ZXM6ICBmYWxzZSAoZGVmYXVsdCk6IElmIHRoZSBJRCBvZiBhIHJvdXRlJ3MgZGVzdGluYXRpb24gaW5zdGFuY2UgaXMgaW5jbHVkZWQgaW4gRGVzdGluYXRpb25JbnN0YW5jZUlkcywgdGhlIHJvdXRlIGlzIHBlcm1pdHRlZC4gdHJ1ZTogSWYgdGhlIElEIG9mIGEgcm91dGUncyBkZXN0aW5hdGlvbiBpbnN0YW5jZSBpcyBub3QgaW5jbHVkZWQgaW4gRGVzdGluYXRpb25JbnN0YW5jZUlkcywgdGhlIHJvdXRlIGlzIHBlcm1pdHRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc3RpbmF0aW9uSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXN0aW5hdGlvblJvdXRlVGFibGVJZHM6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBsaXN0IG9mIElEcyBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUgdGFibGVzLiAgVGhpcyBwYXJhbWV0ZXIgaXMgdmFsaWQgb25seSB3aGVuIHRoZSBUcmFuc21pdERpcmVjdGlvbiBwYXJhbWV0ZXIgaXMgc2V0IHRvIFJlZ2lvbk91dCwgYW5kIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0YWJsZSBhbmQgdGhlIHJvdXRlIG1hcCBiZWxvbmdzIHRvIHRoZSBzYW1lIHJlZ2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc3RpbmF0aW9uUm91dGVUYWJsZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1hcFJlc3VsdDogVGhlIGFjdGlvbiB0aGF0IGlzIHBlcmZvcm1lZCB0byBhIHJvdXRlIGlmIHRoZSByb3V0ZSBtZWV0cyBhbGwgdGhlIG1hdGNoIGNvbmRpdGlvbnMuICBQZXJtaXQ6IFRoZSByb3V0ZSBpcyBwZXJtaXR0ZWQuIERlbnk6IFRoZSByb3V0ZSBpcyBkZW5pZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXBSZXN1bHQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXRjaEFzbnM6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBBcyBwYXRoIGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXRjaEFzbnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNYXRjaENvbW11bml0eVNldDogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGNvbW11bml0eSBzZXQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXRjaENvbW11bml0eVNldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5leHRQcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSBuZXh0IHJvdXRlIG1hcCB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCByb3V0ZSBtYXAuIFZhbHVlIHJhbmdlOiAxIHRvIDEwMC4gIElmIHRoaXMgcGFyYW1ldGVyIGlzIG5vdCBzZXQsIHRoZSBjdXJyZW50IHJvdXRlIG1hcCBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIGFueSByb3V0ZSBtYXAgdGhhdCBpcyBvcmRlcmVkIG5leHQgdG8gdGhlIGN1cnJlbnQgcm91dGUgbWFwLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBzZXQgdG8gMSwgdGhlIGN1cnJlbnQgcm91dGUgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmV4dCByb3V0ZSBtYXAuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHNldCB0byBhIHZhbHVlIG90aGVyIHRoYW4gMSwgdGhlIHByaW9yaXR5IG9mIHRoZSBhc3NvY2lhdGVkIHJvdXRlIG1hcCBtdXN0IGJlIGxvd2VyIHRoYW4gdGhlIHByaW9yaXR5IG9mIHRoZSBjdXJyZW50IHJvdXRlIG1hcCwgdGhhdCBpcywgdGhlIHZhbHVlIG9mIE5leHRQcmlvcml0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgc2V0IGZvciBQcmlvcml0eS4gT25seSB3aGVuIE1hcFJlc3VsdCBpcyBzZXQgdG8gUGVybWl0LCB0aGUgcm91dGVzIHdoaWNoIG1hdGNoIGFsbCB0aGUgbWF0Y2hpbmcgY29uZGl0aW9ucyB3aWxsIGJlIGV2YWx1YXRlZCBieSB0aGUgYXNzb2NpYXRlZCByb3V0ZSBtYXAgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggYSBzcGVjaWZpYyBwcmVmZXJlbmNlIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmV4dFByaW9yaXR5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3BlcmF0ZUNvbW11bml0eVNldDogQW4gYWN0aW9uIHN0YXRlbWVudCB0aGF0IG9wZXJhdGVzIHRoZSBjb21tdW5pdHkgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3BlcmF0ZUNvbW11bml0eVNldDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByZWZlcmVuY2U6IEFuIGFjdGlvbiBzdGF0ZW1lbnQgdGhhdCBtb2RpZmllcyB0aGUgcHJlZmVyZW5jZSBvZiB0aGUgcm91dGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcmVmZXJlbmNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJlcGVuZEFzUGF0aDogSW5kaWNhdGVzIEFTIFBhdGggcHJlcGVuZGluZyB3aGVuIGEgcmVnaW9uYWwgZ2F0ZXdheSByZWNlaXZlcyBvciBwdWJsaXNoZXMgYSByb3V0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByZXBlbmRBc1BhdGg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcmlvcml0eTogVGhlIHByaW9yaXR5IG9mIHRoZSByb3V0ZSBtYXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcmlvcml0eTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlTWFwSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGUgbWFwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVNYXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlVHlwZXM6IEEgbWF0Y2ggc3RhdGVtZW50IHRoYXQgaW5kaWNhdGVzIHRoZSBsaXN0IG9mIHJvdXRlIHR5cGVzLiAgU3lzdGVtOiBTeXN0ZW0gcm91dGVzIGdlbmVyYXRlZCBieSB0aGUgc3lzdGVtLiBDdXN0b206IEN1c3RvbSByb3V0ZXMgYWRkZWQgYnkgdXNlcnMuIEJHUDogUm91dGVzIGFkdmVydGlzZWQgdG8gQkdQLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUeXBlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBzb3VyY2UgaW5zdGFuY2VzLiAgVlBDOiBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKFZQQykgVkJSOiBWaXJ0dWFsIEJvcmRlciBSb3V0ZXIgKFZCUikgQ0NOOiBNYWlubGFuZCBDaGluYSBDbG91ZCBDb25uZWN0IE5ldHdvcmsgKENDTilcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZUluc3RhbmNlSWRzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIHNvdXJjZSBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTb3VyY2VJbnN0YW5jZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiBJbmRpY2F0ZXMgd2hldGhlciB0byBlbmFibGUgdGhlIHJldmVyc2UgbWF0Y2ggbWV0aG9kIG9mIHRoZSBTb3VyY2VJbnN0YW5jZUlkcyBtYXRjaCBjb25kaXRpb24uIFZhbGlkIHZhbHVlczogIGZhbHNlIChkZWZhdWx0KTogSWYgdGhlIElEIG9mIGEgcm91dGUncyBzb3VyY2UgaW5zdGFuY2UgaXMgaW5jbHVkZWQgaW4gU291cmNlSW5zdGFuY2VJZHMsIHRoZSByb3V0ZSBpcyBwZXJtaXR0ZWQuIHRydWU6IElmIHRoZSBJRCBvZiBhIHJvdXRlJ3Mgc291cmNlIGluc3RhbmNlIGlzIG5vdCBpbmNsdWRlZCBpbiBTb3VyY2VJbnN0YW5jZUlkcywgdGhlIHJvdXRlIGlzIHBlcm1pdHRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU291cmNlUmVnaW9uSWRzOiBBIG1hdGNoIHN0YXRlbWVudCB0aGF0IGluZGljYXRlcyB0aGUgbGlzdCBvZiBJRHMgb2YgdGhlIHNvdXJjZSByZWdpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU291cmNlUmVnaW9uSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU291cmNlUm91dGVUYWJsZUlkczogQSBtYXRjaCBzdGF0ZW1lbnQgdGhhdCBpbmRpY2F0ZXMgdGhlIGxpc3Qgb2YgSURzIG9mIHRoZSBzb3VyY2Ugcm91dGUgdGFibGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU291cmNlUm91dGVUYWJsZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zbWl0RGlyZWN0aW9uOiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSByb3V0ZSBtYXAgaXMgYXBwbGllZC4gVmFsaWQgdmFsdWVzOiAgUmVnaW9uSW46IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggcm91dGVzIGFyZSBpbXBvcnRlZCB0byB0aGUgcmVnaW9uYWwgZ2F0ZXdheSBvZiB0aGUgQ0VOLiAgRm9yIGV4YW1wbGUsIHJvdXRlcyBhcmUgaW1wb3J0ZWQgdG8gdGhlIHJlZ2lvbmFsIGdhdGV3YXkgZnJvbSBhbiBpbnN0YW5jZSBpbiB0aGUgY3VycmVudCByZWdpb24gb3IgYW5vdGhlciByZWdpb24uICBSZWdpb25PdXQ6IFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggcm91dGVzIGFyZSBleHBvcnRlZCBmcm9tIHRoZSByZWdpb25hbCBnYXRld2F5IG9mIHRoZSBDRU4uICBGb3IgZXhhbXBsZSwgcm91dGVzIGFyZSBleHBvcnRlZCBmcm9tIHRoZSByZWdpb25hbCBnYXRld2F5IG9mIHRoZSBjdXJyZW50IHJlZ2lvbiB0byBhbiBpbnN0YW5jZSBpbiB0aGUgc2FtZSByZWdpb24sIG9yIHRvIHRoZSByZWdpb25hbCBnYXRld2F5IGluIGFub3RoZXIgcmVnaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNtaXREaXJlY3Rpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRU46OkNlblJvdXRlTWFwYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDZW5Sb3V0ZU1hcFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NlblJvdXRlTWFwID0gbmV3IFJvc0NlblJvdXRlTWFwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2g6IHByb3BzLnNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoLFxuICAgICAgICAgICAgdHJhbnNtaXREaXJlY3Rpb246IHByb3BzLnRyYW5zbWl0RGlyZWN0aW9uLFxuICAgICAgICAgICAgbWF0Y2hDb21tdW5pdHlTZXQ6IHByb3BzLm1hdGNoQ29tbXVuaXR5U2V0LFxuICAgICAgICAgICAgY2VuUmVnaW9uSWQ6IHByb3BzLmNlblJlZ2lvbklkLFxuICAgICAgICAgICAgc291cmNlUm91dGVUYWJsZUlkczogcHJvcHMuc291cmNlUm91dGVUYWJsZUlkcyxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uSW5zdGFuY2VJZHM6IHByb3BzLmRlc3RpbmF0aW9uSW5zdGFuY2VJZHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoOiBwcm9wcy5kZXN0aW5hdGlvbkluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoLFxuICAgICAgICAgICAgc291cmNlSW5zdGFuY2VJZHM6IHByb3BzLnNvdXJjZUluc3RhbmNlSWRzLFxuICAgICAgICAgICAgZGVzdGluYXRpb25Sb3V0ZVRhYmxlSWRzOiBwcm9wcy5kZXN0aW5hdGlvblJvdXRlVGFibGVJZHMsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkNpZHJCbG9ja3M6IHByb3BzLmRlc3RpbmF0aW9uQ2lkckJsb2NrcyxcbiAgICAgICAgICAgIG9wZXJhdGVDb21tdW5pdHlTZXQ6IHByb3BzLm9wZXJhdGVDb21tdW5pdHlTZXQsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkNoaWxkSW5zdGFuY2VUeXBlczogcHJvcHMuZGVzdGluYXRpb25DaGlsZEluc3RhbmNlVHlwZXMsXG4gICAgICAgICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICBzb3VyY2VDaGlsZEluc3RhbmNlVHlwZXM6IHByb3BzLnNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlcyxcbiAgICAgICAgICAgIGFzUGF0aE1hdGNoTW9kZTogcHJvcHMuYXNQYXRoTWF0Y2hNb2RlLFxuICAgICAgICAgICAgY2lkck1hdGNoTW9kZTogcHJvcHMuY2lkck1hdGNoTW9kZSxcbiAgICAgICAgICAgIG1hcFJlc3VsdDogcHJvcHMubWFwUmVzdWx0LFxuICAgICAgICAgICAgcm91dGVUeXBlczogcHJvcHMucm91dGVUeXBlcyxcbiAgICAgICAgICAgIHByZWZlcmVuY2U6IHByb3BzLnByZWZlcmVuY2UsXG4gICAgICAgICAgICBjb21tdW5pdHlPcGVyYXRlTW9kZTogcHJvcHMuY29tbXVuaXR5T3BlcmF0ZU1vZGUsXG4gICAgICAgICAgICBjZW5JZDogcHJvcHMuY2VuSWQsXG4gICAgICAgICAgICBuZXh0UHJpb3JpdHk6IHByb3BzLm5leHRQcmlvcml0eSxcbiAgICAgICAgICAgIHByZXBlbmRBc1BhdGg6IHByb3BzLnByZXBlbmRBc1BhdGgsXG4gICAgICAgICAgICBjb21tdW5pdHlNYXRjaE1vZGU6IHByb3BzLmNvbW11bml0eU1hdGNoTW9kZSxcbiAgICAgICAgICAgIG1hdGNoQXNuczogcHJvcHMubWF0Y2hBc25zLFxuICAgICAgICAgICAgc291cmNlUmVnaW9uSWRzOiBwcm9wcy5zb3VyY2VSZWdpb25JZHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ2VuUm91dGVNYXA7XG4gICAgICAgIHRoaXMuYXR0ckFzUGF0aE1hdGNoTW9kZSA9IHJvc0NlblJvdXRlTWFwLmF0dHJBc1BhdGhNYXRjaE1vZGU7XG4gICAgICAgIHRoaXMuYXR0ckNlbklkID0gcm9zQ2VuUm91dGVNYXAuYXR0ckNlbklkO1xuICAgICAgICB0aGlzLmF0dHJDZW5SZWdpb25JZCA9IHJvc0NlblJvdXRlTWFwLmF0dHJDZW5SZWdpb25JZDtcbiAgICAgICAgdGhpcy5hdHRyQ2lkck1hdGNoTW9kZSA9IHJvc0NlblJvdXRlTWFwLmF0dHJDaWRyTWF0Y2hNb2RlO1xuICAgICAgICB0aGlzLmF0dHJDb21tdW5pdHlNYXRjaE1vZGUgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyQ29tbXVuaXR5TWF0Y2hNb2RlO1xuICAgICAgICB0aGlzLmF0dHJDb21tdW5pdHlPcGVyYXRlTW9kZSA9IHJvc0NlblJvdXRlTWFwLmF0dHJDb21tdW5pdHlPcGVyYXRlTW9kZTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSByb3NDZW5Sb3V0ZU1hcC5hdHRyRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0ckRlc3RpbmF0aW9uQ2hpbGRJbnN0YW5jZVR5cGVzID0gcm9zQ2VuUm91dGVNYXAuYXR0ckRlc3RpbmF0aW9uQ2hpbGRJbnN0YW5jZVR5cGVzO1xuICAgICAgICB0aGlzLmF0dHJEZXN0aW5hdGlvbkNpZHJCbG9ja3MgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyRGVzdGluYXRpb25DaWRyQmxvY2tzO1xuICAgICAgICB0aGlzLmF0dHJEZXN0aW5hdGlvbkluc3RhbmNlSWRzID0gcm9zQ2VuUm91dGVNYXAuYXR0ckRlc3RpbmF0aW9uSW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0ckRlc3RpbmF0aW9uSW5zdGFuY2VJZHNSZXZlcnNlTWF0Y2ggPSByb3NDZW5Sb3V0ZU1hcC5hdHRyRGVzdGluYXRpb25JbnN0YW5jZUlkc1JldmVyc2VNYXRjaDtcbiAgICAgICAgdGhpcy5hdHRyRGVzdGluYXRpb25Sb3V0ZVRhYmxlSWRzID0gcm9zQ2VuUm91dGVNYXAuYXR0ckRlc3RpbmF0aW9uUm91dGVUYWJsZUlkcztcbiAgICAgICAgdGhpcy5hdHRyTWFwUmVzdWx0ID0gcm9zQ2VuUm91dGVNYXAuYXR0ck1hcFJlc3VsdDtcbiAgICAgICAgdGhpcy5hdHRyTWF0Y2hBc25zID0gcm9zQ2VuUm91dGVNYXAuYXR0ck1hdGNoQXNucztcbiAgICAgICAgdGhpcy5hdHRyTWF0Y2hDb21tdW5pdHlTZXQgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyTWF0Y2hDb21tdW5pdHlTZXQ7XG4gICAgICAgIHRoaXMuYXR0ck5leHRQcmlvcml0eSA9IHJvc0NlblJvdXRlTWFwLmF0dHJOZXh0UHJpb3JpdHk7XG4gICAgICAgIHRoaXMuYXR0ck9wZXJhdGVDb21tdW5pdHlTZXQgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyT3BlcmF0ZUNvbW11bml0eVNldDtcbiAgICAgICAgdGhpcy5hdHRyUHJlZmVyZW5jZSA9IHJvc0NlblJvdXRlTWFwLmF0dHJQcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmF0dHJQcmVwZW5kQXNQYXRoID0gcm9zQ2VuUm91dGVNYXAuYXR0clByZXBlbmRBc1BhdGg7XG4gICAgICAgIHRoaXMuYXR0clByaW9yaXR5ID0gcm9zQ2VuUm91dGVNYXAuYXR0clByaW9yaXR5O1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZU1hcElkID0gcm9zQ2VuUm91dGVNYXAuYXR0clJvdXRlTWFwSWQ7XG4gICAgICAgIHRoaXMuYXR0clJvdXRlVHlwZXMgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyUm91dGVUeXBlcztcbiAgICAgICAgdGhpcy5hdHRyU291cmNlQ2hpbGRJbnN0YW5jZVR5cGVzID0gcm9zQ2VuUm91dGVNYXAuYXR0clNvdXJjZUNoaWxkSW5zdGFuY2VUeXBlcztcbiAgICAgICAgdGhpcy5hdHRyU291cmNlSW5zdGFuY2VJZHMgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyU291cmNlSW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0clNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoID0gcm9zQ2VuUm91dGVNYXAuYXR0clNvdXJjZUluc3RhbmNlSWRzUmV2ZXJzZU1hdGNoO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VSZWdpb25JZHMgPSByb3NDZW5Sb3V0ZU1hcC5hdHRyU291cmNlUmVnaW9uSWRzO1xuICAgICAgICB0aGlzLmF0dHJTb3VyY2VSb3V0ZVRhYmxlSWRzID0gcm9zQ2VuUm91dGVNYXAuYXR0clNvdXJjZVJvdXRlVGFibGVJZHM7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zbWl0RGlyZWN0aW9uID0gcm9zQ2VuUm91dGVNYXAuYXR0clRyYW5zbWl0RGlyZWN0aW9uO1xuICAgIH1cbn1cbiJdfQ==