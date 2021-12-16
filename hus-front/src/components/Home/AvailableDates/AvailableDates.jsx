import React from "react";
import Calendar from "react-calendar";
import { AvailableDatesContainer } from "./AvailableDatesStyled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AvailableDates() {
  
  const { id } = useParams();
  const [idProduct, setIdProduct] = useState(id); 
  const [dates, setDates] = useState();
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`http://18.232.222.109:8080/api/open/reservations/${id}`);
      if (response.status === 200) {
        let data = await response.json();
        setDates(data);
      }
    }
    fetchData(); 
    setIdProduct("");     
  }, [idProduct]);
  
  
  const [disabledDates, setDisabledDates] = useState();
  useEffect(() => {
    const array = [];
    if(dates!==undefined){
      dates.map((element)=>{
        const currentDate = new Date(element.checkIn);
        const stopDate = new Date(element.checkOut);
        while (currentDate <= stopDate) {

          array.push(new Date(currentDate.getFullYear(), currentDate.getMonth() , (currentDate.getDate()+1)))
          currentDate.setDate(currentDate.getDate() + 1);
      }
      

      })

      setDisabledDates(array);
    }
  }, [dates])


  const date = new Date();
  
  return (
    <AvailableDatesContainer>
      <div>
        {(disabledDates!==undefined)?(

        <Calendar
          minDetail="month"
          maxDetail="month"
          value={date}
          showDoubleView
          minDate={new Date()}
          nextLabel={"ᐳ"}
          next2Label={null}
          prevLabel="ᐸ"
          prev2Label={null}
          tileDisabled={({ activeStartDate, date, view }) =>
            disabledDates.some(
              (disabledDate) =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )
          }
          navigationLabel={({ date }) =>
            `${date.toLocaleDateString("default", { month: "long" })}`
          }
          formatShortWeekday={(locale, value) =>
            ["D", "L", "M", "M", "J", "V", "S"][value.getDay()]
          }
          calendarType={"US"}
        />
        ):<Calendar
        minDetail="month"
        maxDetail="month"
        value={date}
        showDoubleView
        minDate={new Date()}
        nextLabel={"ᐳ"}
        next2Label={null}
        prevLabel="ᐸ"
        prev2Label={null}
        navigationLabel={({ date }) =>
          `${date.toLocaleDateString("default", { month: "long" })}`
        }
        formatShortWeekday={(locale, value) =>
          ["D", "L", "M", "M", "J", "V", "S"][value.getDay()]
        }
        calendarType={"US"}
      />}
      </div>
    </AvailableDatesContainer>
  );       
}
