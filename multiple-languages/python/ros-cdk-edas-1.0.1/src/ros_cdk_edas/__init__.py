'''
## Aliyun ROS EDAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_edas as EDAS
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from ._jsii import *

import ros_cdk_core


class Application(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.Application",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::Application``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ApplicationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Application``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(Application, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: Application Id, a unique identifier EDAS application.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port: Application port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "application_name": "applicationName",
        "cluster_id": "clusterId",
        "build_pack_id": "buildPackId",
        "component_ids": "componentIds",
        "description": "description",
        "ecu_info": "ecuInfo",
        "health_check_url": "healthCheckUrl",
        "logical_region_id": "logicalRegionId",
        "package_type": "packageType",
    },
)
class ApplicationProps:
    def __init__(
        self,
        *,
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Application``.

        :param application_name: Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).
        :param cluster_id: Property clusterId: Cluster ID of ECS application.
        :param build_pack_id: Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        :param component_ids: Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning: 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK 1.7.x
        :param description: Property description: Descriptive information.
        :param ecu_info: Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
        :param health_check_url: Property healthCheckUrl: Application Health Check URL.
        :param logical_region_id: Property logicalRegionId: Namespace ID.
        :param package_type: Property packageType: Application packet format, possible values: war or jar.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "application_name": application_name,
            "cluster_id": cluster_id,
        }
        if build_pack_id is not None:
            self._values["build_pack_id"] = build_pack_id
        if component_ids is not None:
            self._values["component_ids"] = component_ids
        if description is not None:
            self._values["description"] = description
        if ecu_info is not None:
            self._values["ecu_info"] = ecu_info
        if health_check_url is not None:
            self._values["health_check_url"] = health_check_url
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if package_type is not None:
            self._values["package_type"] = package_type

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).'''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: Cluster ID of ECS application.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).

        When creating HSF application, this parameter must be specified
        '''
        result = self._values.get("build_pack_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.

        Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        result = self._values.get("component_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Descriptive information.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).'''
        result = self._values.get("ecu_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckUrl: Application Health Check URL.'''
        result = self._values.get("health_check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logicalRegionId: Namespace ID.'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property packageType: Application packet format, possible values: war or jar.'''
        result = self._values.get("package_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Cluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(Cluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterName: Cluster name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterType: Cluster type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIaasProvider")
    def attr_iaas_provider(self) -> ros_cdk_core.IResolvable:
        '''Attribute IaasProvider: Provider.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIaasProvider"))


class ClusterMember(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.ClusterMember",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::ClusterMember``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterMemberProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::ClusterMember``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(ClusterMember, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterId: Cluster ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterMemberIds")
    def attr_cluster_member_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterMemberIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: ECS instance IDs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ClusterMemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "instance_ids": "instanceIds",
        "password": "password",
    },
)
class ClusterMemberProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::ClusterMember``.

        :param cluster_id: Property clusterId: Cluster ID to import ECS instance.
        :param instance_ids: Property instanceIds: ECS instance ID list to import.
        :param password: Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "instance_ids": instance_ids,
            "password": password,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterId: Cluster ID to import ECS instance.'''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property instanceIds: ECS instance ID list to import.'''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterMemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "network_mode": "networkMode",
        "logical_region_id": "logicalRegionId",
        "oversold_factor": "oversoldFactor",
        "vpc_id": "vpcId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Cluster``.

        :param cluster_name: Property clusterName: Cluster name.
        :param cluster_type: Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        :param network_mode: Property networkMode: Network Type. 1- classic network, 2-VPC
        :param logical_region_id: Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
        :param oversold_factor: Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        :param vpc_id: Property vpcId: VPC network ID. If network selection VPC, this parameter Required
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "network_mode": network_mode,
        }
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if oversold_factor is not None:
            self._values["oversold_factor"] = oversold_factor
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clusterName: Cluster name.'''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property clusterType: Cluster type.

        1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property networkMode: Network Type.

        1- classic network, 2-VPC
        '''
        result = self._values.get("network_mode")
        assert result is not None, "Required property 'network_mode' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).'''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property oversoldFactor: Docker CPU cluster oversold.

        Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        result = self._values.get("oversold_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: VPC network ID.

        If network selection VPC, this parameter Required
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DeployGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.DeployGroup",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::DeployGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeployGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::DeployGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(DeployGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AppId: Application ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupName: Deploy group name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: Deploy group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.DeployGroupProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "group_name": "groupName"},
)
class DeployGroupProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::DeployGroup``.

        :param app_id: Property appId: Application ID.
        :param group_name: Property groupName: Group name, maximum length of 64.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "group_name": group_name,
        }

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property appId: Application ID.'''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Group name, maximum length of 64.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeployGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplication(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosApplication",
):
    '''A ROS template type:  ``ALIYUN::EDAS::Application``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosApplicationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Application``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosApplication, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: Application Id, a unique identifier EDAS application
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port: Application port
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="applicationName")
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "applicationName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID of ECS application
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="buildPackId")
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "buildPackId"))

    @build_pack_id.setter
    def build_pack_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "buildPackId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="componentIds")
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
        Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "componentIds"))

    @component_ids.setter
    def component_ids(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "componentIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Descriptive information
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ecuInfo")
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
        Interface to obtain).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ecuInfo"))

    @ecu_info.setter
    def ecu_info(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ecuInfo", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckUrl")
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckUrl: Application Health Check URL
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckUrl"))

    @health_check_url.setter
    def health_check_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckUrl", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Namespace ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logicalRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="packageType")
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: Application packet format, possible values: war or jar
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "packageType"))

    @package_type.setter
    def package_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "packageType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosApplicationProps",
    jsii_struct_bases=[],
    name_mapping={
        "application_name": "applicationName",
        "cluster_id": "clusterId",
        "build_pack_id": "buildPackId",
        "component_ids": "componentIds",
        "description": "description",
        "ecu_info": "ecuInfo",
        "health_check_url": "healthCheckUrl",
        "logical_region_id": "logicalRegionId",
        "package_type": "packageType",
    },
)
class RosApplicationProps:
    def __init__(
        self,
        *,
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        build_pack_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        component_ids: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ecu_info: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        package_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Application``.

        :param application_name: 
        :param cluster_id: 
        :param build_pack_id: 
        :param component_ids: 
        :param description: 
        :param ecu_info: 
        :param health_check_url: 
        :param logical_region_id: 
        :param package_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "application_name": application_name,
            "cluster_id": cluster_id,
        }
        if build_pack_id is not None:
            self._values["build_pack_id"] = build_pack_id
        if component_ids is not None:
            self._values["component_ids"] = component_ids
        if description is not None:
            self._values["description"] = description
        if ecu_info is not None:
            self._values["ecu_info"] = ecu_info
        if health_check_url is not None:
            self._values["health_check_url"] = health_check_url
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if package_type is not None:
            self._values["package_type"] = package_type

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters)
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID of ECS application
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def build_pack_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition). When creating HSF application, this parameter must be specified
        '''
        result = self._values.get("build_pack_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def component_ids(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo
        Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment. Commonly used application component ID and meaning:
        4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
        1.7.x
        '''
        result = self._values.get("component_ids")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Descriptive information
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ecu_info(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id
        Interface to obtain).
        '''
        result = self._values.get("ecu_info")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckUrl: Application Health Check URL
        '''
        result = self._values.get("health_check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Namespace ID
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def package_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: packageType: Application packet format, possible values: war or jar
        '''
        result = self._values.get("package_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::EDAS::Cluster``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosCluster, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterName: Cluster name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterType: Cluster type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIaasProvider")
    def attr_iaas_provider(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IaasProvider: Provider
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIaasProvider"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterName")
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="networkMode")
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: networkMode: Network Type. 1- classic network, 2-VPC
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "networkMode"))

    @network_mode.setter
    def network_mode(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "networkMode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logicalRegionId")
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logicalRegionId"))

    @logical_region_id.setter
    def logical_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logicalRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oversoldFactor")
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "oversoldFactor"))

    @oversold_factor.setter
    def oversold_factor(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oversoldFactor", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID. If network selection VPC, this parameter Required
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)


class RosClusterMember(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosClusterMember",
):
    '''A ROS template type:  ``ALIYUN::EDAS::ClusterMember``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterMemberProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::ClusterMember``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosClusterMember, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterId: Cluster ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterMemberIds")
    def attr_cluster_member_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterMemberIds: Cluster member IDs corresponding to the ECS instance IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterMemberIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: ECS instance IDs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID to import ECS instance
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ECS instance ID list to import.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "instanceIds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "password", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosClusterMemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_id": "clusterId",
        "instance_ids": "instanceIds",
        "password": "password",
    },
)
class RosClusterMemberProps:
    def __init__(
        self,
        *,
        cluster_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::ClusterMember``.

        :param cluster_id: 
        :param instance_ids: 
        :param password: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_id": cluster_id,
            "instance_ids": instance_ids,
            "password": password,
        }

    @builtins.property
    def cluster_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterId: Cluster ID to import ECS instance
        '''
        result = self._values.get("cluster_id")
        assert result is not None, "Required property 'cluster_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ECS instance ID list to import.
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterMemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "cluster_type": "clusterType",
        "network_mode": "networkMode",
        "logical_region_id": "logicalRegionId",
        "oversold_factor": "oversoldFactor",
        "vpc_id": "vpcId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        network_mode: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        logical_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        oversold_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::Cluster``.

        :param cluster_name: 
        :param cluster_type: 
        :param network_mode: 
        :param logical_region_id: 
        :param oversold_factor: 
        :param vpc_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "cluster_type": cluster_type,
            "network_mode": network_mode,
        }
        if logical_region_id is not None:
            self._values["logical_region_id"] = logical_region_id
        if oversold_factor is not None:
            self._values["oversold_factor"] = oversold_factor
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def cluster_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterName: Cluster name
        '''
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def network_mode(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: networkMode: Network Type. 1- classic network, 2-VPC
        '''
        result = self._values.get("network_mode")
        assert result is not None, "Required property 'network_mode' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def logical_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
        '''
        result = self._values.get("logical_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def oversold_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
        '''
        result = self._values.get("oversold_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: VPC network ID. If network selection VPC, this parameter Required
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeployGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosDeployGroup",
):
    '''A ROS template type:  ``ALIYUN::EDAS::DeployGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeployGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::DeployGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosDeployGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AppId: Application ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupName: Deploy group name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: Deploy group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appId")
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: Application ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "appId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Group name, maximum length of 64.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosDeployGroupProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "group_name": "groupName"},
)
class RosDeployGroupProps:
    def __init__(
        self,
        *,
        app_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::DeployGroup``.

        :param app_id: 
        :param group_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "app_id": app_id,
            "group_name": group_name,
        }

    @builtins.property
    def app_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: appId: Application ID
        '''
        result = self._values.get("app_id")
        assert result is not None, "Required property 'app_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Group name, maximum length of 64.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeployGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserDefineRegion(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.RosUserDefineRegion",
):
    '''A ROS template type:  ``ALIYUN::EDAS::UserDefineRegion``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserDefineRegionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::UserDefineRegion``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosUserDefineRegion, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBelongRegion")
    def attr_belong_region(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BelongRegion: Under the physical region ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBelongRegion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDebugEnable")
    def attr_debug_enable(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DebugEnable: Whether debug is enable
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDebugEnable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: Resource ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionName")
    def attr_region_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RegionName: Region name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserId: User account ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionName")
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionName: Logical region (or namespace) name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "regionName"))

    @region_name.setter
    def region_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "regionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionTag")
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "regionTag"))

    @region_tag.setter
    def region_tag(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "regionTag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="debugEnable")
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: debugEnable: Whether debug is enable
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "debugEnable"))

    @debug_enable.setter
    def debug_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "debugEnable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Logic region (or namespace) description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.RosUserDefineRegionProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_name": "regionName",
        "region_tag": "regionTag",
        "debug_enable": "debugEnable",
        "description": "description",
    },
)
class RosUserDefineRegionProps:
    def __init__(
        self,
        *,
        region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::UserDefineRegion``.

        :param region_name: 
        :param region_tag: 
        :param debug_enable: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "region_name": region_name,
            "region_tag": region_tag,
        }
        if debug_enable is not None:
            self._values["debug_enable"] = debug_enable
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionName: Logical region (or namespace) name
        '''
        result = self._values.get("region_name")
        assert result is not None, "Required property 'region_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
        '''
        result = self._values.get("region_tag")
        assert result is not None, "Required property 'region_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: debugEnable: Whether debug is enable
        '''
        result = self._values.get("debug_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Logic region (or namespace) description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserDefineRegionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserDefineRegion(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edas.UserDefineRegion",
):
    '''A ROS resource type:  ``ALIYUN::EDAS::UserDefineRegion``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserDefineRegionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::EDAS::UserDefineRegion``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(UserDefineRegion, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBelongRegion")
    def attr_belong_region(self) -> ros_cdk_core.IResolvable:
        '''Attribute BelongRegion: Under the physical region ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBelongRegion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDebugEnable")
    def attr_debug_enable(self) -> ros_cdk_core.IResolvable:
        '''Attribute DebugEnable: Whether debug is enable.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDebugEnable"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: Resource ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionName")
    def attr_region_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RegionName: Region name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserId: User account ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edas.UserDefineRegionProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_name": "regionName",
        "region_tag": "regionTag",
        "debug_enable": "debugEnable",
        "description": "description",
    },
)
class UserDefineRegionProps:
    def __init__(
        self,
        *,
        region_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region_tag: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        debug_enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::EDAS::UserDefineRegion``.

        :param region_name: Property regionName: Logical region (or namespace) name.
        :param region_tag: Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").
        :param debug_enable: Property debugEnable: Whether debug is enable.
        :param description: Property description: Logic region (or namespace) description.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "region_name": region_name,
            "region_tag": region_tag,
        }
        if debug_enable is not None:
            self._values["debug_enable"] = debug_enable
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def region_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property regionName: Logical region (or namespace) name.'''
        result = self._values.get("region_name")
        assert result is not None, "Required property 'region_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region_tag(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").'''
        result = self._values.get("region_tag")
        assert result is not None, "Required property 'region_tag' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def debug_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property debugEnable: Whether debug is enable.'''
        result = self._values.get("debug_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Logic region (or namespace) description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserDefineRegionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Application",
    "ApplicationProps",
    "Cluster",
    "ClusterMember",
    "ClusterMemberProps",
    "ClusterProps",
    "DeployGroup",
    "DeployGroupProps",
    "RosApplication",
    "RosApplicationProps",
    "RosCluster",
    "RosClusterMember",
    "RosClusterMemberProps",
    "RosClusterProps",
    "RosDeployGroup",
    "RosDeployGroupProps",
    "RosUserDefineRegion",
    "RosUserDefineRegionProps",
    "UserDefineRegion",
    "UserDefineRegionProps",
]

publication.publish()