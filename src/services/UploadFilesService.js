import http from "./http-common"

const upload = (file, onUploadProgress) => {
    let formData = new FormData();
  
    formData.append("file", file);
  
    return http.post("/encrypt/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };
  
  const getFiles = () => {
    return http.get("/list");
  };

  
  const UploadFilesService={
    upload,
    getFiles,
  };
  export default UploadFilesService;