package com.aliyun.ros.cdk.ebs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::EBS::DiskReplicaGroups</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.609Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosDiskReplicaGroupsProps.Jsii$Proxy.class)
public interface RosDiskReplicaGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSite() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDiskReplicaGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDiskReplicaGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDiskReplicaGroupsProps> {
        java.lang.Object resourceGroupId;
        java.lang.Object site;

        /**
         * Sets the value of {@link RosDiskReplicaGroupsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupsProps#getSite}
         * @param site the value to be set.
         * @return {@code this}
         */
        public Builder site(java.lang.String site) {
            this.site = site;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupsProps#getSite}
         * @param site the value to be set.
         * @return {@code this}
         */
        public Builder site(com.aliyun.ros.cdk.core.IResolvable site) {
            this.site = site;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDiskReplicaGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDiskReplicaGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDiskReplicaGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDiskReplicaGroupsProps {
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object site;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.site = software.amazon.jsii.Kernel.get(this, "site", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceGroupId = builder.resourceGroupId;
            this.site = builder.site;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSite() {
            return this.site;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSite() != null) {
                data.set("site", om.valueToTree(this.getSite()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.datasource.RosDiskReplicaGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDiskReplicaGroupsProps.Jsii$Proxy that = (RosDiskReplicaGroupsProps.Jsii$Proxy) o;

            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.site != null ? this.site.equals(that.site) : that.site == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0;
            result = 31 * result + (this.site != null ? this.site.hashCode() : 0);
            return result;
        }
    }
}