import { fileUpload } from "../../helpers/fileUpload";
import _fetch from "isomorphic-fetch";
describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a Cloudinary", async () => {
    const imageUrl =
      "https://png.pngtree.com/thumb_back/fw800/background/20230331/pngtree-landscape-landscape-mountains-sky-nature-landscape-cartoon-background-image_2127951.jpg";
    const response = await _fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "imagen1.jpg", { type: blob.type });
    const url = await fileUpload(file);
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
