#!/Users/katrinakeas/Desktop/out_of_the_clouds
import serve from "./node_modules/serve"

const port = 8000;

const server = serve(__dirname, {
    cors: true
});

console.log(`Server is running on http://localhost:${port}`);
