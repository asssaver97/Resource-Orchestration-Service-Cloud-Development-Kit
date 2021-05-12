package com.aliyun.ros.cdk.redis;

/**
 * A ROS resource type:  `ALIYUN::REDIS::PrepayInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.983Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.PrepayInstance")
public class PrepayInstance extends com.aliyun.ros.cdk.core.Resource {

    protected PrepayInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrepayInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.PrepayInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.PrepayInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PrepayInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ConnectionDomain: Connection domain of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceClass: Redis instance type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Instance id of created redis instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: Name of created redis instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order Id of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: Port of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.PrepayInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.PrepayInstance> {
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
        private com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.core.IResolvable backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }
        /**
         * Property backupPolicy: Backup policy.
         * <p>
         * @return {@code this}
         * @param backupPolicy Property backupPolicy: Backup policy. This parameter is required.
         */
        public Builder backupPolicy(final com.aliyun.ros.cdk.redis.RosPrepayInstance.BackupPolicyProperty backupPolicy) {
            this.props().backupPolicy(backupPolicy);
            return this;
        }

        /**
         * Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props().capacity(capacity);
            return this;
        }
        /**
         * Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB. This parameter is required.
         */
        public Builder capacity(final com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.props().capacity(capacity);
            return this;
        }

        /**
         * Property engineVersion: Engine version.
         * <p>
         * Supported values: 2.8, 4.0 and 5.0.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Engine version. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Engine version.
         * <p>
         * Supported values: 2.8, 4.0 and 5.0.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Engine version. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }

        /**
         * Property evictionPolicy: The eviction policy of cache data storage.
         * <p>
         * @return {@code this}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage. This parameter is required.
         */
        public Builder evictionPolicy(final java.lang.String evictionPolicy) {
            this.props().evictionPolicy(evictionPolicy);
            return this;
        }
        /**
         * Property evictionPolicy: The eviction policy of cache data storage.
         * <p>
         * @return {@code this}
         * @param evictionPolicy Property evictionPolicy: The eviction policy of cache data storage. This parameter is required.
         */
        public Builder evictionPolicy(final com.aliyun.ros.cdk.core.IResolvable evictionPolicy) {
            this.props().evictionPolicy(evictionPolicy);
            return this;
        }

        /**
         * Property instanceClass: Redis instance type.
         * <p>
         * Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: Redis instance type. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: Redis instance type.
         * <p>
         * Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: Redis instance type. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }

        /**
         * Property instanceConnection: Instance connection message.
         * <p>
         * @return {@code this}
         * @param instanceConnection Property instanceConnection: Instance connection message. This parameter is required.
         */
        public Builder instanceConnection(final com.aliyun.ros.cdk.core.IResolvable instanceConnection) {
            this.props().instanceConnection(instanceConnection);
            return this;
        }
        /**
         * Property instanceConnection: Instance connection message.
         * <p>
         * @return {@code this}
         * @param instanceConnection Property instanceConnection: Instance connection message. This parameter is required.
         */
        public Builder instanceConnection(final com.aliyun.ros.cdk.redis.RosPrepayInstance.InstanceConnectionProperty instanceConnection) {
            this.props().instanceConnection(instanceConnection);
            return this;
        }

        /**
         * Property instanceMaintainTime: Instance maintain time.
         * <p>
         * @return {@code this}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time. This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.core.IResolvable instanceMaintainTime) {
            this.props().instanceMaintainTime(instanceMaintainTime);
            return this;
        }
        /**
         * Property instanceMaintainTime: Instance maintain time.
         * <p>
         * @return {@code this}
         * @param instanceMaintainTime Property instanceMaintainTime: Instance maintain time. This parameter is required.
         */
        public Builder instanceMaintainTime(final com.aliyun.ros.cdk.redis.RosPrepayInstance.InstanceMaintainTimeProperty instanceMaintainTime) {
            this.props().instanceMaintainTime(instanceMaintainTime);
            return this;
        }

        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props().password(password);
            return this;
        }
        /**
         * Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props().password(password);
            return this;
        }

        /**
         * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property securityGroupId: The IDs of security groups.
         * <p>
         * Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The IDs of security groups. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The IDs of security groups.
         * <p>
         * Separate multiple security group IDs with commas (,) and up to 10 can be set.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The IDs of security groups. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props().securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final java.lang.String sslEnabled) {
            this.props().sslEnabled(sslEnabled);
            return this;
        }
        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.props().sslEnabled(sslEnabled);
            return this;
        }

        /**
         * Property tags: Tags to attach to redis.
         * <p>
         * Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to redis. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.redis.RosPrepayInstance.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create ecs instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         * <p>
         * If set to:
         * <p>
         * <ul>
         * <li>true: enables password free.</li>
         * <li>false: disables password free.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final java.lang.Boolean vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
        }
        /**
         * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
         * <p>
         * If set to:
         * <p>
         * <ul>
         * <li>true: enables password free.</li>
         * <li>false: disables password free.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vpcPasswordFree Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. This parameter is required.
         */
        public Builder vpcPasswordFree(final com.aliyun.ros.cdk.core.IResolvable vpcPasswordFree) {
            this.props().vpcPasswordFree(vpcPasswordFree);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch Id to create ecs instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone id of input region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of input region. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone id of input region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of input region. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.redis.PrepayInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.PrepayInstance build() {
            return new com.aliyun.ros.cdk.redis.PrepayInstance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.redis.PrepayInstanceProps.Builder();
            }
            return this.props;
        }
    }
}