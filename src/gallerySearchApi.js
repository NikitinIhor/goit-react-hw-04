import axios from "axios";

export const searchImagesAPI = async ({ images, currentPage }) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: images,
            page: currentPage,
            per_page: 20,
        },
        headers: {
            Authorization: "Client-ID wpSGSIYGpBg3AAJP_g-cBnJbxv37a4QgmQ7vTWIbvoQ",
        }
    });
    return res.data.results
};