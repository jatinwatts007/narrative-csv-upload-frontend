import React from "react";

const ShowTable = ({ data }) => {
  return (
    <div className="flex flex-col border-2">
      <div className="flex flex-row p-5 gap-x-4 border-2">
        <div className="capitalize p-4 ">Name</div>
        <div className="capitalize p-4 ">Subject Name</div>
        <div className="capitalize p-4 ">School Name</div>
        <div className="capitalize p-4 ">State</div>
        <div className="capitalize p-4 ">File Name</div>
      </div>
      {data.map((value, index) => {
        return (
          <div className="flex flex-row p-5 gap-x-4 border-2">
            <div className="capitalize p-4 ">{value.name}</div>
            <div className="capitalize p-4 ">{value.subject_name}</div>
            <div className="capitalize p-4 ">{value.school_name}</div>
            <div className="capitalize p-4 ">{value.state_name}</div>
            <div className="capitalize p-4 ">{value.file_name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTable;
