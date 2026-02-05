export async function roastResume( mode) {
  await new Promise((r) => setTimeout(r, 1200));

  if (mode === "Brutal") {
    return `
🔥 BRUTAL ROAST 🔥

Your resume reads like a buzzword generator had a breakdown.
"Hardworking", "passionate", "team player" — all with zero proof.

Fix this:
• Add numbers
• Remove fluff
• Show impact
`;
  }

 else if (mode === "Hr") {
    return `
HR-FRIENDLY VERSION 👔 Professional Summary: Detail-oriented developer with hands-on project experience in modern web technologies. • Improved UI responsiveness • Built reusable components • Followed clean coding practices
`;
  }else{

  

  return `
🙂 SOFT FEEDBACK 🙂

You have good experience, but it's hidden.
Try clearer bullet points and stronger verbs.

Suggestions:
• Quantify achievements
• Improve formatting
• Shorten summary
`;
}}
