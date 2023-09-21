import React from "react";

const Contributors = () => {
  const contributors = [
    {
      name: "Pablo Winck Winter",
      photo: "",
      role: "Arquitetura • Backend developer • Organização • Techtalker",
      github: "",
      linkedin: "",
    },
    {
      name: "João Pedro Vendramini",
      photo: "",
      role: "Frontend Developer • UI/UX",
      github: "",
      linkedin: "",
    },
    {
      name: "Júlio César Alves",
      photo: "",
      role: "Frontend Developer • UI/UX",
      github: "",
      linkedin: "",
    },
    {
      name: "Rafael Kenji Takahashi",
      photo: "",
      role: "Backend developer • QA",
      github: "",
      linkedin: "",
    },
    {
      name: "André Oshiro Nishimoto",
      photo: "",
      role: "Backend developer",
      github: "",
      linkedin: "",
    },
    {
      name: "Everton Silva",
      photo: "",
      role: "Devops • Techtalker",
      github: "",
      linkedin: "",
    },
    {
      name: "Alison de Abrantes Duarte",
      photo: "",
      role: "Devops",
      github: "",
      linkedin: "",
    },
    {
      name: "Davisson Medeiros",
      photo: "",
      role: "Techtalker",
      github: "",
      linkedin: "",
    },
    {
      name: "Giovanni da Cunha Massaro",
      photo: "",
      role: "Techtalker",
      github: "",
      linkedin: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 w-full font-sans gap-8">
      {contributors.map((contributor) => (
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-[#D9D9D9] w-[3rem] h-[3rem] flex items-center justify-center font-bold">
            {contributor.name.substring(0, 2)}
          </div>
          <div className="text-white max-w-[12rem]">
            <h2 className="font-bold">{contributor.name}</h2>
            <p className="text-sm">{contributor.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contributors;
