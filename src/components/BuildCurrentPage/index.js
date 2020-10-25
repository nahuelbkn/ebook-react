import React from "react";
import Page from "../Page";

export default class BuildCurrentPage extends React.Component
{
    render()
    {
        const {currentPage, cover, content, pageContent} = this.props;

        return (
            <>
                {/* {currentPage === 0 && <Page type="cover" imgUrl={cover}/>}
                {currentPage !== 0 && <Page type="page" content={pageContent.join(" ")} />} */}
            </>
            

        )
    }
}