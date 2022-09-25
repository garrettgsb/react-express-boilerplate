import React from "react";
import "./Fact.scss";
import {
  FaRegCalendarAlt,
  FaRegBuilding,
  FaRegSnowflake,
  FaThermometerEmpty,
  FaPaw,
  FaParking,
  FaTshirt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

export default function Fact(props) {
  const { label, value, idx } = props;
  const icons = [
    <FaRegCalendarAlt />,
    <FaRegBuilding />,
    <FaRegSnowflake />,
    <FaThermometerEmpty />,
    <FaPaw />,
    <FaParking />,
    <FaTshirt />,
    <FaRegMoneyBillAlt />,
  ];
  return (
    <p>
      {icons[idx]} <span className="bold">{label}: </span>
      <span className="light">{value ? value : "Other"}</span>
    </p>
  );
}
