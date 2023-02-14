"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMLProvider = exports.SAMLProviderProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "SAMLProviderProperty", { enumerable: true, get: function () { return ram_generated_1.RosSAMLProvider; } });
/**
 * A ROS resource type:  `ALIYUN::RAM::SAMLProvider`
 */
class SAMLProvider extends ros.Resource {
    /**
     * Create a new `ALIYUN::RAM::SAMLProvider`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSAMLProvider = new ram_generated_1.RosSAMLProvider(this, id, {
            samlProviderName: props.samlProviderName,
            description: props.description,
            samlMetadataDocumentUrl: props.samlMetadataDocumentUrl,
            samlMetadataDocument: props.samlMetadataDocument,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSAMLProvider;
        this.attrArn = rosSAMLProvider.attrArn;
        this.attrSamlProviderName = rosSAMLProvider.attrSamlProviderName;
    }
}
exports.SAMLProvider = SAMLProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtbHByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtbHByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBNEJoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGVBQWUsR0FBRyxJQUFJLCtCQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5Qix1QkFBdUIsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1lBQ3RELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7U0FDbkQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7SUFDckUsQ0FBQztDQUNKO0FBckNELG9DQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NBTUxQcm92aWRlciB9IGZyb20gJy4vcmFtLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NBTUxQcm92aWRlciBhcyBTQU1MUHJvdmlkZXJQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkFNOjpTQU1MUHJvdmlkZXJgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0FNTFByb3ZpZGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2FtbFByb3ZpZGVyTmFtZTogSWRQIE5hbWUuIFRoZSBJZFAgbmFtZSBjYW4gY29udGFpbiBhIG1heGltdW0gb2YgMTI4IGNoYXJhY3RlcnMgYW5kIG9ubHkgbGV0dGVycywgbnVtYmVycywgYW5kIHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBhY2NlcHRlZDogaHlwaGVucyAoLSksIHBlcmlvZHMgKC4pLCBhbmQgdW5kZXJzY29yZXMgKF8pLiBJdCBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYW1sUHJvdmlkZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIGNhbiBjb250YWluIGEgbWF4aW11bSBvZiAyNTYgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNhbWxNZXRhZGF0YURvY3VtZW50OiBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LiBUaGUgY29udGVudCBtdXN0IGJlIDEgdG8gMTAyLDQwMCBieXRlcyBpbiBsZW5ndGguWW91IG11c3Qgc3BlY2lmeSBvbmUgb2YgdGhlIFNBTUxNZXRhZGF0YURvY3VtZW50IGFuZCBTQU1MTWV0YWRhdGFEb2N1bWVudFVSTCBwcm9wZXJ0aWVzLCBidXQgeW91IGNhbm5vdCBzcGVjaWZ5IGJvdGggb2YgdGhlbS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYW1sTWV0YWRhdGFEb2N1bWVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNhbWxNZXRhZGF0YURvY3VtZW50VXJsOiBUaGUgVVJMIGZvciB0aGUgZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBTQU1MIG1ldGFkYXRhIGRvY3VtZW50LiBUaGUgVVJMIG11c3QgcG9pbnQgdG8gYSBkb2N1bWVudCBsb2NhdGVkIGluIGFuIEhUVFAgb3IgSFRUUFMgd2ViIHNlcnZlciBvciBhbiBBbGliYWJhIENsb3VkIE9TUyBidWNrZXQuIEV4YW1wbGVzOiBvc3M6Ly9yb3MvZG9jdW1lbnQvZGVtbyBhbmQgb3NzOi8vcm9zL2RvY3VtZW50L2RlbW8/UmVnaW9uSWQ9Y24taGFuZ3pob3UuIFRoZSBVUkwgY2FuIGJlIHVwIHRvIDEsMDI0IGJ5dGVzIGluIGxlbmd0aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzYW1sTWV0YWRhdGFEb2N1bWVudFVybD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6UkFNOjpTQU1MUHJvdmlkZXJgXG4gKi9cbmV4cG9ydCBjbGFzcyBTQU1MUHJvdmlkZXIgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFybjogQVJOLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU0FNTFByb3ZpZGVyTmFtZTogSWRQIE5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTYW1sUHJvdmlkZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkFNOjpTQU1MUHJvdmlkZXJgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFNBTUxQcm92aWRlclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NBTUxQcm92aWRlciA9IG5ldyBSb3NTQU1MUHJvdmlkZXIodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzYW1sUHJvdmlkZXJOYW1lOiBwcm9wcy5zYW1sUHJvdmlkZXJOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2FtbE1ldGFkYXRhRG9jdW1lbnRVcmw6IHByb3BzLnNhbWxNZXRhZGF0YURvY3VtZW50VXJsLFxuICAgICAgICAgICAgc2FtbE1ldGFkYXRhRG9jdW1lbnQ6IHByb3BzLnNhbWxNZXRhZGF0YURvY3VtZW50LFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NBTUxQcm92aWRlcjtcbiAgICAgICAgdGhpcy5hdHRyQXJuID0gcm9zU0FNTFByb3ZpZGVyLmF0dHJBcm47XG4gICAgICAgIHRoaXMuYXR0clNhbWxQcm92aWRlck5hbWUgPSByb3NTQU1MUHJvdmlkZXIuYXR0clNhbWxQcm92aWRlck5hbWU7XG4gICAgfVxufVxuIl19