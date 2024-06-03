import React, { useState } from "react";
import { instance } from "../utils/AsioxInstance";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const setInputFieldtoNull = () => {
    const input_id = document.getElementById("csvFileInput");
    input_id.value = null;
    setFile(null);
  };
  const uploadFileAPI = async () => {
    const formData = new FormData();
    formData.append("csvFile", file);
    try {
      const response = await instance.post("/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(response.data);
      setError(false);
    } catch (e) {
      setError("Something Went Wrong, Try Again");
      setSuccess(false);
    }
    setInputFieldtoNull();
  };
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    setError(false);
    setSuccess(false);
  };

  const handleClick = () => {
    console.log(file);
    if (file) {
      uploadFileAPI();
    } else {
      setError("Please Select File");
      setSuccess(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-center items-center ">
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
        <button
          className="p-5 py-3 text-white bg-green-700 rounded-full"
          onClick={() => {
            handleClick();
          }}
        >
          IMPORT CSV
        </button>
      </div>
      {error ? <div className="text-red-400 capitalize">{error}</div> : ""}
      {success ? (
        <div className="text-green-400 capitalize">{success}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UploadCSV;
