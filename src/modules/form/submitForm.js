import dayjs from "dayjs";
import { newAppointment } from "../../Services/newAppoitment.js";
import { hideBoxAppointment } from "./showform.js";

const form = document.querySelector("form");
const nameT = document.getElementById("nameTutor");
const nameP = document.getElementById("namePet");
const phoneT = document.getElementById("phone");
const selectedDate = document.getElementById("date");
const selectHours = document.getElementById("hour");
const desc = document.getElementById("description");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data a tual e define a data mínima como a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previne o comportamento padrão.
  event.preventDefault();

  try {
    const nameTutor = nameT.value.trim();
    const namePet = nameP.value.trim();
    const phone = phoneT.value;
    const regex = /^\(?\d{2}\)?\s?(9?\d{4})-?\d{4}$/;
    const description = desc.value;

    if (!nameTutor) {
      return alert("Digite o nome do tutor!");
    }

    if (!namePet) {
      return alert("Digite o nome do pet!");
    }

    if (!regex.test(phone)) {
      return alert("Número de telefone inválido!");
    }

    if (!selectHours.value) {
      return alert("Selecione um horário!");
    }

    // recupere somente a hora
    const [hour] = selectHours.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gera um ID
    const id = new Date().getTime();

    // Faz o agendamento
    await newAppointment({
      id,
      nameTutor,
      namePet,
      phone,
      when,
      description,
    });

    nameT.value = "";
    nameP.value = "";
    phoneT.value = "";
    desc.value = "";
    selectedDate.value = "";
    selectHours.value = "";

    hideBoxAppointment();
  } catch (error) {
    alert("Não foi possível realizar o agendamento!");
    console.error(error);
  }
};
