using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::NatIp`.</summary>
    [JsiiInterface(nativeType: typeof(INatIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatIpProps")]
    public interface INatIpProps
    {
        /// <summary>Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address.</summary>
        [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatGatewayId
        {
            get;
        }

        /// <summary>Property natIpCidr: The CIDR block to which the NAT IP address belongs.</summary>
        [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpCidr
        {
            get;
        }

        /// <summary>Property natIpDescription: The description of the NAT IP address.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It must start with a letter
        /// but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "natIpDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpDescription
        {
            get;
        }

        /// <summary>Property natIpName: The name of the NAT IP address.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
        /// with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "natIpName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpName
        {
            get;
        }

        /// <summary>Property natIp: The NAT IP address that you want to create.</summary>
        /// <remarks>
        /// If you do not specify an IP address, the system selects a random IP address from the
        /// specified CIDR block.
        /// </remarks>
        [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.</summary>
        [JsiiProperty(name: "natIpCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NatIpCidrId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::NatIp`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatIpProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INatIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address.</summary>
            [JsiiProperty(name: "natGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpCidr: The CIDR block to which the NAT IP address belongs.</summary>
            [JsiiProperty(name: "natIpCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpDescription: The description of the NAT IP address.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It must start with a letter
            /// but cannot start with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "natIpDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpName: The name of the NAT IP address.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
            /// with http:// or https://.
            /// </remarks>
            [JsiiProperty(name: "natIpName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIp: The NAT IP address that you want to create.</summary>
            /// <remarks>
            /// If you do not specify an IP address, the system selects a random IP address from the
            /// specified CIDR block.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "natIpCidrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NatIpCidrId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
