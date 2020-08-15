import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'; //subYears significa subtrair os anos, ela é da biblioteca date-fns

import { Container } from './styles';

type HeatmapValue = {
  date: Date; // É o dia do calendario 
  count: number; // O quanto a pessoa contribui no dia
}

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1); // Aqui eu estou subtraindo minha data atual por 1, então esse calendario vai representar todos os dias de um ano atrás
  const endDate = new Date(); // Pega data atual do computador

  //                         NÃO ESTÁ SENDO USADO
  // const values: HeatmapValue[] = []; // Caso tenha duvida ir no tempo 1:24:00 do video

  // values.push({ date: new Date(), count: 3 }); // Aqui vou dizer que no dia de hoje eu contribui 3

  return (
    <Container>
      <div className="wrapper">
        <Heatmap 
          startDate={startDate} //data de inicio
          endDate={endDate} // data final, que seria sempre a minha atual
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5} // tamanho dos meus quadrados 
          classForValue={(item: HeatmapValue) => {
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`;
          }} // é a forma como vamos estilizar cada um desses quadrados internos com base na quantidade de contribuições das pessoas (1:25:00 video)
          showWeekdayLabels // vai mostrar os dias da semana
        />
      </div>

      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) })

    currentDate = addDays(currentDate, 1);
  }

  return values;

} // Vai gerar as datas aleatorias (1:31:00 video)

export default RandomCalendar;