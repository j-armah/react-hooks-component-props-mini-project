import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
    const bentoBoxes = (minutes) => {
        let num = Math.ceil(minutes / 10)
        let bento = ''
        for (let i=0; i < num ;i++) {
            bento += "🍱"
        }
        return bento
    }
    return (
        <article>
            <h3>{ title }</h3>
            <small>{ date } • {bentoBoxes(minutes)} { minutes } min read</small>
            <p>{ preview }</p>
        </article>
    )
}

export default Article