from fastapi import FastAPI
from app.api.call import router as call_router

app = FastAPI(title="AI Order Confirmation Agent")

app.include_router(call_router)


@app.get("/")
def health():
    return {
        "status": "running"
    }