import { DataContainer } from "./DataStyled";

export default function Data({ userData, setCity }) {


  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      {userData ? (
        <DataContainer>
          <h2>Completá tus datos</h2>
          <div>
            <label for="name">
              Nombre:
              <input type="text" id="name" value={userData.name} disabled />
            </label>
            <label for="lastName">
              Apellido:
              <input
                type="text"
                id="lastName"
                value={userData.lastname}
                disabled
              />
            </label>
            <label for="email">
              Correo electronico:
              <input
                type="email"
                id="email"
                value={userData.username}
                disabled
              />
            </label>
            <label for="city">
              Ciudad:
              <input
                type="text"
                id="city"
                placeholder="ciudad"
                name="ciudad"
                onChange={handleInputChange}
              />
            </label>
          </div>
        </DataContainer>
      ) : (
        <h1>CARGANDO</h1>
      )}
    </>
  );
}
