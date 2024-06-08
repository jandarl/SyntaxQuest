import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import PageHeader from "/src/Components/Body/PageHdr";
import JSONData from '/src/Data/website-history.json';
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';


function WebsiteHistory({vwSize, isWorkspace}){

    function handleBCClick(){
        isWorkspace(false);
    }

    function pageBreadCrumb(){
        return (
            <Breadcrumb>
                <Breadcrumb.Item onClick={handleBCClick} className="bcStyle vt323-regular prevent-select">Home</Breadcrumb.Item>
                <Breadcrumb.Item active className="bcStyle vt323-regular prevent-select">Website History</Breadcrumb.Item>
            </Breadcrumb>
        );
    }

    return(
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            {pageBreadCrumb()}
            <div className="HdrParent">
                <PageHeader title={JSONData.Title} description={JSONData.Subtitle}/>
            </div>
            <div className={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
                <h6 className="updateHdr courier-prime-bold">Author's Notes</h6>
                <p className="updateList courier-prime-regular" style={{textAlign : "center"}}>
                    I would like to thank you for browsing this personal project website. I have decided to post all the updates I make in this page
                    to communicate atleast a bit to the guest how the website is coming along. As you may have observed, the website updates in the 
                    past few weeks has been slow and small. I have been working on some projects that is not yet ready to be published but hopefully soon,
                    I could start posting it here. I am also starting to work my way in learning Database (PostgreSQL) which I hopefully could also post 
                    some of my progress here when I have grasped it enough. Thank you for visiting and hopefully some of the things I have posted previously
                    helped you in any way.   
                </p>
                <table>
                <thead>
                    <tr key={"tablehdr"}>
                       <th className="updateHdr courier-prime-bold">Date</th>
                       <th className="updateHdr courier-prime-bold">Update</th>
                    </tr>
                </thead>
                <tbody>
                   {JSONData.Dates.map((item, index) => 
                      <tr key={item}>
                        <td className="updateList courier-prime-regular">{item}</td>
                        <td className="updateList courier-prime-regular">{JSONData.Description[index]}</td>
                      </tr>
                    )} 
                </tbody>
                </table>
            </div>
        </div>     
    )
}

export default WebsiteHistory;