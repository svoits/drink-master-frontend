import { RingLoader } from "react-spinners";

const Loader = () => {
    return <RingLoader
    color="#2eb7e9"
    size={50}
  />
};

export default Loader;

// Є рішення трішки об'ємніше, але схоже на кубик льоду, 
// що пасує до стилю те тематики сайту, прикріпила нижче:

// <ClimbingBoxLoader color="#2eb7e9" />

// документація на бібліотеку доступна по лінку:
// https://www.davidhu.io/react-spinners/
// Легко налаштовується, дуже добре піддається кастомізації