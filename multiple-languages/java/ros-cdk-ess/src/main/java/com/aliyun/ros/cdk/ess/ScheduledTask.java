package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScheduledTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.524Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScheduledTask")
public class ScheduledTask extends com.aliyun.ros.cdk.core.Resource {

    protected ScheduledTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScheduledTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScheduledTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScheduledTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScheduledTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScheduledTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduledTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduledTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScheduledTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScheduledTask> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.ScheduledTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScheduledTaskProps.Builder();
        }

        /**
         * Property launchTime: Time point at which the scheduled task is triggered.
         * <p>
         * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
         * A time point 90 days after creation or modification cannot be entered.
         * <p>
         * @return {@code this}
         * @param launchTime Property launchTime: Time point at which the scheduled task is triggered. This parameter is required.
         */
        public Builder launchTime(final java.lang.String launchTime) {
            this.props.launchTime(launchTime);
            return this;
        }
        /**
         * Property launchTime: Time point at which the scheduled task is triggered.
         * <p>
         * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
         * A time point 90 days after creation or modification cannot be entered.
         * <p>
         * @return {@code this}
         * @param launchTime Property launchTime: Time point at which the scheduled task is triggered. This parameter is required.
         */
        public Builder launchTime(final com.aliyun.ros.cdk.core.IResolvable launchTime) {
            this.props.launchTime(launchTime);
            return this;
        }

        /**
         * Property scheduledAction: Operations performed when the scheduled task is triggered.
         * <p>
         * Fill in the unique identifier of the scaling rule.
         * <p>
         * @return {@code this}
         * @param scheduledAction Property scheduledAction: Operations performed when the scheduled task is triggered. This parameter is required.
         */
        public Builder scheduledAction(final java.lang.String scheduledAction) {
            this.props.scheduledAction(scheduledAction);
            return this;
        }
        /**
         * Property scheduledAction: Operations performed when the scheduled task is triggered.
         * <p>
         * Fill in the unique identifier of the scaling rule.
         * <p>
         * @return {@code this}
         * @param scheduledAction Property scheduledAction: Operations performed when the scheduled task is triggered. This parameter is required.
         */
        public Builder scheduledAction(final com.aliyun.ros.cdk.core.IResolvable scheduledAction) {
            this.props.scheduledAction(scheduledAction);
            return this;
        }

        /**
         * Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property launchExpirationTime: Time period within which the failed scheduled task is retried.
         * <p>
         * The default value is 600s.
         * Value range: [0, 21600]
         * <p>
         * @return {@code this}
         * @param launchExpirationTime Property launchExpirationTime: Time period within which the failed scheduled task is retried. This parameter is required.
         */
        public Builder launchExpirationTime(final java.lang.Number launchExpirationTime) {
            this.props.launchExpirationTime(launchExpirationTime);
            return this;
        }
        /**
         * Property launchExpirationTime: Time period within which the failed scheduled task is retried.
         * <p>
         * The default value is 600s.
         * Value range: [0, 21600]
         * <p>
         * @return {@code this}
         * @param launchExpirationTime Property launchExpirationTime: Time period within which the failed scheduled task is retried. This parameter is required.
         */
        public Builder launchExpirationTime(final com.aliyun.ros.cdk.core.IResolvable launchExpirationTime) {
            this.props.launchExpirationTime(launchExpirationTime);
            return this;
        }

        /**
         * Property recurrenceEndTime: End time of the scheduled task to be repeated.
         * <p>
         * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         * A time point 90 days after creation or modification cannot be entered.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
         * <p>
         * @return {@code this}
         * @param recurrenceEndTime Property recurrenceEndTime: End time of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceEndTime(final java.lang.String recurrenceEndTime) {
            this.props.recurrenceEndTime(recurrenceEndTime);
            return this;
        }
        /**
         * Property recurrenceEndTime: End time of the scheduled task to be repeated.
         * <p>
         * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         * A time point 90 days after creation or modification cannot be entered.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
         * <p>
         * @return {@code this}
         * @param recurrenceEndTime Property recurrenceEndTime: End time of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceEndTime(final com.aliyun.ros.cdk.core.IResolvable recurrenceEndTime) {
            this.props.recurrenceEndTime(recurrenceEndTime);
            return this;
        }

        /**
         * Property recurrenceType: Type of the scheduled task to be repeated.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>Daily: Recurrence interval by day for a scheduled task.</li>
         * <li>Weekly: Recurrence interval by week for a scheduled task.</li>
         * <li>Monthly: Recurrence interval by month for a scheduled task.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param recurrenceType Property recurrenceType: Type of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceType(final java.lang.String recurrenceType) {
            this.props.recurrenceType(recurrenceType);
            return this;
        }
        /**
         * Property recurrenceType: Type of the scheduled task to be repeated.
         * <p>
         * Optional values:
         * <p>
         * <ul>
         * <li>Daily: Recurrence interval by day for a scheduled task.</li>
         * <li>Weekly: Recurrence interval by week for a scheduled task.</li>
         * <li>Monthly: Recurrence interval by month for a scheduled task.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param recurrenceType Property recurrenceType: Type of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceType(final com.aliyun.ros.cdk.core.IResolvable recurrenceType) {
            this.props.recurrenceType(recurrenceType);
            return this;
        }

        /**
         * Property recurrenceValue: Value of the scheduled task to be repeated.
         * <p>
         * <ul>
         * <li>Daily: Only one value in the range [1,31] can be filled.</li>
         * <li>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</li>
         * <li>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param recurrenceValue Property recurrenceValue: Value of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceValue(final java.lang.String recurrenceValue) {
            this.props.recurrenceValue(recurrenceValue);
            return this;
        }
        /**
         * Property recurrenceValue: Value of the scheduled task to be repeated.
         * <p>
         * <ul>
         * <li>Daily: Only one value in the range [1,31] can be filled.</li>
         * <li>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</li>
         * <li>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
         * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param recurrenceValue Property recurrenceValue: Value of the scheduled task to be repeated. This parameter is required.
         */
        public Builder recurrenceValue(final com.aliyun.ros.cdk.core.IResolvable recurrenceValue) {
            this.props.recurrenceValue(recurrenceValue);
            return this;
        }

        /**
         * Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.
         * <p>
         * It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
         * The account name is unique in the same region.
         * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
         * <p>
         * @return {@code this}
         * @param scheduledTaskName Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. This parameter is required.
         */
        public Builder scheduledTaskName(final java.lang.String scheduledTaskName) {
            this.props.scheduledTaskName(scheduledTaskName);
            return this;
        }
        /**
         * Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.
         * <p>
         * It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
         * The account name is unique in the same region.
         * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
         * <p>
         * @return {@code this}
         * @param scheduledTaskName Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. This parameter is required.
         */
        public Builder scheduledTaskName(final com.aliyun.ros.cdk.core.IResolvable scheduledTaskName) {
            this.props.scheduledTaskName(scheduledTaskName);
            return this;
        }

        /**
         * Property taskEnabled: Whether to enable the scheduled task.
         * <p>
         * <ul>
         * <li>When the parameter is set to true, the task is enabled.</li>
         * <li>When the parameter is set to false, the task is disabled.
         * The default value is true.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param taskEnabled Property taskEnabled: Whether to enable the scheduled task. This parameter is required.
         */
        public Builder taskEnabled(final java.lang.Boolean taskEnabled) {
            this.props.taskEnabled(taskEnabled);
            return this;
        }
        /**
         * Property taskEnabled: Whether to enable the scheduled task.
         * <p>
         * <ul>
         * <li>When the parameter is set to true, the task is enabled.</li>
         * <li>When the parameter is set to false, the task is disabled.
         * The default value is true.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param taskEnabled Property taskEnabled: Whether to enable the scheduled task. This parameter is required.
         */
        public Builder taskEnabled(final com.aliyun.ros.cdk.core.IResolvable taskEnabled) {
            this.props.taskEnabled(taskEnabled);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScheduledTask}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScheduledTask build() {
            return new com.aliyun.ros.cdk.ess.ScheduledTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}