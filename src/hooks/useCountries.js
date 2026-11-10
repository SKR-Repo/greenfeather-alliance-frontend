import { useMemo } from "react";
import { COUNTRIES } from "../data/countries";

/**
 * All country names, alphabetically sorted (locale-aware, so "Côte d’Ivoire" / "Türkiye" land
 * where a reader expects them). Returns a stable array — safe to map() inside a <select>.
 *
 *   const countries = useCountries();
 *   countries.map((name) => <option key={name} value={name}>{name}</option>)
 */
export default function useCountries() {
  return useMemo(() => [...COUNTRIES].sort((a, b) => a.localeCompare(b, "en")), []);
}
