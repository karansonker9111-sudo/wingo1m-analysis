export default async function handler() {
  return new Response(
    JSON.stringify({
      success: false,
      connected: false,
      message: "History API abhi connect nahi hui hai."
    }),
    {
      status: 503,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
