import React from "react"; 

export default class Pagination extends React.Component
{
    render()
    {
        const {currentPage, totalPages, handlePrevPage, handleNextPage} = this.props;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    {/* {
                        currentPage == 0 && (
                            <li className="page-item disabled">
                                <button onClick={handlePrevPage} className="page-link">Previous Page</button>
                            </li>
                        )
                    } */}
                    {
                        currentPage != 0 && (
                            <li className="page-item">
                                <button onClick={handlePrevPage} className="page-link">Previous Page</button>
                            </li>
                        )
                    }
                    {/* {
                        currentPage == totalPages && (
                            <li className="page-item disabled">
                                <button onClick={handleNextPage}className="page-link">Next Page</button>
                            </li>
                        )
                    } */}
                    {
                        currentPage != totalPages && (
                            <li className="page-item">
                                <button onClick={handleNextPage}className="page-link">Next Page</button>
                            </li>
                        )
                    
                    }
                        
                </ul>
                <div>{currentPage}/{totalPages}</div>
            </nav>
        )
    }
}