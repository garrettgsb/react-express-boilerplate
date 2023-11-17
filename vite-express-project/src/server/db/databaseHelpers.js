// const handleTableInsertion = async (req, res, supabase, tablename) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { data, error } = await supabase.from(tablename).insert(req.body);

//     if (error) {
//       console.error("Supabase Insert Error:", error);
//       throw error;
//     }

//     res.status(200).send("Data sent to Supabase!");
//   } catch (error) {
//     console.error("Server Error:", error);
//     res.status(500).send("Server Error: " + error.message);
//   }
// };

// const handleTableUpdate = async (req, res, supabase, tablename) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { data, error } = await supabase.from(tablename).update(req.body);

//     if (error) {
//       console.error("Supabase Insert Error:", error);
//       throw error;
//     }

//     res.status(200).send("Data sent to Supabase!");
//   } catch (error) {
//     console.error("Server Error:", error);
//     res.status(500).send("Server Error: " + error.message);
//   }
// };

// const handleTableDelete = async (req, res, supabase, tablename) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { data, error } = await supabase.from(tablename).delete(req.body);

//     if (error) {
//       console.error("Supabase Insert Error:", error);
//       throw error;
//     }

//     res.status(200).send("Data sent to Supabase!");
//   } catch (error) {
//     console.error("Server Error:", error);
//     res.status(500).send("Server Error: " + error.message);
//   }
// };

// const handleTableSelect = async (req, res, supabase, tablename) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { data, error } = await supabase.from(tablename).select(req.body);

//     if (error) {
//       console.error("Supabase Insert Error:", error);
//       throw error;
//     }

//     res.status(200).send("Data sent to Supabase!");
//   } catch (error) {
//     console.error("Server Error:", error);
//     res.status(500).send("Server Error: " + error.message);
//   }
// };
