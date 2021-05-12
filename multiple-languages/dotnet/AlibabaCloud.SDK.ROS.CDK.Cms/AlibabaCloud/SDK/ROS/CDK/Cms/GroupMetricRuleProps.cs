using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::GroupMetricRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.GroupMetricRuleProps")]
    public class GroupMetricRuleProps : AlibabaCloud.SDK.ROS.CDK.Cms.IGroupMetricRuleProps
    {
        /// <summary>Property category: The abbreviation of the service name.</summary>
        /// <remarks>
        /// Valid values:
        /// ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
        /// RDS (ApsaraDB for RDS)
        /// ADS (AnalyticDB)
        /// SLB (Server Load Balancer)
        /// VPC (Virtual Private Cloud)
        /// APIGATEWAY (API Gateway)
        /// CDN
        /// CS (Container Service for Swarm)
        /// DCDN (Dynamic Route for CDN)
        /// DDoS (distributed denial of service)
        /// EIP (Elastic IP)
        /// ELASTICSEARCH (Elasticsearch)
        /// EMR (E-MapReduce)
        /// ESS (Auto Scaling)
        /// HBASE (ApsaraDB for HBase)
        /// IOT_EDGE (IoT Edge)
        /// K8S_POD (k8s pod)
        /// KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
        /// KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
        /// KVSTORE_STANDARD (ApsaraDB for Redis standard version)
        /// MEMCACHE (ApsaraDB for Memcache)
        /// MNS (Message Service)
        /// MONGODB (ApsaraDB for MongoDB replica set instances)
        /// MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
        /// MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
        /// MQ_TOPIC (Message Service topic)
        /// OCS (original version of ApsaraDB for Memcache)
        /// OPENSEARCH (Open Search)
        /// OSS (Object Storage Service)
        /// POLARDB (ApsaraDB for POLARDB)
        /// PETADATA (HybridDB for MySQL)
        /// SCDN (Secure Content Delivery Network)
        /// SHAREBANDWIDTHPACKAGES (shared bandwidth package)
        /// SLS (Log Service)
        /// VPN (VPN Gateway)
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Category
        {
            get;
            set;
        }

        /// <summary>Property escalations: undefined.</summary>
        [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty\"}]}}", isOverride: true)]
        public object Escalations
        {
            get;
            set;
        }

        /// <summary>Property groupId: The ID of application group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property metricName: The name of the metric.</summary>
        /// <remarks>
        /// For more information, call DescribeMetricMetaList or see Preset metrics reference.
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object MetricName
        {
            get;
            set;
        }

        /// <summary>Property namespace: The data namespace of the service.</summary>
        /// <remarks>
        /// For more information, call DescribeMetricMetaList
        /// or see Preset metrics reference.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Namespace
        {
            get;
            set;
        }

        /// <summary>Property ruleId: The ID of the alert rule.</summary>
        /// <remarks>
        /// The IDs of alert rules are generated by callers to ensure
        /// uniqueness.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RuleId
        {
            get;
            set;
        }

        /// <summary>Property ruleName: The name of the alert rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RuleName
        {
            get;
            set;
        }

        /// <summary>Property dimensions: The expended resource dimensions.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Dimensions
        {
            get;
            set;
        }

        /// <summary>Property effectiveInterval: The period when the alert rule is effective.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EffectiveInterval
        {
            get;
            set;
        }

        /// <summary>Property emailSubject: The subject of the alert notification email.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "emailSubject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EmailSubject
        {
            get;
            set;
        }

        /// <summary>Property interval: The detection period of alerts.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Interval
        {
            get;
            set;
        }

        /// <summary>Property noEffectiveInterval: The period when the alert rule is ineffective.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "noEffectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NoEffectiveInterval
        {
            get;
            set;
        }

        /// <summary>Property period: The aggregation period.</summary>
        /// <remarks>
        /// Unite: second.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met.</summary>
        /// <remarks>
        /// Unit: second. Default value: 86400. Minimum value: 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SilenceTime
        {
            get;
            set;
        }

        /// <summary>Property webhook: The URL of the callback triggered when an alert occurs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Webhook
        {
            get;
            set;
        }
    }
}