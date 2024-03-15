import { listen } from "./api";
const port = 3000;

listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
