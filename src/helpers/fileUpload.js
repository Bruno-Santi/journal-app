export const fileUpload = async (file) => {
  if (!file) throw new Error("You must provide a file");
  const cloudUrl = "https://api.cloudinary.com/v1_1/di92lsbym/upload";
  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);
  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Could not upload file");

    const cloudResp = await response.json();

    return cloudResp.secure_url;
  } catch (error) {
    throw Error(error.message);
  }
};
