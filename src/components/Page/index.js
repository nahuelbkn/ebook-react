import React from "react";


export default class Page extends React.Component
{
    render()
    {
        const {type, imgUrl, content} = this.props;
        return (
            <>
                { type == "cover" ? <div><a href={imgUrl} target="_blank"><img src={imgUrl} alt="Portada"/></a></div> : <div>{content}</div>}
            </>

        )
    }
}
