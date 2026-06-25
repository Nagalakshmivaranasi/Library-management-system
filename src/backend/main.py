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
@app.get("/books")
@app.get("/books")
def get_books():

    df = pd.read_csv(
        "../data/books.csv",
        on_bad_lines="skip"
    )

    df = df.fillna("")
    df = df.astype(str)

    return df.to_dict(
        orient="records"
    )