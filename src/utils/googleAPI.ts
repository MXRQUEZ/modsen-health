import { API_KEY, CLIENT_ID, DISCOVERY_DOC, SCOPES } from "@/constants/googleAPI";

export function loadGAPI() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
    script.onload = () => {
      gapi.load("client", () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
          })
          .then(
            () => resolve("GAPI client successfully loaded for API"),
            (err: Error) => reject(err)
          );
      });
    };
  });
}

export function loadGIS() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    document.body.appendChild(script);
    script.onload = () => {
      const tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: "",
      });

      if (tokenClient) {
        resolve(tokenClient);
      } else reject(new Error("Smth wrong with GIS"));
    };
  });
}
