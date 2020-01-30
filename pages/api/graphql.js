// Short Way
export default (req, res) => {
  console.log("hello");
  const name = "scott";
  res.status(200).json({
    test: "Hello level Up"
  });
};

// Long Way
// export default (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.statusCode = 200;
//   res.end(
//     JSON.stringify({
//       test: "Hello level Up"
//     })
//   );
// };
