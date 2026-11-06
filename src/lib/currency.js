/**
 * Formats an amount in Ghana cedis, e.g. formatCedi(25) -> "GH₵25.00".
 * Pass `decimals = 0` for whole-number labels such as cake builder options.
 */
export function formatCedi(amount, decimals = 2) {
  const value = Number(amount) || 0;
  return `GH₵${value.toLocaleString("en-GH", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/** Delivery pricing for rider delivery within Accra. */
export const DELIVERY_FEE = 30;
export const FREE_DELIVERY_THRESHOLD = 500;
