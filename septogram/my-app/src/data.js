import { useState } from "react";
import axios from "axios";
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyWXBX6EWJI83bal" }).base(
  "app0PEzQUpjbRtRlw"
);
export default function useData() {
  const [data, setData] = useState(null);

  const getData = async () => {
    return base("Solutions").firstPage(function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      setData(records);
    });
  };
  return {
    getData,
    data,
  };
}
