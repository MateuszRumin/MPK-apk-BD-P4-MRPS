import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDrag, useDrop } from 'react-dnd';

let objStops = 0;
let iloscwierszy;

const ItemTypes = {
  ROW: 'row',
};

const SectionMainLinesHoliday = ({ selectLine }) => {
  const [weekDays, setWeekDays] = useState([]);

  const getStopsFreeForLine = () => {
    if (objStops === 0) {
      console.log('brak danych');
    } else {
      axios
        .post('http://localhost:3001/select/routes/nd', objStops)
        .then(response => {
          const weekDays = response.data;
          setWeekDays(weekDays);
          console.log('Pobranie ulic z bazy');
          console.log(weekDays);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    iloscwierszy = weekDays.length;
    function onObjectChange(props) {
      console.log(props);
      objStops = props;
      getStopsFreeForLine();
    }
    if (selectLine.id_line) {
      onObjectChange(selectLine);
    }
  }, [selectLine]);

  const moveRow = (dragIndex, hoverIndex) => {
    const draggedRow = weekDays[dragIndex];
    const updatedWeekDays = [...weekDays];
    updatedWeekDays.splice(dragIndex, 1);
    updatedWeekDays.splice(hoverIndex, 0, draggedRow);
    setWeekDays(updatedWeekDays);
    
    // handleButtonClick(); // Wysyłanie danych do serwera po zmianie kolejności
  };

  const Row = ({ weekDay, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.ROW,
      item: { index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: ItemTypes.ROW,
      hover(item) {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveRow(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    return (
      <tr ref={node => drag(drop(node))}>
        <td>{weekDay.stop.name}</td>
        <td>{weekDay.order}</td>
        <td>{weekDay.line.num_line}</td>
        <td>{weekDay.type.name}</td>
      </tr>
    );
  };

  const handleButtonClick = () => {
    axios
      .post('http://localhost:3001/test', weekDays)
      .then(response => {
        console.log('Zmieniona kolejność została wysłana na serwer');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <section className="sectionLinesNewConTo">
      <section className="contentNewConTo">
        <div className="tbl-header">
          <table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Pzrystanek</th>
                <th>Kolejność</th>
                <th>Linia</th>
                <th>Wariant</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-contentt">
          <table className="tableNewConToo" cellPadding="0" cellSpacing="0" border="0">
            <tbody className="NewConTo">
              {weekDays.map((weekDay, index) => (
                <Row key={weekDay.id_route} weekDay={weekDay} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={handleButtonClick}>Zapisz zmiany</button>
      </section>
    </section>
  );
};

export default SectionMainLinesHoliday;
