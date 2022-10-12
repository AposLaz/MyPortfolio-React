import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {projectCardGitIcon, projectCardStyle} from '../styles/styles' 
import { IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({id,title,desc,img,url}) {
  return (
    <Card sx={projectCardStyle} key={id}>
      <Link href={url} target='_blank' rel="noreferrer noopener">
        <CardMedia
            component="img"
            alt={title}
            height="150"
            image={img}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{position: 'absolute', bottom: '0px'}}>
        <Button 
          size="small"
          disableRipple 
          disableFocusRipple 
          aria-label='github' 
          onClick={() => window.open(url, "_blank", 'noopener,noreferrer')}  
          sx={projectCardGitIcon.buttonTxt}  
        >Read More</Button>
        <IconButton 
            sx={projectCardGitIcon.button} 
            disableRipple 
            disableFocusRipple 
            aria-label='github'
            onClick={() => window.open(url, "_blank", 'noopener,noreferrer')}>
            <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
