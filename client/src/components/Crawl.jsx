import * as React from 'react';
import '../styles/Crawl.scss';
import { CardContent, CardMedia, Typography, Card } from '@mui/material';

export default function Crawl() {

return (

<Card className ="crawl">
<CardMedia classname="crawl-media"/>
<CardContent>
<Typography classname="crawl-title"
variant="h5"
>
CRAWL TYPE
</Typography>
</CardContent>
</Card>
);
}