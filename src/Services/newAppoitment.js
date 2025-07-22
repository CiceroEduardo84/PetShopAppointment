import { ApiConfig } from "./api";

export async function newAppointment({
  id,
  nameTutor,
  namePet,
  phone,
  when,
  description,
}) {
  try {
    //Fazendo a requisição para enviar os dados do agendamento
    await fetch(`${ApiConfig.baseURL}/appointments`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        nameTutor,
        namePet,
        phone,
        when,
        description,
      }),
    });

    alert("Agendamento concluído com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Não foi possivel agendar, tente novamente mais tarde!");
  }
}
