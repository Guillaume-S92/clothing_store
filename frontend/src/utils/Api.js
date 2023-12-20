import { config } from "./config";
import { getToken } from "./localstorage";

/**
 * Effectue une requête GET avec le token d'authentification.
 * @param {string} path - Le chemin de l'API à interroger.
 * @returns {Promise<{statusCode: number, data: any}>} - Une promesse résolue avec le statut de la réponse et les données renvoyées.
 */
const getRequest = async (path) => {
  try {
    const params = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    };
    const res = await fetch(config.baseURL + path, params);
    const data = await res.text();
    return { statusCode: res.status, data };
  } catch (e) {
    console.error(`Erreur dans la requête GET (${path}) :- `, e);
    return { statusCode: 400, data: [] };
  }
};

/**
 * Effectue une requête POST avec le token d'authentification.
 * @param {string} path - Le chemin de l'API à interroger.
 * @param {object} body - Les données à inclure dans le corps de la requête.
 * @returns {Promise<{statusCode: number, data: any}>} - Une promesse résolue avec le statut de la réponse et les données renvoyées.
 */
const postRequest = async (path, body) => {
  try {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(config.baseURL + path, params);
    const data = await res.text();
    return { statusCode: res.status, data };
  } catch (e) {
    console.log(`Erreur dans la requête POST (${path}) :- `, e);
  }
};

/**
 * Effectue une requête DELETE avec le token d'authentification.
 * @param {string} path - Le chemin de l'API à interroger.
 * @returns {Promise<{statusCode: number, data: any}>} - Une promesse résolue avec le statut de la réponse et les données renvoyées.
 */
const deleteRequest = async (path) => {
  try {
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
    };

    const res = await fetch(config.baseURL + path, params);
    const data = await res.text();
    return { statusCode: res.status, data };
  } catch (e) {
    console.log(`Erreur dans la requête DELETE (${path}) :- `, e);
  }
};

/**
 * Effectue une requête PUT avec le token d'authentification.
 * @param {string} path - Le chemin de l'API à interroger.
 * @param {object} body - Les données à inclure dans le corps de la requête.
 * @returns {Promise<{statusCode: number, data: any}>} - Une promesse résolue avec le statut de la réponse et les données renvoyées.
 */
const putRequest = async (path, body) => {
  try {
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(config.baseURL + path, params);
    const data = await res.text();
    return { statusCode: res.status, data };
  } catch (e) {
    console.log(`Erreur dans la requête PUT (${path}) :- `, e);
  }
};

/**
 * Interface pour les méthodes de requête API.
 */
export const Api = {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
};
