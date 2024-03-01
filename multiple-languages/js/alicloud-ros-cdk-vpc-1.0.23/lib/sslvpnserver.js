"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SslVpnServer = exports.SslVpnServerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "SslVpnServerProperty", { enumerable: true, get: function () { return vpc_generated_1.RosSslVpnServer; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::SslVpnServer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSslVpnServer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
 */
class SslVpnServer extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosSslVpnServer = new vpc_generated_1.RosSslVpnServer(this, id, {
            compress: props.compress === undefined || props.compress === null ? false : props.compress,
            localSubnet: props.localSubnet,
            clientIpPool: props.clientIpPool,
            proto: props.proto === undefined || props.proto === null ? 'UDP' : props.proto,
            vpnGatewayId: props.vpnGatewayId,
            port: props.port === undefined || props.port === null ? 1194 : props.port,
            cipher: props.cipher === undefined || props.cipher === null ? 'AES-128-CBC' : props.cipher,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSslVpnServer;
        this.attrSslVpnServerId = rosSslVpnServer.attrSslVpnServerId;
    }
}
exports.SslVpnServer = SslVpnServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NsdnBuc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3NsdnBuc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBdURoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXMUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUMxRixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM5RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3pFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMxRixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRSxDQUFDO0NBQ0o7QUFwQ0Qsb0NBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU3NsVnBuU2VydmVyIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zU3NsVnBuU2VydmVyIGFzIFNzbFZwblNlcnZlclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU3NsVnBuU2VydmVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1zc2x2cG5zZXJ2ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTc2xWcG5TZXJ2ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbGllbnRJcFBvb2w6IEl0IGlzIHRoZSBhZGRyZXNzIHNlZ21lbnQgdGhhdCBhc3NpZ25zIHRoZSBhY2Nlc3MgYWRkcmVzcyB0byB0aGUgY2xpZW50IHZpcnR1YWwgTklDLiBJdCBkb2VzIG5vdCByZWZlciB0byB0aGUgZXhpc3RpbmcgaW50cmFuZXQgc2VnbWVudCBvZiB0aGUgY2xpZW50LlxuICAgICAqIFdoZW4gdGhlIGNsaWVudCBhY2Nlc3NlcyB0aGUgbG9jYWwgZW5kIHRocm91Z2ggYW4gU1NMLVZQTiBjb25uZWN0aW9uLCB0aGUgVlBOIGdhdGV3YXkgYWxsb2NhdGVzIGFuIElQIGFkZHJlc3MgdG8gdGhlIGNsaWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgY2xpZW50IG5ldHdvcmsgc2VnbWVudC5cbiAgICAgKiBUaGUgbmV0d29yayBzZWdtZW50IGNhbm5vdCBjb25mbGljdCB3aXRoIHRoZSBMb2NhbFN1Ym5ldCBhZGRyZXNzIHNlZ21lbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2xpZW50SXBQb29sOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsb2NhbFN1Ym5ldDogSXMgdGhlIGFkZHJlc3Mgc2VnbWVudCB0aGF0IHRoZSBjbGllbnQgd2FudHMgdG8gYWNjZXNzIHRocm91Z2ggYW4gU1NMLVZQTiBjb25uZWN0aW9uLlxuICAgICAqIFRoZSBsb2NhbCBuZXR3b3JrIHNlZ21lbnQgY2FuIGJlIHRoZSBuZXR3b3JrIHNlZ21lbnQgb2YgdGhlIFZQQywgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgc3dpdGNoLCB0aGUgbmV0d29yayBzZWdtZW50IG9mIHRoZSBJREMgaW50ZXJjb25uZWN0ZWQgYnkgdGhlIGxlYXNlZCBsaW5lIGFuZCB0aGUgVlBDLCBhbmQgdGhlIG5ldHdvcmsgc2VnbWVudCBvZiB0aGUgY2xvdWQgc2VydmljZSBzdWNoIGFzIFJEU1xcL09TUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFN1Ym5ldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBuR2F0ZXdheUlkOiBJRCBvZiB0aGUgVlBOIGdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBuR2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjaXBoZXI6IFRoZSBlbmNyeXB0aW9uIGFsZ29yaXRobSB1c2VkIGJ5IFNTTC1WUE4uIFZhbHVlOlxuICAgICAqIEFFUy0xMjgtQ0JDIChkZWZhdWx0KSB8IEFFUy0xOTItQ0JDIHwgQUVTLTI1Ni1DQkMgfCBub25lXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2lwaGVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29tcHJlc3M6IFdoZXRoZXIgaXQgaXMgY29tcHJlc3NlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb21wcmVzcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgU1NMLVZQTiBzZXJ2ZXIuIFRoZSBsZW5ndGggaXMgMi0xMjggY2hhcmFjdGVycyBhbmQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBkYXNoZXMgKC0pLlxuICAgICAqIEJ1dCBpdCBjYW4ndCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcG9ydDogVGhlIHBvcnQgdXNlZCBieSB0aGUgU1NMLVZQTiBzZXJ2ZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDExOTQuIENhbm5vdCB1c2UgdGhlIGZvbGxvd2luZyBwb3J0czpcbiAgICAgKiAyMiwgMjIyMiwgMjIyMjIsIDkwMDAsIDkwMDEsIDkwMDIsIDc1MDUsIDgwLCA0NDMsIDUzLCA2OCwgMTIzLCA0NTEwLCA0NTYwLCA1MDAsIDQ1MDBcbiAgICAgKi9cbiAgICByZWFkb25seSBwb3J0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvdG86IFRoZSBwcm90b2NvbCB1c2VkIGJ5IHRoZSBTU0wtVlBOIHNlcnZlci4gQWxsb3dlZCB2YWx1ZXM6IFVEUCAoZGVmYXVsdCkgfCBUQ1AuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG8/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6U3NsVnBuU2VydmVyYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1NzbFZwblNlcnZlcmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1zc2x2cG5zZXJ2ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNzbFZwblNlcnZlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogU3NsVnBuU2VydmVyUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNzbFZwblNlcnZlcklkOiBJRCBvZiB0aGUgU1NMLVZQTiBzZXJ2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTc2xWcG5TZXJ2ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNzbFZwblNlcnZlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU3NsVnBuU2VydmVyID0gbmV3IFJvc1NzbFZwblNlcnZlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbXByZXNzOiBwcm9wcy5jb21wcmVzcyA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmNvbXByZXNzID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5jb21wcmVzcyxcbiAgICAgICAgICAgIGxvY2FsU3VibmV0OiBwcm9wcy5sb2NhbFN1Ym5ldCxcbiAgICAgICAgICAgIGNsaWVudElwUG9vbDogcHJvcHMuY2xpZW50SXBQb29sLFxuICAgICAgICAgICAgcHJvdG86IHByb3BzLnByb3RvID09PSB1bmRlZmluZWQgfHwgcHJvcHMucHJvdG8gPT09IG51bGwgPyAnVURQJyA6IHByb3BzLnByb3RvLFxuICAgICAgICAgICAgdnBuR2F0ZXdheUlkOiBwcm9wcy52cG5HYXRld2F5SWQsXG4gICAgICAgICAgICBwb3J0OiBwcm9wcy5wb3J0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMucG9ydCA9PT0gbnVsbCA/IDExOTQgOiBwcm9wcy5wb3J0LFxuICAgICAgICAgICAgY2lwaGVyOiBwcm9wcy5jaXBoZXIgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5jaXBoZXIgPT09IG51bGwgPyAnQUVTLTEyOC1DQkMnIDogcHJvcHMuY2lwaGVyLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTc2xWcG5TZXJ2ZXI7XG4gICAgICAgIHRoaXMuYXR0clNzbFZwblNlcnZlcklkID0gcm9zU3NsVnBuU2VydmVyLmF0dHJTc2xWcG5TZXJ2ZXJJZDtcbiAgICB9XG59XG4iXX0=