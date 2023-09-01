package com.aliyun.ros.cdk.rds.datasource;

/**
 * Properties for defining a <code>DATASOURCE::RDS::Databases</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.192Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.DatabasesProps")
@software.amazon.jsii.Jsii.Proxy(DatabasesProps.Jsii$Proxy.class)
public interface DatabasesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The ID of the RDS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbName: The names of the databases whose information you want to query.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
        return null;
    }

    /**
     * Property dbStatus: The status of the databases whose information you want to query.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DatabasesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DatabasesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DatabasesProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;
        java.lang.Object dbStatus;

        /**
         * Sets the value of {@link DatabasesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the RDS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabasesProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the RDS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabasesProps#getDbName}
         * @param dbName Property dbName: The names of the databases whose information you want to query.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DatabasesProps#getDbName}
         * @param dbName Property dbName: The names of the databases whose information you want to query.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DatabasesProps#getDbStatus}
         * @param dbStatus Property dbStatus: The status of the databases whose information you want to query.
         * @return {@code this}
         */
        public Builder dbStatus(java.lang.String dbStatus) {
            this.dbStatus = dbStatus;
            return this;
        }

        /**
         * Sets the value of {@link DatabasesProps#getDbStatus}
         * @param dbStatus Property dbStatus: The status of the databases whose information you want to query.
         * @return {@code this}
         */
        public Builder dbStatus(com.aliyun.ros.cdk.core.IResolvable dbStatus) {
            this.dbStatus = dbStatus;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DatabasesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DatabasesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DatabasesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DatabasesProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;
        private final java.lang.Object dbStatus;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbStatus = software.amazon.jsii.Kernel.get(this, "dbStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = builder.dbName;
            this.dbStatus = builder.dbStatus;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getDbStatus() {
            return this.dbStatus;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getDbName() != null) {
                data.set("dbName", om.valueToTree(this.getDbName()));
            }
            if (this.getDbStatus() != null) {
                data.set("dbStatus", om.valueToTree(this.getDbStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.datasource.DatabasesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DatabasesProps.Jsii$Proxy that = (DatabasesProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (this.dbName != null ? !this.dbName.equals(that.dbName) : that.dbName != null) return false;
            return this.dbStatus != null ? this.dbStatus.equals(that.dbStatus) : that.dbStatus == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.dbName != null ? this.dbName.hashCode() : 0);
            result = 31 * result + (this.dbStatus != null ? this.dbStatus.hashCode() : 0);
            return result;
        }
    }
}
