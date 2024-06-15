import React, {useState} from "react";
import Collapsible from 'react-collapsible';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import PageHeader from "/src/Components/Body/PageHdr";
import Stack from 'react-bootstrap/Stack';
import JSONData from '/src/Data/website-history.json';
import ANotesData from '/src/Data/author-notes.json';
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';


function WebsiteHistory({vwSize, isWorkspace}){
    const [showANote, setShowAnote] = useState(false);
    const [showChanges, setShowChanges] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

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

    function toggleCollapsible(){
        var id = this.value;

        setShowAnote(false);
        setShowChanges(false);
        setShowHistory(false);

        switch(id)
        {
            case "author-note": setShowAnote(true); break;
            case "change-info": setShowChanges(true); break;
            case "change-hist": setShowHistory(true); break;
        }
    }

    function closeCollapsible(){
        var id = this.value;

        switch(id)
        {
            case "author-note": setShowAnote(false); break;
            case "change-info": setShowChanges(false); break;
            case "change-hist": setShowHistory(false); break;
        }
    }

    return(
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            {pageBreadCrumb()}
            <div className="HdrParent">
                <PageHeader title={JSONData.Title} description={JSONData.Subtitle}/>
            </div>
            <div className={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
                <Stack gap={3} style={{margin: "1rem"}}>
                    <Collapsible className="hiddenHistPage fugaz-one-regular" openedClassName="openHistPage fugaz-one-regular"
                           onOpening={toggleCollapsible} onClosing={closeCollapsible} open={showANote}  
                           trigger={showANote ? "Hide Author's Note" : "View Author's Note"} value="author-note">
                        <h6 className="updateHdr courier-prime-bold">{ANotesData.title}</h6>
                        <p className="updateList courier-prime-regular" style={{textAlign : "justify"}}>
                            {ANotesData.notes}
                        </p>
                    </Collapsible>
                    <Collapsible className="hiddenHistPage fugaz-one-regular" openedClassName="openHistPage fugaz-one-regular"   
                           onOpening={toggleCollapsible} onClosing={closeCollapsible} open={showChanges}
                           trigger={showChanges ? "Hide " + ANotesData.section : "View " + ANotesData.section} value="change-info">
                        <p className="updateList courier-prime-regular" style={{textAlign : "left"}}>{ANotesData.change}</p>
                        <ul className="updateList courier-prime-regular">
                            {ANotesData.list.map((item) => 
                                <li style={{padding: "5px"}} key={item}>{item}</li>
                            )} 
                        </ul>
                        <a href={ANotesData.github} className="courier-prime-regular">Link to Github Repository</a>
                    </Collapsible>
                    <Collapsible className="hiddenHistPage fugaz-one-regular" openedClassName="openHistPage fugaz-one-regular"   
                           onOpening={toggleCollapsible} onClosing={closeCollapsible} open={showHistory}
                           trigger={showHistory ? "Hide Update History" : "View Update History"} value="change-hist">
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
                    </Collapsible>
                </Stack>             
            </div>
        </div>     
    )
}

export default WebsiteHistory;