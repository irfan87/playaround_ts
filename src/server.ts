// setup server here
import app from "./app";
import { PORT } from "./constants/jsonPlaceholderConstants";

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));