import Calendar from "react-calendar";
import { useState } from "react";
import { CalendarContainer } from "./../../Home/DoubleCalendar/DoubleCalendarStyled";
import Button from "./../../shared/Button/Button";

export default function DoubleCalendar({ select, clickBtn, setCheckin, setCheckout}) {
  /**select es la fecha seleccionada que se renderizará en el div de fecha y clicBtn la funcion que cierra el calendario */

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    select(
      date[0].toString().substring(0, 10) +
        " - " +
        date[1].toString().substring(0, 10)
    );
    setCheckin(date[0].toISOString().substring(0, 10))
    setCheckout(date[1].toISOString().substring(0, 10))
  };

  return (
    <CalendarContainer>
      <Calendar
        selectRange
        minDate={new Date()}
        className="doubleCalendar"
        showDoubleView
        onChange={onChange}
        value={date}
        navigationLabel={({ date }) =>
          `${date.toLocaleDateString("default", { month: "long" })}`
        }
        formatShortWeekday={(locale, value) =>
          ["D", "L", "M", "M", "J", "V", "S"][value.getDay()]
        }
        calendarType={"US"}
      />
      <Button
        theme="secondary"
        text="Aplicar"
        handlerEvent={() => clickBtn()}
      />
    </CalendarContainer>
  );
}
