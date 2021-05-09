import { useContext } from "react";
import { JobsContext } from "../App.js";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function DenseHeightGrid() {
  const value = useContext(JobsContext);
  console.log("value = ", value);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rowHeight={25}
        rows={value}
        columns={[
          {
            field: "title",
            headerName: "Title",
            width: 100,
          },
          {
            field: "username",
            headerName: "Posted By",
            width: 120,
          },
          {
            field: "description",
            headerName: "Details",
            width: 300,
          },
          {
            field: "location",
            headerName: "Location",
            width: 120,
          },
          {
            field: "pay",
            headerName: "Pay",
            width: 80,
          },
        ]}
      />
    </div>
  );
}
