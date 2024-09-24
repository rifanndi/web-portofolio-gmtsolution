import React, { useState, useEffect } from "react";
import { DiscussForm } from "parts/DiscussForm";
import Header from "parts/Header";
import Footer from "parts/Footer";

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      <Header />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};
