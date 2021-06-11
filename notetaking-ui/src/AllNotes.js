import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Link } from 'react-router-dom';

const NOTES_QUERY = gql`
{
    allNotes {
        title
        content
        _id
        date
    }
}`
const AllNotes = () => {
    const { loading, error, data } = useQuery(NOTES_QUERY);

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container m-t-20">
            <h1 className="page-title">All Notes</h1>

            <div className="allnotes-page">
                <div className="columns is-multiline">
                    {data.allNotes.map(note => (
                        <div className="column is-one-third" key={note._id}>
                                              
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">Component</p>
                                </header>
                                <div class="card-content">
                                    <div className="content">
                                    
                        <br /> 
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <Link to={`note/${note._id}`} className="card-footer-item">EditNote
                                    </Link>
                                    <a href="#" className="card-footer-item">Delete</a>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllNotes;