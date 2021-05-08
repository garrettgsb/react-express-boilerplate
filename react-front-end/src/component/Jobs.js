import { useContext } from "react";
import { JobsContext } from "../App.js";

// export default function Jobs(props) {
//   const value = useContext(JobsContext);
//   console.log("value = ", value);
//   return (
//     <div className="Jobs">
//       The answer is {value[0] && value[0].pay}. You have reached the job route.
//     </div>
//   );
// }

// import * as React from "react";
// import { DataGrid } from "@material-ui/data-grid";

// export default function Jobs() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         columns={[{ field: "name", headerName: "Test name" }]}
//         rows={[
//           { id: 1, name: "react" },
//           { id: 2, name: "Material-UI" },
//         ]}
//       />
//     </div>
//   );
// }

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
        // rows={[
        //   {
        //     id: 1,
        //     name: value[0] && value[0].title,
        //     posted_by: value[0] && value[0].user_id,
        //     description: value[0] && value[0].description,
        //     location: value[0] && value[0].location,
        //     pay: value[0] && value[0].pay,
        //   },
        //   {
        //     id: 2,
        //     name: "Test row",
        //     posted_by: "Company Y",
        //     description: "this is a subject line.",
        //     location: "Vancouver",
        //     pay: "$600",
        //   },
        //   {
        //     id: 3,
        //     name: "Test row",
        //     posted_by: "Company Y",
        //     description: "this is a subject line.",
        //     location: "Vancouver",
        //     pay: "$600",
        //   },
        //   {
        //     id: 4,
        //     name: "Test row",
        //     posted_by: "Company Y",
        //     description: "this is a subject line.",
        //     location: "Vancouver",
        //     pay: "$600",
        //   },
        //   {
        //     id: 5,
        //     name: "Test row",
        //     posted_by: "Company Y",
        //     description: "this is a subject line.",
        //     location: "Vancouver",
        //     pay: "$600",
        //   },
        // ]}
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
