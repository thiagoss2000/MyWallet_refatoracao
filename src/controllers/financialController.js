import jwt from "jsonwebtoken";
import { getFinancial, insertFinancial } from "../repositories/financialRepositories.js";

export async function postEvent (req, res) {
    try {  
      const { value, type } = req.body;
  
      if (!value || !type) {
        return res.sendStatus(422);
      }
  
      const financialTypes = ["INCOME", "OUTCOME"];
      if (!financialTypes.includes(type)) {
        return res.sendStatus(422);
      }
  
      if (value < 0) {
        return res.sendStatus(422);
      }
  
      await insertFinancial(user.id, value, type);
  
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  
  export async function getEvent (req, res) {
    try {  
      const events = await getFinancial(user.id);
  
      res.send(events.rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  
  export async function getEventSum (req, res) {
    try {
      const events = await getFinancial(user.id)
  
      const sum = events.rows.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
  
      res.send({ sum });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  