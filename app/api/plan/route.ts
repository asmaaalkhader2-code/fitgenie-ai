export async function POST(req: Request) {
  const body = await req.json();

  const result = `
🔥 VYRO AI PLAN

Goal: ${body.goal}

🏋️ Workout Plan:

Monday → Chest + Triceps
Tuesday → Back + Biceps
Wednesday → Legs
Thursday → Rest
Friday → Shoulders
Saturday → Cardio
Sunday → Rest

🍗 Nutrition:
- Calories: 2400
- Protein: 180g
- Water: 3L daily

💪 Stay consistent. Results take time.
`;

  return Response.json({ result });
}