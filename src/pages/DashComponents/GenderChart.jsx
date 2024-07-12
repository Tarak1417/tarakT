import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const GenderChart = ({ overview }) => {
  const [genderCount, setGenderCount] = useState({ male: 0, female: 0 });

  useEffect(() => {
    const GenderData =overview && overview?.map((box) => (
      box.assignedTo &&
      box.assignedTo?.map((item) => (item.gender))
    ));

    const genders = GenderData && GenderData?.flat().map(gender => gender?.toLowerCase());

    // Count the occurrences of "male" and "female"
    const count = genders &&  genders.reduce((acc, gender) => {
      if (gender === "male") {
        acc.male += 1;
      } else if (gender === "female") {
        acc.female += 1;
      }
      return acc;
    }, { male: 0, female: 0 });

    // setGenderCount(count);
  }, [overview]);

  const data = [
    { name: "Male", value: genderCount && genderCount.male },
    { name: "Female", value: genderCount && genderCount.female },
  ];

  const colors = ["#3b82f6", "#dc2626"];
  const totalCount = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <Box className="">
      <Grid
        className="rounded-lg pt-4 pr-4 pb-4"
        sx={{
          backgroundColor: "background.view",
        }}
      >
        <div className="flex flex-col gap-4 items-start">
          <div className="border-l-4 border-[#4B47E4] pl-4 w-full md:text-[18px] md:font-[500] md:leading-[32.55px]">
            Employee Gender
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "48px",
            }}
          >
            <PieChart width={300} height={202}>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="flex flex-row gap-2 mt-9 pl-4 items-center">
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: colors[0],
              }}
            ></div>
            <div className="text-[10px] md:text-[12px] md:font-[400] md:leading-[19.53px]">
              Male
            </div>
            <div
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: colors[1],
              }}
              className="ml-5"
            ></div>
            <div className="text-[10px] md:text-[12px] md:font-[400] md:leading-[19.53px]">
              Female
            </div>
          </div>
          <div className="pl-4 text-[10px] md:text-[13px] md:font-[500] md:leading-[19.53px]">
            Total: {totalCount}
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default GenderChart;
