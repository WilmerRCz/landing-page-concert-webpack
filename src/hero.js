import concertImage from "./assets/concert.jpg";

export const hero = () => {
  const container = document.createElement("div");
  container.classList.add("relative", "h-screen");
  const img = document.createElement("img");
  img.classList.add("absolute", "inset-0", "w-full", "h-full", "object-cover");
  img.src = concertImage;
  img.alt = "concert";
  img.appendChild(container);
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
  titleConcert.appendChild(container);
};
