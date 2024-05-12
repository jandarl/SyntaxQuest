import React from "react";
import PageHeader from '/src/Components/Body/PageHdr';
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';
import './SyntaxQuest.css';

function SyntaxQuest({vwSize}){
    return(
        <>
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            <div className="HdrParent">
                <PageHeader title="Syntax Quest" description="Detailed description on how I built my first website"/>
            </div>
            <div className={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
                <p style={{color: 'aliceblue'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat at arcu non faucibus. Aenean hendrerit consectetur finibus. Donec justo sem, aliquam vel mollis tincidunt, varius eget eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam feugiat magna ac libero vehicula, et condimentum tellus viverra. Nullam molestie odio et diam egestas, pellentesque convallis felis sollicitudin. Vivamus nec laoreet justo, id varius lorem. Aenean risus metus, suscipit non vehicula a, lacinia placerat diam. Maecenas dolor turpis, volutpat tempor ante ut, vulputate luctus nunc. Ut lacinia nisi id erat interdum, sit amet fringilla est sollicitudin. Nunc aliquam gravida urna vel fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam tempus orci tortor. Proin ac velit vitae lectus efficitur sodales.
                </p>
            </div>
        </div>     
        </>
    )
}

export default SyntaxQuest;