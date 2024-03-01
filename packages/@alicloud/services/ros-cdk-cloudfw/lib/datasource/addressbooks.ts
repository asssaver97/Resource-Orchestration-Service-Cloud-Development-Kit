import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressBooks } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAddressBooks as AddressBooksProperty };

/**
 * Properties for defining a `AddressBooks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export interface AddressBooksProps {

    /**
     * Property groupType: Address Book, it can be set to include:
     * - **ip**: an IP address book
     * - **domain**: domain name address book
     * - **port**: port Address Book
     * - **tag**:ECS tag address book.
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * Property lang: The language type of the received message.
     * - **zh** (default): Chinese.
     * - **en**: English.
     */
    readonly lang?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CLOUDFW::AddressBooks`, which is used to query the information about address books that are used for access control in Cloud Firewall (CFW).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddressBooks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
 */
export class AddressBooks extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AddressBooksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AddressBooks: The list of address books.
     */
    public readonly attrAddressBooks: ros.IResolvable;

    /**
     * Attribute GroupUuids: The list of group uuids.
     */
    public readonly attrGroupUuids: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressBooksProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAddressBooks = new RosAddressBooks(this, id,  {
            groupType: props.groupType,
            lang: props.lang,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddressBooks;
        this.attrAddressBooks = rosAddressBooks.attrAddressBooks;
        this.attrGroupUuids = rosAddressBooks.attrGroupUuids;
    }
}
