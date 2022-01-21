import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [faq, setFaq] = React.useState([
    {
      question: "Como funciona",
      answer: "Funciona assim bla bla bla",
    },
    {
      question: "É seguro?",
      answer: "Depende....",
    },
    {
      question: "Quem já usou?",
      answer: "Olha esses depoimentos",
    },
    {
      question: "Posso bloquear pessoas?",
      answer: "Não.",
    },
    {
      question: "É confiavel?",
      answer: "Não.",
    },
  ]);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {faq.map((cadaFaq, id) => (
        <Accordion expanded={expanded === 'panel'+id} onChange={handleChange('panel'+id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Pergunta X
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{cadaFaq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {cadaFaq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
