import { React, /*useState, useEvent*/ } from 'react';

import { Post } from '../Post/Post';

export async function SearchResults() {
    
    //const [results, setResults] = useState();


    return (
        <ul>
            {results.map((result) => {
                <li key={result} result={result}>{result}</li>
            })}
        </ul>
}