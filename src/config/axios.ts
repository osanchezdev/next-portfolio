import Axios from "axios"

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
