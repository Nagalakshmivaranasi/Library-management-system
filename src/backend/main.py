from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/search")
def search_books(query: str):

    df = pd.read_csv(
        "../data/books.csv",
        on_bad_lines="skip"
    )
    df = df.fillna("")
    df = df.astype(str)

    result = df[
        df["Name"].str.contains(query, case=False, na=False)
    ]

    return result.to_dict(orient="records")
@app.get("/books")
def get_books():

    df = pd.read_csv(
        "../data/books.csv",
        on_bad_lines="skip"
    )

    df = df.fillna("")
    df = df.astype(str)
    print(df.columns.tolist())
    return df.head(500).to_dict(
        orient="records"
    )