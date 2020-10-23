import React from "react";
import Page from './components/Page/index';
import book from "./book.json";
import "./App.css";

const PAGE_SIZE = 100;

export default class App extends React.Component {
    constructor(){
        super();

        //Calculate total pages
        const totalWords = this.getWordCount(book.content);
        const totalPages = Math.ceil(totalWords / PAGE_SIZE);

        this.state = {
            currentPage: 0,
            totalPages:totalPages,
            title: book.title,
            cover: book.cover,
            author:book.author,
            content: book.content
        };
    }

    getWordCount = (text)=>{
        var matches = text.match(/\S+/g) ;
        return matches?matches.length:0;
    }

    handleNextPage = ()=>{
        if(this.state.currentPage !== this.state.totalPages ){
            this.setState({currentPage: this.state.currentPage+1 });
        }
    }

    handlePrevPage = ()=>{
        if(this.state.currentPage > 0 ){
            this.setState({currentPage: this.state.currentPage-1 });
        }
    }

    render(){
        const {title, author, cover, currentPage, totalPages, content} = this.state;
        const words = content.split(" ");
        const pageContent = words.slice((currentPage-1)*PAGE_SIZE, (currentPage-1)*PAGE_SIZE + PAGE_SIZE);

        return(
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <div className="page-head">
                    <div className="button-container">
                        <button onClick={this.handlePrevPage}>Previous Page</button>
                        <button onClick={this.handleNextPage}>Next Page</button>
                    </div>
                    <div>{currentPage}/{totalPages}</div>
                </div>
                {currentPage === 0 && <Page type="cover" imgUrl={cover}/>}
                {currentPage !== 0 && <Page type="page" content={pageContent.join(" ")} />}
            </div>
        );
    }
}