
import {
  FaFire,
  FaSnowflake,
  FaToiletPaper,
  FaWifi,
  FaFireExtinguisher,
  FaHotTub,
  FaLaptopHouse,
  FaBlender,
  FaUtensils,
  FaBriefcaseMedical,
  FaMugHot,
  FaTemperatureHigh,
  FaPaw,
  FaSwimmingPool,
  FaTv,
  FaVideo,
  FaFingerprint,
  FaDumbbell,
  FaParking,
  FaCar,
  FaRecycle
} from "react-icons/fa";

export const formatImageCollection = (collection) => {
  return collection?.map((img) => {
    return {
      image: img.url
    };
  });
};

export const reorderCollection = (collection, index) => {
  const firstPart = collection.slice(index);
  const secondPart = collection.slice(0, index);
  return firstPart.concat(secondPart);
};


export const selectFeatureIcon = (iconName) => {
  const ICONS = {
    FaFire: <FaFire />,
    FaSnowflake: <FaSnowflake />,
    FaToiletPaper: <FaToiletPaper />,
    FaWifi: <FaWifi />,
    FaFireExtinguisher: <FaFireExtinguisher />,

    FaHotTub: <FaHotTub />,
    FaLaptopHouse: <FaLaptopHouse />,
    FaBlender: <FaBlender />,
    FaUtensils: <FaUtensils />,
    FaBriefcaseMedical: <FaBriefcaseMedical />,

    FaMugHot: <FaMugHot />,
    FaTemperatureHigh: <FaTemperatureHigh />,
    FaPaw: <FaPaw />,
    FaSwimmingPool: <FaSwimmingPool />,
    FaTv: <FaTv />,

    FaVideo: <FaVideo />,
    FaFingerprint: <FaFingerprint />,
    FaDumbbell: <FaDumbbell />,
    FaParking: <FaParking />,
    FaCar: <FaCar />,
    FaRecycle: <FaRecycle />,
  }

  return ICONS[iconName]
}
