import React, { useState } from 'react'
import Airtable from 'airtable'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const base = new Airtable({ apiKey: "keyIFFzaIXD9tzQwH" }).base('appeS7JqbqChh9tHv');

function Blog() {

    const params = useParams();
    const [post, setPost] = useState()


    useEffect(() => {
            base("Table 1").find(`${params.id}`, (err, record) => {
                if (err) {
                    console.error(err); return;
                }
                console.log(record.fields)
                setPost(record.fields)
            });    
    }, [params.id])


    return (
        <div>
            Blog
        </div>

    )
}

export default Blog