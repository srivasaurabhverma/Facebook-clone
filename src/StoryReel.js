import React from 'react'
import Story from './Story'
import "./StoryReel.css"
function StoryReel() {
    return (
        <div className="StoryReel">
             <Story 
             image="https://www.insidesport.co/wp-content/uploads/2020/08/CSK-2020.jpg"
             profilesrc="https://images.thequint.com/thequint%2F2021-04%2F15d4fcf5-7c0e-481e-9dc6-37e444c58fef%2FIPL21M8_55.JPG?rect=0%2C0%2C3872%2C2178&auto=format%2Ccompress&fmt=webp&format=webp&w=480&dpr=2.6"
             title="Mahendra Singh Dhoni"
             />
             <Story 
             image="https://staticg.sportskeeda.com/editor/2021/04/d146b-16182030910872-800.jpg"
             profilesrc="https://images.hindustantimes.com/img/2021/05/02/550x309/kohli_rcb_1_1619934347768_1619934353200.png"
             title="Virat Kohli"
             />
             <Story 
             image="http://bsmedia.business-standard.com/_media/bs/img/article/2013-04/04/full/1365081671-2656.JPG"
             profilesrc="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170658/rohit-sharma.jpg"
             title="Rohit Sharma"
             />
             <Story 
             image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/19/965055-delhi-capitals.jpg"
             profilesrc="https://pbs.twimg.com/profile_images/1255017319635410944/lFsXKEs__400x400.jpg"
             title="Rishab Pant"
             />
        </div>
    )
}

export default StoryReel
