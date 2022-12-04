import './profileOrders.css'

const ProfileOrders = () => {
    return (
        <>
            <div className="profileOrdersContainer">
                <div className="profileOrdersContents">
                    <div className="profileOrdersStatusTitle">Active Orders &nbsp;<img src={require('../../assets/icn_arrow_drop.png')} alt="" className='statusDrop' /></div>
                    <div className="profileOrderCardsContainer">
                        <div className="profileOrderCard">
                            <div className="orderCardContents">
                                <div className="profileOrderDetails">
                                    <div className="profileOrderId">Order id: 1234567890</div>
                                    <div className="profileOrderStatus">Out for Delivery</div>
                                </div>
                                <div className="profileOrderKitchenName">The Boutique Kitchen</div>
                                <div className="profileOrderKitchenAddress">Shiekh Zayed Road, , Dubai, UAE</div>
                                <div className="profileOrderItemsCount">3 Items  |  AED85.76</div>
                                <div className="profileOrderButtons">
                                    <button className="profileOrderDetailsButton">DETAILS</button>
                                    <button className='profileOrderStatusButton'>STATUS</button>
                                </div>
                            </div>
                        </div>


                        <div className="profileOrderCard">
                            <div className="orderCardContents">
                                <div className="profileOrderDetails">
                                    <div className="profileOrderId">Order id: 1234567890</div>
                                    <div className="profileOrderStatus">Out for Delivery</div>
                                </div>
                                <div className="profileOrderKitchenName">The Boutique Kitchen</div>
                                <div className="profileOrderKitchenAddress">Shiekh Zayed Road, , Dubai, UAE</div>
                                <div className="profileOrderItemsCount">3 Items  |  AED85.76</div>
                                <div className="profileOrderButtons">
                                    <button className="profileOrderDetailsButton">DETAILS</button>
                                    <button className='profileOrderStatusButton'>STATUS</button>
                                </div>
                            </div>
                        </div>

                        <div className="profileOrderCard">
                            <div className="orderCardContents">
                                <div className="profileOrderDetails">
                                    <div className="profileOrderId">Order id: 1234567890</div>
                                    <div className="profileOrderStatus">Out for Delivery</div>
                                </div>
                                <div className="profileOrderKitchenName">The Boutique Kitchen</div>
                                <div className="profileOrderKitchenAddress">Shiekh Zayed Road, , Dubai, UAE</div>
                                <div className="profileOrderItemsCount">3 Items  |  AED85.76</div>
                                <div className="profileOrderButtons">
                                    <button className="profileOrderDetailsButton">DETAILS</button>
                                    <button className='profileOrderStatusButton'>STATUS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileOrders