using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::KubernetesCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.KubernetesClusterProps")]
    public interface IKubernetesClusterProps
    {
        /// <summary>Property masterInstanceTypes: Master node ECS specification type code.</summary>
        /// <remarks>
        /// For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
        /// List size must be 3, Instance Type can be repeated.
        /// </remarks>
        [JsiiProperty(name: "masterInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MasterInstanceTypes
        {
            get;
        }

        /// <summary>Property masterVSwitchIds: Master node switch ID.</summary>
        /// <remarks>
        /// To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
        /// </remarks>
        [JsiiProperty(name: "masterVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MasterVSwitchIds
        {
            get;
        }

        /// <summary>Property name: The name of the cluster.</summary>
        /// <remarks>
        /// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property workerInstanceTypes: Worker node ECS specification type code.</summary>
        /// <remarks>
        /// For more details, see Instance Specification Family.
        /// </remarks>
        [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object WorkerInstanceTypes
        {
            get;
        }

        /// <summary>Property workerVSwitchIds: The virtual switch ID of the worker node.</summary>
        [JsiiProperty(name: "workerVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkerVSwitchIds
        {
            get;
        }

        /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
        /// <remarks>
        /// Network plug-in: including Flannel and Terway network plug-ins
        /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
        /// Ingress: The installation of the Ingress component is enabled by default.
        /// </remarks>
        [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Addons
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether the cluster automatically renews.</summary>
        /// <remarks>
        /// It takes effect when the value of ChargeType is PrePaid. The optional values are:
        /// true: automatic renewal
        /// false: do not renew automatically
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: cluster payment type.</summary>
        /// <remarks>
        /// The optional values are:
        /// PrePaid: prepaid
        /// PostPaid: Pay as you go
        /// Default to PostPaid.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.</summary>
        /// <remarks>
        /// For more information, see CIS reinforcement.
        /// Valid values:
        /// true: enables CIS reinforcement.
        /// false: disables CIS reinforcement.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "cisEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CisEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.</summary>
        [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloudMonitorFlags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerCidr: The container network segment cannot conflict with the VPC network segment.</summary>
        /// <remarks>
        /// When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
        /// </remarks>
        [JsiiProperty(name: "containerCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpuPolicy: CPU policy.</summary>
        /// <remarks>
        /// The cluster version is 1.12.6 and above supports both static and none strategies.
        /// </remarks>
        [JsiiProperty(name: "cpuPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Specifies whether to enable deletion protection for the cluster.</summary>
        /// <remarks>
        /// After deletion protection is enabled, the cluster cannot be deleted
        /// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
        /// false: disables deletion protection for the cluster.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.</summary>
        /// <remarks>
        /// If rollback fails, resources produced during the creation process will be released. False is not recommended.
        /// </remarks>
        [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisableRollback
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
        /// <remarks>
        /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
        /// </remarks>
        [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointPublicAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.</summary>
        /// <remarks>
        /// Valid values:
        /// true: stores the data of containers and images on a data disk.
        /// The original data on the disk will be overwritten.
        /// Back up data before you mount the disk.
        /// false: does not store the data of containers and images on a data disk.
        /// Default value: false.
        /// How to mount a data disk:
        /// If the ECS instances have data disks mounted and the file system of the last
        /// data disk is not initialized, the system automatically formats the data disk to ext4.
        /// Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
        /// The system does not create or mount a new data disk if no data disk has been
        /// mounted to the ECS instances.
        /// </remarks>
        [JsiiProperty(name: "formatDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FormatDisk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.</summary>
        /// <remarks>
        /// This parameter takes effect only if security_group_id is left empty.
        /// Note You must specify an advanced security group for a cluster that has Terway installed.
        /// true: creates an advanced security group.
        /// false: does not create an advanced security group.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "isEnterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsEnterpriseSecurityGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.</summary>
        /// <remarks>
        /// true: retains the names.
        /// false: does not retain the names. The new names are assigned by the system.
        /// Default value: true.
        /// </remarks>
        [JsiiProperty(name: "keepInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeepInstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPair: Key pair name.</summary>
        /// <remarks>
        /// Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPair
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kubernetesVersion: The version of the Kubernetes cluster.</summary>
        [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KubernetesVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerSpec: The specification of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
        /// </remarks>
        [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginPassword: SSH login password.</summary>
        /// <remarks>
        /// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
        /// </remarks>
        [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterCount: Number of master instances.</summary>
        /// <remarks>
        /// The value can be 3 or 5. The default value is 3.
        /// </remarks>
        [JsiiProperty(name: "masterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.</summary>
        [JsiiProperty(name: "masterDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterDataDisk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterDataDisks: Master data disk type, size and other configuration combinations.</summary>
        /// <remarks>
        /// This parameter is valid only when the master node data disk is mounted.
        /// </remarks>
        [JsiiProperty(name: "masterDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterDataDisks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskCategory: Master disk system disk type.</summary>
        /// <remarks>
        /// The value includes:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// cloud_essd: ESSD cloud diskDefault to cloud_ssd.
        /// </remarks>
        [JsiiProperty(name: "masterSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.</summary>
        /// <remarks>
        /// Valid values: PL0|PL1|PL2|PL3
        /// </remarks>
        [JsiiProperty(name: "masterSystemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSystemDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskSize: Master disk system disk size in GiB.</summary>
        /// <remarks>
        /// Default to 120.
        /// </remarks>
        [JsiiProperty(name: "masterSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.</summary>
        [JsiiProperty(name: "masterSystemDiskSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSystemDiskSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.</summary>
        /// <remarks>
        /// This number is determined by the specified pod CIDR block.
        /// This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
        /// </remarks>
        [JsiiProperty(name: "nodeCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodeCidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodePortRange: Node service port.</summary>
        /// <remarks>
        /// The value range is [30000, 65535].
        /// Default to 30000-65535.
        /// </remarks>
        [JsiiProperty(name: "nodePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodePortRange
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property numOfNodes: Number of worker nodes.</summary>
        /// <remarks>
        /// The range is [0,300].
        /// Default to 3.
        /// </remarks>
        [JsiiProperty(name: "numOfNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NumOfNodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property osType: The type of operating system.</summary>
        /// <remarks>
        /// Valid values:
        /// Windows
        /// Linux
        /// Default value: Linux.
        /// </remarks>
        [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OsType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The duration of the annual subscription and monthly subscription.</summary>
        /// <remarks>
        /// It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
        /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
        /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
        /// Default to 1.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: When you specify PrePaid, you need to specify the period.</summary>
        /// <remarks>
        /// The options are:
        /// Week: Time is measured in weeks
        /// Month: time in months
        /// Default to Month
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property platform: The release version of the operating system.</summary>
        /// <remarks>
        /// Valid values:
        /// CentOS
        /// AliyunLinux
        /// QbootAliyunLinux
        /// Qboot
        /// Windows
        /// WindowsCore
        /// Default value: CentOS.
        /// </remarks>
        [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Platform
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property podVswitchIds: The list of pod vSwitches.</summary>
        /// <remarks>
        /// For each vSwitch that is allocated to nodes,
        /// you must specify at least one pod vSwitch in the same zone.
        /// The pod vSwitches cannot be the same as the node vSwitches.
        /// We recommend that you set the mask length of the CIDR block to a value no
        /// greater than 19 for the pod vSwitches.
        /// The pod_vswitch_ids parameter is required when the Terway network
        /// plug-in is selected for the cluster.
        /// </remarks>
        [JsiiProperty(name: "podVswitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PodVswitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.</summary>
        /// <remarks>
        /// The default is iptables.
        /// </remarks>
        [JsiiProperty(name: "proxyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property runtime: The container runtime of the cluster.</summary>
        /// <remarks>
        /// The default runtime is Docker.
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Runtime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.</summary>
        /// <remarks>
        /// When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
        /// </remarks>
        [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snatEntry: Whether to configure SNAT for the network.</summary>
        /// <remarks>
        /// When a VPC can access the public network environment, set it to false.
        /// When an existing VPC cannot access the public network environment:
        /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
        /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
        /// Default to true.
        /// </remarks>
        [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntry
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property socEnabled: Valid values: true: enables reinforcement based on classified protection.</summary>
        /// <remarks>
        /// false: disables reinforcement based on classified protection.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "socEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SocEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sshFlags: Whether to enable public network SSH login: true: open false: not open.</summary>
        [JsiiProperty(name: "sshFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SshFlags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tag the cluster.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property taint: It is used to mark nodes with taints.</summary>
        /// <remarks>
        /// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
        /// </remarks>
        [JsiiProperty(name: "taint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Taint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeoutMins: Cluster resource stack creation timeout, in minutes.</summary>
        /// <remarks>
        /// The default value is 60.
        /// </remarks>
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeoutMins
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeZone: The time zone of the cluster.</summary>
        [JsiiProperty(name: "timeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TimeZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userCa: The CA of cluster.</summary>
        [JsiiProperty(name: "userCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserCa
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: The user-defined data.</summary>
        /// <remarks>
        /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerDataDisk: Whether to mount the data disk.</summary>
        /// <remarks>
        /// The options are as follows:
        /// true: indicates that the worker node mounts data disks.
        /// false: indicates that the worker node does not mount data disks.
        /// Default to false.
        /// </remarks>
        [JsiiProperty(name: "workerDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerDataDisk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerDataDisks: A combination of configurations such as worker data disk type and size.</summary>
        /// <remarks>
        /// This parameter is valid only when the worker node data disk is mounted.
        /// </remarks>
        [JsiiProperty(name: "workerDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerDataDisks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerSystemDiskCategory: Worker node system disk type.</summary>
        /// <remarks>
        /// The value includes:
        /// cloud_efficiency: efficient cloud disk
        /// cloud_ssd: SSD cloud disk
        /// Default to cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerSystemDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.</summary>
        /// <remarks>
        /// Default to 120.
        /// </remarks>
        [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerSystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.</summary>
        [JsiiProperty(name: "workerSystemDiskSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkerSystemDiskSnapshotPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CS::KubernetesCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.KubernetesClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IKubernetesClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property masterInstanceTypes: Master node ECS specification type code.</summary>
            /// <remarks>
            /// For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
            /// List size must be 3, Instance Type can be repeated.
            /// </remarks>
            [JsiiProperty(name: "masterInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MasterInstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property masterVSwitchIds: Master node switch ID.</summary>
            /// <remarks>
            /// To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
            /// </remarks>
            [JsiiProperty(name: "masterVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MasterVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the cluster.</summary>
            /// <remarks>
            /// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workerInstanceTypes: Worker node ECS specification type code.</summary>
            /// <remarks>
            /// For more details, see Instance Specification Family.
            /// </remarks>
            [JsiiProperty(name: "workerInstanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object WorkerInstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workerVSwitchIds: The virtual switch ID of the worker node.</summary>
            [JsiiProperty(name: "workerVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkerVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addons: A combination of addon plugins for Kubernetes clusters.</summary>
            /// <remarks>
            /// Network plug-in: including Flannel and Terway network plug-ins
            /// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
            /// Ingress: The installation of the Ingress component is enabled by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addons", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Addons
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether the cluster automatically renews.</summary>
            /// <remarks>
            /// It takes effect when the value of ChargeType is PrePaid. The optional values are:
            /// true: automatic renewal
            /// false: do not renew automatically
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: cluster payment type.</summary>
            /// <remarks>
            /// The optional values are:
            /// PrePaid: prepaid
            /// PostPaid: Pay as you go
            /// Default to PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.</summary>
            /// <remarks>
            /// For more information, see CIS reinforcement.
            /// Valid values:
            /// true: enables CIS reinforcement.
            /// false: disables CIS reinforcement.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cisEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CisEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cloudMonitorFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloudMonitorFlags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerCidr: The container network segment cannot conflict with the VPC network segment.</summary>
            /// <remarks>
            /// When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpuPolicy: CPU policy.</summary>
            /// <remarks>
            /// The cluster version is 1.12.6 and above supports both static and none strategies.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Specifies whether to enable deletion protection for the cluster.</summary>
            /// <remarks>
            /// After deletion protection is enabled, the cluster cannot be deleted
            /// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
            /// false: disables deletion protection for the cluster.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.</summary>
            /// <remarks>
            /// If rollback fails, resources produced during the creation process will be released. False is not recommended.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disableRollback", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisableRollback
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.</summary>
            /// <remarks>
            /// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointPublicAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.</summary>
            /// <remarks>
            /// Valid values:
            /// true: stores the data of containers and images on a data disk.
            /// The original data on the disk will be overwritten.
            /// Back up data before you mount the disk.
            /// false: does not store the data of containers and images on a data disk.
            /// Default value: false.
            /// How to mount a data disk:
            /// If the ECS instances have data disks mounted and the file system of the last
            /// data disk is not initialized, the system automatically formats the data disk to ext4.
            /// Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
            /// The system does not create or mount a new data disk if no data disk has been
            /// mounted to the ECS instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "formatDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FormatDisk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.</summary>
            /// <remarks>
            /// This parameter takes effect only if security_group_id is left empty.
            /// Note You must specify an advanced security group for a cluster that has Terway installed.
            /// true: creates an advanced security group.
            /// false: does not create an advanced security group.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isEnterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsEnterpriseSecurityGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.</summary>
            /// <remarks>
            /// true: retains the names.
            /// false: does not retain the names. The new names are assigned by the system.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keepInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeepInstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPair: Key pair name.</summary>
            /// <remarks>
            /// Specify one of KeyPair or LoginPassword.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPair", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPair
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kubernetesVersion: The version of the Kubernetes cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kubernetesVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KubernetesVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerSpec: The specification of the Server Load Balancer instance.</summary>
            /// <remarks>
            /// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loginPassword: SSH login password.</summary>
            /// <remarks>
            /// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoginPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterCount: Number of master instances.</summary>
            /// <remarks>
            /// The value can be 3 or 5. The default value is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterDataDisk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterDataDisks: Master data disk type, size and other configuration combinations.</summary>
            /// <remarks>
            /// This parameter is valid only when the master node data disk is mounted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MasterDataDisks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterSystemDiskCategory: Master disk system disk type.</summary>
            /// <remarks>
            /// The value includes:
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// cloud_essd: ESSD cloud diskDefault to cloud_ssd.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.</summary>
            /// <remarks>
            /// Valid values: PL0|PL1|PL2|PL3
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSystemDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterSystemDiskSize: Master disk system disk size in GiB.</summary>
            /// <remarks>
            /// Default to 120.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSystemDiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterSystemDiskSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSystemDiskSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.</summary>
            /// <remarks>
            /// This number is determined by the specified pod CIDR block.
            /// This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodeCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodeCidrMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nodePortRange: Node service port.</summary>
            /// <remarks>
            /// The value range is [30000, 65535].
            /// Default to 30000-65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodePortRange
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property numOfNodes: Number of worker nodes.</summary>
            /// <remarks>
            /// The range is [0,300].
            /// Default to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numOfNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NumOfNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property osType: The type of operating system.</summary>
            /// <remarks>
            /// Valid values:
            /// Windows
            /// Linux
            /// Default value: Linux.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OsType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The duration of the annual subscription and monthly subscription.</summary>
            /// <remarks>
            /// It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
            /// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
            /// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
            /// Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: When you specify PrePaid, you need to specify the period.</summary>
            /// <remarks>
            /// The options are:
            /// Week: Time is measured in weeks
            /// Month: time in months
            /// Default to Month
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property platform: The release version of the operating system.</summary>
            /// <remarks>
            /// Valid values:
            /// CentOS
            /// AliyunLinux
            /// QbootAliyunLinux
            /// Qboot
            /// Windows
            /// WindowsCore
            /// Default value: CentOS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "platform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Platform
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property podVswitchIds: The list of pod vSwitches.</summary>
            /// <remarks>
            /// For each vSwitch that is allocated to nodes,
            /// you must specify at least one pod vSwitch in the same zone.
            /// The pod vSwitches cannot be the same as the node vSwitches.
            /// We recommend that you set the mask length of the CIDR block to a value no
            /// greater than 19 for the pod vSwitches.
            /// The pod_vswitch_ids parameter is required when the Terway network
            /// plug-in is selected for the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "podVswitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PodVswitchIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.</summary>
            /// <remarks>
            /// The default is iptables.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property runtime: The container runtime of the cluster.</summary>
            /// <remarks>
            /// The default runtime is Docker.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty\"}]}}", isOptional: true)]
            public object? Runtime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.</summary>
            /// <remarks>
            /// When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snatEntry: Whether to configure SNAT for the network.</summary>
            /// <remarks>
            /// When a VPC can access the public network environment, set it to false.
            /// When an existing VPC cannot access the public network environment:
            /// When set to True, SNAT is configured and the public network environment can be accessed at this time.
            /// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
            /// Default to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnatEntry
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property socEnabled: Valid values: true: enables reinforcement based on classified protection.</summary>
            /// <remarks>
            /// false: disables reinforcement based on classified protection.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "socEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SocEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sshFlags: Whether to enable public network SSH login: true: open false: not open.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sshFlags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SshFlags
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tag the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.RosKubernetesCluster.ITagsProperty[]?>();
            }

            /// <summary>Property taint: It is used to mark nodes with taints.</summary>
            /// <remarks>
            /// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "taint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Taint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeoutMins: Cluster resource stack creation timeout, in minutes.</summary>
            /// <remarks>
            /// The default value is 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeoutMins", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeoutMins
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeZone: The time zone of the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TimeZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userCa: The CA of cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userCa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserCa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: The user-defined data.</summary>
            /// <remarks>
            /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerDataDisk: Whether to mount the data disk.</summary>
            /// <remarks>
            /// The options are as follows:
            /// true: indicates that the worker node mounts data disks.
            /// false: indicates that the worker node does not mount data disks.
            /// Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkerDataDisk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerDataDisks: A combination of configurations such as worker data disk type and size.</summary>
            /// <remarks>
            /// This parameter is valid only when the worker node data disk is mounted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerDataDisks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WorkerDataDisks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerSystemDiskCategory: Worker node system disk type.</summary>
            /// <remarks>
            /// The value includes:
            /// cloud_efficiency: efficient cloud disk
            /// cloud_ssd: SSD cloud disk
            /// Default to cloud_efficiency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerSystemDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkerSystemDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.</summary>
            /// <remarks>
            /// Default to 120.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workerSystemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkerSystemDiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workerSystemDiskSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkerSystemDiskSnapshotPolicyId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
