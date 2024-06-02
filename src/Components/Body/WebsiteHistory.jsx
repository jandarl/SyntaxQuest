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