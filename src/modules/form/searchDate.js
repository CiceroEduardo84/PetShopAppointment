import dayjs from "dayjs";
import { appointmentsDays } from "../appointments/load";

// select input serach date
const selectDate = document.getElementById("searchDate");

// loading list hours
selectDate.value = dayjs().format("YYYY-MM-DD");
selectDate.onchange = () => appointmentsDays();
