/**
 * Sends the finished "Get started" form.
 * TODO: replace the body with your real API call, e.g.
 *   const res = await fetch("/api/get-started", { method: "POST", headers: {...}, body: JSON.stringify(payload) });
 *   if (!res.ok) throw new Error("Request failed");
 * Throwing makes the form show its error message and keep the user's answers.
 */
export async function submitGetStarted(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900)); // simulated network time
  console.info("[get-started] submitted", payload);
  return { ok: true };
}
