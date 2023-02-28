import concertImage from "../assets/concert.jpg";
import { form } from "./form";

export const hero = () => {
  const formSection = form()
  const container = document.createElement("div");
  container.classList.add("relative", "h-screen");


  const img = document.createElement("img");
  img.classList.add("absolute", "inset-0", "w-full", "h-full", "object-cover");
  img.src = concertImage;
  img.alt = "concert";
  container.appendChild(img);


  const titleConcert = document.createElement("h1");
  titleConcert.textContent = "Concert: 30/03/2023 - Martin Garrix, L.A";
  titleConcert.classList.add(
    "absolute",
    "inset-0",
    "m-4",
    "text-center",
    "text-white",
    "font-bold",
    "sm:text-3xl",
    "text-lg"
  );
  container.appendChild(titleConcert);

  
  container.appendChild(formSection)

  return container
};
