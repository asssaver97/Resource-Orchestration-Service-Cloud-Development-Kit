"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosScalingGroups = exports.RosScalingConfigurations = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosScalingConfigurationsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingConfigurationsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if (properties.scalingConfigurationIds && (Array.isArray(properties.scalingConfigurationIds) || (typeof properties.scalingConfigurationIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.validateLength)({
            data: properties.scalingConfigurationIds.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.listValidator(ros.validateString))(properties.scalingConfigurationIds));
    if (properties.scalingConfigurationNames && (Array.isArray(properties.scalingConfigurationNames) || (typeof properties.scalingConfigurationNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.validateLength)({
            data: properties.scalingConfigurationNames.length,
            min: undefined,
            max: 10,
        }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.listValidator(ros.validateString))(properties.scalingConfigurationNames));
    return errors.wrap('supplied properties not correct for "RosScalingConfigurationsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosScalingConfigurationsPropsValidator(properties).assertSuccess();
    }
    return {
        ScalingConfigurationIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationIds),
        ScalingConfigurationNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationNames),
        ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the details of scaling configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingConfigurations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
class RosScalingConfigurations extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingConfigurationIds = this.getAtt('ScalingConfigurationIds');
        this.attrScalingConfigurations = this.getAtt('ScalingConfigurations');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingConfigurationIds = props.scalingConfigurationIds;
        this.scalingConfigurationNames = props.scalingConfigurationNames;
        this.scalingGroupId = props.scalingGroupId;
    }
    get rosProperties() {
        return {
            scalingConfigurationIds: this.scalingConfigurationIds,
            scalingConfigurationNames: this.scalingConfigurationNames,
            scalingGroupId: this.scalingGroupId,
        };
    }
    renderProperties(props) {
        return rosScalingConfigurationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosScalingConfigurations = RosScalingConfigurations;
/**
 * The resource type name for this resource class.
 */
RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";
/**
 * Determine whether the given properties match those of a `RosScalingGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.scalingGroupNames && (Array.isArray(properties.scalingGroupNames) || (typeof properties.scalingGroupNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupNames', ros.validateLength)({
            data: properties.scalingGroupNames.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('scalingGroupNames', ros.listValidator(ros.validateString))(properties.scalingGroupNames));
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    if (properties.scalingGroupIds && (Array.isArray(properties.scalingGroupIds) || (typeof properties.scalingGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupIds', ros.validateLength)({
            data: properties.scalingGroupIds.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('scalingGroupIds', ros.listValidator(ros.validateString))(properties.scalingGroupIds));
    return errors.wrap('supplied properties not correct for "RosScalingGroupsProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosScalingGroupsPropsValidator(properties).assertSuccess();
    }
    return {
        GroupType: ros.stringToRosTemplate(properties.groupType),
        ScalingGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupIds),
        ScalingGroupNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupNames),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
class RosScalingGroups extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosScalingGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingGroupIds = this.getAtt('ScalingGroupIds');
        this.attrScalingGroups = this.getAtt('ScalingGroups');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupType = props.groupType;
        this.scalingGroupIds = props.scalingGroupIds;
        this.scalingGroupNames = props.scalingGroupNames;
    }
    get rosProperties() {
        return {
            groupType: this.groupType,
            scalingGroupIds: this.scalingGroupIds,
            scalingGroupNames: this.scalingGroupNames,
        };
    }
    renderProperties(props) {
        return rosScalingGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosScalingGroups = RosScalingGroups;
/**
 * The resource type name for this resource class.
 */
RosScalingGroups.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVzcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXdCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQ0FBc0MsQ0FBQyxVQUFlO0lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxJQUFHLFVBQVUsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ3RKLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRixJQUFJLEVBQUUsVUFBVSxDQUFDLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxD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ZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZXNzLXNjYWxpbmdjb25maWd1cmF0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbklkczogVGhlIElEIG9mIHNjYWxpbmcgY29uZmlndXJhdGlvbiB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LiBWYWxpZCB2YWx1ZXMgOiAxIHRvIDEwLiBUaGUgSURzIG9mIGFjdGl2ZSBhbmQgaW5hY3RpdmUgc2NhbGluZyBjb25maWd1cmF0aW9ucyBhcmUgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgY2FuIGJlIGRpZmZlcmVudGlhdGVkIGJ5IExpZmVjeWNsZVN0YXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdDb25maWd1cmF0aW9uSWRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzOiBUaGUgbmFtZSBvZiBzY2FsaW5nIGNvbmZpZ3VyYXRpb24gdGhhdCB5b3Ugd2FudCB0byBxdWVyeS4gVmFsaWQgdmFsdWVzIDogMSB0byAxMC4gVGhlIG5hbWVzIG9mIGluYWN0aXZlIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHMsIGFuZCBubyBlcnJvciBpcyByZXBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzY2FsaW5nR3JvdXBJZDogVGhlIElEIG9mIHRoZSBzY2FsaW5nIGdyb3VwLiBZb3UgY2FuIHVzZSB0aGUgSUQgdG8gcXVlcnkgYWxsIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgaW4gdGhlIHNjYWxpbmcgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NhbGluZ0dyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbklkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjYWxpbmdDb25maWd1cmF0aW9uSWRzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzKSk7XG4gICAgaWYocHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5zY2FsaW5nQ29uZmlndXJhdGlvbk5hbWVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6RVNTOjpTY2FsaW5nQ29uZmlndXJhdGlvbnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTY2FsaW5nQ29uZmlndXJhdGlvbklkczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHMpLFxuICAgICAgU2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcyksXG4gICAgICBTY2FsaW5nR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0NvbmZpZ3VyYXRpb25zYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgZGV0YWlscyBvZiBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTY2FsaW5nQ29uZmlndXJhdGlvbnNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1lc3Mtc2NhbGluZ2NvbmZpZ3VyYXRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTY2FsaW5nQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdDb25maWd1cmF0aW9uc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTY2FsaW5nQ29uZmlndXJhdGlvbklkczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9uIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNjYWxpbmdDb25maWd1cmF0aW9uczogVGhlIGxpc3Qgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IFRoZSBJRCBvZiBzY2FsaW5nIGNvbmZpZ3VyYXRpb24gdGhhdCB5b3Ugd2FudCB0byBxdWVyeS4gVmFsaWQgdmFsdWVzIDogMSB0byAxMC4gVGhlIElEcyBvZiBhY3RpdmUgYW5kIGluYWN0aXZlIHNjYWxpbmcgY29uZmlndXJhdGlvbnMgYXJlIGRpc3BsYXllZCBpbiB0aGUgcXVlcnkgcmVzdWx0cywgYW5kIGNhbiBiZSBkaWZmZXJlbnRpYXRlZCBieSBMaWZlY3ljbGVTdGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lczogVGhlIG5hbWUgb2Ygc2NhbGluZyBjb25maWd1cmF0aW9uIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuIFZhbGlkIHZhbHVlcyA6IDEgdG8gMTAuIFRoZSBuYW1lcyBvZiBpbmFjdGl2ZSBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgbm8gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0dyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgc2NhbGluZyBncm91cC4gWW91IGNhbiB1c2UgdGhlIElEIHRvIHF1ZXJ5IGFsbCBzY2FsaW5nIGNvbmZpZ3VyYXRpb25zIGluIHRoZSBzY2FsaW5nIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBzY2FsaW5nR3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NjYWxpbmdDb25maWd1cmF0aW9uc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2NhbGluZ0NvbmZpZ3VyYXRpb25zLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbklkcyA9IHRoaXMuZ2V0QXR0KCdTY2FsaW5nQ29uZmlndXJhdGlvbklkcycpO1xuICAgICAgICB0aGlzLmF0dHJTY2FsaW5nQ29uZmlndXJhdGlvbnMgPSB0aGlzLmdldEF0dCgnU2NhbGluZ0NvbmZpZ3VyYXRpb25zJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNjYWxpbmdDb25maWd1cmF0aW9uSWRzID0gcHJvcHMuc2NhbGluZ0NvbmZpZ3VyYXRpb25JZHM7XG4gICAgICAgIHRoaXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcyA9IHByb3BzLnNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM7XG4gICAgICAgIHRoaXMuc2NhbGluZ0dyb3VwSWQgPSBwcm9wcy5zY2FsaW5nR3JvdXBJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2FsaW5nQ29uZmlndXJhdGlvbklkczogdGhpcy5zY2FsaW5nQ29uZmlndXJhdGlvbklkcyxcbiAgICAgICAgICAgIHNjYWxpbmdDb25maWd1cmF0aW9uTmFtZXM6IHRoaXMuc2NhbGluZ0NvbmZpZ3VyYXRpb25OYW1lcyxcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cElkOiB0aGlzLnNjYWxpbmdHcm91cElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTY2FsaW5nQ29uZmlndXJhdGlvbnNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NTY2FsaW5nR3JvdXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1lc3Mtc2NhbGluZ2dyb3Vwc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NjYWxpbmdHcm91cHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBUeXBlOiBUaGUgdHlwZSBvZiBpbnN0YW5jZXMgdGhhdCBhcmUgbWFuYWdlZCBieSB0aGUgc2NhbGluZyBncm91cC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVDUzogdGhlIEVsYXN0aWMgQ29tcHV0ZSBTZXJ2aWNlIChFQ1MpIGluc3RhbmNlc1xuICAgICAqIEVDSTogdGhlIGVsYXN0aWMgY29udGFpbmVyIGluc3RhbmNlc1xuICAgICAqIERlZmF1bHQgdmFsdWU6IEVDUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0dyb3VwSWRzOiBUaGUgSUQgb2Ygc2NhbGluZyBncm91cCB0aGF0IHlvdSB3YW50IHRvIHF1ZXJ5LlZhbGlkIHZhbHVlczogMSB0byAyMC4gVGhlIElEcyBvZiBpbmFjdGl2ZSBzY2FsaW5nIGdyb3VwcyBhcmUgbm90IGRpc3BsYXllZCBpbiB0aGUgcXVlcnkgcmVzdWx0cywgYW5kIG5vIGVycm9yIGlzIHJlcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjYWxpbmdHcm91cElkcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2NhbGluZ0dyb3VwTmFtZXM6IFRoZSBuYW1lIG9mIHNjYWxpbmcgZ3JvdXAgdGhhdCB5b3Ugd2FudCB0byBxdWVyeS4gVmFsaWQgdmFsdWVzOiAxIHRvIDIwLiBUaGUgbmFtZXMgb2YgaW5hY3RpdmUgc2NhbGluZyBncm91cHMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHMsIGFuZCBubyBlcnJvciBpcyByZXBvcnRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzY2FsaW5nR3JvdXBOYW1lcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2NhbGluZ0dyb3Vwc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTY2FsaW5nR3JvdXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2NhbGluZ0dyb3Vwc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwTmFtZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zY2FsaW5nR3JvdXBOYW1lcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cE5hbWVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NhbGluZ0dyb3VwTmFtZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwTmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nR3JvdXBOYW1lcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwTmFtZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cFR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cElkcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cElkcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cElkcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjYWxpbmdHcm91cElkcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zY2FsaW5nR3JvdXBJZHMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzY2FsaW5nR3JvdXBJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cElkcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTY2FsaW5nR3JvdXBzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdHcm91cHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NjYWxpbmdHcm91cHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkVTUzo6U2NhbGluZ0dyb3Vwc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTY2FsaW5nR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTY2FsaW5nR3JvdXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgR3JvdXBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwVHlwZSksXG4gICAgICBTY2FsaW5nR3JvdXBJZHM6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNjYWxpbmdHcm91cElkcyksXG4gICAgICBTY2FsaW5nR3JvdXBOYW1lczogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuc2NhbGluZ0dyb3VwTmFtZXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdHcm91cHNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHNjYWxpbmcgZ3JvdXBzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTY2FsaW5nR3JvdXBzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZXNzLXNjYWxpbmdncm91cHNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NjYWxpbmdHcm91cHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpFU1M6OlNjYWxpbmdHcm91cHNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU2NhbGluZ0dyb3VwSWRzOiBUaGUgbGlzdCBvZiBzY2FsaW5nIGdyb3VwIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdHcm91cElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTY2FsaW5nR3JvdXBzOiBUaGUgbGlzdCBvZiBzY2FsaW5nIGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdHcm91cHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwVHlwZTogVGhlIHR5cGUgb2YgaW5zdGFuY2VzIHRoYXQgYXJlIG1hbmFnZWQgYnkgdGhlIHNjYWxpbmcgZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFQ1M6IHRoZSBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZXNcbiAgICAgKiBFQ0k6IHRoZSBlbGFzdGljIGNvbnRhaW5lciBpbnN0YW5jZXNcbiAgICAgKiBEZWZhdWx0IHZhbHVlOiBFQ1MuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjYWxpbmdHcm91cElkczogVGhlIElEIG9mIHNjYWxpbmcgZ3JvdXAgdGhhdCB5b3Ugd2FudCB0byBxdWVyeS5WYWxpZCB2YWx1ZXM6IDEgdG8gMjAuIFRoZSBJRHMgb2YgaW5hY3RpdmUgc2NhbGluZyBncm91cHMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIHF1ZXJ5IHJlc3VsdHMsIGFuZCBubyBlcnJvciBpcyByZXBvcnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2NhbGluZ0dyb3VwSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNjYWxpbmdHcm91cE5hbWVzOiBUaGUgbmFtZSBvZiBzY2FsaW5nIGdyb3VwIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkuIFZhbGlkIHZhbHVlczogMSB0byAyMC4gVGhlIG5hbWVzIG9mIGluYWN0aXZlIHNjYWxpbmcgZ3JvdXBzIGFyZSBub3QgZGlzcGxheWVkIGluIHRoZSBxdWVyeSByZXN1bHRzLCBhbmQgbm8gZXJyb3IgaXMgcmVwb3J0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHNjYWxpbmdHcm91cE5hbWVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NjYWxpbmdHcm91cHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NjYWxpbmdHcm91cHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdHcm91cElkcyA9IHRoaXMuZ2V0QXR0KCdTY2FsaW5nR3JvdXBJZHMnKTtcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0dyb3VwcyA9IHRoaXMuZ2V0QXR0KCdTY2FsaW5nR3JvdXBzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwVHlwZSA9IHByb3BzLmdyb3VwVHlwZTtcbiAgICAgICAgdGhpcy5zY2FsaW5nR3JvdXBJZHMgPSBwcm9wcy5zY2FsaW5nR3JvdXBJZHM7XG4gICAgICAgIHRoaXMuc2NhbGluZ0dyb3VwTmFtZXMgPSBwcm9wcy5zY2FsaW5nR3JvdXBOYW1lcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cFR5cGU6IHRoaXMuZ3JvdXBUeXBlLFxuICAgICAgICAgICAgc2NhbGluZ0dyb3VwSWRzOiB0aGlzLnNjYWxpbmdHcm91cElkcyxcbiAgICAgICAgICAgIHNjYWxpbmdHcm91cE5hbWVzOiB0aGlzLnNjYWxpbmdHcm91cE5hbWVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTY2FsaW5nR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=