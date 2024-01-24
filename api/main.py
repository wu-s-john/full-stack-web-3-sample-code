from fastapi import FastAPI
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

app = FastAPI()

@app.get("/query-subgraph")
async def query_subgraph():
    # Configure the GraphQL client
    transport = RequestsHTTPTransport(url='http://localhost:8000/subgraphs/name/full-stack-interview')
    client = Client(transport=transport, fetch_schema_from_transport=True)

    # Define the GraphQL query
    query = gql('''
    query {
      users {
        id
        name
        nfts {
          id
        }
      }
    }
    ''')

    # Execute the query
    try:
        response = client.execute(query)
        return response
    except Exception as e:
        return {"error": str(e)}
