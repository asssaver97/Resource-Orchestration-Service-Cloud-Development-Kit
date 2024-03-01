using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosPrefixList`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPrefixListProps")]
    public interface IRosPrefixListProps
    {
        /// <remarks>
        /// <strong>Property</strong>: prefixListId: The ID of the query Prefix List.
        /// </remarks>
        [JsiiProperty(name: "prefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrefixListId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPrefixList`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPrefixListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosPrefixListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: prefixListId: The ID of the query Prefix List.
            /// </remarks>
            [JsiiProperty(name: "prefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrefixListId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
