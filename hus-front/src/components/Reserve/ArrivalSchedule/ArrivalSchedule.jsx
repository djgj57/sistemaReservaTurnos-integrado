import { ArrivalScheduleContainer } from "./ArrivalScheduleStyled";
import Select from 'react-select';
import { useState } from "react";
import { colors } from "../../styles/utils/colors";
import {timeOptions} from  "../../../json/timeOptions";

export default function ArrivalSchedule({setETA}){
       
    const [selectedOption, setSelectedOption]= useState(timeOptions[2].value);

    const handleSelectChange = (event) => {
        setSelectedOption(event.value);
        setETA(event.value);
      };

    const dropdownIndicatorStyles = (base, state) => {
      let changes = {
        color:`${colors.highlight}`,
      };
      return Object.assign(base, changes);
    };
    
    return(<>
        <ArrivalScheduleContainer>
            <h2>Tu horario de llegada</h2>
            <div className="generalContainer">
                <i class="far fa-check-circle"></i>
                <spam>Tu hospedaje va a estar listo para el check-in entre las {selectedOption} y las {parseInt(selectedOption)+1}:00:00</spam>
                <p>Indicá tu horario estimado de llegada</p>
            
                <div class="content-select">
                <Select styles={{dropdownIndicator: dropdownIndicatorStyles}} 
                    placeholder="Seleccionar hora de llegada"
                    onChange={handleSelectChange}
                    value={timeOptions.find(obj => obj.value === selectedOption)}
                    options={timeOptions}
                />
                </div>
            </div>
            
        </ArrivalScheduleContainer>
        </>       
    )
}