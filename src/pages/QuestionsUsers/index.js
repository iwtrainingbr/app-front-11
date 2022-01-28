import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Switch from '@mui/material/Switch';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState, useEffect} from "react";
import {Divider} from "@mui/material";
const API_URL = 'https://front-11-project-default-rtdb.firebaseio.com';

export default function QuestionsUsers() {
  const [questionUsers, setquestionUsers] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    fetch (API_URL+'/questions.json')
      .then(response => response.json())
      .then(response => {
        let questionsUsers = [];

        for (let id in response) {
          questionsUsers.push(response[id]);
        }

        setquestionUsers(questionsUsers);
      });
  }, [])

  

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
    <div>
        <h2>Pagina de Perguntas de Usuarios</h2>

        <Divider/>

      {questionUsers.map((cadaQuestions, id) => (
        <Accordion expanded={expanded === 'panel'+id} onChange={handleChange('panel'+id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {cadaQuestions.category}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {cadaQuestions.name} Não<Switch/>Sim
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
