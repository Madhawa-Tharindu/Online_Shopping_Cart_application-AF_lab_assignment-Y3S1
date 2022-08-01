import { v4 as uuidv4 } from "uuid";

const promo = new Map();

export const createPromotion = ({ promo_name, promo_discount, promo_startDate, promo_endDate }) => {
  const promotion = { id: uuidv4(), promo_name, promo_discount, promo_startDate, promo_endDate };

  promo.set(promotion.id, promotion);
  return promotion;
};

export const getPromotion = (id) => {
  const promotion = promo.get(id);
  if (!promotion) {
    throw new Error("Promotion not found");
  }
  return promotion;
};

export const getPromotionAll = () => {
  return [...promo.values()];
};

export const updatePromotion = (id, { name, precentage }) => {
  if (!promo.has(id)) {
    throw new Error("Promotion not found");
  } else {
    const promotion = { id, name, precentage, date: new Date() };
    promo.set(promotion.id, promotion);
    return promotion;
  }
};

export const deletePromotion = (id) => {
  promo.delete(id);
};