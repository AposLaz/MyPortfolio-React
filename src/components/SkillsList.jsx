import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import {skillsList} from '../styles/styles'

export default function SkillsList() {
  
  const skills = ['SQL (MySQL, PostgreSQl)', 
                  'RabbitMQ', 
                  'Google Could Platform',
                  'JAVA', 
                  'SpringBoot',
                  'PHP', 
                  'Python',
                  'JQuery', 
                  'Bootstrap5', 
                  'JSON-LD',
                  'Orion-LD CB', 
                  'Scorpio CB',
                  'Stellio CB',
                  'Pushpin' ]

  return (
    <List sx={skillsList.list}>
      {skills.map((skill, index)=>{
       return  (<ListItem sx={skillsList.item} key={index}> 
                     <CheckIcon className='media-list-icon' style={skillsList.icon}/>
                    <ListItemText primary={skill} sx={skillsList.text} disableTypography/>
            </ListItem>)
      })}
    </List>
  );
}
