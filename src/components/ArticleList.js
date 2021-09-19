import React from "react";
import Article from "./Article"

function ArticleList({posts,children, textPosition=""}){

    return (
        <main className={textPosition}>
        {posts.map((item)=>{
            return (
                <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
            )
        }
        
        )};

        </main>

    );
}
export default ArticleList