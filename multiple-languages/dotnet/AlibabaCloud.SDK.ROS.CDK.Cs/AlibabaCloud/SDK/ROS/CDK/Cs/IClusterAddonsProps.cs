using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ClusterAddons`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterAddonsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterAddonsProps")]
    public interface IClusterAddonsProps
    {
        /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
        /// <remarks>
        /// Network plug-in: including Flannel and Terway network plug-ins
        /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        /// Ingress: The installation of the Ingress component is enabled by default.
        /// </remarks>
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterAddons.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Addons
        {
            get;
        }

        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property installedIgnore: Whether to ignore already installed addons when creating.</summary>
        /// <remarks>
        /// If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
        /// Default false.
        /// </remarks>
        [JsiiProperty(name: "installedIgnore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstalledIgnore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</description>
        /// <description>None: Do nothing.
        /// The default value is EnsureAdminRoleAndBinding.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "rolePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RolePolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Strict: in addition to basic validation, also validate the legality of WaitUntil.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "validationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property waitUntil: After starting a creation or update, wait until all conditions are met.</summary>
        [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterAddons.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitUntil
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClusterAddons`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterAddonsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterAddonsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterAddonsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
            /// <remarks>
            /// Network plug-in: including Flannel and Terway network plug-ins
            /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
            /// Ingress: The installation of the Ingress component is enabled by default.
            /// </remarks>
            [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterAddons.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Addons
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterId: Cluster ID.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property installedIgnore: Whether to ignore already installed addons when creating.</summary>
            /// <remarks>
            /// If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
            /// Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "installedIgnore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstalledIgnore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</description>
            /// <description>None: Do nothing.
            /// The default value is EnsureAdminRoleAndBinding.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rolePolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RolePolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Strict: in addition to basic validation, also validate the legality of WaitUntil.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidationMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property waitUntil: After starting a creation or update, wait until all conditions are met.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "waitUntil", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosClusterAddons.WaitUntilProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WaitUntil
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
