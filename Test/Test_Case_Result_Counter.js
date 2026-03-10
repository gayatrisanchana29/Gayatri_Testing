let testResults = ["pass", "pass", "fail",
                   "pass", "skip", "pass",
                   "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

// Count results using for loop
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;
    } else if (testResults[i] === "fail") {
        failed++;
    } else if (testResults[i] === "skip") {
        skipped++;
    }
}

let total = testResults.length;
let passRate = ((passed / total) * 100).toFixed(2);

let verdict;

// Determine verdict
if (failed === 0) {
    verdict = "Ready for release.";
} else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
} else {
    verdict = "Block release.";
}

// Print report
console.log(
`Total Tests: ${total}
Passed: ${passed}
Failed: ${failed}
Skipped: ${skipped}
Pass Rate: ${passRate}%
VERDICT: ${verdict}`
);