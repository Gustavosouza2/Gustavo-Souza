import React from "react";

function Contato() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#111112] dark:bg-slate-100 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/fd98e4c5-2028-4c7e-a545-e9cb9b7f8321"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#fc4a1a] text-gray-300 dark:text-[#111112]">
            Contato
          </p>
          <p className="text-gray-300 py-4 dark:text-[#7a839e]">
            Envie sua mensagem para o meu email - @gustavoleonsouza
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Mensagem"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#fc4a1a] hover:border-[#fc4a1a] px-4 py-3 my-8 mx-auto flex items-center dark:text-[#111112] dark:border-[#fc4a1a]">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;
