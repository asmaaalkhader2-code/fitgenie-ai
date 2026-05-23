export async function POST(req: Request) {
  const body = await req.json();

  const age = Number(body.age);
  const weight = Number(body.weight);
  const height = Number(body.height);
  const goal = body.goal;

  let calories = 2200;
  let protein = Math.round(weight * 1.8);
  let workout = "";

  if (goal === "Build Muscle") {
    calories = Math.round(weight * 38);
    workout = `
Monday → Chest + Triceps
Tuesday → Back + Biceps
Wednesday → Legs
Thursday → Rest
Friday → Shoulders + Arms
Saturday → Full Body
Sunday → Rest`;
  }

  if (goal === "Lose Fat") {
    calories = Math.round(weight * 28);
    workout = `
Monday → Full Body + Cardio
Tuesday → Upper Body
Wednesday → Cardio + Core
Thursday → Lower Body
Friday → Full Body
Saturday → 30 min Walk
Sunday → Rest`;
  }

  if (goal === "Stay Fit") {
    calories = Math.round(weight * 32);
    workout = `
Monday → Full Body
Tuesday → Light Cardio
Wednesday → Upper Body
Thursday → Rest
Friday → Lower Body
Saturday → Stretching + Walk
Sunday → Rest`;
  }

  const result = `
🔥 VYRO AI PLAN

Age: ${age}
Weight: ${weight}kg
Height: ${height}cm
Goal: ${goal}

🏋️ Workout Plan:
${workout}

🍗 Nutrition:
- Calories: ${calories}
- Protein: ${protein}g
- Water: 2.5–3L daily

💪 Stay consistent. Results take time.
`;

  return Response.json({ result });
}