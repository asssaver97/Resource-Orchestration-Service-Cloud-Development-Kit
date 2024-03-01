import * as ros from '@alicloud/ros-cdk-core';
import { RosKubernetesCluster } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKubernetesCluster as KubernetesClusterProperty };

/**
 * Properties for defining a `KubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export interface KubernetesClusterProps {

    /**
     * Property clusterId: Cluster instance ID.
     */
    readonly clusterId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::KubernetesCluster`, which is used to query the information about a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKubernetesCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export class KubernetesCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: KubernetesClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterSpec: The type of the managed Kubernetes cluster. This parameter is returned for a managed Kubernetes cluster. Valid values:
- ack.pro.small: professional managed Kubernetes cluster.
- ack.standard: standard managed Kubernetes cluster.
     */
    public readonly attrClusterSpec: ros.IResolvable;

    /**
     * Attribute ClusterType: The type of the cluster. Valid values:
- Kubernetes: dedicated Kubernetes cluster
- ManagedKubernetes: managed Kubernetes cluster
- Ask: ASK cluster
- ExternalKubernetes: registered external Kubernetes cluster
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute Created: The time when the cluster was created.
     */
    public readonly attrCreated: ros.IResolvable;

    /**
     * Attribute CurrentVersion: The current Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
     */
    public readonly attrCurrentVersion: ros.IResolvable;

    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
- true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
- false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * Attribute DockerVersion: The Docker version that is used by the cluster.
     */
    public readonly attrDockerVersion: ros.IResolvable;

    /**
     * Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
     */
    public readonly attrExternalLoadbalancerId: ros.IResolvable;

    /**
     * Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
     */
    public readonly attrInitVersion: ros.IResolvable;

    /**
     * Attribute MaintenanceWindow: The maintenance window of the cluster. This feature is available in only professional managed Kubernetes clusters.
     */
    public readonly attrMaintenanceWindow: ros.IResolvable;

    /**
     * Attribute MasterUrl: The address of the cluster. It includes an internal endpoint and a public endpoint.
     */
    public readonly attrMasterUrl: ros.IResolvable;

    /**
     * Attribute MetaData: The metadata of the cluster.
     */
    public readonly attrMetaData: ros.IResolvable;

    /**
     * Attribute Name: The name of the cluster. The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute NetworkMode: The network mode of the cluster. Valid values: 
- classic: the classic network 
- vpc: virtual private cloud (VPC) 
- overlay: overlay network
- calico: network powered by Calico
Default value: vpc.
     */
    public readonly attrNetworkMode: ros.IResolvable;

    /**
     * Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
     */
    public readonly attrNextVersion: ros.IResolvable;

    /**
     * Attribute Parameters: A collection of cluster ROS parameters.
     */
    public readonly attrParameters: ros.IResolvable;

    /**
     * Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
- true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
     */
    public readonly attrPrivateZone: ros.IResolvable;

    /**
     * Attribute Profile: Indicates the scenario in which the cluster is used. Valid values:
- Default: indicates that the cluster is used in non-edge computing scenarios.
- Edge: indicates that the ACK cluster is used in edge computing scenarios.
     */
    public readonly attrProfile: ros.IResolvable;

    /**
     * Attribute RegionId: The ID of the region where the cluster is deployed.
     */
    public readonly attrRegionId: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute Size: The number of nodes in the cluster. Master nodes and worker nodes are included.
     */
    public readonly attrSize: ros.IResolvable;

    /**
     * Attribute State: The state of the cluster. Valid values:
- initial: The cluster is being created.
- failed: The cluster failed to be created.
- running: The cluster is running.
- updating: The cluster is being upgraded.
- updating_failed: The cluster failed to be upgraded.
- scaling: The cluster is being scaled.
- waiting: The registered cluster is waiting for connecting.
- disconnected: The registeredcluster is disconnected.
- stopped: The cluster is stopped.
- deleting: The cluster is being deleted.
- deleted: The cluster is deleted.
- delete_failed: The cluster failed to be deleted.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * Attribute SubnetCidr: The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
- 10.0.0.0/8
- 172.16-31.0.0/12-16
- 192.168.0.0/16
The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
     */
    public readonly attrSubnetCidr: ros.IResolvable;

    /**
     * Attribute Tags: The labels of the cluster.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute Updated: The time when the cluster was updated.
     */
    public readonly attrUpdated: ros.IResolvable;

    /**
     * Attribute VSwitchId: The IDs of the vSwitches. You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the VPC where the cluster is deployed. This parameter is required when you create an ACK cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute WorkerRamRoleName: The name of the worker RAM role. 
The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
     */
    public readonly attrWorkerRamRoleName: ros.IResolvable;

    /**
     * Attribute ZoneId: The ID of the zone where the cluster is deployed.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KubernetesClusterProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKubernetesCluster = new RosKubernetesCluster(this, id,  {
            clusterId: props.clusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesCluster;
        this.attrClusterId = rosKubernetesCluster.attrClusterId;
        this.attrClusterSpec = rosKubernetesCluster.attrClusterSpec;
        this.attrClusterType = rosKubernetesCluster.attrClusterType;
        this.attrCreated = rosKubernetesCluster.attrCreated;
        this.attrCurrentVersion = rosKubernetesCluster.attrCurrentVersion;
        this.attrDeletionProtection = rosKubernetesCluster.attrDeletionProtection;
        this.attrDockerVersion = rosKubernetesCluster.attrDockerVersion;
        this.attrExternalLoadbalancerId = rosKubernetesCluster.attrExternalLoadbalancerId;
        this.attrInitVersion = rosKubernetesCluster.attrInitVersion;
        this.attrMaintenanceWindow = rosKubernetesCluster.attrMaintenanceWindow;
        this.attrMasterUrl = rosKubernetesCluster.attrMasterUrl;
        this.attrMetaData = rosKubernetesCluster.attrMetaData;
        this.attrName = rosKubernetesCluster.attrName;
        this.attrNetworkMode = rosKubernetesCluster.attrNetworkMode;
        this.attrNextVersion = rosKubernetesCluster.attrNextVersion;
        this.attrParameters = rosKubernetesCluster.attrParameters;
        this.attrPrivateZone = rosKubernetesCluster.attrPrivateZone;
        this.attrProfile = rosKubernetesCluster.attrProfile;
        this.attrRegionId = rosKubernetesCluster.attrRegionId;
        this.attrResourceGroupId = rosKubernetesCluster.attrResourceGroupId;
        this.attrSecurityGroupId = rosKubernetesCluster.attrSecurityGroupId;
        this.attrSize = rosKubernetesCluster.attrSize;
        this.attrState = rosKubernetesCluster.attrState;
        this.attrSubnetCidr = rosKubernetesCluster.attrSubnetCidr;
        this.attrTags = rosKubernetesCluster.attrTags;
        this.attrUpdated = rosKubernetesCluster.attrUpdated;
        this.attrVSwitchId = rosKubernetesCluster.attrVSwitchId;
        this.attrVpcId = rosKubernetesCluster.attrVpcId;
        this.attrWorkerRamRoleName = rosKubernetesCluster.attrWorkerRamRoleName;
        this.attrZoneId = rosKubernetesCluster.attrZoneId;
    }
}
