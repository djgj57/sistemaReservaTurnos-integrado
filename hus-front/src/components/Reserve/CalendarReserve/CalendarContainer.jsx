import React from "react";
import { useState, useEffect } from "react";
import CalendarReserve from "./CalendarReserve";

export default function CalendarContainer({
  setCheckin,
  setCheckout,
  setNotReserve,
}) {
  return (
    <div>
      <h2>Seleccioná tu fecha de reserva</h2>
      <CalendarReserve
        setCheckIn={setCheckin}
        setCheckOut={setCheckout}
        setNotReserve={setNotReserve}
      />
    </div>
  );
}
