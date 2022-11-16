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
__exportStar(require("./grantinstancetocen"), exports);
__exportStar(require("./ipsecserver"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./natip"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./virtualborderrouter"), exports);
__exportStar(require("./vpcpeerconnection"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
__exportStar(require("./vpnpbrrouteentry"), exports);
__exportStar(require("./vpnrouteentry"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDJEQUF5QztBQUN6Qyw2REFBMkM7QUFDM0Msb0RBQWtDO0FBQ2xDLG1EQUFpQztBQUNqQyw2REFBMkM7QUFDM0Msd0NBQXNCO0FBQ3RCLG1EQUFpQztBQUNqQywyQ0FBeUI7QUFDekIsK0NBQTZCO0FBQzdCLDRDQUEwQjtBQUMxQix1REFBcUM7QUFDckMsZ0RBQThCO0FBQzlCLGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsK0NBQTZCO0FBQzdCLDBDQUF3QjtBQUN4QiwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLGtFQUFnRDtBQUNoRCxxRUFBbUQ7QUFDbkQsK0NBQTZCO0FBQzdCLDBEQUF3QztBQUN4QyxvREFBa0M7QUFDbEMsOENBQTRCO0FBQzVCLHFEQUFtQztBQUNuQyxpREFBK0I7QUFDL0Isd0RBQXNDO0FBQ3RDLHNEQUFvQztBQUNwQyxrREFBZ0M7QUFDaEMsK0NBQTZCO0FBQzdCLHFEQUFtQztBQUNuQyxrREFBZ0M7QUFFaEMseUJBQXlCO0FBQ3pCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcCc7XG5leHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2JncGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL2JncHBlZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaGNwb3B0aW9uc3NldGF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9laXAnO1xuZXhwb3J0ICogZnJvbSAnLi9laXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VpcHBybyc7XG5leHBvcnQgKiBmcm9tICcuL2VpcHNlZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9nJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhbnRpbnN0YW5jZXRvY2VuJztcbmV4cG9ydCAqIGZyb20gJy4vaXBzZWNzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjZpbnRlcm5ldGJhbmR3aWR0aCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRpcCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2wnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNsYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wZWVyaW5ncm91dGVyaW50ZXJmYWNlYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3BlZXJpbmdyb3V0ZXJpbnRlcmZhY2Vjb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGVhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3NzbHZwbmNsaWVudGNlcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5zZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi92aXJ0dWFsYm9yZGVycm91dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjcGVlcmNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92cG5jb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBuZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL3ZwbnBicnJvdXRlZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi92cG5yb3V0ZWVudHJ5JztcblxuLy8gQUxJWVVOOjpWUEMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbiJdfQ==