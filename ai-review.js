const fs = require('fs');

try {
  const testOutput = fs.readFileSync('test-output.txt', 'utf-8');

  console.log("---- AI REVIEW START ----");

  if (testOutput.includes('FAIL')) {
    console.log("AI Insight:");
    console.log("- Some tests are failing.");
    console.log("- Check edge cases and input validation.");
  } else {
    console.log("AI Insight:");
    console.log("- All tests passed.");
    console.log("- Consider adding edge cases and negative tests.");
  }

  const testCountMatch = testOutput.match(/Tests:\s+(\d+)/);
  if (testCountMatch) {
    const count = parseInt(testCountMatch[1]);
    if (count < 5) {
      console.log("- Test coverage seems low. Add more test cases.");
    }
  }

  console.log("---- AI REVIEW END ----");

} catch (error) {
  console.error("AI Review failed:", error.message);
}