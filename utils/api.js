import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 41525a17f0225995d548b4deb27b9793b3db847dca0171b8dd75387da68a1c83f4eb131138a12607766bd075ed9d8fd41f1a8d02cd836c9a07ff1e1d6b1fe6c5ab657c139d54f3849cebc5f4a6f51a9f5f3bb83e5b5b055a9adc302d15513493fe2be06bae8f05da96cfe2b8f7d74cf2487a8afd2ab958aa25e6bcec9b0688e4",
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
