import * as React from 'react';
import '../styles/Crawls.scss';
import Crawl from './Crawl';

export default function Crawls() {

return (

//returns two identical 'crawl' components for now. Will be converted to separate components later.
<div className="crawls">
<Crawl/>
<Crawl/>
</div>
)
}