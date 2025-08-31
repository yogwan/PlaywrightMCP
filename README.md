# PlaywrightMCP

This project demonstrates automated browser testing using Playwright and the Model Context Protocol (MCP).

## Project Structure
- `tests/` - Contains Playwright test files
- `testcontexts/` - Contains context files for test generation
- `README.md` - Project documentation

## How to Run Tests
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run a test:
   ```powershell
   npx playwright test tests/search-tshirts.spec.ts
   ```

## About
- Playwright MCP enables step-by-step test generation and execution using context-driven automation.
- See `testcontexts/webtestcontext.txt` for MCP instructions.
