import React, {useState} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import PageHeader from '/src/Components/Body/PageHdr';
import PrefacePage from "./SyntaxQuestPages/PrefacePage";
import BgndMenuPage from "./SyntaxQuestPages/BgndMenuPage";
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';
import './SyntaxQuest.css';

function SyntaxQuest({vwSize, isWorkspace}){

    const [page, setPage] = useState(1);

    function handleBCClick(){
        isWorkspace(false);
    }

    function pageBreadCrumb(){
        return (
            <Breadcrumb>
                <Breadcrumb.Item onClick={handleBCClick} className="bcStyle vt323-regular prevent-select">Home</Breadcrumb.Item>
                <Breadcrumb.Item active className="bcStyle vt323-regular prevent-select">Syntax Quest</Breadcrumb.Item>
            </Breadcrumb>
        );
    }

    function showPageLinks() {
        return (
            <Pagination className="pageParent" size="lg">
                <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
                <Pagination.Item onClick={() => setPage(2)}>2</Pagination.Item>
            </Pagination>
        );
    }

    function showPage(){
        switch(page){
            case 1:
                return(<PrefacePage />);
                break;

            case 2:
                return(<BgndMenuPage />);
                break;

            default:
                return(<PrefacePage />);
                break;
        }
    }

    return(
        <>
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            {pageBreadCrumb()}
            <div className="HdrParent">
                <PageHeader title="Syntax Quest" description="A brief discussion on the history and how I built my first website"/>
            </div>
            <div className={vwSize > 650 ? "bodyParentClear" : "smallBodyParentClear"}>
            {showPageLinks()}
            {showPage()}
            </div>
        </div>     
        </>
    )
}

export default SyntaxQuest;