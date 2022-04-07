package com.aliyun.ros.cdk.assembly.schema;

/**
 * Identifier for the context provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.146Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.ContextProvider")
public enum ContextProvider {
    /**
     * AMI provider.
     */
    AMI_PROVIDER,
    /**
     * AZ provider.
     */
    AVAILABILITY_ZONE_PROVIDER,
    /**
     * Route53 Hosted Zone provider.
     */
    HOSTED_ZONE_PROVIDER,
    /**
     * SSM Parameter Provider.
     */
    SSM_PARAMETER_PROVIDER,
    /**
     * VPC Provider.
     */
    VPC_PROVIDER,
    /**
     * VPC Endpoint Service AZ Provider.
     */
    ENDPOINT_SERVICE_AVAILABILITY_ZONE_PROVIDER,
}
