import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Search from "./../../components/Search/Search";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <Layout>
      <Header type='list' />
    </Layout>
  );
}

export default List;
