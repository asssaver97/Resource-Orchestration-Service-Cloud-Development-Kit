"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosPipeline = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosPipelineProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the result of the validation.
 */
function RosPipelinePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('speed', ros.validateString)(properties.speed));
    errors.collect(ros.propertyValidator('speedLevel', ros.validateNumber)(properties.speedLevel));
    if (properties.state && (typeof properties.state) !== 'object') {
        errors.collect(ros.propertyValidator('state', ros.validateAllowedValues)({
            data: properties.state,
            allowedValues: ["Active", "Paused"],
        }));
    }
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('notifyConfig', RosPipeline_NotifyConfigPropertyValidator)(properties.notifyConfig));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosPipelineProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline` resource.
 */
// @ts-ignore TS6133
function rosPipelinePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosPipelinePropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        NotifyConfig: rosPipelineNotifyConfigPropertyToRosTemplate(properties.notifyConfig),
        Role: ros.stringToRosTemplate(properties.role),
        Speed: ros.stringToRosTemplate(properties.speed),
        SpeedLevel: ros.numberToRosTemplate(properties.speedLevel),
        State: ros.stringToRosTemplate(properties.state),
    };
}
/**
 * A ROS template type:  `ALIYUN::MPS::Pipeline`
 */
class RosPipeline extends ros.RosResource {
    /**
     * Create a new `ALIYUN::MPS::Pipeline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosPipeline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineId = this.getAtt('PipelineId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.notifyConfig = props.notifyConfig;
        this.role = props.role;
        this.speed = props.speed;
        this.speedLevel = props.speedLevel;
        this.state = props.state;
    }
    get rosProperties() {
        return {
            name: this.name,
            notifyConfig: this.notifyConfig,
            role: this.role,
            speed: this.speed,
            speedLevel: this.speedLevel,
            state: this.state,
        };
    }
    renderProperties(props) {
        return rosPipelinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPipeline = RosPipeline;
/**
 * The resource type name for this resource class.
 */
RosPipeline.ROS_RESOURCE_TYPE_NAME = "ALIYUN::MPS::Pipeline";
/**
 * Determine whether the given properties match those of a `NotifyConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NotifyConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosPipeline_NotifyConfigPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    return errors.wrap('supplied properties not correct for "NotifyConfigProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline.NotifyConfig` resource
 *
 * @param properties - the TypeScript properties of a `NotifyConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MPS::Pipeline.NotifyConfig` resource.
 */
// @ts-ignore TS6133
function rosPipelineNotifyConfigPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosPipeline_NotifyConfigPropertyValidator(properties).assertSuccess();
    return {
        Topic: ros.stringToRosTemplate(properties.topic),
        QueueName: ros.stringToRosTemplate(properties.queueName),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1wcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWlEOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx5QkFBeUIsQ0FBQyxVQUFlO0lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9GLElBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdkUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3RCLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUM7U0FDbkMs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RCx5Q0FBeUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RSxPQUFPO1FBQ0wsS0FBSyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2hELFNBQVMsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztLQUN6RCxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpNUFM6OlBpcGVsaW5lYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1BpcGVsaW5lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuZXcgbmFtZSBvZiB0aGUgTVBTIHF1ZXVlLiBUaGUgdmFsdWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBhbmQgc3BlY2lhbFxuICAgICAqIGNoYXJhY3RlcnMgc3VjaCBhcyBoeXBoZW5zICgtKSBhbmQgY2FuIGJlIHVwIHRvIDEyOCBieXRlcyBpbiBzaXplLiBUaGUgdmFsdWUgY2Fubm90XG4gICAgICogc3RhcnQgd2l0aCBhIHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RpZnlDb25maWc6IFRoZSBNZXNzYWdlIFNlcnZpY2UgKE1OUykgY29uZmlndXJhdGlvbiwgc3VjaCBhcyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIE1OUyBxdWV1ZVxuICAgICAqIG9yIHRvcGljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIE5vdGlmeUNvbmZpZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBub3RpZnlDb25maWc/OiBSb3NQaXBlbGluZS5Ob3RpZnlDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSB0aGF0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50IFJBTSB1c2VyLiBUbyBvYnRhaW4gdGhlIHJvbGUsIHlvdSBjYW4gbG9nIG9uIHRvIHRoZSBSQU0gY29uc29sZSBhbmQgY2hvb3NlIElkZW50aXRpZXMgPiBSb2xlcyBpbiB0aGUgbGVmdC1zaWRlIG5hdmlnYXRpb24gcGFuZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb2xlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWVkOiBQaXBlIHR5cGUuIFZhbHVlOlxuICAgICAqIEJvb3N0OiBEb3VibGUtc3BlZWQgdHJhbnNjb2RpbmdcbiAgICAgKiBTdGFuZGFyZDogb3JkaW5hcnkgcGlwZVxuICAgICAqIE5hcnJvd0JhbmRIRFYyOiBOYXJyb3diYW5kIEhEIDIuMFxuICAgICAqIEFJVmlkZW9Db3ZlcjogU21hcnQgU2NyZWVuc2hvdHNcbiAgICAgKiBBSVZpZGVvVGFnOiB2aWRlbyB0YWcgKHN1cHBvcnRzIHJlZ2lvbnMgU2hhbmdoYWksIEJlaWppbmcsIEhhbmd6aG91KS5cbiAgICAgKiBEZWZhdWx0OiBTdGFuZGFyZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVlZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVlZExldmVsOiBTcGVlZCBsZXZlbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcGVlZExldmVsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXRlOiBUaGUgbmV3IHN0YXRlIG9mIHRoZSBNUFMgcXVldWUuXG4gICAgICogQWN0aXZlOiBUaGUgTVBTIHF1ZXVlIGlzIGFjdGl2ZS4gSm9icyBpbiB0aGUgTVBTIHF1ZXVlIGNhbiBiZSBzY2hlZHVsZWQgYW5kIHJ1biBieSBNUFMuXG4gICAgICogUGF1c2VkOiBUaGUgTVBTIHF1ZXVlIGlzIHBhdXNlZC4gSm9icyBpbiB0aGUgTVBTIHF1ZXVlIGNhbm5vdCBiZSBzY2hlZHVsZWQgb3IgcnVuIGJ5IE1QUywgYW5kIGFsbCBqb2JzIHJlbWFpbiBpbiB0aGUgU3VibWl0dGVkIHN0YXRlLiBKb2JzIHRoYXQgYXJlIHJ1bm5pbmcgd2lsbCBub3QgYmUgYWZmZWN0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhdGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUGlwZWxpbmVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUGlwZWxpbmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQaXBlbGluZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncm9sZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb2xlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzcGVlZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zcGVlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3BlZWRMZXZlbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zcGVlZExldmVsKSk7XG4gICAgaWYocHJvcGVydGllcy5zdGF0ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuc3RhdGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3RhdGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWN0aXZlXCIsXCJQYXVzZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5Q29uZmlnJywgUm9zUGlwZWxpbmVfTm90aWZ5Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMubm90aWZ5Q29uZmlnKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQaXBlbGluZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNUFM6OlBpcGVsaW5lYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQaXBlbGluZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNUFM6OlBpcGVsaW5lYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1BpcGVsaW5lUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQaXBlbGluZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICBOb3RpZnlDb25maWc6IHJvc1BpcGVsaW5lTm90aWZ5Q29uZmlnUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90aWZ5Q29uZmlnKSxcbiAgICAgIFJvbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucm9sZSksXG4gICAgICBTcGVlZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zcGVlZCksXG4gICAgICBTcGVlZExldmVsOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNwZWVkTGV2ZWwpLFxuICAgICAgU3RhdGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46Ok1QUzo6UGlwZWxpbmVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NQaXBlbGluZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TVBTOjpQaXBlbGluZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBpcGVsaW5lSWQ6IFRoZSBJRCBvZiB0aGUgTVBTIHF1ZXVlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlwZWxpbmVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5ldyBuYW1lIG9mIHRoZSBNUFMgcXVldWUuIFRoZSB2YWx1ZSBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGFuZCBzcGVjaWFsXG4gICAgICogY2hhcmFjdGVycyBzdWNoIGFzIGh5cGhlbnMgKC0pIGFuZCBjYW4gYmUgdXAgdG8gMTI4IGJ5dGVzIGluIHNpemUuIFRoZSB2YWx1ZSBjYW5ub3RcbiAgICAgKiBzdGFydCB3aXRoIGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RpZnlDb25maWc6IFRoZSBNZXNzYWdlIFNlcnZpY2UgKE1OUykgY29uZmlndXJhdGlvbiwgc3VjaCBhcyB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIE1OUyBxdWV1ZVxuICAgICAqIG9yIHRvcGljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIE5vdGlmeUNvbmZpZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbm90aWZ5Q29uZmlnOiBSb3NQaXBlbGluZS5Ob3RpZnlDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlOiBUaGUgcm9sZSB0aGF0IGlzIGFzc2lnbmVkIHRvIHRoZSBjdXJyZW50IFJBTSB1c2VyLiBUbyBvYnRhaW4gdGhlIHJvbGUsIHlvdSBjYW4gbG9nIG9uIHRvIHRoZSBSQU0gY29uc29sZSBhbmQgY2hvb3NlIElkZW50aXRpZXMgPiBSb2xlcyBpbiB0aGUgbGVmdC1zaWRlIG5hdmlnYXRpb24gcGFuZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm9sZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNwZWVkOiBQaXBlIHR5cGUuIFZhbHVlOlxuICAgICAqIEJvb3N0OiBEb3VibGUtc3BlZWQgdHJhbnNjb2RpbmdcbiAgICAgKiBTdGFuZGFyZDogb3JkaW5hcnkgcGlwZVxuICAgICAqIE5hcnJvd0JhbmRIRFYyOiBOYXJyb3diYW5kIEhEIDIuMFxuICAgICAqIEFJVmlkZW9Db3ZlcjogU21hcnQgU2NyZWVuc2hvdHNcbiAgICAgKiBBSVZpZGVvVGFnOiB2aWRlbyB0YWcgKHN1cHBvcnRzIHJlZ2lvbnMgU2hhbmdoYWksIEJlaWppbmcsIEhhbmd6aG91KS5cbiAgICAgKiBEZWZhdWx0OiBTdGFuZGFyZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlZWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzcGVlZExldmVsOiBTcGVlZCBsZXZlbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3BlZWRMZXZlbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXRlOiBUaGUgbmV3IHN0YXRlIG9mIHRoZSBNUFMgcXVldWUuXG4gICAgICogQWN0aXZlOiBUaGUgTVBTIHF1ZXVlIGlzIGFjdGl2ZS4gSm9icyBpbiB0aGUgTVBTIHF1ZXVlIGNhbiBiZSBzY2hlZHVsZWQgYW5kIHJ1biBieSBNUFMuXG4gICAgICogUGF1c2VkOiBUaGUgTVBTIHF1ZXVlIGlzIHBhdXNlZC4gSm9icyBpbiB0aGUgTVBTIHF1ZXVlIGNhbm5vdCBiZSBzY2hlZHVsZWQgb3IgcnVuIGJ5IE1QUywgYW5kIGFsbCBqb2JzIHJlbWFpbiBpbiB0aGUgU3VibWl0dGVkIHN0YXRlLiBKb2JzIHRoYXQgYXJlIHJ1bm5pbmcgd2lsbCBub3QgYmUgYWZmZWN0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TVBTOjpQaXBlbGluZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUGlwZWxpbmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1BpcGVsaW5lLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJQaXBlbGluZUlkID0gdGhpcy5nZXRBdHQoJ1BpcGVsaW5lSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMubm90aWZ5Q29uZmlnID0gcHJvcHMubm90aWZ5Q29uZmlnO1xuICAgICAgICB0aGlzLnJvbGUgPSBwcm9wcy5yb2xlO1xuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQ7XG4gICAgICAgIHRoaXMuc3BlZWRMZXZlbCA9IHByb3BzLnNwZWVkTGV2ZWw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcy5zdGF0ZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBub3RpZnlDb25maWc6IHRoaXMubm90aWZ5Q29uZmlnLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuc3BlZWQsXG4gICAgICAgICAgICBzcGVlZExldmVsOiB0aGlzLnNwZWVkTGV2ZWwsXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUGlwZWxpbmVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NQaXBlbGluZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5Q29uZmlnUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRvcGljOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRvcGljPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHF1ZXVlTmFtZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBxdWV1ZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBOb3RpZnlDb25maWdQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTm90aWZ5Q29uZmlnUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUGlwZWxpbmVfTm90aWZ5Q29uZmlnUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50b3BpYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVldWVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJOb3RpZnlDb25maWdQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TVBTOjpQaXBlbGluZS5Ob3RpZnlDb25maWdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5vdGlmeUNvbmZpZ1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNUFM6OlBpcGVsaW5lLk5vdGlmeUNvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQaXBlbGluZU5vdGlmeUNvbmZpZ1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NQaXBlbGluZV9Ob3RpZnlDb25maWdQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRvcGljOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRvcGljKSxcbiAgICAgIFF1ZXVlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWV1ZU5hbWUpLFxuICAgIH07XG59XG4iXX0=