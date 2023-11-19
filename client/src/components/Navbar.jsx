import React from "react";
import Button from "@mui/material/Button";
const Navbar = ({
  isAddLog,
  setIsAddLog,
  isFilter,
  setIsFilter,
  handleData,
}) => {
  return (
    <div className="w-full h-[60px] fixed shadow-sm p-6 bg-white z-10 flex justify-between items-center text-lg">
      Dyte Assignment
      <div className="flex gap-5">
        {isFilter ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setIsFilter(false);
              handleData();
            }}
          >
            Close filter
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setIsFilter(true)}>
            Apply Filter
          </Button>
        )}
        <Button variant="contained" onClick={() => setIsAddLog(!isAddLog)}>
          Add Logs
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
