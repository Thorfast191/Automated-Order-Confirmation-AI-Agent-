from fastapi import FastAPI

app = FastAPI(title="AI Order Confirmation Agent")

@app.get("/")
def health():
    return {
        "status": "running"
    }