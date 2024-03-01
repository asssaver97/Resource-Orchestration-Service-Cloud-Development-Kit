"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./anycasteip"), exports);
__exportStar(require("./anycasteipassociation"), exports);
__exportStar(require("./bgpgroup"), exports);
__exportStar(require("./bgpnetwork"), exports);
__exportStar(require("./bgppeer"), exports);
__exportStar(require("./commonbandwidthpackage"), exports);
__exportStar(require("./commonbandwidthpackageip"), exports);
__exportStar(require("./customergateway"), exports);
__exportStar(require("./dhcpoptionsset"), exports);
__exportStar(require("./dhcpoptionssetattachment"), exports);
__exportStar(require("./eip"), exports);
__exportStar(require("./eipassociation"), exports);
__exportStar(require("./eippro"), exports);
__exportStar(require("./eipsegment"), exports);
__exportStar(require("./flowlog"), exports);
__exportStar(require("./forwardentry"), exports);
__exportStar(require("./fullnatentry"), exports);
__exportStar(require("./grantinstancetocen"), exports);
__exportStar(require("./havip"), exports);
__exportStar(require("./havipassociation"), exports);
__exportStar(require("./ipsecserver"), exports);
__exportStar(require("./ipv4gateway"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./natip"), exports);
__exportStar(require("./natipcidr"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./prefixlist"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./trafficmirrorfilter"), exports);
__exportStar(require("./trafficmirrorsession"), exports);
__exportStar(require("./trafficmirrorsessionsourcesaddition"), exports);
__exportStar(require("./vswitchcidrreservation"), exports);
__exportStar(require("./virtualborderrouter"), exports);
__exportStar(require("./vpcpeerconnection"), exports);
__exportStar(require("./vpnattachment"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
__exportStar(require("./vpnpbrrouteentry"), exports);
__exportStar(require("./vpnrouteentry"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDJEQUF5QztBQUN6Qyw2REFBMkM7QUFDM0Msb0RBQWtDO0FBQ2xDLG1EQUFpQztBQUNqQyw2REFBMkM7QUFDM0Msd0NBQXNCO0FBQ3RCLG1EQUFpQztBQUNqQywyQ0FBeUI7QUFDekIsK0NBQTZCO0FBQzdCLDRDQUEwQjtBQUMxQixpREFBK0I7QUFDL0IsaURBQStCO0FBQy9CLHVEQUFxQztBQUNyQywwQ0FBd0I7QUFDeEIscURBQW1DO0FBQ25DLGdEQUE4QjtBQUM5QixnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLDBEQUF3QztBQUN4QywrQ0FBNkI7QUFDN0IsMENBQXdCO0FBQ3hCLDhDQUE0QjtBQUM1QiwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLGtFQUFnRDtBQUNoRCxxRUFBbUQ7QUFDbkQsK0NBQTZCO0FBQzdCLCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsaURBQStCO0FBQy9CLHdEQUFzQztBQUN0Qyx5REFBdUM7QUFDdkMsd0VBQXNEO0FBQ3RELDJEQUF5QztBQUN6Qyx3REFBc0M7QUFDdEMsc0RBQW9DO0FBQ3BDLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMsK0NBQTZCO0FBQzdCLHFEQUFtQztBQUNuQyxrREFBZ0M7QUFFaEMseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hbnljYXN0ZWlwYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9iZ3Bncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2JncG5ldHdvcmsnO1xuZXhwb3J0ICogZnJvbSAnLi9iZ3BwZWVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbmJhbmR3aWR0aHBhY2thZ2VpcCc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2RoY3BvcHRpb25zc2V0JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXRhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vZWlwYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9laXBwcm8nO1xuZXhwb3J0ICogZnJvbSAnLi9laXBzZWdtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd2xvZyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvcndhcmRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2Z1bGxuYXRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2dyYW50aW5zdGFuY2V0b2Nlbic7XG5leHBvcnQgKiBmcm9tICcuL2hhdmlwJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2lwc2Vjc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjZpbnRlcm5ldGJhbmR3aWR0aCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRpcCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGlwY2lkcic7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2wnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNsYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wZWVyaW5ncm91dGVyaW50ZXJmYWNlYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3BlZXJpbmdyb3V0ZXJpbnRlcmZhY2Vjb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXJpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5jbGllbnRjZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vc3NsdnBuc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcmZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNtaXJyb3JzZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcnNlc3Npb25zb3VyY2VzYWRkaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoY2lkcnJlc2VydmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdmlydHVhbGJvcmRlcnJvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZwY3BlZXJjb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBuYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3ZwbmNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92cG5nYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vdnBucGJycm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3ZwbnJvdXRlZW50cnknO1xuXG4vLyBBTElZVU46OlZQQyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19