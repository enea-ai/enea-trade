const DATA_INDEXER_API_KEY = process.env.DATA_INDEXER_API_KEY;
const DATA_INDEXER_API_URL = process.env.DATA_INDEXER_API_URL;

const addresses = ['A2Qaj4jjUkaMvJ8iyWQUvdgYHKWgDqh6iQjUAb9tvHzH'];

export function run() {
  for (const address of addresses) {
    console.log(`Processing address: ${address}`);
  }
}

run();
