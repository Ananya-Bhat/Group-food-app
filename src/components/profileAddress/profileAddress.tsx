import './profileAddress.css'

const ProfileAddress = () => {
    return (
        <>
            <div className="profileAddressContainer">
                <div className="profileAddressContents">
                    <div className="profileAddressTitle">
                        <div className="profileAddressLocation">My Addresses (2)</div>
                        <img src={require('../../assets/Add-new.png')} className='addNewAddressImage' />
                    </div>
                    <div className="profileAddressCardsContainer">
                        <div className="profileAddressCard">
                            <div className="addressCardContents">
                                <div className="profileAddressDetails">
                                    <div className="profileAddressLocation">Home</div>
                                    <div className="profileAddressStatus">
                                        <img src={require('../../assets/icn_check-black.png')} alt="" className='icnCheckBlack' />
                                        <div className="addressStatusText">Primary</div>
                                    </div>
                                </div>

                                <div className="profileAddressInfo">Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE</div>
                                <div className="profileAddressButtons">
                                    <button className="profileAddressEditButton">Edit</button>
                                    <button className='profileAddressEditButton'>Delete</button>
                                </div>
                            </div>
                        </div>


                        <div className="profileAddressCard">
                            <div className="addressCardContents">
                                <div className="profileAddressDetails">
                                    <div className="profileAddressLocation">Home</div>
                                    <div className="profileAddressStatus">
                                        <img src={require('../../assets/icn_check-black.png')} alt="" className='icnCheckBlack' />
                                        <div className="addressStatusText">Primary</div>
                                    </div>
                                </div>

                                <div className="profileAddressInfo">Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE</div>
                                <div className="profileAddressButtons">
                                    <button className="profileAddressEditButton">Edit</button>
                                    <button className='profileAddressEditButton'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAddress