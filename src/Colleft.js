import React from 'react';
import { Marquee } from './Marquee.js';
import { NewNews } from './NewNews.js';

export function Colleft(props) {

    return (
        <div className="colLeft">
            <iframe className="video" src="https://www.facebook.com/plugins/video.php?href= https%3A%2F%2Fwww.facebook.com%2Fwatch%2F?v=787813908626947&amp;width=300&amp;height=170&amp;show_text=false&amp;appId=1409908175930143" width="300" height="170"  scrolling="no" frameBorder="0" allowtransparency="true" allowFullScreen={true}></iframe>
            <Marquee txt="Эрүүл мэндийн яамнаас коронавирусний халдварын нөхцөл байдал,  тархалтын талаарх ээлжит мэдээллээ хийж байна."/>
            <NewNews/>
        </div>
    )
}