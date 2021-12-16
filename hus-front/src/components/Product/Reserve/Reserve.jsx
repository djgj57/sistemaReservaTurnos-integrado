import React from "react";
import Button from "./../../shared/Button/Button";

export default function Reserve(id) {
  const user = localStorage.getItem("token");
  const url =
    user == null ? "/login?showAlert=true" : `/reservation/product/${id.id.id}`;
  return (
    <div className="reserve">
      <p className="info-reserve">
        Agregá tus fechas de viaje para obtener precios exactos
      </p>
      <Button theme="secondary" text="Iniciar reserva" to={url} />
    </div>
  );
}
