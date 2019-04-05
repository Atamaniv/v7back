import config from "./config";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:E"
      })
      .then(
        response => {
          const data = response.result.values;

          const tovar = data.map(tovar => ({
            id: tovar[0],
            name: tovar[1],
            url: tovar[2]
          })) || [];

          callback({
            tovar
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}